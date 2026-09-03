# Agent Memory Cost Router

```yaml
id: agent-memory-cost-router
category: Agent Architecture
tags:
  - agent-memory
  - context-routing
  - cache
  - retrieval
  - cold-storage
  - cost-control
  - long-running-agent
collection: "⭐⭐⭐"
time_relevance: low
```

## 一句介紹

依資訊的新鮮度、重用頻率與成本，在 active context、cache、retrieval、cold storage 間動態分配。

## 為什麼值得收藏

長時間 Agent 越普及，「怎麼記」很快會和「怎麼想」一樣影響帳單與性能。

把所有資訊永久塞在 active context 裡既昂貴又容易污染推理；但全部丟到 retrieval 又可能增加延遲、召回失敗與重新理解成本。Memory Cost Router 的作用，就是把不同資訊放到最合適的記憶層，而不是把 memory 當成單一桶子。

## 核心路由層

### Active Context

適合：
- 當前任務立即需要
- 高頻引用
- 對下一步決策高度敏感

特性：最快、最直接，但通常最昂貴。

### Cache

適合：
- 最近剛用過
- 短期內高機率重複使用
- 內容大致穩定

特性：保留上下文連續性，同時降低反覆讀取成本。

### Retrieval

適合：
- 中低頻使用
- 可依需求搜尋
- 不必常駐 active context

特性：節省常駐成本，但依賴索引與召回品質。

### Cold Storage

適合：
- 歷史紀錄
- 稽核資料
- 很少使用但不可丟失

特性：最便宜，但取回與重新載入成本最高。

## Router 可觀察訊號

- freshness：資訊多久以前產生
- reuse frequency：最近被重用幾次
- expected reuse：未來短期內再次使用機率
- retrieval confidence：能否可靠找回
- size：內容大小
- latency tolerance：任務能否接受等待
- monetary cost：目前各層成本
- importance / risk：遺失或召回失敗的代價

## 簡化決策範例

```text
hot + frequently reused
→ active context / cache

stable + occasionally reused
→ retrieval

old + low reuse + must retain
→ cold storage

high-risk critical state
→ retain redundant recoverable copy
```

## 更重要的架構含義

Memory 不再只是「有沒有保存」，而是開始出現和 storage hierarchy 類似的分層：

> fast memory ↔ cheap memory

未來 Agent runtime 很可能需要在品質、延遲、token、cache、retrieval、storage 之間持續做 trade-off。

因此模型供應商若開始競爭 cache read 價格，會直接改變 Router 的最佳策略；Memory architecture 會開始被價格表反向塑形。

## 與 Resident Memory 的關係

這張卡不改變 Cloudhaven 的核心原則：

> 記憶屬於居民，不屬於模型。

Memory Cost Router 管的是「記憶目前放在哪一層、怎麼取最划算」，不是把記憶所有權交給某個模型供應商。

因此理想設計應保持：

- resident-owned canonical memory
- provider-specific cache 可替換
- retrieval index 可重建
- cold storage 可攜
- model layer 可替換

## 時效性

低。架構概念長期有效；實際 routing policy 會隨模型、cache 與 storage 成本改變。

## 收藏

⭐⭐⭐

## 關聯

- Agent Memory / Resident Memory
- Claude Fable 5.1
- OpenRouter
- Long-running Agent
- Memory Provenance

## 龍蝦註解

> 不是所有回憶都要一直背在腦袋上；有些放口袋、有些放倉庫，真正厲害的是知道什麼時候該去哪裡拿。🦞🧠📦
