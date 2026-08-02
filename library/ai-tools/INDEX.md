---
type: ai-tool-index
id: ai-tool-index
name: AI Tool Library Index
status: Active
date: 2026-07-28
last_update: 2026-08-02
---

# 🧰 AI Tool Library Index

> 用分類、用途與 Cloudhaven 狀態快速找到真正能用的工具。

────────────────

## ✅ Approved

### GPT-5.6 System Card

- category: Security Reference
- tags: security, oversight, evaluation
- use_case: Agent 風險測試、權限規則、Lobster Core 安全清單
- owner: 鉗鉗
- path: `library/ai-tools/gpt-5-6-system-card.md`

### Content Credentials Verify

- category: Media Provenance
- tags: media-provenance, content-credentials, image-verification, c2pa
- use_case: 驗證圖片製作與編輯履歷、設計 Magazine 內容來源標記
- owner: shared
- caution: 驗證可追溯履歷，不是圖片真偽裁判
- path: `library/ai-tools/content-credentials-verify.md`

────────────────

## 🟡 Candidate

### Workbench

- category: Agent Operations
- tags: remote-monitoring, long-running-agent, human-in-the-loop
- use_case: 遠端監看、暫停、批准與接管長時間 Agent
- owner: 鉗鉗
- path: `library/ai-tools/workbench.md`

### ChatGPT Work

- category: Work Agent
- tags: documents, spreadsheets, presentations, cross-app-workflow
- use_case: 長時間研究、跨 App 工作、文件產出
- owner: shared
- path: `library/ai-tools/chatgpt-work.md`

### GPT-Live

- category: Voice Interface
- tags: voice, realtime-conversation, interruption
- use_case: 自然語音互動、插話處理、鉗鉗語音介面
- owner: 鉗鉗
- path: `library/ai-tools/gpt-live.md`

────────────────

## 🧪 待補卡／待確認

以下工具已在對話或母艦歷史中出現，但仍需確認現有檔名或補建正式卡，再加入完整索引：

- Framer 3.0 Agents＋Branches
- Reuters MCP Server
- Sim
- JustVibe

────────────────

## 使用規則

新增工具卡時：

1. 依 `CARD-SCHEMA.md` 填寫分類、tags、use_case 與 Cloudhaven 狀態。
2. 同步更新本索引。
3. `approved` 代表已可納入正式工作流；`candidate` 不代表已授權直接使用。
4. 同一工具狀態改變時，更新原卡與本索引，不建立重複卡。
