# PARKING LOT

## Purpose

這裡暫存值得記住、但現在不應打斷主線的想法。

它可以包含：

- 突然冒出的腦洞
- 之後想測的小實驗
- 需要回頭修改的地方
- 尚未成熟的方向
- 暫時擱置但不想忘記的問題

## Rules

- 放進來不代表已批准施工。
- 放進來不代表一定會做。
- 不要因為新增項目而中斷目前已批准的工作。
- 成熟後再移入 Proposal、Backlog、Upgrade Bay、Project Office 或正式文件。
- 已處理、否決或失去價值的項目應移除，避免無限堆積。
- 在內容多到難以管理之前，不拆成 Workshop 或其他更細分類。

## Items

### Guidance Layer / Experience Distillation

**Status:** Inspiration / Needs validation

**Idea**

研究在 Cloudhaven / MotherShip 加入一層獨立的 **Guidance（指引）**。

它不是單純 Knowledge，也不是固定 Function / Workflow，而是：

> AI 從完成過的任務中，提煉出「下次遇到這類事情，應該怎麼判斷、怎麼做」的可重用工作原則。

可視為：

- 智慧 SOP
- Adaptive SOP
- Learned Workflow Guidance
- Experience Distillation

**核心分層**

- **Knowledge**：知道什麼（durable facts）
- **Guidance**：應該怎麼判斷、怎麼做（reusable decision rules / playbooks）
- **Function / Skill**：可以怎麼執行（repeatable executable capability）
- **Action**：這一次實際做了什麼（task instance）
- **Transient State**：價格、庫存、短期狀態等一次性資訊，不應沉澱為長期 Guidance

**可能流程**

```text
Task completed
↓
Review trajectory / actions
↓
Experience Distillation
↓
Durable fact → Knowledge
Reusable decision rule → Guidance
Repeatable execution → Function / Skill
One-time state → Do not persist
```

**為什麼值得研究**

1. **壓縮上下文**
   - 不必每次重新帶入大量歷史 Prompt / README / 對話。
   - 可把長期累積的做事原則濃縮成短 Guidance。

2. **跨工具、跨模型保持一致**
   - Function / API 可能更換，但「先驗證來源、再比較、最後做決策」這類 Guidance 可以長期保留。

3. **把經驗與知識分開**
   - Knowledge 是事實。
   - Guidance 是從實務中累積的判斷方法與工作哲學。

4. **智慧 SOP 商用潛力**
   - 採購、旅遊預算、供應商評估、研究、行政等重複但需要判斷的流程很適合。

5. **可延伸至 Cloudhaven Resident**
   - Operational Guidance：怎麼工作。
   - Resident Guidance：居民怎麼做決策、如何維持生活感與行為一致性。

**Cloudhaven 既有概念中可能屬於 Guidance 的例子**

- 玩家主要觀看，不是控制生活。
- 先做 MVP，再逐步演化。
- 旅行研究最後要給判斷，不只堆資料。
- 已完成研究不要無限重做。
- 海外購買不能只看標價，要算落地成本與退貨風險。
- 穩定資訊可沉澱；價格、庫存等快照不應當作長期知識。

**關鍵研究問題**

- Guidance 應何時自動生成？
- 是否每次任務結束都跑 Reflection / Distillation？
- 如何避免把錯誤經驗固化成 Guidance？
- Guidance 是否需要來源任務、建立時間、使用次數、最後驗證時間與版本？
- 新經驗與舊 Guidance 衝突時，應修改、合併還是保留多版本？
- 載入 Guidance 是否能實際降低上下文、Token、時間與成本？
- Guidance 與現有 Memory Engine、Resident Note、Skill、Workflow 的界線怎麼劃？

**暫定原則**

目前只作為高價值靈感保存，不直接加入正式 Memory Engine 或 Workflow。
先觀察、研究，再決定是否升級為正式 Proposal。

---

### Life OS UX：Dashboard × Canvas × Magazine

**Status:** Inspiration / Parking Lot / Do not build yet

**起源**

從 `Plan My Day` 與生活早報 UX 討論中發現：過去把許多「生活狀態資訊」做成早報／雜誌，可能是容器選錯了。

核心洞察：

> **Dashboard 看現在；Canvas 做事情；Magazine 逛世界。**

三者不是單純不同視覺風格，而是對應不同的資訊生命週期與使用者意圖。

#### 1. Dashboard — What matters now?

適合需要快速掌握、持續更新的生活狀態：

- 今日 Calendar / 行程
- Weather
- 下一個事件與建議出發時間
- 待辦 / 提醒
- 交通或延誤警告
- 財經／持倉等狀態型資訊
- Plan My Day 今日摘要

核心 UX：

- 10 秒內看懂今天最重要的事情
- 少讀、少找、少想
- 不把生活資訊包成每天必須閱讀的長文章
- Dashboard 可作為未來 Life OS Home

#### 2. Canvas — Let's deal with it

適合需要規劃、決策、修改與執行的單一任務或一天：

- Plan My Day
- Travel Day Plan
- 路線規劃
- 行程重排
- 研究／決策任務

`Plan My Day` Canvas 候選 UX：

- Event Card → Route / Map → Event Card
- Fixed / Flexible 狀態
- Weather Warning
- Route-aware Suggestions
- Current / Next 狀態
- Approve / Change / Skip / Replan
- 行程發生變化時局部更新，而不是整張重新生成

Responsive 概念：

**手機：Vertical Today Timeline**

時間卡片由上往下滑，移動區段穿插目的地地圖／交通資訊。

**平板：Horizontal Journey Board**

行程以小卡片按時間左右排列，例如：

```text
Hotel → Route → Louvre → Walk → Lunch → Café → Dinner
```

點擊單站可展開地址、預約、廁所、休息、美食、伴手禮、建議離開時間等資訊。

#### 3. Magazine / Show — Explore the world

適合探索、閱讀、驚喜與收藏，而不是立即行動的內容。

目前最適合的案例：

- AI Zoo
- AI 怪東西
- 每週新物種
- WTF of the Week
- 專題
- 排行榜
- 圖鑑候選

AI Zoo 可繼續採用 Weekly Magazine / Show 形式，因為使用者本來就是來「逛」與「發現」。

#### Plan My Day × Life OS 關係

可能的未來資訊架構：

```text
Life OS
│
├── Dashboard
│   └── What matters now?
│
├── Canvas
│   └── Plan / Decide / Execute
│
└── Magazine / Show
    └── Explore / Discover / Collect
```

Dashboard 顯示今天的狀態與入口；使用者點擊某個事件／任務後進入 Canvas 實際處理；想探索內容時進 Magazine / Show。

#### 為什麼值得保留

這個分層可能同時解決：

- 生活早報過長、閱讀負擔高
- AI 生活秘書缺少真正的 Home UI
- Plan My Day 的視覺承載方式
- 行動型資訊與探索型內容混在一起
- 未來 Travel Mode 的 Today UI

它也符合 Life OS 的核心 KPI：

> **今天有多少事情，使用者根本不用自己想？**

**暫定原則**

先保存，不施工。
優先利用 Unify 等現成產品驗證 Canvas / Dashboard 能力，再決定是否值得做成 Cloudhaven / MotherShip 的正式 Life OS UI 或獨立小 App。

## Last Updated

2026-08-09
