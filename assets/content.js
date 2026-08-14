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
    sections: {
      research: { number: "01", title: "Research" },
      experience: { number: "02", title: "Experience" },
      papers: { number: "03", title: "Selected Papers" },
      projects: { number: "04", title: "Projects" },
      interests: { number: "05", title: "Beyond Work" },
    },
    research: [
      {
        kicker: "Language models",
        title: "Verifiable Scientific Reasoning and Mechanistic Interpretability",
      },
      {
        kicker: "AI for physics",
        title: "Autonomous AI Scientists for Fundamental Physics",
      },
      {
        kicker: "Quantum matter",
        title: "Foundation Models for Quantum Matter and Lattice Field Theory",
      },
      {
        kicker: "High-energy theory",
        title: "Generative Models for Scattering Amplitudes and Effective Field Theories",
      },
    ],
    experience: [
      { period: "2024—Present", title: "PhD Researcher, Yale University" },
      { period: "2022—2024", title: "Research Assistant, Institute for Advanced Study" },
      { period: "2018—2022", title: "B.Sc. in Physics & Computer Science, Tsinghua University" },
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
    sections: {
      research: { number: "01", title: "研究方向" },
      experience: { number: "02", title: "个人履历" },
      papers: { number: "03", title: "精选论文" },
      projects: { number: "04", title: "开发项目" },
      interests: { number: "05", title: "工作之外" },
    },
    research: [
      {
        kicker: "大语言模型",
        title: "可验证的科学推理与机制可解释性",
      },
      {
        kicker: "AI for Physics",
        title: "面向基础物理的自主科研智能体",
      },
      {
        kicker: "量子物质",
        title: "量子多体与格点场论基础模型",
      },
      {
        kicker: "高能理论",
        title: "散射振幅与有效场论生成模型",
      },
    ],
    experience: [
      { period: "2024—至今", title: "耶鲁大学博士研究生" },
      { period: "2022—2024", title: "高等研究院研究助理" },
      { period: "2018—2022", title: "清华大学物理学与计算机科学学士" },
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
