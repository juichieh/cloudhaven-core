# 🧭 Cloudhaven Museum — Decision Log

這裡保存 Cloudhaven Museum 重要設計與架構決策。

每一條 Decision 都應該說明：

- 做了什麼決定
- 為什麼這樣決定
- 狀態是否接受

────────────

## Decision #001 — Museum is not a travel website

Date：2026-07-06

Status：✅ Accepted

Decision：

Cloudhaven Museum 不做成旅遊網站、攻略、部落格或 Top10 景點列表。

Reason：

Museum 的核心價值不是告訴使用者去哪裡，而是讓使用者在真正抵達之前，就已經開始認識那個地方。

────────────

## Decision #002 — Italy is the only active V1 Wing

Date：2026-07-06

Status：✅ Accepted

Decision：

V1 首頁不放 Italy、Spain、Portugal 三張等權重卡片。

Italy 是唯一正式開館的入口。

Spain / Portugal 只作為低調的未來館翼標記。

Reason：

避免製造內容很多的假象，讓 V1 專注在真正可用的 Italy / Florence。

────────────

## Decision #003 — Use Museum Navigation, not Google Maps, as primary navigation

Date：2026-07-06

Status：✅ Accepted

Decision：

Florence Wing 使用 Museum Navigation 作為主要導覽。

Google Maps 放在每個展品內作為實用連結。

Reason：

首頁與展館導覽應該提供策展路徑，而不是讓使用者進入查路模式。

Museum Navigation 讓使用者像逛展，不像查地圖。

────────────

## Decision #004 — Keep original names for on-site recognition

Date：2026-07-06

Status：✅ Accepted

Decision：

地名、景點、食物、酒名、咖啡名等旅行現場會用到的名稱，保留英文或當地官方名稱。

中文作為副標與說明。

Reason：

使用者實際旅行時需要在 Google Maps、菜單、路標與現場標示中辨識原名。

Museum 要兼顧閱讀體驗與旅行實用性。

────────────

## Decision #005 — Design before implementation

Date：2026-07-06

Status：✅ Accepted

Decision：

先完成 Wireframe 與 Design Review，再進入 HTML Prototype。

Reason：

避免一開始就寫程式，之後因設計方向不對而大幅重工。

越早修設計，成本越低。