# SkillTriage

```yaml
id: skilltriage
category: Agent Debugging / Skill Evaluation
tags:
  - skills
  - agent-debugging
  - evaluation
  - regression-testing
  - trajectory-analysis
use_case:
  - Compare agent execution with and without a Skill
  - Identify which Skill causes failures, regressions, or higher cost
  - Validate whether installed Skills actually improve outcomes
cloudhaven:
  status: observing
  owner: unassigned
```

## One-liner

比較有無 Skill 的執行軌跡，找出特定 Skill 如何導致失敗或成本退步。

## Why it matters

Skill 生態越大，真正重要的問題會從「能不能裝」轉成「裝了到底有沒有真的變好」。

當 Agent 同時掛上大量 Skills 後，問題很容易變成：

- 某個 Skill 讓任務成功率下降
- 某個 Skill 改變了工具選擇或執行順序
- 某個 Skill 讓 token、時間或外部 API 成本變高
- 多個 Skills 之間互相干擾
- 新版 Skill 對某些任務有效，卻讓另一批任務退步

因此 Skill 不應只在安裝時被信任，而需要持續被重新評估。

## Core pattern

最直觀的做法是把同一類任務分成對照組：

1. Baseline：不載入目標 Skill
2. Treatment：載入目標 Skill
3. 比較兩邊的完整 execution trajectory
4. 找出分歧點
5. 衡量 success / quality / latency / token / tool cost / side effect
6. 判定 Skill 是 helpful、neutral、context-dependent 或 harmful

這不是單純看最後答案，而是要看 Skill 到底在哪一步改變了 Agent 的行為。

## Important implication

Skill 可能不是永久資產，而是需要 lifecycle management 的軟體元件。

也就是：

> install → observe → compare → diagnose → keep / revise / disable / retire

因此大型 Skill Library 最後很可能需要：

- regression suite
- version comparison
- task-specific effectiveness score
- conflict detection
- automatic rollback / quarantine
- periodic re-evaluation

## Cloudhaven observation

這隻值得注意的地方是，它把「Skill 品質不一」從感覺問題變成可以檢查的工程問題。

Skill 越多，不代表 Agent 越強；如果缺少回頭檢查機制，Agent 甚至可能在不知不覺中被舊 Skill、錯誤 Skill 或彼此衝突的 Skill 拉低。

這也代表 Skill 生態成熟後，下一層基礎設施很可能不是更多 Skill Marketplace，而是 **Skill QA / Skill Observatory / Skill Regression Testing**。

## Related Cloudhaven concepts

- Shared Skills / Institutional Skills
- SkillTriage
- Prefactor
- Prelint / Decision Ledger
- Orchard
- Agent Forensics Standard
- AgentGuard

## Time relevance

Low. 方法本身屬於長期可用的 Agent 維運模式。

## Collection

⭐⭐⭐

## Lobster note

> Skill 不是裝越多越厲害；有些是外掛，有些是慢性毒藥。最後還是得抓回來驗血。🦞
