---
permalink: /
title: ""
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<!-- ## About Me -->

I am **Heming Xia**, a Ph.D. student in the [NLP Group](https://polyunlp.github.io/) at The Hong Kong Polytechnic University, supervised by Prof. [Wenjie Li](https://www4.comp.polyu.edu.hk/~cswjli/). I earned my master's degree from the [MOE Key Lab of Computational Linguistics](https://icl.pku.edu.cn/) at Peking University, advised by Prof. [Zhifang Sui](https://cs.pku.edu.cn/info/1226/2014.htm). Prior to that, I completed my bachelor's degree from the [School of Physics](http://english.phy.pku.edu.cn/info/1017/5151.htm) at Peking University in 2020. I have also worked as a Research Intern at the [NLC Group @ Microsoft Research Asia](https://www.microsoft.com/en-us/research/group/natural-language-computing/), where I had the privilege of collaborating with Dr. [Tao Ge](https://scholar.google.com/citations?user=LYbs7Q8AAAAJ&hl=en). Currently, I am an intern at [SEA AI Lab](https://sail.sea.com/), working closely with Dr. [Cunxiao Du](https://nonvolatilememory.github.io/). For more details, please refer to my [CV](https://hemingkx.github.io/files/CV.pdf).

# Research
My research focuses on efficient and effective NLP, with the goal of making LLMs faster, more scalable, and more broadly applicable. Specifically, my work centers on the following directions:

- **Speculative Decoding:** Exploring inference-time acceleration techniques that maintain output fidelity. This includes our pioneering work on Speculative Decoding [[EMNLP'23-findings](https://aclanthology.org/2023.findings-emnlp.257/), [ICLR'25](https://openreview.net/forum?id=EKJhH5D5wA)] and the first comprehensive survey [[ACL'24-findings](https://aclanthology.org/2024.findings-acl.456/)] on this emerging paradigm.
- **Efficient Reasoning:** Developing advanced algorithms to enhance the efficiency of reasoning models, spanning efficient training strategies, inference acceleration [[EMNLP'25](https://arxiv.org/abs/2502.12067)], and novel reasoning representations such as latent CoT [[arXiv'25](https://arxiv.org/abs/2505.16782)].
- **Applications (Efficiency + X):** I am interested in how efficiency-oriented techniques can benefit broader applications, with recent focus on tool-augmented agents and multimodal models [[EMNLP'25](https://arxiv.org/abs/2508.16201)].

In addition, I am actively working on tool learning [e.g., [EMNLP'24](https://aclanthology.org/2024.emnlp-main.856/), [ACL'25-findings](https://aclanthology.org/2025.findings-acl.1107/)] and vision-language understanding [e.g., [ACL'22](https://aclanthology.org/2022.acl-long.66/), [EMNLP'23-findings](https://aclanthology.org/2023.findings-emnlp.133/), [EMNLP'25-findings](https://arxiv.org/abs/2502.13925)].

📬 *I am open to collaborating with highly motivated students on research projects related to (but not limited to)  the topics above. If you are interested, feel free to reach out via email.*

# News

[2025.08] Got three papers accepted by EMNLP 2025, congrats to all co-authors 🎉 !  
[2025.05] Got three papers accepted by ACL 2025.  
[2025.02] Released [TokenSkip](https://arxiv.org/abs/2502.12067), enabling LLMs to skip less important tokens during reasoning.   
[2025.01] Got one paper accepted by ICLR 2025.    
[2025.01] Organized a tutorial on [Speculative Decoding](https://speculative-decoding.github.io/) at COLING 2025.   
[2024.10] Released [SWIFT](https://arxiv.org/abs/2410.06916): on-the-fly self-speculative decoding for LLM inference acceleration.   
[2024.09] Got four papers accepted by EMNLP 2024.  
[2024.05] Got two papers accepted by ACL 2024.  
[2024.01] Released [Spec-Bench](https://sites.google.com/view/spec-bench/): a comprehensive benchmark for Speculative Decoding.  
[2024.01] Released our new [survey](https://aclanthology.org/2024.findings-acl.456/) 📖 on Speculative Decoding.  
[2024.01] Started my Ph.D. study at the [NLP Group @ PolyU](https://polyunlp.github.io/), supervised by Prof. Wenjie Li.  
[2023.10] Got three papers accepted by EMNLP 2023.  


# Publications

Most recent publications on [Google Scholar](https://scholar.google.com/citations?user=6r2ESKkAAAAJ&hl=en).  
\* indicates equal contribution

**Reasoning Beyond Language: A Comprehensive Survey on Latent Chain-of-Thought Reasoning**  
Xinghao Chen\*, Anhao Zhao\*, *<ins>Heming Xia</ins>*, Xuan Lu, Hanlin Wang, Yanjun Chen, Wei Zhang, Jian Wang, Wenjie Li, Xiaoyu Shen  
arXiv 2025. [[link]](https://arxiv.org/abs/2505.16782) [[code]](https://github.com/EIT-NLP/Awesome-Latent-CoT)

**KNN-SSD: Enabling Dynamic Self-Speculative Decoding via Nearest Neighbor Layer Set Optimization**  
Mingbo Song, *<ins>Heming Xia</ins>*, Jun Zhang, Chak Tou Leong, Qiancheng Xu, Wenjie Li, Sujian Li  
arXiv 2025. [[link]](https://arxiv.org/abs/2505.16162)

**From Query to Logic: Ontology-Driven Multi-Hop Reasoning in LLMs**  
Haonan Bian, Yutao Qi, Rui Yang, Yuanxi Che, Jiaqian Wang, *<ins>Heming Xia</ins>*, Ranran Zhen  
arXiv 2025. [[link]](https://arxiv.org/abs/2508.01424)

**TokenSkip: Controllable Chain-of-Thought Compression in LLMs**  
*<ins>Heming Xia</ins>*, Yongqi Li, Chak Tou Leong, Wenjie Wang, Wenjie Li  
EMNLP 2025. <font color="red">Best Oral Presentation @ PolyU COMP 2025 Research Conference</font>. [[link]](https://arxiv.org/abs/2502.12067) [[code]](https://github.com/hemingkx/TokenSkip)

**SpecVLM: Enhancing Speculative Decoding of Video LLMs via Verifier-Guided Token Pruning**  
Yicheng Ji\*, Jun Zhang\*, *<ins>Heming Xia</ins>*, Jinpeng Chen, Lidan Shou, Gang Chen, Huan Li  
EMNLP 2025. [[link]](https://arxiv.org/abs/2508.16201)

**Beyond Single Frames: Can LMMs Comprehend Temporal and Contextual Narratives in Image Sequences?**  
Xiaochen Wang\*, *<ins>Heming Xia</ins>*\*, Jialin Song, Longyu Guan, Yixin Yang, Qingxiu Dong, Weiyao Luo, Yifan Pu, Yiru Wang, Xiangdi Meng, Wenjie Li, Zhifang Sui  
Findings of EMNLP 2025. [[link]](https://arxiv.org/abs/2502.13925)

**Towards Harmonized Uncertainty Estimation for Large Language Models**  
Rui Li, Jing Long, Muge Qi, *<ins>Heming Xia</ins>*, Lei Sha, Peiyi Wang, Zhifang Sui  
ACL 2025. <span style="color:red">Oral Presentation</span>. [[link]](https://arxiv.org/abs/2505.19073)

**How Far are LLMs from Being Our Digital Twins? A Benchmark for Persona-Based Behavior Chain Simulation**  
Rui Li, *<ins>Heming Xia</ins>*, Xinfeng Yuan, Qingxiu Dong, Lei Sha, Wenjie Li, Zhifang Sui  
Findings of ACL 2025. [[link]](https://arxiv.org/abs/2502.14642) [[code]](https://github.com/O-L1RU1/BehaviorChain)

**PEToolLLM: Towards Personalized Tool Learning in Large Language Models**  
Qiancheng Xu, Yongqi Li, *<ins>Heming Xia</ins>*, Fan Liu, Min Yang, Wenjie Li  
Findings of ACL 2025. [[link]](https://aclanthology.org/2025.findings-acl.1107/) [[code]](https://github.com/travis-xu/PEToolBench)

**SWIFT: On-the-Fly Self-Speculative Decoding for LLM Inference Acceleration**  
*<ins>Heming Xia</ins>*, Yongqi Li, Jun Zhang, Cunxiao Du, Wenjie Li  
ICLR 2025. [[link]](https://openreview.net/forum?id=EKJhH5D5wA) [[code]](https://github.com/hemingkx/SWIFT)

**AppBench: Planning of Multiple APIs from Various APPs for Complex User Instruction**  
Hongru Wang, Rui Wang, Boyang Xue, *<ins>Heming Xia</ins>*, Jingtao Cao, Zeming Liu, Jeff Z. Pan, Kam-Fai Wong  
EMNLP 2024. [[link]](https://aclanthology.org/2024.emnlp-main.856/) [[code]](https://github.com/ruleGreen/AppBench)

**A Survey on In-context Learning**  
Qingxiu Dong, Lei Li, Damai Dai, Ce Zheng, Jingyuan Ma, Rui Li, *<ins>Heming Xia</ins>*, Jingjing Xu, Zhiyong Wu, Baobao Chang, Xu Sun, Lei Li, Zhifang Sui  
EMNLP 2024. [[link]](https://aclanthology.org/2024.emnlp-main.64/) [[code]](https://github.com/dqxiu/ICL_PaperList) [[机器之心]](https://mp.weixin.qq.com/s/_eqK9bSlDSkIxaE0wb9sfA)

**Enhancing Tool Retrieval with Iterative Feedback from Large Language Models**  
Qiancheng Xu, Yongqi Li, *<ins>Heming Xia</ins>*, Wenjie Li  
Findings of EMNLP 2024. [[link]](https://aclanthology.org/2024.findings-emnlp.561/)

**Taking a Deep Breath: Enhancing Language Modeling of Large Language Models with Sentinel Tokens**  
Weiyao Luo, Suncong Zheng, *<ins>Heming Xia</ins>*, Weikang Wang, Yan Lei, Tianyu Liu, Shuang Chen, Zhifang Sui  
Findings of EMNLP 2024. [[link]](https://aclanthology.org/2024.findings-emnlp.233/)

**Unlocking Efficiency in Large Language Model Inference: A Comprehensive Survey of Speculative Decoding**  
*<ins>Heming Xia</ins>*, Zhe Yang, Qingxiu Dong, Peiyi Wang, Yongqi Li, Tao Ge, Tianyu Liu, Wenjie Li, Zhifang Sui  
Findings of ACL 2024. [[link]](https://aclanthology.org/2024.findings-acl.456/) [[code]](https://github.com/hemingkx/Spec-Bench) [[机器之心]](https://mp.weixin.qq.com/s/YpIDH0GV-DLnB2-ThGfaJg)

**Can Large Multimodal Models Uncover Deep Semantics Behind Images?**  
Yixin Yang, Zheng Li, Qingxiu Dong, *<ins>Heming Xia</ins>*, Zhifang Sui   
Findings of ACL 2024. [[link]](https://aclanthology.org/2024.findings-acl.113/) [[code]](https://github.com/AnnaYang2020/DeepEval)

**ImageNetVC: Zero- and Few-Shot Visual Commonsense Evaluation on 1000 ImageNet Categories**  
*<ins>Heming Xia</ins>*\*, Qingxiu Dong\*, Lei Li, Jingjing Xu, Tianyu Liu, Ziwei Qin, Zhifang Sui  
Findings of EMNLP 2023. [[link]](https://aclanthology.org/2023.findings-emnlp.133/) [[code]](https://github.com/hemingkx/ImageNetVC)

**Bi-Drop: Enhancing Fine-tuning Generalization via Synchronous sub-net Estimation and Optimization**  
Shoujie Tong\*, *<ins>Heming Xia</ins>*\*, Damai Dai, Runxin Xu, Tianyu Liu, Binghuai Lin, Yunbo Cao, and Zhifang Sui  
Findings of EMNLP 2023. [[link]](https://aclanthology.org/2023.findings-emnlp.346/)

**Speculative Decoding: Exploiting Speculative Execution for Accelerating Seq2seq Generation**  
*<ins>Heming Xia</ins>*\*, Tao Ge\*, Peiyi Wang, Si-Qing Chen, Furu wei, and Zhifang Sui  
Findings of EMNLP 2023. [[link]](https://aclanthology.org/2023.findings-emnlp.257/) [[code]](https://github.com/hemingkx/SpecDec)

**Enhancing Continual Relation Extraction via Classifier Decomposition**  
*<ins>Heming Xia</ins>*, Peiyi Wang, Tianyu Liu, Binghuai Lin, Yunbo Cao, and Zhifang Sui  
Findings of ACL 2023. [[link]](https://aclanthology.org/2023.findings-acl.638/) [[code]](https://github.com/hemingkx/CDec)

**Premise-based Multimodal Reasoning: Conditional Inference on Joint Textual and Visual Clues**  
Qingxiu Dong\*, Ziwei Qin\*, *<ins>Heming Xia</ins>*, Tian Feng, Shoujie Tong, Haoran Meng, Lin Xu, Zhongyu Wei, Weidong Zhan, Baobao Chang, Sujian Li, Tianyu Liu and Zhifang Sui  
ACL 2022. [[link]](https://aclanthology.org/2022.acl-long.66/) [[code]](https://2030nlp.github.io/PMR/)

**Improved deep learning techniques in gravitational-wave data analysis**  
*<ins>Heming Xia</ins>*, Lijing Shao, Junjie Zhao and Zhoujian Cao  
Phys. Rev. D 103 2021. [[link]](https://journals.aps.org/prd/abstract/10.1103/PhysRevD.103.024040) [[code]](https://github.com/hemingkx/improved-gwcnn)

# Service
**Area Chair/Action Editor:**  
ACL, EMNLP, ACL ARR  

**Reviewer/Program Committee Member:**  
ICLR, ICML, NeurIPS, ACL, EMNLP ([24' Outstanding Reviewer](https://x.com/emnlpmeeting/status/1857169065569292540)🌟), NAACL, AACL, ACM MM, TASLP, TWEB  

**Teaching Assistant:**  
COMP 5423: Natural Language Processing, Fall 2025, PolyU  
COMP 5423: Natural Language Processing, Spring 2025, PolyU  
COMP 5140: Metaverse Fundamentals, Fall 2024, PolyU  
COMP 2S01: Technology Beyond Borders: Service Learning Across Cultural and Ethnic, Spring 2024, PolyU  

# Invited Talks
[2025.06] Sharing Panel: Efficient Reasoning in Large Language Models at [NICE](https://nice-nlp.github.io/) and [MLNLP](https://mlnlpworld.com/index.html). [[video]](https://www.bilibili.com/video/BV1HGMczkEZz)  
[2025.05] Stop Overthinking: Towards Efficient Reasoning in Large Language Models at Theory Lab, Huawei Hong Kong Research Center. [[slides]](https://docs.google.com/presentation/d/e/2PACX-1vTzEngdiYC4590Ivu-jr5otN_wcwuoSZu57sph-G6tVCuhQpUQfH6ygujicNztkt0ahN_u2l8YoJxS7/pub?start=false&loop=false&delayms=3000)  
[2025.01] Speculative Decoding for Efficient LLM Inference at [COLING 2025](https://coling2025.org/program/tutorials/#tutorial-1-speculative-decoding-for-efficient-llm-inference). [[homepage]](https://speculative-decoding.github.io/) [[slides]](https://tinyurl.com/speculative-decoding-tutorial) [[video]](https://tinyurl.com/spec-tutorial-recording)  
[2024.03] Unlocking the Efficiency of LLM Inference: A Comprehensive Survey of Speculative Decoding at [NICE](https://nice-nlp.github.io/) and [CIP Group @CASIA](https://nlpr.ia.ac.cn/cip/english/introduction.htm). [[video]](https://www.bilibili.com/video/BV1Tm411Z78w) [[slides]](https://docs.google.com/presentation/d/1JewHTyMNJuS--RmcR8Cnt9QLc3WMDD2qyfZ2GsRiho8/edit?usp=sharing)  

# Awards

Merit Student, Peking University (2021)  
Scholarship of National Astronomical Observatory, Chinese Academy of Sciences (2019)  
Merit Student, Henan Province, China (2016)  



<script type="text/javascript" id="clustrmaps" src="//cdn.clustrmaps.com/map_v2.js?cl=080808&w=353&t=tt&d=mGyP2nM9Iiu7frojJe4AMduspbYOo7-StVIGO8tOa6A&co=ffffff&cmo=3acc3a&cmn=ff5353&ct=808080"></script>

