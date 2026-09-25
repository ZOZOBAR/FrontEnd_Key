[English](README.md) | 简体中文

# Siyu 的前端知识库

一个长期维护的个人前端知识整合系统。它汇集自学笔记、BU 课程材料、真实项目与调试经验，以及经过选择性批准的外部参考资料。

它并不打算成为一本通用的前端百科全书。当前的知识领域包括 HTML、CSS、JavaScript 和 Git。当积累了足够的真实学习材料后，React 将成为独立的知识领域。

## 结构

- `index.html` — 网站入口文件
- `pages/` — 整合后的知识页面
- `assets/` — 共享的网站 CSS 和 JavaScript
- `sources/` — 活跃的原始学习证据
- `archive/` — 历史材料，通常为只读
- `docs/` — 项目记忆与维护指南

直接在浏览器中打开 `index.html`。网站有意支持直接通过 `file://` 使用；JavaScript 用于增强笔记体验，但不会限制核心内容的阅读。

## 快速开始 / 本地设置

使用 SSH 克隆仓库：

```bash
git clone git@github.com:ZOZOBAR/FrontEnd_Key.git
```

或使用 HTTPS 克隆：

```bash
git clone https://github.com/ZOZOBAR/FrontEnd_Key.git
```

进入项目：

```bash
cd FrontEnd_Key
```

FrontEnd_Key 目前使用原生 HTML、CSS 和 JavaScript。不需要执行 `npm install`，也不需要构建步骤。你可以直接在浏览器中打开 `index.html`。如果你更倾向于使用本地服务器，请使用 VS Code Live Server，或运行：

```bash
python3 -m http.server 8000
```

然后访问 [http://localhost:8000](http://localhost:8000)。

## 添加新知识

FrontEnd_Key 通过吸收学习来源来成长，而不是反复重新设计网站。请保持原始学习材料完整，不要为了让内容适应 UI 而手动简化它。文档化的工作流程会先对有用细节进行核对，再选择最清晰的教学结构。

```text
新的学习来源
→ 来源盘点
→ 知识提取
→ 细节核对
→ 合并 / 补充 / 修正
→ 明确学习问题
→ 选择教学媒介
→ 教学结构
→ 仅在有充分理由时加入可视化 / 交互
→ 双语整合
→ 验证
→ 更新后的知识库
```

实践工作流程请阅读 [CONTRIBUTING.md](CONTRIBUTING.md)，详细方法请阅读 [docs/CONTENT_GUIDE.md](docs/CONTENT_GUIDE.md)。

## 将 FrontEnd_Key 与 AI 编程代理配合使用

在代理更改知识库之前，明确指示它阅读 [AGENTS.md](AGENTS.md) 以及其中引用的治理文档。不同的 AI 编程工具是否会自动加载指令文件并不相同，因此这样明确提出要求是最安全、可移植的工作流程。

起步提示词：

> 先阅读 AGENTS.md 以及所有被引用的项目治理文档。然后使用已有文档说明的知识摄入流程，将新的学习材料整合到 FrontEnd_Key 中。保留来源细节，在不破坏内容的前提下合并真正重复的信息，在选择教学媒介之前识别学习问题，保持双语对等，遵循既有设计系统，验证实现，并且除非现有系统确实无法支持新知识，否则不要重新设计架构。

## 参与贡献

欢迎那些既保护来源完整性、又能扩展学习基础的贡献。请从 [CONTRIBUTING.md](CONTRIBUTING.md) 开始；其中说明了贡献者工作流程、必读内容、验证要求，以及架构扩展这一例外情况所需的门槛。

## 学习与教学理念

FrontEnd_Key 不是一份压缩的速查表。它保留有用的来源细节，同时让概念之间的关系易于理解。

- 完整的来源整合与当前学习边界优先。
- 讲解以最少的已有知识为前提，并且一次引入一个新概念。
- 关系、执行流程、对比、示例、追踪过程以及 ASCII / 等宽图示共同建立心智模型。
- 留白与层级降低认知负荷；视觉润色应服务于知识，而不是压缩知识。
