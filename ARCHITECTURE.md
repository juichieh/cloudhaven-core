# ☁️ Cloudhaven Architecture

Cloudhaven 是一個把資訊、工具、能力、框架與 Prompt DNA 分層保存的知識系統。

這裡不是單純收藏 Markdown。

它的目標是讓不同 Agent（ChatGPT、鉗鉗、Codex、未來 Cloudhaven Agent）都能理解：

- 什麼是工具
- 什麼是能力
- 什麼是方法
- 什麼是 Prompt 的靈魂
- 什麼應該進 Library
- 什麼應該先留在 Workshop 討論

────────────────
## 🧭 核心分層

```text
cloudhaven-core/
├── ARCHITECTURE.md
├── prompt-dna/
│   └── 保存 Prompt 的核心 DNA，避免 Prompt Drift
│
└── library/
    ├── ai-tools/
    │   └── 保存具體工具
    │
    ├── zoo/
    │   └── 保存 AI 能力 / 功能大綱 / 新物種
    │
    └── frameworks/
        └── 保存方法論與可重複使用的思考框架
```

────────────────
## 🧬 Prompt DNA

位置：

```text
prompt-dna/
```

保存：

> Prompt 為什麼成功？

Prompt DNA 不保存完整 Prompt，也不是 Prompt 墳場。

它保存的是：

- 語氣
- 邏輯
- 節奏
- 世界觀
- 作戰手感
- 不能失去的核心句
- Prompt Drift 檢查方式

例子：

```text
prompt-dna/show-director-dna.md
```

────────────────
## 🧠 Frameworks

位置：

```text
library/frameworks/
```

保存：

> 怎麼做？

Framework 是可重複使用的方法論。

它不是單次 Prompt，也不是某一天的輸出。

例子：

```text
library/frameworks/show-director-framework-v1.md
library/frameworks/cloudhaven-library-workflow.md
```

────────────────
## 🤖 AI Tools

位置：

```text
library/ai-tools/
```

保存：

> 這是什麼工具？

AI Tool 是具體產品、服務、開源工具或可觀察的工具案例。

它回答：

- 工具是什麼
- 做什麼
- 適合誰
- 為什麼值得收藏
- 跟哪些能力或 Framework 有關

例子：

```text
library/ai-tools/acti.md
library/ai-tools/databox-mcp.md
```

────────────────
## 🦁 Zoo

位置：

```text
library/zoo/
```

保存：

> AI 長出了什麼能力？

Zoo 不是工具館。

Zoo 收藏的是能力、功能大綱、新物種。

一張 Zoo 卡可以連到很多 AI Tool。

例子：

```text
library/zoo/keyboard-agent.md
library/zoo/business-agent.md
```

工具與能力的關係：

```text
AI Tool = 產品 / 個體
Zoo     = 能力 / 物種
```

例如：

```text
Acti → Keyboard Agent
Databox MCP → Business Agent
```

────────────────
## 🔗 連結規則

Cloudhaven 優先使用相對連結，讓 GitHub Markdown 可以直接互相跳轉。

### Tool → Zoo

從 `library/ai-tools/acti.md` 連到 Zoo：

```markdown
[Keyboard Agent](../zoo/keyboard-agent.md)
```

### Zoo → Tool

從 `library/zoo/keyboard-agent.md` 連到 Tool：

```markdown
[Acti](../ai-tools/acti.md)
```

### Framework → Prompt DNA

從 `library/frameworks/show-director-framework-v1.md` 連到 Prompt DNA：

```markdown
[Show Director DNA](../../prompt-dna/show-director-dna.md)
```

### Prompt DNA → Framework

從 `prompt-dna/show-director-dna.md` 連到 Framework：

```markdown
[Show Director Framework V1](../library/frameworks/show-director-framework-v1.md)
```

────────────────
## 🌱 Maturity / Evolution State

目前 maturity 最適合放在 Zoo 能力卡，用來表示能力物種的演化狀態。

建議等級：

```yaml
maturity:
  - Seed 🌱
  - Emerging 🌿
  - Growing 🌳
  - Mature 🌲
```

注意：

- `rarity` / `收藏等級` 表示值得收藏程度
- `maturity` 表示能力成熟度
- AI Tool 不一定要有 maturity
- Zoo 卡最適合使用 maturity

例如：

```text
Keyboard Agent：Seed 🌱
Business Agent：Seed 🌱
```

────────────────
## 🛠️ Workshop vs Library

Cloudhaven 的工作流程：

```text
Workshop（聊天 / 討論 / 草稿）
↓
定稿
↓
GitHub
↓
Library
```

聊天是設計室。

GitHub 是圖書館。

不要把半成品直接放進 Library。

────────────────
## ✅ 新增內容前檢查

新增一張卡之前，先問：

1. 這是工具嗎？→ `library/ai-tools/`
2. 這是能力嗎？→ `library/zoo/`
3. 這是方法嗎？→ `library/frameworks/`
4. 這是 Prompt 的核心 DNA 嗎？→ `prompt-dna/`
5. 這只是一次輸出或範例嗎？→ 暫時不要進 Library

────────────────
## 🦞 龍蝦一句話

「Cloudhaven 不是把東西丟進資料夾，而是先分清楚：它是工具、能力、方法，還是靈魂。」
