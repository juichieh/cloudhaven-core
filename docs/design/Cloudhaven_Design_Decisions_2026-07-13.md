# Cloudhaven 設計決定（2026-07-13）

- **Status:** Confirmed Design Decisions
- **Date:** 2026-07-13
- **Scope:** 產品定位、核心玩法、UI／UX 與 MVP 邊界

---

## 一、重新定位

Cloudhaven 不再定位為：

> AI Agent Dashboard

也不只是：

> AI Observation Box

新的定位：

> **Living Desktop（生活桌面）**
>
> **AI Living Town（AI 生活小鎮）**

一句話：

> **不是把遊戲搬到網頁，而是把生活搬到桌面。**

---

## 二、核心玩法重新定義

玩家不是控制居民。

玩家可以：

- 蓋房子
- 蓋商店
- 買家具
- 買禮物
- 改善環境

之後由 AI 自己生活。

玩家主要玩法：

> **觀看 AI 生活。**

而不是持續操作居民。

---

## 三、Cloudhaven Core Loop

```text
玩家
↓
建設世界
↓
AI 開始生活
↓
玩家觀看
↓
發現新的需求
↓
再次建設
↓
AI 生活再次改變
```

這不是操作循環，而是生活循環。

---

## 四、觀看正式成為玩法

> **Watching is Gameplay.**

觀看不是等待，觀看本身就是玩法。

方向比例：

- 玩家操作：約 20%
- 玩家觀看：約 80%

此比例是設計方向，不是硬性配額。

---

## 五、AI 接受影響，而不是命令

玩家不直接命令居民：

> 去便利店。

玩家提供的是建議或影響，例如：

> 今天累了可以早點回家。
>
> 今天天氣很好，去公園也不錯。

AI 依自身狀態、偏好與記憶自行判斷。

---

## 六、Cloudhaven UI 哲學

### Scene First

世界優先，Dashboard 次要。

方向比例：

- 世界畫面：約 80%
- UI：約 20%

資訊在需要時展開，不長期佔據主畫面。

---

## 七、資訊三層壽命

正式採用 **Three Lifetime Information**。

### 第一層：常駐資訊

例如：

- 時間
- 目前地點
- 聚焦居民

### 第二層：短暫 Bubble

例如：

- 想喝咖啡
- 今天好熱
- 去池塘

### 第三層：生活痕跡

例如：

- 第一次去公園
- 開始喜歡咖啡
- 今天在池塘待了很久

---

## 八、Bubble 分類

Bubble 不只是聊天。

正式採用四種類型：

- **Need**
- **Attention**
- **Intent**
- **Reaction**

每個 Bubble 一次只表達一件事。

---

## 九、狀態展示方式

採用開羅式的視覺表達，不以 Dashboard 數字為主要呈現。

例如：

- ❤️ 表示喜歡，而不是「好感 +5」
- 😴 表示疲勞，而不是「疲勞 72%」
- 🍔 表示飢餓，而不是「飽食 31%」

狀態透過以下方式共同表達：

- 動畫
- Bubble
- Icon

---

## 十、Dashboard 修改方向

目前 Demo 的固定資訊應逐步改成浮動資訊。

例如：

- ❤️❤️❤️
- ☕
- 🍔
- 😴

需要時才展開完整資訊。

---

## 十一、Motion Budget

只有重要的東西持續動。

### 可以持續動

- 居民
- Bubble
- 目前互動物件
- 少量環境元素

### 應保持安靜

- HUD
- 建築
- 背景
- 非焦點物件

---

## 十二、Camera 原則

Camera 保持穩定，不持續追蹤居民。

居民離開畫面時，使用 **Off-screen Signal** 提示。

玩家自行決定是否前往查看。

---

## 十三、Cloudhaven MVP

第一版只需要：

- 鉗鉗
- 房子
- 便利店
- 公園
- 池塘

不加入大型經營系統。

---

## 十四、Cloudhaven 長期方向

Cloudhaven 不再只是：

- 母艦
- Dashboard
- 傳統遊戲

它是一座會自己生活的小鎮。

長期方向融合：

- Living Desktop
- AI Living Town
- Observation Box
- AI Desktop

---

## 十五、UI 研究方向

新增研究專案：

> **Kairosoft UX Pattern Library**

研究 UX，而不是研究像素風格。

重點：

- Bubble
- Camera
- NPC Animation
- Motion Budget
- State Expression
- Information Lifetime

---

## 十六、Design Principles

```text
資訊不是主角。
生活才是主角。
```

```text
Watching is Gameplay.
```

```text
玩家不是管理居民。
玩家是在照顧居民生活。
```

---

## 十七、Backlog

### UI

- 浮動 Bubble
- Context Card
- Off-screen Signal
- 世界畫面占比
- Camera

### AI

- 一句話影響 AI
- AI 自主決策
- 習慣形成
- 生活痕跡

### World

- 黑洞報社
- 便利店
- 鄰居
- 公園
- 小池塘

---

## 本輪核心結論

今天不是新增大量功能，而是 Cloudhaven 第一次形成完整的設計哲學。

未來所有功能與介面決定，都應先回答：

> **這是否讓生活更像主角，而不是讓資訊重新搶回主角位置？**
