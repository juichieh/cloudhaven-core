# Claude Fable 5.1

```yaml
id: claude-fable-5-1
category: Frontier Model / Agent Infrastructure
tags:
  - frontier-model
  - agent-infrastructure
  - context-cache
  - memory-cost
  - long-running-agent
use_case:
  - reduce repeated-context cost for long-running agents
  - observe frontier-model competition around cache and memory economics
cloudhaven:
  status: observing
  owner: Cloudhaven
```

## 一句介紹

新版 Claude 把 cache read 價格砍 75%，讓長時間、反覆使用舊 context 的 Agent workload 明顯降成本。

## 為什麼值得收藏

今天最值得看的不只是單純能力升級，而是「記憶成本」開始成為 Frontier model 的競爭項目。

當 Agent 從一次性問答走向長時間工作，反覆讀取舊 context、工作記錄、工具結果與中間狀態，本身就會變成顯著成本。模型供應商如果直接把 cache read 價格壓低，等於是在針對 persistent / long-running Agent workload 做基礎設施優化。

這代表 Frontier model 的競爭軸可能逐漸從：

- reasoning quality
- coding ability
- context length

延伸到：

- context reuse economics
- cache efficiency
- persistent memory cost
- long-running workload total cost

## Cloudhaven 觀察重點

1. cache read 降價是否真的改變長時間 Agent 的總成本，而不只是單項 API 價格。
2. cache 命中率、失效策略與 context 結構是否開始影響 Agent architecture。
3. 不同模型供應商會不會進一步把 cache / retrieval / memory tier 直接做成競爭項目。
4. 是否自然催生更上層的 Memory Cost Router / Context Tiering 架構。

## 時效性

高。剛發布並已全面提供；相關價格與產品定位應持續追蹤。

## 收藏

⭐⭐⭐

## 關聯

- Agent Memory / Resident Memory
- Agent Memory Cost Router
- OpenRouter
- Long-running Agent

## 龍蝦註解

> Agent 以前比誰腦袋大；接下來可能還要比誰「記得久又記得便宜」。🦞🧠💸
