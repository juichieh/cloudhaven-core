# 📚 Cloudhaven Library

`library/` 是 Cloudhaven 的正式收藏館。

這裡放已經整理成正式卡片、框架或能力圖鑑的內容。

它不是草稿區。

如果內容還在討論、測試、改版，應該先留在 Workshop（聊天、Issue、草稿檔），等定稿後再放進 Library。

────────────────
## 目前分類

```text
library/
├── ai-tools/
├── zoo/
└── frameworks/
```

────────────────
## 🤖 ai-tools/

保存具體 AI 工具。

回答：

> 這是什麼工具？

例子：

- Acti
- Databox MCP

────────────────
## 🦁 zoo/

保存 AI 能力 / 功能大綱 / 新物種。

回答：

> 這代表 AI 長出了什麼能力？

例子：

- Keyboard Agent
- Business Agent

────────────────
## 🧠 frameworks/

保存方法論與可重複使用的思考框架。

回答：

> 這套方法怎麼運作？

例子：

- Show Director Framework V1
- Cloudhaven Library Workflow

────────────────
## 新增規則

新增內容前，先判斷：

| 類型 | 位置 |
|---|---|
| 具體工具 | `library/ai-tools/` |
| 能力 / 物種 | `library/zoo/` |
| 方法論 / 框架 | `library/frameworks/` |

如果不確定，先不要新增分類。

先在聊天或 Issue 中討論，確認後再更新。

────────────────
## 🔗 連結原則

卡片之間應該盡量用相對連結互相連接。

例如：

```markdown
[Acti](../ai-tools/acti.md)
[Keyboard Agent](../zoo/keyboard-agent.md)
```

────────────────
## 🦞 龍蝦一句話

「Library 只收正式版；半成品請先在設計室玩到定稿。」
