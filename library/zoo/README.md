# 🦁 AI Zoo

`library/zoo/` 保存 AI 能力、功能大綱與新物種。

Zoo 不是工具館。

Zoo 收藏的是：

> AI 長出了什麼能力？

一張 Zoo 卡可以收很多工具作為代表案例。

────────────────
## 收什麼

可以收：

- AI 能力
- Agent 能力
- 新互動模式
- 新工作型態
- 新入口
- 新物種

例子：

```text
keyboard-agent.md
business-agent.md
```

────────────────
## 不收什麼

不要收：

- 單一工具 → 放 `library/ai-tools/`
- 方法論 → 放 `library/frameworks/`
- Prompt DNA → 放 `prompt-dna/`
- 一次性新聞
- 尚未形成能力方向的單一案例

────────────────
## Tool 與 Zoo 的關係

```text
AI Tool = 工具 / 個體
Zoo     = 能力 / 物種
```

例子：

```text
Acti 是工具
Keyboard Agent 是能力

Databox MCP 是工具
Business Agent 是能力
```

────────────────
## Maturity / 演化狀態

Zoo 卡最適合記錄 maturity，因為 Zoo 觀察的是能力演化。

建議使用：

```yaml
maturity: Seed 🌱
```

可用等級：

| 等級 | 意義 |
|---|---|
| Seed 🌱 | 剛出現，只有少數早期案例 |
| Emerging 🌿 | 開始有多個案例，方向變清楚 |
| Growing 🌳 | 生態快速長大，開始影響主流使用方式 |
| Mature 🌲 | 已經成熟，成為穩定基礎能力 |

注意：

- `rarity` / 收藏等級 = 值不值得收藏
- `maturity` / 演化狀態 = 這種能力成熟到哪裡

兩者不是同一個欄位。

────────────────
## 建議欄位

Zoo 卡建議包含：

- Metadata
- 能力類型
- 一句介紹
- 這是什麼能力
- 為什麼重要
- 代表工具
- 演化狀態 / maturity
- 觀察重點
- 代表案例紀錄
- 收藏等級
- 龍蝦一句話
- 關聯連結

────────────────
## 🔗 連結規則

Zoo 卡應該連回代表工具。

例子：

```markdown
[Acti](../ai-tools/acti.md)
[Databox MCP](../ai-tools/databox-mcp.md)
```

────────────────
## 🦞 龍蝦一句話

「Zoo 不收工具，Zoo 收的是 AI 新長出來的器官。」
