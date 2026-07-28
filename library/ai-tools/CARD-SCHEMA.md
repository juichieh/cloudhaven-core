---
type: ai-tool-schema
id: ai-tool-card-schema
name: AI Tool Card Schema
status: Active
date: 2026-07-28
last_update: 2026-07-28
---

# 🏷️ AI Tool Card Schema

> 所有新增或更新的 AI Tool Library 卡片，都必須包含可搜尋、可篩選、可治理的最小欄位。

────────────────

## 必填欄位

```yaml
type: ai-tool-card
id: ai-tool-YYYY-MM-DD-slug
name: Tool Name
category: Primary Category
category_zh: 中文主分類
library: library/ai-tools
status: Observing | Candidate | Testing | Approved | Archived
date: YYYY-MM-DD
last_update: YYYY-MM-DD

tags:
  - primary-category
  - capability
  - platform-or-context

use_case:
  - concrete-task
  - concrete-task

cloudhaven:
  status: observing | candidate | testing | approved | rejected
  owner: unassigned | 鉗鉗 | 星澄 | 小風 | shared
```

────────────────

## 欄位規則

### category

一張卡只能有一個主要分類，用來快速分館。

### tags

建議 3～7 個。第一個 Tag 應代表主要領域；其餘描述能力、平台、介面或治理特徵。

### use_case

只寫實際能拿來做什麼，不寫抽象口號。

### cloudhaven.status

- `observing`：只收藏觀察
- `candidate`：未來可能導入
- `testing`：正在實驗
- `approved`：已允許正式使用
- `rejected`：不符合需求或風險過高

### cloudhaven.owner

標記未來最可能使用或維護的居民；尚未分配時使用 `unassigned`。

────────────────

## 最小範例

```yaml
category: Security
tags:
  - security
  - governance
  - mcp

use_case:
  - inspect-agent-tools
  - enforce-task-specific-permissions

cloudhaven:
  status: candidate
  owner: 鉗鉗
```

────────────────

## 原則

AI Tool Library 回答：

> 這是什麼工具？可以拿來做什麼？Cloudhaven 是否值得使用？

工具卡不是只有收藏資訊，也要能成為未來 Tool Registry 的來源。
