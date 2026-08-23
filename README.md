# KDA Wishlist 网站

KDA Wishlist 是一个面向社区的内核优化愿望清单。这里的“内核”是指在图形处理器等加速硬件上运行的、决定机器学习算子性能的关键程序。KDA 是 Kernel Design Agents（内核设计智能体）的简称：它是一套让编程智能体研究、实现、验证并迭代高性能内核的工作流程。

网站负责三件事：介绍项目、指导用户准备可复现的内核定义和工作负载、把用户引导到 GitHub Issues。GitHub Issues 是 GitHub 自带的问题追踪条目；本项目把它当作公开愿望清单，用于提交需求、补充信息和通过点赞反应表达社区需求。

## 本地运行

需要 Node.js 22.13.0 或更新版本。

```bash
npm install
npm run dev
```

开发服务器启动后访问 `http://localhost:3000`。

## 检查生产版本

```bash
npm run build
npm run lint
```

`npm run build` 会生成适用于 Cloudflare Workers（Cloudflare 的边缘运行环境）的输出。网站托管配置位于 `.openai/hosting.json`。

## 提交流程

1. 使用 FlashInfer Trace 准备可复现的任务定义；该格式描述参考实现、输入输出、正确性要求和工作负载。
2. 使用仓库中的“Kernel request”模板创建 GitHub 问题追踪条目。
3. 社区通过顶层问题上的点赞反应表达需求，并用评论补充新的工作负载证据。
4. 团队审核任务；入选任务进入研究、生成、正确性验证、性能分析和候选方案筛选流程。
5. 完成后公开内核实现、基准结果、复现方法、设计说明和已知限制等可用成果。

提交并不保证入选。项目优先处理影响真实系统、可自动评估、可公开复现、可惠及多个项目并有希望被上游采用的任务。

## 主要目录

- `app/`：网页结构、文案和样式。
- `public/og.png`：链接分享时使用的社交预览图。
- `.github/ISSUE_TEMPLATE/`：内核请求表单和问题追踪配置。
- `.openai/hosting.json`：网站托管项目配置。

## 研究依据

- [Kernel Design Agents 工作流程](https://github.com/mit-han-lab/kernel-design-agents)
- [MLSys 2026 FlashInfer 竞赛](https://mlsys26.flashinfer.ai/)
- [竞赛工作流程与结果发布](https://github.com/mit-han-lab/mlsys2026-flashinfer-contest)
- [FlashInfer Bench 与 Trace 数据格式](https://github.com/flashinfer-ai/flashinfer-bench)
