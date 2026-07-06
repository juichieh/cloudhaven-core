# Cloudhaven Museum V1 — Construction Specification

## 1. Project Status

Cloudhaven Museum V1 是正在開發中的 Workspace，施工位置為：

```text
rooms/cloudhaven-museum/
```

目前不屬於正式知識庫，也不是 Library。等 Museum 的館藏結構與策展方式成熟後，再評估將正式館藏移入 Library。

V1 的主題是：

> Travel Immersion Museum

Phase 1 的 Museum 首頁方向已確認，首頁架構鎖定，不再重新設計。

目前進入 Phase 2：Florence Wing。此階段先完成資訊架構與視覺 Wireframe；確認後才開始實作 HTML、CSS 或 JavaScript。

## 2. Museum Positioning

Cloudhaven Museum 是一座可以慢慢收藏世界知識的數位博物館。

它不是：

- 旅遊網站
- 攻略
- 部落格
- Top 10 景點列表

核心體驗是：

> 使用者第一次打開網站時，感覺像走進一間博物館。

Museum 不是只告訴使用者去哪裡，而是讓使用者在抵達以前先認識一個地方；旅行結束後，再把自己的故事放回展館，讓館藏多一段親身驗證的記憶。

## 3. V1 Scope

V1 只涵蓋：

```text
Cloudhaven Museum
└── Italy Wing
    └── Florence
        ├── Duomo di Firenze
        ├── Uffizi Gallery
        ├── Ponte Vecchio
        ├── Piazza della Signoria
        ├── Lampredotto
```

V1 是不需要後端的靜態網站，使用 HTML、CSS 與少量 JavaScript，可直接部署到 GitHub Pages。

V1 不包含登入、會員、後台、資料庫、API、搜尋、留言、收藏或 CMS。

## 4. Information Architecture

V1 採單頁式館舍動線：

```text
Museum Lobby
↓
Today's Exhibition
↓
Country Wings
↓
Italy Wing
↓
Florence Map
↓
Exhibits
```

導覽使用 HTML Anchor 與平滑捲動，不重新整理，也不開啟新的館藏頁面。

Italy Wing 入口直接抵達 Florence Map。使用者從首頁前往一般展品最多需要兩次點擊：

1. 點擊 Italy Wing。
2. 點擊 Florence Map 上的展品標記。

Today's Exhibition 可直接連到當日展品，只需一次點擊。

Spain 與 Portugal 在 V1 只作為尚未開館的 Future Wing 標示，不設置無內容的假入口。

## 5. Phase 1 Homepage Wireframe

```text
[安靜的固定導覽]
Cloudhaven Museum                         前往 Florence ↓

┌──────────────────────────────────────────────────────┐
│                                                      │
│                CLOUDHAVEN MUSEUM                     │
│          Every Collection Tells a Story.             │
│                                                      │
│              [滿版館藏攝影主視覺]                     │
│                    進入展館 ↓                         │
└──────────────────────────────────────────────────────┘

                       大幅留白

今日展品
┌──────────────────────────────────────────────────────┐
│ [一張主角級照片]               Duomo di Firenze      │
│                                佛羅倫斯主教座堂       │
│                                查看展品 →             │
└──────────────────────────────────────────────────────┘

國家館翼
從一個地方，開始認識一個世界。

┌─────────────────── Italy ────────────────────────────┐
│ [Florence 沉浸式橫幅影像]                            │
│ Florence                                             │
│ 佛羅倫斯 · 5 件展品                     進入館翼 →    │
└──────────────────────────────────────────────────────┘

Spain · 未來館翼
Portugal · 未來館翼

[Museum Footer]
```

## 6. Museum Design Language

Phase 1 確認的視覺方向正式成為 Cloudhaven Museum Design Language。所有館翼、地圖與展品都必須延續「安靜的數位展館」，不得另外建立一套風格：

- 骨白色牆面
- 炭黑色文字
- 石灰灰分隔線
- 少量文藝復興赭紅作為導覽指示色
- 高對比襯線字用於館名、地名與展品主標
- 乾淨無襯線字用於介面、繁中副標與說明
- 大片留白、大圖、大字、低資訊密度
- 以開放式版面與寬幅區帶取代重複卡片網格
- 圖像接近館藏攝影，不採高飽和旅遊廣告風格
- 僅使用淡入、極輕微圖片推近與 Anchor 平滑捲動
- 支援 `prefers-reduced-motion`

Florence Wing 應像從 Museum Lobby 走進第一間實體展館：空間變得更聚焦，但不增加更多介面裝飾。

## 7. Naming Convention

### 7.1 Core Principle

介面語言以繁體中文為主。

地名、城市、景點、食物、酒名、咖啡名，以及其他旅行現場會使用的名稱，保留英文或當地官方名稱。繁體中文作為說明或副標，不完全取代原名。

原則是：

> 讀起來舒服，但到現場也找得到。

### 7.2 Display Hierarchy

內容名稱採雙層標示：

```text
Primary Name
繁體中文名稱或說明
```

- `Primary Name`：英文或當地官方名稱，是現場辨識、導航與查找的主要依據。
- 繁中副標：協助理解與閱讀，不取代原名。
- `Cloudhaven Museum`：視為正式館名，保留英文。
- 導覽、按鈕、段落標題與策展說明：以繁體中文為主。

### 7.3 Examples

城市：

```text
Florence
佛羅倫斯
```

展品：

```text
Duomo di Firenze
佛羅倫斯主教座堂
```

```text
Ponte Vecchio
老橋
```

```text
Uffizi Gallery
烏菲茲美術館
```

食物：

```text
Lampredotto
佛羅倫斯牛肚包
```

### 7.4 Component Rules

展品標題：

```text
主標：Duomo di Firenze
副標：佛羅倫斯主教座堂
```

Country Wing 或 City Card：

```text
Florence
佛羅倫斯
```

介面文字範例：

```text
Today's Exhibition → 今日展品
Country Wings       → 國家館翼
View Exhibit        → 查看展品
Enter the Wing      → 進入館翼
Future Wing         → 未來館翼
Visit Florence      → 前往 Florence
```

介面中的原名不強制翻譯。例如 `前往 Florence` 比 `前往佛羅倫斯` 更能延續旅行現場的辨識方式。

### 7.5 Maps and Wayfinding

Google Maps 連結、搜尋字串、地圖標記的可見主名與無障礙標籤，優先使用英文或當地官方名稱。

```text
Map marker: Duomo di Firenze
Secondary label: 佛羅倫斯主教座堂
Google Maps query: Duomo di Firenze, Firenze, Italy
```

若官方名稱與常用英文名稱不同，優先採用 Google Maps 當地條目可辨識的名稱，並在繁中說明中補充別名。不得只用中文譯名建立地圖查找連結。

## 8. Exhibit Anatomy

每件展品固定包含：

1. Hero Image
2. 英文或當地官方主名
3. 繁中副標
4. 一句介紹
5. 為什麼值得認識
6. 冷知識
7. 如果真的去了
8. 醒目的 Google Maps 連結
9. Cloudhaven Selection
10. Curator Notes（旅行後驗證）

## 9. Responsive Principles

- 手機版仍保留原名在上、繁中副標在下的層級。
- 不把雙語名稱壓縮成同一行，以免地名或展品名難以辨識。
- 任何展品在手機版仍應於兩次點擊內抵達。
- 地圖標記的主名不可因畫面縮小而只剩中文譯名。
- 大圖可改為直向裁切，但不能把介面變成連續的小卡片列表。

## 10. Construction Order

1. Phase 1：完成首頁 Wireframe、確認 Museum Design Language。`Approved`
2. Phase 2：完成 Florence Wing 資訊架構與 Florence Map Wireframe。`In progress`
3. Phase 3：實作首頁與 Florence Wing 基礎 UI。`Ready for UI Review`
4. Phase 4：完成 5 個 Exhibit。
5. Phase 5：調整手機版。
6. 最後才考慮 GitHub Pages 部署。

每一階段若發現更好的資訊架構或 UI/UX 設計，應先提出建議並確認，不為了照表施工而犧牲 Museum 的核心體驗。

## 11. Florence Wing Information Architecture

Florence Wing 是使用者走進 Museum 後看到的第一個正式展館，不是另一個宣傳首頁。

```text
[Museum Header]
Cloudhaven Museum / Italy Wing

↓

[Florence Hero]
Florence
佛羅倫斯
一句展館介紹
滿版 Museum Photography

↓

[Florence Map]
館內導覽
五個可點擊的展品標記

↓

[Exhibit Index]
五件展品的開放式預覽

↓

[Exhibit Detail × 5]
每件展品依固定格式展開

↓

[返回 Florence Map]
```

Florence Hero 只負責建立「進入展館」的情緒與地點辨識。它不放景點清單、數字、評分、行程規劃或多個行動按鈕。

## 12. Florence Map — Museum Navigation

### 12.1 Positioning

Florence Map 是館內導覽，不是 Google Maps，也不是旅遊路線規劃器。

它使用 Florence 的空間記憶建立策展路徑，但不顯示街道、交通、距離、營業時間或精確步行方向。

地圖的任務只有三個：

1. 一眼看見本館有哪五件展品。
2. 理解展品之間的策展關係。
3. 點擊標記後平滑捲動到對應 Exhibit。

### 12.2 Curatorial Route

地圖以一條抽象的 Arno 河水平線作為視覺軸，展品依策展節奏排列，而非宣稱精確地理比例：

```text
                  01
          Duomo di Firenze
          佛羅倫斯主教座堂
                  │
                  │
        02 ───────┴─────── 03
Piazza della Signoria   Uffizi Gallery
領主廣場                烏菲茲美術館
                  │
══════════════ ARNO ══════════════
                  │
                  04
          Ponte Vecchio
          老橋
                                  05
                           Lampredotto
                           佛羅倫斯牛肚包
                           街頭飲食展區
```

這張圖不是可供現場認路的地圖，因此不加入比例尺、指南針、即時定位或路線演算法。

### 12.3 Lampredotto Rule

`Lampredotto` 是食物，不是單一固定地點。Museum Map 將它標示為「街頭飲食展區」，不偽裝成精確地理座標。

未來 Exhibit 內的 Google Maps 區塊可以列出旅行時實際查找的市場、攤位或 Curator 驗證地點，但必須保留個別地點的官方名稱。

### 12.4 Marker Anatomy

每個 Map Marker 固定包含：

```text
01
Duomo di Firenze
佛羅倫斯主教座堂
```

- 兩位數編號建立館藏秩序：`01`–`05`。
- 官方名稱是主要可點擊標題。
- 繁中名稱是次要說明。
- Hover 或 Focus 時只使用赭紅線段、底線或輕微位移，不使用浮動卡片。
- 點擊後以 HTML Anchor 平滑捲動到展品。
- 鍵盤焦點必須清楚可見。
- 減少動態模式改為立即跳轉。

### 12.5 Visual Language

- 地圖使用骨白底，不放進大型圓角卡片。
- 路徑使用細石灰灰線，Active Marker 使用 Museum 赭紅。
- 可使用極淡的建築平面、河流輪廓或館藏編號作為空間提示。
- 不使用彩色地圖圖磚、道路網、Google Maps 樣式 Pin 或 emoji 圖釘。
- 不用五張同尺寸卡片排列展品。
- 地圖周圍保留足夠留白，像站在展館入口閱讀牆面導覽。

### 12.6 Florence Map Wireframe

```text
館內導覽                                      01 — 05
沿著 Florence 的建築、權力、藝術與日常，
選擇一件展品開始參觀。

┌──────────────────────────────────────────────────────┐
│                         01                           │
│                 Duomo di Firenze                    │
│                 佛羅倫斯主教座堂                     │
│                         │                            │
│        02 ──────────────┴────────────── 03           │
│ Piazza della Signoria              Uffizi Gallery   │
│ 領主廣場                            烏菲茲美術館      │
│                         │                            │
│ ════════════════════ ARNO ═════════════════════════ │
│                         │                            │
│                         04                           │
│                   Ponte Vecchio                     │
│                   老橋                               │
│                                           05         │
│                                      Lampredotto     │
│                                      佛羅倫斯牛肚包   │
│                                      街頭飲食展區     │
└──────────────────────────────────────────────────────┘

選擇展品後，頁面平滑移動到下方對應展區。
```

## 13. Florence Exhibit Flow

Florence Map 下方先以開放式 Exhibit Index 預覽五件展品，再進入完整內容。Index 應像展覽目錄，不做成電商式卡片網格。

每件 Exhibit 固定順序：

1. Hero Image
2. 官方名稱（英文或義大利文）
3. 中文名稱
4. 一句介紹
5. 為什麼值得認識
6. 冷知識
7. 如果真的去了
8. Google Maps
9. Cloudhaven Selection
10. Curator Notes（旅行後解鎖）

`Curator Notes` 未解鎖時只顯示安靜的館藏狀態，不使用登入、會員、進度條或遊戲化機制。
