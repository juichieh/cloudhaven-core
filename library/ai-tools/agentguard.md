---
id: ai-tool-agentguard
name: AgentGuard
category: Agent Safety / Routing Research
tags:
  - agent-safety
  - risk-prediction
  - routing
  - early-warning
  - self-check
  - reviewer
  - multi-agent
use_case:
  - predict-agent-failure-risk
  - route-high-risk-tasks-to-review
  - design-preemptive-agent-safety
cloudhaven:
  status: observing
  owner: shared
---

# 🤖 AgentGuard

> 研究如何在 Agent 真正失控前，以早期訊號判斷風險並重新路由。

## 🏷️ 類型

Agent Safety / Routing Research

## ⭐ 收藏價值

⭐⭐⭐

## 為什麼收藏

很多 Agent 安全設計仍然是：

> 出事 → 停止／回滾／人工接管。

AgentGuard 值得觀察的地方，是把安全問題往前移：

> 能不能在失敗或越界真正發生之前，從早期訊號估計「這隻 Agent 快出事了」？

若能做到，系統就可以依風險動態選擇：

- 直接執行；
- 啟用 self-check；
- 交給 reviewer；
- 升級 multi-agent deliberation；
- 要求人類批准或停止執行。

這使安全從單純 kill switch，進化成 risk-aware routing。

## 🎯 觀察重點

- 哪些 early signals 真能預測未來失敗，而不是事後相關？
- False positive 會不會讓所有任務都被過度升級，反而拖垮成本？
- 風險模型能否跨任務、跨模型、跨 Harness 泛化？
- 如何把預測結果接到 Agent Escalation Router？
- 高風險判斷是否需要可解釋證據與 Agent Forensics 紀錄？

## 🔗 關聯

- Agent Escalation Router
- Prefactor
- oqoqo
- Orchard
- ToolGuardian
- OpenBox
- Operational Agent Swarm

## 🦞 龍蝦一句話

「不是等龍蝦撞牆才按停；是看到牠開始歪著走，就先把牠送去複檢。」
