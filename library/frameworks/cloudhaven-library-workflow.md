---
type: workflow
id: workflow-cloudhaven-library-v1
title: Cloudhaven Library Workflow
category: Workflow
library: 🧠 Framework Library
rarity: ⭐⭐⭐⭐
status: Active
date: 2026-07-02
tags:
  - Cloudhaven
  - Knowledge Library
  - Workflow
  - GitHub
  - Agent
---
# 🧠 Cloudhaven Library Workflow
> 💬 先定稿，再更新；先確認來源，再寫入知識庫。

────────────────
## 🏷️ 類型
知識庫維護流程／Agent 更新規範

────────────────
## ✨ 一句介紹
Cloudhaven Library 的標準更新流程，確保 ChatGPT、鉗鉗、Codex 或其他 Agent 都能安全、清楚、一致地更新知識庫。

────────────────
## 🎯 核心定位
Cloudhaven Knowledge Library 不是即興筆記本。

它是長期保存：

- AI Tool
- Framework
- Research
- Card
- Workflow
- Decision Method

的正式知識庫。

因此每一次更新都必須先確認：

1. 要做什麼
2. 來源是什麼
3. 目標在哪裡
4. 要遵守什麼規則
5. 完成後如何回報

────────────────
## 🧩 標準結構
每次更新 Cloudhaven Library，都應該明確寫出五個區塊：

```text
Task
Source
Target
Policy
Output
```

────────────────
## 1️⃣ Task
說明這次要做什麼。

常見任務：

- 新增 Framework
- 更新 Framework
- 新增 AI Tool Card
- 搬移檔案
- 修正 Metadata
- 整理 Research
- 建立 Workflow

範例：

```text
Task:
Update Framework

Name:
Show Director Framework V1
```

────────────────
## 2️⃣ Source
說明本次內容的唯一來源。

Source 才是 Single Source of Truth。

不要預設一定來自聊天，因為未來可能由不同 Agent 執行。

可能來源：

- 本次聊天最後定案版本
- 本次 Issue
- 本次 Markdown
- 指定 Google Docs
- 指定 NotebookLM 匯出內容
- 指定 GitHub 檔案
- Decision Engine 輸出的最終版本
- 鉗鉗任務輸出的最終稿

規則：

- 只使用本次指定 Source
- 不用 Repository 舊版推測
- 不自行補充
- 不自行刪減
- 不混合不同來源

若 Source 不完整，停止並詢問。

────────────────
## 3️⃣ Target
說明要寫到哪裡。

Target 必須包含：

- Repository
- Branch
- Path
- Filename

範例：

```text
Repository:
juichieh/cloudhaven-core

Branch:
main

Path:
library/frameworks/show-director-framework-v1.md
```

────────────────
## 4️⃣ Policy
說明更新時必須遵守的規則。

基本原則：

- 不猜 Repository
- 不自行切換 Repository
- 不亂建新分類
- 不搬動其他內容
- 不刪除任何檔案
- 不修改非目標檔案
- 若遇到重複內容，先回報，不自行合併

Repository Policy：

```text
WRITE:
juichieh/cloudhaven-core

READ:
juichieh/cloudhaven-core
juichieh/C-（必要時）
juichieh/lobster-ai-menu（必要時）
```

Library Policy：

```text
所有新增內容只能放在 library/ 底下。

若已有適合分類，沿用既有架構。
若沒有適合位置，先詢問或建立最小合理資料夾。
```

────────────────
## 5️⃣ Output
完成後必須回報：

1. Repository
2. 實際完整路徑
3. Commit SHA
4. 更新了哪些章節或檔案
5. 是否建立新資料夾
6. 是否發現重複或可合併內容
7. 是否有未完成事項

────────────────
## ✅ 成功判準
一次成功的 Cloudhaven Library 更新，應該符合：

- Source 明確
- Target 明確
- Repository 沒跑錯
- Path 沒亂放
- 沒修改其他檔案
- 沒自行補內容
- 有 Commit SHA
- 有清楚回報

────────────────
## 🚫 避免事項
不要：

- 把 GitHub 當草稿紙
- 把聊天記憶當正式來源
- 用印象覆蓋正式檔案
- 同時混用聊天、Repo 舊版、AI 推測
- 未確認就刪除或合併檔案
- 把不同類型內容塞到同一個目錄

────────────────
## 🤖 Agent 適用方式
這套流程不綁定 ChatGPT。

不同 Agent 只要明確填寫 Source 即可：

### ChatGPT
```text
Source:
本聊天最後定案版本
```

### 鉗鉗
```text
Source:
本次 Issue 或任務輸出的最終稿
```

### Codex
```text
Source:
Workspace 中指定檔案
```

### Future Cloudhaven Agent
```text
Source:
Decision Engine 輸出的最終版本
```

────────────────
## 🦞 龍蝦一句話
「不是誰都能寫進知識庫，先說清楚來源，才准進圖書館。」

────────────────
## 🔗 關聯
Skills：
- Knowledge Management
- Agent Workflow
- GitHub Update
- Repository Policy
- Library Maintenance

Related:
- Show Director Framework V1
- Cloudhaven Knowledge Library
- AI Tool Library
- Framework Library

Cloudhaven:
Library → 🧠 Framework Library
