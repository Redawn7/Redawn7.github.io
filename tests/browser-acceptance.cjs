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
    ["desktop", 1280, 720],
  ]) {
    const page = await browser.newPage({ viewport: { width, height } });
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(`console:${message.text()}`);
    });
    page.on("pageerror", (error) => errors.push(`pageerror:${error.message}`));
    await page.goto("http://127.0.0.1:64058/", { waitUntil: "networkidle" });

    if ((await page.locator("#profile-name").innerText()) !== "Xuanchen Lu") throw new Error(`${name}: missing name`);
    if ((await page.locator("#research-list .research-feature").count()) !== 4) throw new Error(`${name}: wrong research count`);
    if ((await page.locator("[data-atlas-key]").count()) !== 4) throw new Error(`${name}: wrong atlas node count`);
    if ((await page.locator("#experience-list .experience-row").count()) !== 4) throw new Error(`${name}: wrong experience count`);
    if ((await page.locator("#paper-list .paper-row:visible").count()) !== 3) throw new Error(`${name}: wrong selected paper count`);
    await page.locator('#publications-toggle').click();
    if ((await page.locator("#paper-list .paper-row:visible").count()) !== 6) throw new Error(`${name}: expansion failed`);
    await page.locator('#publications-toggle').click();
    if ((await page.locator("#project-list .project-entry").count()) !== 4) throw new Error(`${name}: wrong project count`);
    if ((await page.locator("[data-demo-action]").count()) !== 4) throw new Error(`${name}: unsafe demo actions`);
    if (!(await page.locator("#demo-disclosure").isVisible())) throw new Error(`${name}: disclosure hidden`);
    if (!(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth))) throw new Error(`${name}: horizontal overflow`);

    if (name === "desktop") {
      const rail = page.locator(".profile-rail");
      if (!(await rail.evaluate(el => el.scrollHeight <= el.clientHeight))) throw new Error('desktop: rail has internal overflow');
      const position = await rail.evaluate((element) => getComputedStyle(element).position);
      if (position !== "fixed") throw new Error("desktop: profile rail is not fixed");
      const beforeScroll = await rail.boundingBox();
      await page.evaluate(() => window.scrollTo({top: 900, behavior: "instant"}));
      const afterScroll = await rail.boundingBox();
      if (!beforeScroll || !afterScroll || beforeScroll.y !== afterScroll.y) throw new Error("desktop: profile rail moved while scrolling");
      if (afterScroll.height > height) throw new Error("desktop: profile rail exceeds viewport height");
      await page.evaluate(() => window.scrollTo({top: 0, behavior: "instant"}));
      await page.waitForTimeout(100);
      if ((await page.locator('[data-section-target="research"]').getAttribute("aria-current")) !== "true") throw new Error("desktop: initial progress is missing");
      await page.locator('[data-research-key="llm-scaling"]').hover();
      if (!(await page.locator('[data-atlas-key="llm-scaling"]').evaluate((node) => node.classList.contains("is-active")))) throw new Error("desktop: atlas linkage failed");
      if (!(await page.locator('[data-atlas-line="llm-scaling"]').evaluate(node => node.classList.contains('is-active')))) throw new Error('desktop: connector linkage failed');
      await page.locator('[data-atlas-key="llm-scaling"]').click();
      if (!page.url().endsWith('#research-llm-scaling')) throw new Error('desktop: atlas navigation failed');
      await page.locator("#papers").scrollIntoViewIfNeeded();
      await page.waitForTimeout(250);
      if ((await page.locator('[data-section-target="papers"]').getAttribute("aria-current")) !== "true") throw new Error("desktop: progress did not update");
      await page.getByRole("button", { name: "中文" }).click();
      if ((await page.locator("html").getAttribute("lang")) !== "zh-CN") throw new Error("language attribute not updated");
      if ((await page.locator("#research-section-title").innerText()) !== "研究方向") throw new Error("Chinese copy not rendered");
      if ((await page.locator("#section-progress").getAttribute("aria-label")) !== "页面章节") throw new Error("Chinese navigation label not rendered");
      if (!(await page.locator('meta[name="description"]').getAttribute("content")).includes("中英双语虚拟个人主页")) throw new Error("translated meta description not applied");
      if (!(await page.locator('meta[property="og:description"]').getAttribute("content")).includes("中英双语虚拟个人主页")) throw new Error("translated Open Graph description not applied");
      if ((await page.evaluate(() => localStorage.getItem("redawn7-locale-v2"))) !== "zh") throw new Error("locale not persisted");
      await page.reload({ waitUntil: "networkidle" });
      if ((await page.locator("#research-section-title").innerText()) !== "研究方向") throw new Error("locale not restored");
    }

    await page.screenshot({ path: `${output}/${name}.png`, fullPage: true });
    await page.close();
  }

  const fallback = await browser.newPage({ viewport: { width: 390, height: 844 }, javaScriptEnabled: false });
  await fallback.goto("http://127.0.0.1:64058/", { waitUntil: "networkidle" });
  if ((await fallback.locator("#research-list .research-feature").count()) !== 4) throw new Error("no-JavaScript fallback lost research directions");
  if ((await fallback.locator("#paper-list .paper-row").count()) !== 6) throw new Error("no-JavaScript fallback lost papers");
  if (!(await fallback.locator("#demo-disclosure").isVisible())) throw new Error("no-JavaScript fallback lost disclosure");
  await fallback.close();

  const accessibility = await browser.newPage({ viewport: { width: 720, height: 900 } });
  await accessibility.goto("http://127.0.0.1:64058/", { waitUntil: "networkidle" });
  await accessibility.keyboard.press("Tab");
  if (!(await accessibility.locator("#skip-link").isVisible())) throw new Error("skip link is not keyboard visible");
  await accessibility.evaluate(() => { document.documentElement.style.fontSize = "200%"; });
  if (!(await accessibility.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth))) throw new Error("200% text zoom causes horizontal overflow");
  await accessibility.close();

  const reducedMotion = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await reducedMotion.emulateMedia({ reducedMotion: "reduce" });
  await reducedMotion.goto("http://127.0.0.1:64058/", { waitUntil: "networkidle" });
  const revealStyle = await reducedMotion.locator("#papers").evaluate((element) => {
    const style = getComputedStyle(element);
    return { opacity: style.opacity, transform: style.transform };
  });
  if (revealStyle.opacity !== "1" || revealStyle.transform !== "none") throw new Error("reduced motion: reveal content is still spatially animated");
  await reducedMotion.close();

  await browser.close();
  if (errors.length) throw new Error(errors.join("\n"));
  console.log("browser acceptance passed: mobile, tablet, desktop, bilingual persistence, no-JS fallback, keyboard focus, 200% text zoom, no console errors");
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
