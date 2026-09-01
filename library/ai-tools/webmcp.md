---
id: webmcp
category: Agent-native Web Standard
tags:
  - web
  - browser-agent
  - agent-interface
  - structured-tools
  - experimental-standard
use_case:
  - expose structured website capabilities directly to AI agents
  - reduce browser-agent dependence on visual UI inference
  - lower web automation cost and failure rate
cloudhaven:
  status: observing
  owner: 鉗鉗
---

# WebMCP

## 一句介紹
讓網站直接公開結構化工具給 AI Agent，不必再靠視覺猜 UI。

## 類型
Agent-native Web Standard

## 為什麼值得注意
如果形成標準，Browser Agent 的可靠度、成本與網站整合方式都可能被重做；它很像「網站正式開始替 Agent 留門」。

今天多數 Browser Agent 仍常要：

1. 看畫面或 DOM 猜現在能做什麼。
2. 找按鈕、欄位、選單與頁面狀態。
3. 用模擬點擊與輸入執行操作。
4. UI 一改版，就可能整條流程失效。

WebMCP 的方向則是讓網站主動公開結構化、可被 Agent 理解的能力，讓 Agent 不必每次都把網站當成一張需要破解的介面圖。

## 核心判斷
這不只是「Browser Automation 更方便」，而是 Web 可能開始出現兩層介面：

- Human UI：給人類看的頁面。
- Agent Interface：給 Agent 直接理解與操作的結構化能力。

如果這層成熟，網站與 Agent 的關係可能從：

> Agent 模仿人類操作網站

轉成：

> 網站直接告訴 Agent「我有哪些能力、參數與限制」。

## 與 MCP 的關係
WebMCP 很像把 MCP 的心智模型帶進網站本身：

- MCP：讓 Agent 連接軟體工具與服務。
- WebMCP：讓網站本身成為 Agent-native Tool Surface。

換句話說，網站不再只是「給 Agent 看」，而是開始「給 Agent 用」。

## 可能帶來的影響
- Browser Agent 不必大量依賴視覺辨識與脆弱 selector。
- UI 改版不一定等於 Agent workflow 全毀。
- 網站可以更明確描述可用操作、參數、權限與錯誤。
- Agent 執行成本可能下降，尤其是反覆瀏覽、表單填寫與交易流程。
- 網站可能需要開始思考 Human UX 與 Agent UX 兩套設計。
- 未來 SEO 之外，可能出現「Agent Discoverability / Agent Accessibility」的新層次。

## 需要持續觀察
1. 誰負責定義 tool schema，以及網站能否自訂能力。
2. 權限、登入、支付與高風險 side effect 如何處理。
3. Agent 如何驗證網站公開的 tool 是否可信。
4. 是否能與 MCP、A2A、Agent Card、Registry 等現有 Agent infrastructure 接軌。
5. 網站是否能限制 Agent 與人類 UI 可做的操作範圍。
6. 標準是否真的被瀏覽器、網站框架與大型平台採用，而不只停留在實驗階段。

## 時效性
高。

目前仍屬 experimental standard；使用者提供的觀察指出相關 Challenge 截止時間為 9/3 PT，因此短期內值得持續追蹤規格與生態變化。

## 收藏
⭐⭐⭐

## Cloudhaven 觀察
這張卡值得留的原因不是「又一個 MCP 變體」，而是它代表 Web 可能開始正式承認：

> Agent 已經不是偶爾來訪的自動化腳本，而是一類需要原生介面的使用者。

如果這條路成立，Browser Agent 的未來可能不是「越來越會看網頁」，而是「越來越少需要看網頁」。

## 龍蝦註解
> 以前 Agent 是翻窗戶進網站；WebMCP 是網站終於決定裝一扇給機器走的正門。🦞🚪🤖
