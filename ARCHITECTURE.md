# 🏛️ Cloudhaven City Map

Cloudhaven 不是單純的 GitHub Repo，也不是只有 Markdown 的知識庫。

它是一座給人類與 Agent 一起工作的母艦城市。

這份 City Map 用來說明：

- 每個模組像城市裡的哪一區
- 每個資料夾負責什麼
- 什麼內容該去哪裡
- 哪些模組目前已啟用
- 哪些模組是預留擴建區
- 如何避免 `skills/`、`frameworks/`、`knowledge/` 互相重複

────────────────
## 🧭 Module Map

```text
cloudhaven-core/
├── ARCHITECTURE.md              # 🏛️ 城市入口地圖 / City Map
├── architecture/                # 🏗️ 母艦結構與模組關係
├── chronicle/                   # 📜 母艦編年史
├── knowledge/                   # 🧭 長期知識地圖
├── skills/                      # 🛠️ 可重用流程與操作套路
├── agents/                      # 🧑‍🚀 Agent / 居民設定
├── agent-lounge/                # ☕ Agent 待機與回航休息區
├── rooms/                       # 🏢 工作室 / Workspace
├── prompt-dna/                  # 🧬 Prompt 核心 DNA
├── research/                    # 🔍 研究筆記與拆解觀察
├── upgrade-bay/                 # 🚧 升級提案與待評估零件
└── library/                     # 📚 正式收藏館
    ├── ai-tools/                # 🤖 具體 AI 工具
    ├── zoo/                     # 🦁 AI 能力 / 新物種
    └── frameworks/              # 🧠 方法論與框架
```

注意：

不是每個模組都需要立刻塞滿內容。

City Map 可以先存在，房間可以慢慢啟用。

────────────────
## 🏗️ architecture/

保存：

> Cloudhaven 如何運作與擴張？

這裡放母艦結構、模組關係、資料流、Room 分工、Agent 進出方式與未來擴建原則。

它像城市裡的市政廳 / 工務局。

不要放：

- 單一工具卡
- 單日研究筆記
- Prompt 原文
- Agent 個性設定

────────────────
## 📜 chronicle/

保存：

> Cloudhaven 發生過什麼重要事件？

這裡記錄母艦編年史，例如：

- 重要里程碑
- 第一次成功
- 事故
- 笑點
- 系統演化
- 值得紀念的轉折

它不是研究筆記，也不是任務紀錄。

它像 Cloudhaven 的歷史博物館。

────────────────
## 🧭 knowledge/

保存：

> 長期值得保留的認知與索引是什麼？

這裡放長期知識地圖、分類、索引與穩定認知。

它不是卡片收藏館，也不是操作技能庫。

它回答的是：

- 我們已經知道什麼？
- 哪些認知值得長期保留？
- 哪些主題需要索引？
- 哪些分類已經穩定？

────────────────
## 🛠️ skills/

保存：

> 已經驗證有效、可以重複使用的操作套路是什麼？

`skills/` 是武館，不是圖書館。

它保存的是可執行的手感：

- Debug checklist
- 操作流程
- 排查套路
- 任務施工法
- 可重用步驟
- 已驗證有效的工作節奏

### Skills vs Frameworks

```text
Framework = 方法論 / 思考框架 / 為什麼這樣做
Skill     = 可執行套路 / 怎麼一步一步做
```

例子：

```text
Show Director Framework
→ 如何把資訊導演成一集節目

Prompt Drift Check Skill
→ 每次修改早報前，照哪些步驟檢查是否走味
```

### Skills vs Knowledge

```text
Knowledge = 穩定認知與索引
Skill     = 可重複操作的流程
```

如果內容不能被拿來執行，就不要放進 `skills/`。

────────────────
## 🧑‍🚀 agents/

保存：

> Cloudhaven 裡有哪些居民 / Agent？

這裡放 Agent 設定、角色卡、個性、職掌與協作邊界。

例子：

- 鉗鉗
- 小風
- 澄丸
- 小查
- 未來其他 Agent

它不是 Agent 的日記，也不是任務輸出。

────────────────
## ☕ agent-lounge/

保存：

> Agent 待機、喝咖啡、等待派工與回航休息的狀態。

這裡可以放輕量狀態、待命設定、回航說明與休息區規則。

它是角色與工作之間的緩衝區。

────────────────
## 🏢 rooms/

保存：

> 各種工作室與 Workspace。

Room 是專案空間，不是知識分類。

可能包含：

- travel/
- game/
- store/
- finance/
- ai-research/
- briefing-room/

Room 裡可以引用 Library、Skills、Agents，但不應該把全域知識重複複製進去。

────────────────
## 🧬 prompt-dna/

保存：

> Prompt 為什麼成功？

Prompt DNA 保存的是語氣、邏輯、節奏、世界觀、作戰手感與不能丟的核心句。

它不是完整 Prompt 備份。

例子：

```text
prompt-dna/show-director-dna.md
```

────────────────
## 🔍 research/

保存：

> 研究過程、拆解觀察與結論。

Research 是研究院。

它可以保留：

- 查過什麼
- 怎麼判斷
- 為什麼採用 / 不採用
- 觀察過程
- 暫時結論

如果研究結果已經穩定，之後可以沉澱到 `knowledge/`、`library/` 或 `skills/`。

────────────────
## 🚧 upgrade-bay/

保存：

> 未來可能加裝什麼？

這裡放升級提案、觀察中新零件、待評估工具、未來加裝計畫。

它不是正式採用區。

只有通過評估後，才會進入 Library、Skills、Architecture 或 Rooms。

────────────────
## 📚 library/

保存：

> 已定稿、值得收藏的正式內容。

Library 是圖書館，不是整艘母艦。

目前包含：

```text
library/
├── ai-tools/
├── zoo/
└── frameworks/
```

### 🤖 ai-tools/

回答：

> 這是什麼工具？

收藏具體工具、產品、服務、開源專案。

### 🦁 zoo/

回答：

> AI 長出了什麼能力？

收藏能力、功能大綱、新物種。

### 🧠 frameworks/

回答：

> 這套方法怎麼運作？

收藏方法論與可重複使用的思考框架。

────────────────
## 🧩 防重複判斷表

新增內容前，先用這張表判斷：

| 問題 | 放哪裡 |
|---|---|
| 這是具體工具嗎？ | `library/ai-tools/` |
| 這是 AI 能力 / 新物種嗎？ | `library/zoo/` |
| 這是方法論 / 思考框架嗎？ | `library/frameworks/` |
| 這是可執行的操作套路嗎？ | `skills/` |
| 這是長期認知 / 索引嗎？ | `knowledge/` |
| 這是研究過程嗎？ | `research/` |
| 這是 Agent 設定嗎？ | `agents/` |
| 這是專案工作室嗎？ | `rooms/` |
| 這是升級候選嗎？ | `upgrade-bay/` |
| 這是歷史事件嗎？ | `chronicle/` |
| 這是 Prompt 的靈魂嗎？ | `prompt-dna/` |
| 這只是單日輸出或半成品嗎？ | 暫時留在 Workshop，不進正式庫 |

────────────────
## 🔁 成熟沉澱流程

很多內容一開始不會直接進 Library。

建議流程：

```text
Workshop / 聊天 / 草稿
↓
research/ 或 upgrade-bay/
↓
knowledge/ 或 skills/
↓
library/ 或 architecture/
```

例子：

```text
看到一個新工具
↓
research/ 先觀察
↓
library/ai-tools/ 收藏工具
↓
library/zoo/ 如果代表新能力，再建立能力卡
```

────────────────
## 🔗 連結規則

Cloudhaven 優先使用相對連結。

### Tool → Zoo

```markdown
[Keyboard Agent](../zoo/keyboard-agent.md)
```

### Zoo → Tool

```markdown
[Acti](../ai-tools/acti.md)
```

### Framework → Prompt DNA

```markdown
[Show Director DNA](../../prompt-dna/show-director-dna.md)
```

### Prompt DNA → Framework

```markdown
[Show Director Framework V1](../library/frameworks/show-director-framework-v1.md)
```

────────────────
## 🌱 Maturity / Evolution State

目前 maturity 最適合放在 Zoo 能力卡，用來表示能力物種的演化狀態。

```yaml
maturity: Seed 🌱
```

可用等級：

- Seed 🌱
- Emerging 🌿
- Growing 🌳
- Mature 🌲

注意：

- `rarity` / 收藏等級 = 值不值得收藏
- `maturity` / 演化狀態 = 能力成熟到哪裡

────────────────
## 🦞 龍蝦一句話

「Cloudhaven 不是資料夾集合，是一座讓工具、能力、方法、技能、記憶與 Agent 各自有家的母艦城市。」
