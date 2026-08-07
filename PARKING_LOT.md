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

## Last Updated

2026-08-08
