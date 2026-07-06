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