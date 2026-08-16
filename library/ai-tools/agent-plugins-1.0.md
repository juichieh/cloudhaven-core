---
type: ai-tool-card
id: ai-tool-agent-plugins-1-0
name: Agent Plugins 1.0
category: Agent Standard / Skills / MCP
tags:
  - agent-plugin
  - skills
  - mcp
  - portability
  - interoperability
  - governance
use_case:
  - package-agent-skills-and-mcp-as-portable-plugins
  - install-capabilities-across-compatible-agent-clients
  - govern-version-and-distribute-agent-capabilities
cloudhaven:
  status: candidate
  owner: shared
---

# 🤖 Agent Plugins 1.0

> 把 Skill 與 MCP 打包成跨相容 Agent client 的可攜插件。

## 🏷️ 類型

Agent Standard / Skills / MCP

## ⭐ 收藏價值

⭐⭐⭐

## 為什麼收藏

目前很多 Agent 能力仍像：

> 每一家自己在資料夾裡放 Skill、Prompt、MCP 與設定。

Agent Plugins 1.0 值得觀察的地方，是它嘗試把這些能力往更像「可安裝軟體零件」的方向推：

- 可攜；
- 可安裝；
- 可版本化；
- 可跨相容 client 使用；
- 可治理與撤回；
- 可把 Skill 與 MCP 作為同一個能力包的一部分。

如果生態真的形成，Agent 技能可能從：

> 每家自己亂放資料夾

進化成：

> 有封裝、版本、相容性與治理邊界的能力零件。

## 🎯 觀察重點

- Plugin package 是否有清楚 manifest / version / dependency 模型？
- Skill、Prompt、MCP、Auth、Policy 能否一起描述？
- 不同 Agent client 的相容性實際如何？
- 更新、撤回、權限與來源信任如何處理？
- 能否和 Institutional Skills / Agent Skill Library 接起來？
- 是否能降低 Cloudhaven 長期維護多 Agent 能力的碎片化成本？

## ⏱️ 時效性

高；生態剛開始形成，規格、client 支援與封裝方式可能快速變化。

## 🔗 關聯

- MCP
- Shared Skills / Institutional Skills
- Toolmaker Agent
- ToolGuardian
- Cloudflare OS

## 🦞 龍蝦一句話

「以前 Skill 像散落各家抽屜的螺絲起子；現在終於有人想替它做盒子、標版本，還讓別台 Agent 也插得上。」
