---
type: framework
id: framework-prompt-modular-architecture-v2
title: Prompt Modular Architecture V2
category: Framework
library: 🧠 Framework Library
rarity: ⭐⭐⭐⭐⭐
status: Active
date: 2026-07-06
tags:
  - Framework
  - Prompt
  - Section Layer
  - Show
  - Cloudhaven
  - Prompt DNA
---
# 🧩 Prompt Modular Architecture V2
> 💬 不要一直改 Framework，真正會長大的，是中間那層 Section Library。

────────────────
## 1. 核心發現

大型 Prompt 會越改越亂，通常不是因為內容太多，

而是因為把四種不同層級混在同一坨：

```text
角色 / 身份
輸出欄位
當天內容
收尾句
```

早期指令常見寫法是：

```text
你現在是 XXX 職業
請用 XXX 風格
請包含 A、B、C、D、E、F 欄位
今天請整理 XXX
最後請總結
```

這其實把 Framework、Section、Content、Closing 全部塞在一起。

結果每新增一個欄位，就像在改整個節目骨架，容易導致 Prompt 變胖、走味或掛掉。

────────────────
## 2. 四層架構

Prompt 應該拆成四層：

```text
Prompt / Show
│
├── ① Framework
├── ② Section Library
├── ③ Content Engine
└── ④ Closing
```

### ① Framework

Framework 是身份、節奏、觀點與閱讀體驗。

回答：

> 這份輸出應該像什麼？

例子：

- 你是 Discovery AI 節目的主持人
- 你是 Discord 群裡分享新聞的玩家朋友
- 你是很懂我生活節奏的小夥伴
- 你是研究助理，不是文案創作者

Framework 不應該頻繁修改。

它保存的是節目靈魂。

### ② Section Library

Section Library 是可自由抽換的中間層。

回答：

> 今天這一集要包含哪些段落？

例子：

- 今日主線
- 玩家 Top 5
- Steam 雷達
- 本週完成事項
- 本週值得一讀
- Unexpected Win
- 本週最好笑
- Milestone
- 下週觀察雷達

Section 可以新增、移除、排序、替換。

但不要因為新增 Section 就改壞 Framework。

### ③ Content Engine

Content Engine 是當天真正要處理的素材。

回答：

> 今天有哪些資料、新聞、事件、任務或觀察？

例子：

- 今天的 AI 新聞
- 這週完成的任務
- 過去 14 天內值得讀的文章
- 遊戲特價與玩家討論
- 旅遊團資料

Content 是每次輸出都會變動的部分。

### ④ Closing

Closing 是收尾、金句、總結與下一步。

回答：

> 讀完這份內容後，要留下什麼感覺？

例子：

- 一句話總結
- 龍蝦一句話點評
- 今日玩家金句
- 下週觀察雷達
- 行動建議

────────────────
## 3. 為什麼需要 Section Layer

以前的 Prompt 容易長這樣：

```text
Framework
↓
Content
```

一旦想加入新欄位，例如「本週最好笑」，就必須直接修改整份 Prompt。

V2 改成：

```text
Framework
↓
Section Layer
↓
Content
↓
Closing
```

這樣新增段落時，只是：

```text
Section +1
```

而不是：

```text
Prompt 重寫
```

一句話：

> Framework 要穩，Section 要能換，Content 要能流動。

────────────────
## 4. Lobster Weekly Section Library 範例

以下是「龍蝦週刊」目前採用的 Section Library。

這只是 Lobster Weekly 的節目段落，不代表所有早報都要套用。

### 🧩 Core Sections

```text
1. 本週完成事項
2. 本週進行中事項
3. 等待成熟 / 暫緩事項
4. 下週優先事項
```

用途：保留週計畫與任務回顧的核心功能。

### 📚 Knowledge Sections

```text
📚 本週值得一讀
```

用途：每週從過去 14 天文章、專欄、隨筆或深度報導中，挑一篇最值得閱讀的作品。

### 🎁 Weekly Story Sections

```text
🎁 本週意外收穫 / Unexpected Win
🤣 本週最好笑
```

用途：保留意外成果、荒謬笑點、龍蝦教風格與生活感。

### 🏆 Progress Sections

```text
🏆 龍蝦教 Milestone
```

用途：只有真正發生重要進展才寫，例如：

- 第一個 Agent 完成任務
- 第一份 PDF 導讀誕生
- 第一個早報正式版
- 小風正式升級研究員
- 鉗鉗第一次完成遊戲任務

沒有就寫：

> 本週沒有新的里程碑，繼續穩定成長。

### 📡 Radar Sections

```text
👀 下週觀察雷達
```

用途：列出下週值得注意，但不一定需要主動執行的外部變化。

它不是待辦事項。

待辦是：

```text
我要做什麼
```

觀察雷達是：

```text
世界可能發生什麼
```

例子：

- Google Spark 是否開放
- Agent 新產品是否發布
- 旅行社是否釋出 2027 義大利團
- 重要 AI 公司是否有新模型 / 新工具
- 重要財報或市場事件

### 📝 Closing Sections

```text
一句話總結本週
🦞 龍蝦教一句話點評
```

用途：把整週收成一個有記憶點的故事，而不是流水帳。

────────────────
## 5. 判斷：要不要加入 Framework？

新增內容前先問：

| 問題 | 放哪裡 |
|---|---|
| 這會改變整份輸出的身份、節奏、世界觀嗎？ | Framework |
| 這只是新增一個固定段落嗎？ | Section Library |
| 這是今天才有的素材嗎？ | Content Engine |
| 這是最後的金句、總結或行動建議嗎？ | Closing |
| 這是語氣、靈魂、不能丟的手感嗎？ | Prompt DNA |

例子：

```text
「你是 Discovery AI 節目的主持人」
→ Framework

「本週最好笑」
→ Section Library

「The Gentle Singularity 這篇文章」
→ Content Engine

「如果這週只能讀一篇，我為什麼選它」
→ Closing / Section Closing
```

────────────────
## 6. 防止 Prompt 變胖規則

### Rule 1：Framework 不要常改

Framework 是骨架與靈魂。

能不動就不動。

### Rule 2：新增欄位先放 Section Library

不要把每個新想法都塞進 Framework。

### Rule 3：Section 可以分組，但不要過度工程化

分組只是為了維護方便，不是要把每份早報都變複雜。

### Rule 4：排程 Prompt 要比手動 Prompt 更保守

排程容易因為 Prompt 太長、欄位太多而走味或失控。

手動版可以實驗。

排程版要等穩定後再更新。

### Rule 5：Section Library 是插件，不是負擔

如果某週沒有 Milestone，不要硬湊。

如果某週沒有最好笑，也可以略過或簡短寫。

Section 是幫助內容變好，不是逼內容填空。

────────────────
## 7. 與 Cloudhaven 架構的對應

Prompt Architecture 與 Cloudhaven Engine 很像：

```text
Cloudhaven
│
├── UI / Narrator Layer
├── Engine
├── Skills / Modules
└── Output
```

```text
Prompt
│
├── Framework
├── Section Library
├── Content Engine
└── Closing
```

兩者共通原則：

> 顯示、結構、執行、內容要分層，不要混成一坨。

────────────────
## 8. 適用場景

適合套用在：

- 龍蝦週刊
- AI Show
- AI 怪東西早報
- 遊戲早報
- 生活早報
- 每日摘要
- 旅遊比較報告
- 品牌研究報告
- 長文 / 影片導讀
- Agent 狀態回報

但注意：

不是每個節目都需要完整四層寫出來。

小型 Prompt 可以只保留精神。

大型 Prompt 才需要明確拆層。

────────────────
## 9. 龍蝦一句話

> 不要把 Prompt 寫成一大坨；把它拆成骨架、段落、素材和收尾，才不會越改越胖。

────────────────
## 🔗 關聯

Related:
- [Show Director Framework V1](./show-director-framework-v1.md)
- [Show Director DNA](../../prompt-dna/show-director-dna.md)

Cloudhaven:
- Library → 🧠 Framework Library
- Prompt DNA → 🧬 Prompt 核心 DNA
- Skills → 🛠️ 可執行流程
