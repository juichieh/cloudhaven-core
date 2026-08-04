---
type: zoo-card
id: zoo-card-2026-08-04-external-side-effect-ledger
name: External Side-Effect Ledger
emoji: 💾
category: Agent Governance
category_zh: Agent 恢復安全／外部行動一致性
library: library/zoo/agent-governance
rarity: ⭐⭐⭐⭐⭐
status: New
maturity: 基礎設施問題已浮現，尚未形成統一產品標準
date: 2026-08-04
last_update: 2026-08-04
evolution_count: 0
tags:
  - agent-governance
  - side-effect-ledger
  - recovery-safety
  - idempotency
  - checkpointing
  - external-consistency
use_case:
  - prevent-duplicate-external-actions-after-recovery
  - reconcile-agent-state-with-real-world-effects
  - design-safe-checkpoint-and-resume-workflows
cloudhaven:
  status: candidate
  owner: 鉗鉗
  usable_in:
    - 鉗鉗生活觀察箱
---

# 🆕 External Side-Effect Ledger

> 在 Agent 快照、暫停與恢復之外，獨立追蹤已經作用於外部世界的訊息、付款、檔案與系統修改。

────────────────

## 🏷️ 分類

💾 Agent 恢復安全／外部行動一致性

────────────────

## 🧩 成熟度

🧩 基礎設施問題已浮現，尚未形成統一產品標準

────────────────

## ⭐ 收藏價值

★★★★★

────────────────

## 👍 為什麼收藏

Agent 平台開始普遍提供狀態快照與恢復，但內部讀檔無法倒轉外部世界。

若 Agent 從舊快照重新執行，可能造成：

- 重複寄送訊息；
- 重複付款；
- 重複建立檔案；
- 重複修改第三方系統；
- 內部記憶與外部現實失去一致性。

這是一個聊天機器人不太需要、長時間 Agent 卻必須面對的新物種：

> Agent 的人生可以讀檔，但世界不能。

────────────────

## 🎯 觀察重點

- 每個外部行動是否有穩定的 idempotency key？
- 快照恢復前能否確認哪些操作已經成功作用於外部世界？
- 外部系統回覆不明時，如何區分成功、失敗與未知狀態？
- 補償操作、人工批准與事故鑑識如何連動？
- Tool Timeline、Network Trace 與 Side-Effect Ledger 是否能交叉驗證？

────────────────

## 🏠 鉗鉗生活觀察箱可用

- **一句話：** 防止鉗鉗讀檔或重啟後，把已經做過的外部事情再做一次。
- **可參考模組：** Runtime Recovery、Tool Use、External Actions、Incident Record
- **採用狀態：** Candidate；目前先作架構標準候選，不加入一日 Prototype 必要功能。

────────────────

## 🧬 Evolution Log

### 2026-08-04｜🆕 新發現

首次收錄為 Agent 恢復安全新物種：快照只能恢復內部狀態，外部世界需要另一份不可忽略的行動帳本。

────────────────

## 🦞 龍蝦一句話

「鉗鉗可以讀檔，但牠昨天寄出去的信不會自己飛回信箱。」

────────────────

## 🔗 關聯

- AgentSky
- Agent Forensics Standard
- Decision Ledger
- OpenBox
- Prefactor
- Recovery Record

Cloudhaven：

Library → Zoo → Agent Governance → External Side-Effect Ledger
