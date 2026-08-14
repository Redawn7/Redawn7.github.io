# Xuanchen Lu Virtual Persona — Research & Papers

陆宣辰（Xuanchen Lu）虚拟个人主页的研究方向与论文素材库。

> **用途说明：** 本文档用于个人主页的内容设计与界面测试。人物经历、研究归属、论文归属和引用数据均为虚构或演示性内容，不代表真实学术履历。引用数量会随时间变化，正式使用前需要重新核验。

## Research Directions

### 1. LLM Scaling Laws｜大语言模型尺度定律

**中文**

研究大语言模型性能随参数规模、训练数据与计算预算增长的尺度规律，重点关注 compute-optimal training、数据—参数配置以及能力涌现。希望建立可预测的 scaling framework，用较小规模实验外推大型模型的性能边界与计算效率。

**English**

My research focuses on scaling laws in large language models, particularly how model performance evolves with parameter count, training data, and computational budget. I am interested in compute-optimal training, data–parameter allocation, and emergent capabilities, with the goal of developing predictive frameworks for estimating large-scale model performance from smaller experiments.

### 2. Inference-time Scaling｜推理时扩展

**中文**

研究如何在模型参数固定的情况下，通过增加推理阶段计算提升复杂任务表现。重点关注长链推理、Best-of-N、搜索与 verifier、自适应计算分配及 overthinking 问题，探索模型如何根据任务难度动态决定“思考多少”和“何时停止”。

**English**

I study how additional computation at inference time can improve reasoning performance without changing model parameters. My interests include long-horizon reasoning, Best-of-N sampling, search and verifier-based methods, adaptive compute allocation, and overthinking, with a focus on how models can dynamically determine how much reasoning is necessary for each task.

### 3. Market Microstructure｜金融市场微观结构

**中文**

研究金融市场微观交易机制以及价格形成过程，重点关注订单流、限价订单簿、流动性、买卖价差与价格冲击。通过高频交易数据分析交易行为如何影响短期价格，并研究 informed trading、市场冲击与异常交易行为的识别和建模。

**English**

My research in market microstructure examines how trading mechanisms and order flow contribute to price formation. I focus on limit order books, liquidity, bid–ask spreads, price impact, and informed trading, using high-frequency market data to model short-term price dynamics and identify abnormal or strategically informed trading behavior.

### 4. AdS/CFT & Quantum Gravity｜AdS/CFT 与量子引力

**中文**

研究量子引力与全息原理，重点关注 AdS/CFT 对偶中引力理论与边界共形场论之间的关系。关注黑洞信息悖论、量子纠缠、时空涌现与 holography，探索经典时空几何是否可以由更基本的量子信息与纠缠结构涌现。

**English**

My research interests in theoretical physics center on quantum gravity and holography, particularly the AdS/CFT correspondence between gravitational theories and boundary conformal field theories. I am interested in black hole information, quantum entanglement, spacetime emergence, and the possibility that classical geometry arises from more fundamental quantum-information structures.

## Paper Materials

下表保留原论文作者，用作主页排版与内容演示。若在虚拟人物主页中展示，必须同时保留虚构数据声明，不应暗示陆宣辰是这些论文的真实作者。

| 方向 / 主题 | 论文标题 | 作者简写 | Venue | 引用约 |
| --- | --- | --- | --- | ---: |
| **LLM Scaling · Precision Scaling** | *Scaling Laws for Precision* | **Tanishq Kumar et al.** | ICLR 2025 | **~100+** ([Pehlevan Group][1]) |
| **LLM Scaling · Data Scaling** | *LLMs on the Line: Data Determines Loss-to-Loss Scaling Laws* | **Prasanna Mayilvahanan et al.** | ICML 2025 | **~13** ([Google Scholar][2]) |
| **Inference Scaling · Test-Time Compute** | *Scaling LLM Test-Time Compute Optimally Can Be More Effective than Scaling Model Parameters* | **Charlie Snell et al.** | ICLR 2025 | **~1,000+** ([The Best NLP Papers][3]) |
| **Inference Scaling · Reasoning Search** | *Tree of Thoughts: Deliberate Problem Solving with Large Language Models* | **Shunyu Yao et al.** | NeurIPS 2023 | **~7,000–8,000+** ([NeurIPS Proceedings][4]) |
| **Market Microstructure · Market Structure** | *Dynamic Market Choice* | **Xian Wu** | AFA 2025 / Working Paper | **~1** ([SSRN][5]) |
| **Market Microstructure · OTC / Information Friction** | *Information Friction in OTC Interdealer Markets* | **Benjamin Gardner & Yesol Huh** | AFA 2025 / FEDS | **~2–3** ([Federal Reserve][6]) |
| **Quantum Gravity · Black Holes & Complexity** | *The Complexity of Learning (Pseudo)random Dynamics of Black Holes and Other Chaotic Systems* | **Lisa Yang & Netta Engelhardt** | JHEP 2025 | **~20** ([Springer][7]) |
| **AdS/CFT · Baby Universes** | *On Tests for Baby Universes in AdS/CFT* | **Kenneth Higginbotham** | JHEP 2025 | **~10** ([Springer][8]) |

## Compact Homepage Copy

### LLM Scaling Laws

- *Scaling Laws for Precision* — Kumar et al., ICLR ’25 · 100+ citations
- *LLMs on the Line* — Mayilvahanan et al., ICML ’25 · 10+ citations

### Inference-time Scaling

- *Scaling LLM Test-Time Compute Optimally* — Snell et al., ICLR ’25 · 1K+ citations
- *Tree of Thoughts* — Yao et al., NeurIPS ’23 Oral · 7K+ citations

### Market Microstructure

- *Dynamic Market Choice* — Wu, AFA ’25
- *Information Friction in OTC Interdealer Markets* — Gardner & Huh, AFA ’25 / Federal Reserve

### AdS/CFT & Quantum Gravity

- *The Complexity of Learning (Pseudo)random Dynamics of Black Holes* — Yang & Engelhardt, JHEP ’25
- *On Tests for Baby Universes in AdS/CFT* — Higginbotham, JHEP ’25

## Website Disclosure

建议放在网页页脚，并使用不抢视觉焦点但仍可正常辨认的样式：

**中文：** 以上人物经历、研究成果与论文信息均为测试虚构数据，仅用于网页原型展示。

**English:** The biography, research record, and publication information presented above are fictional test data used solely for this website prototype.

[1]: https://pehlevan.seas.harvard.edu/sites/g/files/omnuum6471/files/2025-03/Kumar_etal_ICLR_2025.pdf "Scaling Laws for Precision"
[2]: https://scholar.google.com/citations?hl=en&user=3xq1YcYAAAAJ "Prasanna Mayilvahanan"
[3]: https://thebestnlppapers.com/nlp/papers/2024/ "The Best NLP Papers of 2024"
[4]: https://proceedings.neurips.cc/paper_files/paper/2023/hash/271db9922b8d1f4dd7aaef84ed5ac703-Abstract-Conference.html "Tree of Thoughts"
[5]: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4550511 "Dynamic Market Choice"
[6]: https://www.federalreserve.gov/econres/feds/information-friction-in-otc-interdealer-markets.htm "Information Friction in OTC Interdealer Markets"
[7]: https://link.springer.com/article/10.1007/JHEP03%282025%29153 "The Complexity of Learning (Pseudo)random Dynamics of Black Holes and Other Chaotic Systems"
[8]: https://link.springer.com/article/10.1007/JHEP09%282025%29038 "On Tests for Baby Universes in AdS/CFT"
