# 🏠 Cloudhaven Core

Cloudhaven Core 是 Cloudhaven AI 生態系的母艦入口。

Cloudhaven 不是單一 AI 助手，也不是單純的 Markdown 知識庫。

它是一座讓人類與 Agent 一起工作的母艦城市：

- Agent 可以在這裡待機、回航、進入工作室
- 知識可以被整理成地圖、技能、框架與收藏卡
- 工具與能力會被分開保存
- Prompt 的靈魂會被保留下來，避免走味
- 系統會隨著使用慢慢演化，而不是一次蓋完

────────────────
## 🏛️ Start Here

第一次進入 Cloudhaven，請先看：

```text
ARCHITECTURE.md
```

它是 Cloudhaven 的 City Map，說明整艘母艦如何分區、擴張與避免資料夾職責重複。

更細的結構設計放在：

```text
architecture/
```

其中：

```text
architecture/narrator-layer.md
```

保存 Cloudhaven Narrator Layer，也就是 UI 與 Agent Engine 中間的工作解說層。

────────────────
## 🧭 Core Modules

```text
cloudhaven-core/
├── ARCHITECTURE.md      # 🏛️ Cloudhaven City Map
├── architecture/        # 🏗️ 核心結構與模組關係
├── chronicle/           # 📜 母艦編年史
├── knowledge/           # 🧭 長期知識地圖
├── skills/              # 🛠️ 可重用流程與操作套路
├── agents/              # 🧑‍🚀 Agent / 居民設定
├── agent-lounge/        # ☕ Agent 待機與回航休息區
├── rooms/               # 🏢 工作室與 Workspace
├── prompt-dna/          # 🧬 Prompt 核心 DNA
├── research/            # 🔍 研究筆記與拆解觀察
├── upgrade-bay/         # 🚧 升級提案與待評估零件
└── library/             # 📚 正式收藏館
```

────────────────
## 🎙 Narrator Layer

Narrator Layer 是 Cloudhaven 的工作解說層。

它負責把 Agent Engine 的真實工作狀態，轉成使用者聽得懂、等得下去、又帶有角色感的狀態敘事。

它不是假的 Loading 文案，而是：

```text
真實工作狀態
↓
AI 解說
↓
使用者看得懂的狀態提示
```

龍蝦 TV Show 的狀態機也採用這個能力：

```text
rooms/lobster-tv-show/status-machine.md
```

────────────────
## 📚 Library District

`library/` 是 Cloudhaven 的正式收藏館。

目前分成：

```text
library/
├── ai-tools/       # 🤖 具體 AI 工具
├── zoo/            # 🦁 AI 能力 / 新物種
└── frameworks/     # 🧠 方法論與框架
```

### 🤖 AI Tools

保存具體工具、產品、服務或開源專案。

回答：

> 這是什麼工具？

### 🦁 Zoo

保存 AI 能力、功能大綱與新物種。

回答：

> AI 長出了什麼能力？

注意：

```text
AI Tool = 工具 / 個體
Zoo     = 能力 / 物種
```

### 🧠 Frameworks

保存方法論與可重複使用的思考框架。

回答：

> 這套方法怎麼運作？

────────────────
## 🧬 Prompt DNA

`prompt-dna/` 保存 Prompt 的核心 DNA，避免 Prompt Drift。

它不保存完整 Prompt，而是保存：

- 語氣
- 邏輯
- 節奏
- 世界觀
- 作戰手感
- 不能失去的核心句

例子：

```text
prompt-dna/show-director-dna.md
```

────────────────
## 🛠️ Skills vs Frameworks

這是最容易搞混的地方。

```text
Framework = 方法論 / 思考框架 / 為什麼這樣做
Skill     = 可執行套路 / 一步一步怎麼做
```

例如：

```text
Show Director Framework V1
→ 如何把資訊導演成一集節目
→ library/frameworks/

Prompt Drift Check Skill
→ 修改早報前照哪些步驟檢查是否走味
→ skills/
```

────────────────
## 🧑‍🚀 Current Residents

- 👾 QianQian
- 📚 Xiaofeng
- 🦞 Lobster
- 🦮 XiaoCha
- 🤖 Xingcheng

────────────────
## 🧩 Before Adding Something

新增內容前，先問：

| 問題 | 位置 |
|---|---|
| 這是具體工具嗎？ | `library/ai-tools/` |
| 這是 AI 能力 / 新物種嗎？ | `library/zoo/` |
| 這是方法論 / 思考框架嗎？ | `library/frameworks/` |
| 這是可執行流程 / checklist 嗎？ | `skills/` |
| 這是長期認知 / 索引嗎？ | `knowledge/` |
| 這是研究過程嗎？ | `research/` |
| 這是 Agent 設定嗎？ | `agents/` |
| 這是工作室 / 專案空間嗎？ | `rooms/` |
| 這是升級候選嗎？ | `upgrade-bay/` |
| 這是歷史事件嗎？ | `chronicle/` |
| 這是 Prompt 的核心 DNA 嗎？ | `prompt-dna/` |
| 這是 UI 與 Engine 中間的工作解說層嗎？ | `architecture/narrator-layer.md` |

如果只是半成品或一次性輸出，先留在 Workshop，不急著進正式庫。

────────────────
## 🦞 One-line Rule

Cloudhaven 不是資料夾集合，

而是一座讓工具、能力、方法、技能、記憶與 Agent 各自有家的母艦城市。
