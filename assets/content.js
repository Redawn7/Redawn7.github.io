const links = {
  github: "https://github.com/Redawn7",
  yale: "https://cs.yale.edu/",
};

const paperRecords = [
  { year: "2026", title: "Predicting Language Model Scaling Behavior from Small Compute Training Runs", authors: "Xuanchen Lu, A. Patel & M. Chen", venue: "ICLR '26", href: null, demo: true },
  { year: "2025", title: "Data Mixture Selection for Compute-Optimal Pretraining across Heterogeneous Web Corpora", authors: "M. Chen, Xuanchen Lu et al.", venue: "ICML '25", href: null, demo: true },
  { year: "2025", title: "Adaptive Test-Time Compute Allocation for Efficient Long-Horizon Language Model Reasoning", authors: "Xuanchen Lu, J. Park & E. Rossi", venue: "NeurIPS '25", href: null, demo: true },
  { year: "2025", title: "Verifier-Guided Tree Search for Reliable Multi-Step Reasoning in Language Models", authors: "J. Park, Xuanchen Lu et al.", venue: "ACL '25", href: null, demo: true },
  { year: "2024", title: "Learning Latent Order Flow Representations for Short-Horizon Price Impact Forecasting", authors: "Xuanchen Lu & L. Wang", venue: "KDD '24", href: null, demo: true },
  { year: "2024", title: "Reconstructing Bulk Geometry from Entanglement Structure with Graph Neural Operators", authors: "E. Rossi, Xuanchen Lu et al.", venue: "NeurIPS '24", href: null, demo: true },
];

const projectRecords = [
  { title: "Creator Evidence Wiki", href: null, demo: true },
  { title: "PaperLens", href: null, demo: true },
  { title: "AgentScope", href: null, demo: true },
  { title: "Small Models, Clear Reasons", href: null, demo: true },
];

const englishContacts = [
  { label: "GitHub", href: links.github },
  { label: "Scholar", href: links.yale },
];

const chineseContacts = [
  { label: "GitHub", href: links.github },
  { label: "学术主页", href: links.yale },
];

export const content = {
  en: {
    meta: {
      title: "Xuanchen Lu | AI, Markets & Quantum Gravity",
      description: "Xuanchen Lu's bilingual fictional personal homepage for LLM scaling, inference-time compute, market microstructure, quantum gravity, papers, and projects.",
    },
    languageLabel: "Choose language",
    navigationLabel: "Page sections",
    skipLabel: "Skip to work",
    atlasTitle: "Interactive research atlas",
    atlas: [
      { key: "llm-scaling", label: "LLM Scale", accessibleLabel: "Explore LLM Scaling Laws" },
      { key: "inference", label: "Inference", accessibleLabel: "Explore Inference-time Scaling" },
      { key: "markets", label: "Markets", accessibleLabel: "Explore Market Microstructure" },
      { key: "spacetime", label: "Spacetime", accessibleLabel: "Explore AdS/CFT and Quantum Gravity" },
    ],
    navigation: [
      { target: "research", label: "Research Atlas" },
      { target: "experience", label: "Experience" },
      { target: "papers", label: "Selected Papers" },
      { target: "projects", label: "Projects" },
      { target: "interests", label: "Beyond Work" },
    ],
    profile: {
      name: "Xuanchen Lu",
      initials: "LC",
      portraitAlt: "Monogram portrait placeholder for Xuanchen Lu",
      role: "Scholar · Builder · Explorer",
      affiliation: "PhD Researcher · Yale University",
      department: "Scaling Laws · Markets · Quantum Gravity",
      location: "Based between New Haven & Chiang Mai",
      bio: "I study how intelligence, markets, and spacetime scale—moving between language models, high-frequency finance, and quantum gravity.",
    },
    contacts: englishContacts,
    sections: {
      research: { number: "01", title: "Research" },
      experience: { number: "02", title: "Experience" },
      papers: { number: "03", title: "Selected Papers" },
      projects: { number: "04", title: "Projects" },
      interests: { number: "05", title: "Beyond Work" },
    },
    research: [
      { key: "llm-scaling", kicker: "LLM Scaling Laws", title: "Predictive scaling frameworks for large language models", description: "Performance scaling across parameters, data, and compute, with an emphasis on compute-optimal training, data-parameter allocation, and emergent capabilities.", question: "Can small training runs reliably forecast the limits of much larger models?" },
      { key: "inference", kicker: "Inference-time Scaling", title: "Adaptive test-time compute for reasoning systems", description: "Long-horizon reasoning, Best-of-N sampling, search, verifier-based methods, adaptive compute allocation, and the overthinking problem.", question: "When should a model keep thinking—and when should it stop?" },
      { key: "markets", kicker: "Market Microstructure", title: "Order flow, liquidity, and short-horizon price formation", description: "Limit order books, bid-ask spreads, price impact, informed trading, and abnormal behavior in high-frequency market data.", question: "Which order-flow patterns reveal information before prices move?" },
      { key: "spacetime", kicker: "AdS/CFT & Quantum Gravity", title: "Spacetime emergence from quantum information", description: "Holography, black hole information, quantum entanglement, and the possibility that classical geometry arises from deeper information structures.", question: "Can classical geometry be recovered from patterns of quantum entanglement?" },
    ],
    experience: [
      { key: "yale", period: "2024—Present", title: "PhD Researcher in Computer Science, Yale University", focus: "Learning systems, reasoning, and interdisciplinary theory" },
      { key: "melbourne", period: "2022—2024", title: "M.S. in Computer Science, University of Melbourne", focus: "Machine learning systems and quantitative methods" },
      { key: "berkeley", period: "2020—2021", title: "Visiting Student in High-Energy Physics, UC Berkeley", focus: "Quantum field theory and high-energy physics", kind: "exchange", nestedWithin: "nyu-shanghai" },
      { key: "nyu-shanghai", period: "2018—2022", title: "B.S. in Information Technology & Physics, NYU Shanghai", focus: "A dual foundation in computation and theoretical physics" },
    ],
    papers: paperRecords.map((paper, index) => ({
      ...paper,
      topic: ["LLM Scaling · Empirical Forecasting", "LLM Scaling · Data Mixtures", "Inference Scaling · Adaptive Compute", "Inference Scaling · Verifier-Guided Search", "Market Microstructure · Price Impact", "Quantum Gravity · Geometry Reconstruction"][index],
      role: ["Lead author", "Co-author", "Lead author", "Co-author", "Lead author", "Co-author"][index],
      contribution: [
        "Introduces a small-run extrapolation protocol for forecasting compute-performance frontiers.",
        "Studies how heterogeneous data mixtures alter compute-optimal pretraining behavior.",
        "Allocates test-time computation dynamically according to estimated problem difficulty.",
        "Combines verifier feedback with tree search to improve multi-step reasoning reliability.",
        "Learns compact order-flow states for short-horizon price-impact forecasting.",
        "Explores neural reconstruction of bulk geometry from boundary entanglement structure.",
      ][index],
      action: ["Lead author", "Co-author", "Lead author", "Co-author", "Lead author", "Co-author"][index],
    })),
    publicationsToggle: { expand: "View all 6 publications", collapse: "Show selected publications" },
    projects: projectRecords.map((project, index) => ({
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
    collaboration: {
      eyebrow: "Open thread",
      title: "Let unlikely ideas share a table.",
      description: "I welcome research conversations that connect model behavior, market dynamics, and the information structure of physical systems.",
      links: englishContacts,
    },
    disclosureLabel: "Demo notice",
    disclosure: "This is a fictional personal-brand prototype. Biographical details, affiliations, research directions, paper selections, author roles, and projects are fictional placeholders for interface testing and do not represent verified academic or professional claims.",
    footer: "Designed as a quiet index of ideas and work.",
  },
  zh: {
    meta: {
      title: "陆宣辰｜AI、市场与量子引力",
      description: "陆宣辰的中英双语虚拟个人主页，展示大语言模型尺度定律、推理时扩展、金融市场微观结构、量子引力、论文与项目。",
    },
    languageLabel: "选择语言",
    navigationLabel: "页面章节",
    skipLabel: "跳转到研究与项目",
    atlasTitle: "交互式研究图谱",
    atlas: [
      { key: "llm-scaling", label: "模型尺度", accessibleLabel: "探索大语言模型尺度定律" },
      { key: "inference", label: "推理计算", accessibleLabel: "探索推理时扩展" },
      { key: "markets", label: "市场", accessibleLabel: "探索金融市场微观结构" },
      { key: "spacetime", label: "时空", accessibleLabel: "探索 AdS/CFT 与量子引力" },
    ],
    navigation: [
      { target: "research", label: "研究图谱" },
      { target: "experience", label: "个人履历" },
      { target: "papers", label: "精选论文" },
      { target: "projects", label: "开发项目" },
      { target: "interests", label: "工作之外" },
    ],
    profile: {
      name: "陆宣辰",
      initials: "LC",
      portraitAlt: "陆宣辰的字母头像占位图",
      role: "学者 · 创造者 · 探索者",
      affiliation: "耶鲁大学博士研究生",
      department: "尺度定律 · 市场结构 · 量子引力",
      location: "往返于纽黑文与清迈",
      bio: "我研究智能、市场与时空如何扩展，在大语言模型、高频金融与量子引力之间寻找共同结构。",
    },
    contacts: chineseContacts,
    sections: {
      research: { number: "01", title: "研究方向" },
      experience: { number: "02", title: "个人履历" },
      papers: { number: "03", title: "精选论文" },
      projects: { number: "04", title: "开发项目" },
      interests: { number: "05", title: "工作之外" },
    },
    research: [
      { key: "llm-scaling", kicker: "大语言模型尺度定律", title: "面向大语言模型的可预测尺度框架", description: "研究性能随参数、数据与计算预算增长的规律，关注 compute-optimal training、数据—参数配置与能力涌现。", question: "能否用小规模训练实验可靠预测更大模型的能力边界？" },
      { key: "inference", kicker: "推理时扩展", title: "面向推理系统的自适应测试时计算", description: "研究长链推理、Best-of-N、搜索与 verifier、自适应计算分配及 overthinking 问题。", question: "模型应该在什么时候继续思考，又应该在什么时候停止？" },
      { key: "markets", kicker: "金融市场微观结构", title: "订单流、流动性与短期价格形成", description: "关注限价订单簿、买卖价差、价格冲击、informed trading 与高频数据中的异常交易行为。", question: "哪些订单流信号会在价格变化前暴露新的市场信息？" },
      { key: "spacetime", kicker: "AdS/CFT 与量子引力", title: "从量子信息结构到时空涌现", description: "研究全息原理、黑洞信息悖论、量子纠缠，以及经典时空几何是否可由更基本的信息结构涌现。", question: "经典几何能否从量子纠缠的结构中被重新构造出来？" },
    ],
    experience: [
      { key: "yale", period: "2024—至今", title: "耶鲁大学计算机科学博士研究生", focus: "学习系统、推理与跨学科理论" },
      { key: "melbourne", period: "2022—2024", title: "墨尔本大学计算机科学硕士", focus: "机器学习系统与量化方法" },
      { key: "berkeley", period: "2020—2021", title: "加州大学伯克利分校高能物理交换生", focus: "量子场论与高能物理", kind: "exchange", nestedWithin: "nyu-shanghai" },
      { key: "nyu-shanghai", period: "2018—2022", title: "上海纽约大学信息技术与物理学双学位", focus: "计算与理论物理的双重基础" },
    ],
    papers: paperRecords.map((paper, index) => ({
      ...paper,
      topic: ["LLM Scaling · 经验预测", "LLM Scaling · 数据配比", "推理时扩展 · 自适应计算", "推理时扩展 · 验证器引导搜索", "市场微观结构 · 价格冲击", "量子引力 · 几何重建"][index],
      role: ["第一作者", "共同作者", "第一作者", "共同作者", "第一作者", "共同作者"][index],
      contribution: [
        "提出用小规模训练实验外推计算量—性能边界的预测方法。",
        "研究异构数据配比如何改变计算最优预训练规律。",
        "依据问题难度动态分配测试时计算预算。",
        "结合验证器反馈与树搜索，提高多步推理的可靠性。",
        "学习紧凑订单流状态，用于预测短周期价格冲击。",
        "探索从边界纠缠结构中利用神经算子重建体几何。",
      ][index],
      action: ["第一作者", "共同作者", "第一作者", "共同作者", "第一作者", "共同作者"][index],
    })),
    publicationsToggle: { expand: "查看全部 6 篇论文", collapse: "收起至精选论文" },
    projects: projectRecords.map((project, index) => ({
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
    collaboration: {
      eyebrow: "开放讨论",
      title: "让看似无关的思想坐在同一张桌上。",
      description: "欢迎围绕模型行为、市场动力学与物理系统的信息结构展开研究交流与跨界合作。",
      links: chineseContacts,
    },
    disclosureLabel: "测试说明",
    disclosure: "这是一个虚拟个人品牌原型。页面中的个人身份、院校信息、研究方向、论文选择、作者角色与项目均为界面测试占位内容，不代表经过核实的学术或职业信息。",
    footer: "一份关于想法与工作的安静索引。",
  },
};
