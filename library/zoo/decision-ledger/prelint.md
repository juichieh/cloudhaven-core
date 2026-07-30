---
type: zoo-card
id: zoo-card-2026-07-30-prelint-decision-ledger
name: Prelint／Decision Ledger
emoji: 📜
category: Decision Ledger
category_zh: Agent 決策帳本／產品漂移防護
library: library/zoo/decision-ledger
rarity: ⭐⭐⭐⭐⭐
status: Emerging
maturity: 已推出並有早期團隊使用，成效數據仍需外部驗證
date: 2026-07-30
last_update: 2026-07-30
evolution_count: 0
tags:
  - decision-ledger
  - coding-agent
  - product-drift
  - architecture-records
  - unauthorized-decisions
use_case:
  - detect-agent-product-drift
  - compare-code-against-product-decisions
  - audit-coding-agent-behavior
cloudhaven:
  status: candidate
  owner: 鉗鉗
---

# 🆕 Prelint／Decision Ledger

> 比對程式修改與產品規格、架構紀錄及過去決定，找出 Coding Agent 是否偷偷替團隊做了未授權決策。

────────────────

## 🏷️ 分類

📜 Agent 決策帳本／產品漂移防護

────────────────

## 🌱 成熟度

🌱 已推出並有早期團隊使用，成效數據仍需外部驗證

────────────────

## ⭐ 收藏價值

★★★★★

────────────────

## 👍 為什麼收藏

它抓的不是普通 Bug。

它處理的是 Agent 時代非常重要的新錯誤：

> 程式完全正確，但 AI 做錯了產品。

當 Coding Agent 能自行補需求、改架構、調整資料流與產品行為時，錯誤可能不再出現在語法或測試，而是出現在「牠替團隊做了哪個沒人批准的決定」。

────────────────

## 🎯 觀察重點

- 能否可靠理解產品規格、ADR 與歷史決策？
- 對模糊需求的判斷會不會產生大量誤報？
- 是否能指出具體是哪項修改違反哪個決策？
- 能否與 Pull Request、CI、Coding Agent 工作流整合？
- 是否適合作為鉗鉗執行前後的決策一致性檢查？

────────────────

## 🧬 Evolution Log

### 2026-07-30｜🆕 新發現

首次收錄為 Decision Ledger 類新物種：不只檢查程式是否正確，也檢查 Agent 是否擅自改變產品意圖。

────────────────

## 🦞 龍蝦一句話

「最可怕的不是 AI 寫錯程式，是牠寫得完全正確，順便把你的產品改成另一款。」

────────────────

## 🔗 關聯

- Coding Agent
- Product Specification
- Architecture Decision Record
- Agent Audit
- Governance
- Pull Request Review

Cloudhaven：

Library → Zoo → Decision Ledger → Prelint
