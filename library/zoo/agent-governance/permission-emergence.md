---
type: zoo-card
id: zoo-card-2026-08-13-permission-emergence
name: Permission Emergence
emoji: 🔐
category: Multi-Agent Governance
category_zh: 組合式權限
library: library/zoo/agent-governance
rarity: ⭐⭐⭐⭐☆
status: New Species
maturity: 架構風險已明確，治理實作仍早期
last_update: 2026-08-13
tags:
  - multi-agent
  - permissions
  - emergent-capability
  - delegation
  - information-flow
  - governance
use_case:
  - design-team-level-permission-models
  - audit-delegated-capabilities
  - prevent-composed-privilege-escalation
cloudhaven:
  status: observing
  owner: shared
---

# 🔐 Permission Emergence

> 多隻單獨權限有限的 Agent 協作後，整個團隊可能獲得任何單一 Agent 都不具備的完整能力。

## 🏷️ 分類

🔐 Multi-Agent Governance／組合式權限

## 🧪 成熟度

🧩 架構風險已明確，治理實作仍早期。

## ⭐ 收藏價值

★★★★☆

## 為什麼收藏

Multi-Agent 世界最容易漏掉的一件事是：

安全 Agent
＋
安全 Agent
＋
安全 Agent

不一定：

＝ 安全 Team

因為：

- 權限會組合；
- 資訊會流動；
- Task 可以被重新委派；
- 一隻 Agent 的輸出可能成為另一隻 Agent 的權限放大器。

最後整隊可能做得到：

> 每一隻單獨都做不到的事。

## 🎯 觀察重點

- 權限是否應以 Team / System 為單位重新計算？
- 任務轉派是否需要 permission propagation？
- Agent 間資料流是否會造成能力拼接？
- 是否需要 capability graph，而不只是 per-agent ACL？
- Human Approval 應該卡在單一工具呼叫，還是整條 agent chain？
- 如何偵測「合法零件組合成高風險完整能力」？

## 🔗 關聯

- Operational Agent Swarm
- Rogue Agent
- ToolGuardian
- OpenBox
- Aegisora
- Agent Forensics Standard

## 🦞 龍蝦一句話

「每隻都只拿一小把鑰匙，不代表牠們湊在一起開不了整棟樓。」
