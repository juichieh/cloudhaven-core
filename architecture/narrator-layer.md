# 🎙 Cloudhaven Narrator Layer

Narrator Layer 是 Cloudhaven 裡負責「工作解說」的中介層。

它不是 Engine。
它不是 Tool。
它也不是單純的 Loading 文案。

它的工作是：

> 把 Agent Engine 的真實工作狀態，翻譯成一般人聽得懂、又符合角色個性的自然語言。

────────────────

## 🧭 放置位置

```text
User Interface (UI)
│
├── Chat
├── Dashboard
├── Agent Status
│
└── 🎙 Narrator Layer
        │
        ▼
Agent Engine
│
├── Decision
├── Workflow description
├── Skill
├── Memory
├── Tool
├── Judge
└── Execution
```

Narrator Layer 位於 UI 與 Engine 之間。

- Engine 專心做事。
- UI 專心顯示。
- Narrator 專心把「正在做什麼」說成人話。

────────────────

## 🎯 核心目的

Narrator Layer 的目的不是炫技，而是降低等待焦慮。

一般使用者不需要看到：

```text
Function call
Tool routing
Retry loop
State mutation
DOM update
```

使用者真正想知道的是：

> 它現在是不是還在做事？
> 做到哪一步？
> 為什麼還需要等？

Narrator Layer 讓 Agent 的工作過程變得可理解、可等待、可陪伴。

────────────────

## 🦞 基本例子

Engine 產生真實狀態：

```json
{
  "activity": "search",
  "target": "義大利旅行團",
  "progress": 35,
  "candidate_count": 18
}
```

Narrator 轉成人話：

> 🦞「目前找到 18 個旅行團，我先把太趕、拉車太久的排除掉。」

Engine 產生：

```json
{
  "activity": "compare",
  "target": "住宿與交通",
  "progress": 62
}
```

Narrator 轉成人話：

> 🦞「這幾團住宿看起來不錯，但我先確認不要每天坐車坐到懷疑人生。」

────────────────

## 🧩 設計原則

### 1. 必須反映真實狀態

Narrator 不能亂編工作內容。

如果 Engine 沒有搜尋 Reddit，就不能說：

> 我正在 Reddit 找資料。

Narrator 只能根據 Engine 提供的高階狀態生成說明。

### 2. 不暴露底層細節

Engine 可能正在執行：

```text
search_web → parse_result → judge_quality → retry
```

Narrator 顯示：

> 「我先找資料，再把不可靠的排除掉。」

### 3. 保留角色人格

同一個狀態，不同 Agent 可以有不同語氣。

#### 🦞 鉗鉗

> 「我先去翻抽屜，看看資料藏在哪裡。」

#### 🌟 星澄

> 「我先整理脈絡，再決定下一步。」

#### 🦮 小查

> 「我聞到資料味了，先去追一下。」

#### 🦔 亂亂

> 「字很多，不要催，我正在整理。」

### 4. 可以切換顯示模式

#### 簡潔模式

```text
🦞 搜尋中...
```

#### 一般模式

```text
🦞 搜尋中...
「先看看官方，再去偷聽大家怎麼說。」
```

#### 專家模式

```text
🦞 搜尋中...
✓ 官方資料
✓ 社群討論
✓ 價格比較
目前正在交叉驗證...
```

────────────────

## 🧠 與 Action 的差異

`Action` 是 UI 顯示文字，例如：

```text
正在搜尋旅行社資料...
```

Narrator Layer 則是 Action 的上層翻譯與角色化解說。

```text
Action:
正在搜尋旅行社資料...

Narrator:
🦞「我先把購物站很多的淘汰，不然等等你一定先皺眉。」
```

Action 可以很短。
Narrator 讓 Action 變得有上下文、有角色感、也更容易等待。

────────────────

## 🎬 龍蝦 TV Show 狀態機

龍蝦 TV Show 的狀態機不需要另做一套複雜系統。

它應該直接使用 Narrator Layer。

也就是：

```text
真實工作狀態
↓
Narrator Layer
↓
龍蝦 TV Show 口播 / 狀態字幕 / 等待畫面
```

例如：

```json
{
  "activity": "research_episode",
  "target": "今日 AI 怪東西",
  "progress": 40,
  "found_items": 12
}
```

輸出：

> 🦞「今天怪東西有點多，我先把真正離譜的挑出來，不然這集會變成雜物間。」

這不是單純 Loading。
這是節目狀態。

────────────────

## ✅ 一句話定義

> Narrator Layer 是 Cloudhaven 的工作解說層：它把 Agent Engine 的真實狀態，轉成使用者聽得懂、等得下去、又帶有角色感的狀態敘事。
