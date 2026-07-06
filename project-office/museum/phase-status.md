# 🏛️ Cloudhaven Museum — Phase Status

Project：Cloudhaven Museum

Location：`rooms/cloudhaven-museum/`

Project Office：`project-office/museum/`

────────────

## Current Status

```text
✅ Phase 1 — Museum Lobby
✅ Phase 2 — Florence Wing
✅ Phase 3 — HTML Prototype
✅ Phase 4 — Static Preview Ready
⚪ Phase 5 — Curator System
```

────────────

## Phase 1 — Museum Lobby

Status：✅ Approved

目標：確認 Cloudhaven Museum 的首頁大廳、設計語言與整體品牌感。

Review 結論：

- Museum 感成立
- 不像旅遊網站
- Italy 作為唯一正式開館入口
- Spain / Portugal 作為未來館翼標記
- 設計語言可作為後續基準

────────────

## Phase 2 — Florence Wing

Status：✅ Approved

目標：確認 Florence Wing 的資訊架構、Museum Navigation 與第一批展品導覽方式。

Review 結論：

- Museum Navigation 成功建立策展路徑
- 不使用 Google Maps 作為首頁主體
- 地圖是導覽圖，不是街道地圖
- 使用者會有想繼續逛下一件展品的感覺

────────────

## Phase 3 — HTML Prototype

Status：✅ Approved

目標：將已確認的 Museum Design Language 轉成可瀏覽的 HTML Prototype。

原則：

- 不新增功能
- 不改變設計語言
- 忠實落地目前已確認的 Wireframe
- 優先追求第一次打開時真的像走進博物館

────────────

## Phase 4 — GitHub Pages Preview

Status：✅ Preview Ready

目標：讓 Cloudhaven Museum 可以透過 GitHub Pages 預覽。

施工方式：

- GitHub Actions 只發布 `rooms/cloudhaven-museum/website/`
- 保留靜態 HTML、CSS 與少量 JavaScript
- 不新增 Museum 功能或重做 UI

目前結果：

- 等效靜態 Preview 已可使用並完成桌機、手機與 Anchor 驗收
- GitHub Pages workflow 已加入
- GitHub Pages 正式網址仍需 Repository Admin 在 Settings → Pages 將 Source 設為 GitHub Actions

────────────

## Phase 5 — Curator System

Status：⚪ Not Started

目標：讓館長與 Agent 可以更穩定地新增、驗證與沉澱展品。
