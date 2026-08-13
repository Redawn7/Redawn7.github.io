const common = {
  papers: [
    { year: "2026", title: "Latent Proofs: Causal Tracing of Mathematical Reasoning in Large Language Models", authors: "Xuanchen Lu et al.", venue: "NeurIPS 2026", href: null, demo: true },
    { year: "2026", title: "Physicist-in-the-Loop: Autonomous Agents for Hypothesis-Driven Theoretical Research", authors: "Xuanchen Lu et al.", venue: "ICML 2026", href: null, demo: true },
    { year: "2025", title: "GaugeFlow: Symmetry-Preserving Generative Models for Lattice Field Theory", authors: "Xuanchen Lu et al.", venue: "Physical Review Letters, 2025", href: null, demo: true },
    { year: "2025", title: "Foundation Neural Quantum States Across Hamiltonian Families", authors: "Xuanchen Lu et al.", venue: "Nature Machine Intelligence, 2025", href: null, demo: true },
    { year: "2025", title: "From Language to Lagrangians: Neuro-Symbolic Discovery of Effective Field Theories", authors: "Xuanchen Lu et al.", venue: "ICLR 2025", href: null, demo: true },
  ],
  projects: [
    { title: "Creator Evidence Wiki", href: null, demo: true },
    { title: "PaperLens", href: null, demo: true },
    { title: "AgentScope", href: null, demo: true },
    { title: "Small Models, Clear Reasons", href: null, demo: true },
  ],
};

export const content = {
  en: {
    meta: {
      title: "Xuanchen Lu | AI Scientist & Theoretical Physicist",
      description: "Xuanchen Lu's bilingual personal homepage for scientific AI, theoretical physics, publications, and independent projects. Fictional demo content is clearly disclosed.",
    },
    languageLabel: "Choose language",
    skipLabel: "Skip to work",
    profile: {
      name: "Xuanchen Lu",
      initials: "LC",
      portraitAlt: "Monogram portrait placeholder for Xuanchen Lu",
      role: "AI Scientist & Theoretical Physicist",
      affiliation: "PhD Researcher · Yale University",
      department: "Independent Builder · Scientific AI Researcher",
      location: "Based between New Haven & Chiang Mai 🇺🇸 🇹🇭",
      bio: "I build AI systems that reason about and discover scientific principles. My work connects foundation models, quantum many-body physics, and high-energy theory.",
      focus: ["Foundation Models", "Quantum Matter", "High-Energy Physics"],
      nowLabel: "Now",
      now: "Building AI scientists that can read papers, operate symbolic tools, run numerical experiments, and audit their own reasoning.",
    },
    contacts: [
      { label: "GitHub", href: "https://github.com/Redawn7" },
      { label: "Scholar", href: "https://cs.yale.edu/" },
      { label: "Email", href: null },
      { label: "CV", href: null },
    ],
    page: {
      eyebrow: "Research at the edge of intelligence & matter",
      title: "Work & Exploration",
      intro: "AI for fundamental physics—from interpretable reasoning and autonomous discovery to quantum matter and lattice field theory.",
    },
    sections: {
      research: { number: "01", title: "Research" },
      papers: { number: "02", title: "Selected Papers" },
      projects: { number: "03", title: "Projects" },
      interests: { number: "04", title: "Beyond Work" },
    },
    research: [
      {
        kicker: "Language models",
        title: "Verifiable Scientific Reasoning and Mechanistic Interpretability",
        description: "I study how language models form multi-step reasoning, mathematical abstractions, and causal representations. Using causal interventions, circuit analysis, and formal verification, I work to distinguish faithful reasoning from plausible narration.",
      },
      {
        kicker: "AI for physics",
        title: "Autonomous AI Scientists for Fundamental Physics",
        description: "I build research agents that read literature, generate hypotheses, call symbolic and numerical tools, analyze evidence, and revise research plans—with a physicist kept firmly in the loop.",
      },
      {
        kicker: "Quantum matter",
        title: "Foundation Models for Quantum Matter and Lattice Field Theory",
        description: "I use neural quantum states, symmetry-preserving generative models, and differentiable simulators to study wave functions, quantum phase transitions, and non-perturbative dynamics across families of physical systems.",
      },
    ],
    papers: common.papers.map((paper, index) => ({
      ...paper,
      topic: ["Mechanistic interpretability · mathematical reasoning", "Autonomous agents · theoretical physics", "Generative models · gauge symmetry", "Neural quantum states · many-body physics", "Neuro-symbolic AI · high-energy theory"][index],
      action: "Demo record",
    })),
    projects: common.projects.map((project, index) => ({
      ...project,
      category: ["AI Product", "Research Tool", "Open Source", "Experiment"][index],
      description: [
        "A local-first workspace that turns creator videos into timestamped, traceable knowledge.",
        "An evidence-aware reading environment for comparing claims, methods, and citations across papers.",
        "A lightweight evaluation toolkit for inspecting how research agents plan, retrieve, and justify decisions.",
        "Notes and prototypes exploring compact models, transparent interfaces, and human-in-the-loop AI.",
      ][index],
      action: "Demo project",
    })),
    interests: ["Photography", "Long walks", "Reading", "Independent building", "Coffee & conversations"],
    disclosureLabel: "Demo notice",
    disclosure: "All biographical details, affiliations, research directions, publication records, authorship, venues, and selected projects shown on this page are fictional placeholders created solely for interface testing. They do not represent verified academic or professional claims.",
    footer: "Designed as a quiet index of ideas and work.",
  },
  zh: {
    meta: {
      title: "陆宣辰｜AI 科学家与理论物理研究者",
      description: "陆宣辰的中英双语个人主页，展示科学智能、理论物理、论文与独立项目。页面中的虚构测试内容均有明确说明。",
    },
    languageLabel: "选择语言",
    skipLabel: "跳转到研究与项目",
    profile: {
      name: "陆宣辰",
      initials: "LC",
      portraitAlt: "陆宣辰的字母头像占位图",
      role: "AI 科学家、理论物理研究者",
      affiliation: "耶鲁大学博士研究生",
      department: "独立开发者 · 科学智能研究者",
      location: "往返于纽黑文与清迈 🇺🇸 🇹🇭",
      bio: "我研究能够推理并发现科学规律的人工智能系统。我的工作连接基础模型、量子多体物理与高能理论。",
      focus: ["基础模型", "量子物质", "高能物理"],
      nowLabel: "最近",
      now: "正在构建能够阅读论文、操作符号工具、运行数值实验并审视自身推理的 AI Scientist。",
    },
    contacts: [
      { label: "GitHub", href: "https://github.com/Redawn7" },
      { label: "学术主页", href: "https://cs.yale.edu/" },
      { label: "邮箱", href: null },
      { label: "简历", href: null },
    ],
    page: {
      eyebrow: "探索智能与物质的边界",
      title: "研究、论文与开发",
      intro: "面向基础物理的人工智能：从可解释推理与自主发现，到量子物质与格点场论。",
    },
    sections: {
      research: { number: "01", title: "研究方向" },
      papers: { number: "02", title: "精选论文" },
      projects: { number: "03", title: "开发项目" },
      interests: { number: "04", title: "工作之外" },
    },
    research: [
      {
        kicker: "大语言模型",
        title: "可验证的科学推理与机制可解释性",
        description: "研究语言模型如何形成多步推理、数学抽象与因果表征，并结合因果干预、神经回路分析与形式化验证，区分忠实推理与看似合理的叙述。",
      },
      {
        kicker: "AI for Physics",
        title: "面向基础物理的自主科研智能体",
        description: "构建能够阅读文献、生成假设、调用符号与数值工具、分析证据并迭代研究计划的科研智能体，同时让物理学家始终处于关键决策回路中。",
      },
      {
        kicker: "量子物质",
        title: "量子多体与格点场论基础模型",
        description: "运用神经量子态、保持对称性的生成模型与可微分模拟器，研究跨物理系统族的波函数、量子相变及非微扰动力学。",
      },
    ],
    papers: common.papers.map((paper, index) => ({
      ...paper,
      topic: ["机制可解释性 · 数学推理", "自主智能体 · 理论物理", "生成模型 · 规范对称性", "神经量子态 · 多体物理", "神经符号 AI · 高能理论"][index],
      action: "演示条目",
    })),
    projects: common.projects.map((project, index) => ({
      ...project,
      category: ["AI 产品", "科研工具", "开源项目", "个人实验"][index],
      description: [
        "一个本地优先的创作者知识工作台，将视频转化为带时间戳、可追溯的知识内容。",
        "一个具备证据意识的论文阅读环境，用于比较不同论文的主张、方法与引用关系。",
        "一个轻量评测工具，用于观察科研智能体如何规划、检索并解释自己的决策。",
        "围绕小模型、透明界面与人在回路人工智能进行的笔记和原型实验。",
      ][index],
      action: "演示项目",
    })),
    interests: ["摄影", "散步", "阅读", "独立开发", "咖啡与交流"],
    disclosureLabel: "测试说明",
    disclosure: "本页面展示的个人身份、院校信息、研究方向、论文记录、作者署名、发表场所及部分项目均为界面测试而创建的虚构占位数据，不代表经过核实的学术或职业信息。",
    footer: "一份关于想法与工作的安静索引。",
  },
};
