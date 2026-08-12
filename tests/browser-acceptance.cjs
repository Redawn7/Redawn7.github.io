const { mkdirSync } = require("node:fs");
const { chromium } = require("playwright");

const output = "artifacts";
mkdirSync(output, { recursive: true });

(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE,
  });
  const errors = [];

  for (const [name, width, height] of [
    ["mobile", 390, 844],
    ["tablet", 820, 1024],
    ["desktop", 1440, 1000],
  ]) {
    const page = await browser.newPage({ viewport: { width, height } });
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(`console:${message.text()}`);
    });
    page.on("pageerror", (error) => errors.push(`pageerror:${error.message}`));
    await page.goto("http://127.0.0.1:4173/", { waitUntil: "networkidle" });

    if ((await page.locator("#profile-name").innerText()) !== "Luxuan Chen") throw new Error(`${name}: missing name`);
    if ((await page.locator("#research-list .research-feature").count()) !== 3) throw new Error(`${name}: wrong research count`);
    if ((await page.locator("#paper-list .paper-row").count()) !== 5) throw new Error(`${name}: wrong paper count`);
    if ((await page.locator("#project-list .project-entry").count()) !== 4) throw new Error(`${name}: wrong project count`);
    if ((await page.locator("[data-demo-action]").count()) !== 9) throw new Error(`${name}: unsafe demo actions`);
    if (!(await page.locator("#demo-disclosure").isVisible())) throw new Error(`${name}: disclosure hidden`);
    if (!(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth))) throw new Error(`${name}: horizontal overflow`);

    if (name === "desktop") {
      const rail = page.locator(".profile-rail");
      const position = await rail.evaluate((element) => getComputedStyle(element).position);
      if (position !== "fixed") throw new Error("desktop: profile rail is not fixed");
      const beforeScroll = await rail.boundingBox();
      await page.evaluate(() => window.scrollTo(0, 900));
      const afterScroll = await rail.boundingBox();
      if (!beforeScroll || !afterScroll || beforeScroll.y !== afterScroll.y) throw new Error("desktop: profile rail moved while scrolling");
      if (afterScroll.height > height) throw new Error("desktop: profile rail exceeds viewport height");
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.getByRole("button", { name: "中文" }).click();
      if ((await page.locator("html").getAttribute("lang")) !== "zh-CN") throw new Error("language attribute not updated");
      if ((await page.locator("#page-title").innerText()) !== "研究、论文与开发") throw new Error("Chinese copy not rendered");
      if (!(await page.locator('meta[name="description"]').getAttribute("content")).includes("中英双语个人主页")) throw new Error("translated meta description not applied");
      if (!(await page.locator('meta[property="og:description"]').getAttribute("content")).includes("中英双语个人主页")) throw new Error("translated Open Graph description not applied");
      if ((await page.evaluate(() => localStorage.getItem("redawn7-locale"))) !== "zh") throw new Error("locale not persisted");
      await page.reload({ waitUntil: "networkidle" });
      if ((await page.locator("#page-title").innerText()) !== "研究、论文与开发") throw new Error("locale not restored");
    }

    await page.screenshot({ path: `${output}/${name}.png`, fullPage: true });
    await page.close();
  }

  const fallback = await browser.newPage({ viewport: { width: 390, height: 844 }, javaScriptEnabled: false });
  await fallback.goto("http://127.0.0.1:4173/", { waitUntil: "networkidle" });
  if ((await fallback.locator("#research-list .research-feature").count()) !== 3) throw new Error("no-JavaScript fallback lost research directions");
  if ((await fallback.locator("#paper-list .paper-row").count()) !== 5) throw new Error("no-JavaScript fallback lost papers");
  if (!(await fallback.locator("#demo-disclosure").isVisible())) throw new Error("no-JavaScript fallback lost disclosure");
  await fallback.close();

  const accessibility = await browser.newPage({ viewport: { width: 720, height: 900 } });
  await accessibility.goto("http://127.0.0.1:4173/", { waitUntil: "networkidle" });
  await accessibility.keyboard.press("Tab");
  if (!(await accessibility.locator("#skip-link").isVisible())) throw new Error("skip link is not keyboard visible");
  await accessibility.evaluate(() => { document.documentElement.style.fontSize = "200%"; });
  if (!(await accessibility.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth))) throw new Error("200% text zoom causes horizontal overflow");
  await accessibility.close();

  await browser.close();
  if (errors.length) throw new Error(errors.join("\n"));
  console.log("browser acceptance passed: mobile, tablet, desktop, bilingual persistence, no-JS fallback, keyboard focus, 200% text zoom, no console errors");
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
