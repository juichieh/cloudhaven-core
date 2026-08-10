# 🏗️ Cloudhaven Project Office

Project Office 是 Cloudhaven 的工務局 / 專案管理中心。

它不是給遊客看的展館，也不是正式知識庫，而是給館長、Agent 與施工者一起管理建案進度的地方。

Project Office 負責保存：

- 專案施工進度
- Phase 狀態
- Review Notes
- Decision Log
- Roadmap
- Milestones
- Release / 驗收紀錄

────────────

## 🧭 定位

```text
Museum 收藏世界。
Library 收藏知識。
Zoo 培養 AI。
Arena 幫助決策。
Project Office 則負責讓所有建築都能有秩序地誕生。
```

Project Office 不取代 `rooms/`。

- `rooms/` 是實際施工與工作空間。
- `project-office/` 是專案管理、簽核與施工紀錄。

────────────

## 📂 Structure

```text
project-office/
├── README.md
├── roadmap/
│   ├── roadmap.md
│   └── milestones.md
├── museum/
│   ├── construction-log.md
│   ├── phase-status.md
│   ├── review-notes.md
│   └── decisions.md
├── zoo/
├── library/
├── arena/
└── templates/
    ├── phase-template.md
    ├── review-template.md
    └── decision-template.md
```

────────────

## 🏛️ Project Rule

每一個 Cloudhaven 建築都應該有：

- Phase Status
- Construction Log
- Review Notes
- Decision Log

這些檔案不一定一開始就很完整，但要讓未來可以回頭看見：

> 這棟建築是怎麼被決定、怎麼被設計、怎麼被蓋出來的。

────────────

## 🏗️ Construction Principles

### 1. Progress Sync｜進度同步

重要人工驗收、Phase 切換或下一刀施工前，先確認目前進度已同步。

至少檢查：

```text
Chat / 最新決定
GitHub Remote
Local Checkout
CHECKPOINT / Progress 文件
```

若彼此不一致：

> 先同步，再施工。

不要讓舊 CHECKPOINT、舊 README 或舊本機狀態成為下一刀的錯誤施工邊界。

人工驗收通過後，應優先更新對下一輪具有導航或限制作用的進度文件，再派下一張工單。

### 2. Preservation Boundary｜保留邊界

當任務包含「沿用、續建、保留既有成果、不要重做」時，施工前必須先確認：

> 到底要保留哪一個層級？

必須區分：

**必須保留**

- 已確認的設計決定
- 已驗收能力與行為
- Data / State / Contract
- 不得破壞的 Regression

**可以替換**

- Implementation
- DOM / Component Structure
- Layout / Coordinates
- Placeholder
- Presentation
- 只為舊實作存在、但不屬於產品 Contract 的測試

核心原則：

> 保留已驗收能力 ≠ 保留目前實作方式。

如果新目標與舊實作衝突：

> 優先保存能力、資料與 Contract；允許替換造成阻礙的實作層。

不要因為某項能力已驗收，就自動假設實現該能力的 UI、DOM、座標、視覺結構或暫時架構也已被凍結。

### 3. Primary Structure Check｜主結構確認

當施工涉及架構、空間構成、UI 結構或 Presentation 改變時，開工前先用一句話回答：

> 本次新目標的 Primary Structure 是什麼？

並再確認：

> 現有實作中，哪些只是上一階段的手段，而不是必須永久保留的產品結構？

如果新目標要求改變整體構成，但施工方案只是重新排列、包裝或裝飾舊結構，應先停止並重新確認 Preservation Boundary，不要直接進入增量修改。

### 4. Construction Order｜施工順序

```text
讀 Repository / Design Decisions
↓
Progress Sync Check
↓
讀最新 CHECKPOINT
↓
確認 Preservation Boundary
↓
確認 Primary Structure
↓
施工
↓
測試
↓
人工驗收
↓
更新 CHECKPOINT / Progress
↓
下一刀
```

一句話：

> 先確認現在蓋到哪，再確認什麼真的不能拆，最後才開工。

────────────

## ✅ Status Labels

```text
⚪ Not Started
🔨 In Progress
👀 Review
✅ Approved
🚀 Released
🧊 Paused
```

────────────

## 🦞 One-line Rule

Project Office 不負責蓋展館本身，它負責讓 Cloudhaven 不會越蓋越亂。