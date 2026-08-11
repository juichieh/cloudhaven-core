# 🧰 MotherShip AI Toolbox

Status: 🟡 Experiment / Parked

## Core Idea

AI Toolbox 不是 GitHub 工具收藏庫。

真正要測的是：

> 不告訴 Agent 該使用哪個 integration，而是直接給它一整箱可用能力，觀察它能不能自己判斷「該用什麼、什麼時候不用、什麼時候值得花錢」。

也就是從單純的 **Tool Calling** 往：

**Tool Selection + Resource Management + Budget Judgment**

前進。

## Toolbox

第一版可以包含：

- Calendar
- Email
- Research
- Reminders
- Knowledge
- Tasks
- 其他已可用 integrations / tools

使用者只提供目標，不指定工具。

Agent 自己判斷：

- 哪個工具最適合
- 是否需要工具
- 什麼時候直接回答即可
- 是否值得啟動昂貴 Research
- 是否能用較便宜的方法先解決
- 多個工具之間如何組合

## Key Questions

### 1. Tool Selection

Agent 是否會自然選對工具，而不是看到工具就全部呼叫？

### 2. Tool Restraint

Agent 是否知道「不用工具」也是一個正確選擇？

### 3. Research Judgment

昂貴 Research 什麼時候真的值得做？

Agent 是否能區分：

- 簡單查詢
- 普通搜尋
- 深度研究

### 4. Resource Management

當不同工具有不同成本、速度與額度時，Agent 是否能自己做資源配置？

### 5. Budget Management

最終希望加入有限 Credit Budget，例如：

> 你今天只有固定 credits，自己決定怎麼花。

觀察 Agent 是否會：

- 為重要任務保留額度
- 避免低價值的昂貴 Research
- 優先使用免費／低成本工具
- 根據任務價值調整資源投入
- 在額度不足時主動降級策略

## Original T-W1N Experiment

原本下一個 Unify / T-W1N 測試就是 AI Toolbox。

計畫是不告訴 T-W1N 該用哪個 integration，而是提供 Calendar、Email、Research、Reminders、Knowledge、Tasks 等工具，觀察它是否能自行管理工具與資源。

但在正式進入「Budget Management」測試前，Agent 先把實驗額度直接燒光了。😂

因此這次事故本身反而成為一個非常好的測試案例：

**如果 Agent 連『何時值得花資源』都無法判斷，那麼 Tool Calling 做得再強，也不等於真正的 Agent Autonomy。**

## Future Extension

未來如果成熟，可以再接：

Toolbox
→ Resource Manager
→ Budget Policy
→ Judge / Post-run Evaluation

讓 Agent 不只是會用工具，而是能對自己的工具選擇與成本負責。

## Separate Concept: Tool Library / Capability Library

GitHub → 找 Repository → 閱讀文件 → 整理 → NotebookLM → 安裝／測試，這是另一條概念。

它應稱為：

**Tool Library / Capability Library**

用途是回答：

> 「我們有哪些工具／還可以取得哪些能力？」

而 AI Toolbox 回答的是：

> 「現在面前有這些工具，我該怎麼選、怎麼用、值得花多少資源？」

兩者未來可以串接，但目前不要混在一起。

## Parked Product Idea: Premium Travel Decision Toolbox

另有一條獨立產品靈感：只服務 4～5 星／高級旅遊的 AI 決策工具箱。

完整筆記：`MotherShip/Ideas/Premium Travel Decision Toolbox.md`

## Current Focus Rule

目前不擴張 AI Toolbox 實作。

時間優先順序：

1. 🧓 珺的月費 NT$700 生存戰
2. ✈️ 旅遊篩選
3. 🏡 中間持續推進鉗鉗生活觀察箱

AI Toolbox 與 Premium Travel Toolbox 都先保存，不同時開新戰場。🤣
