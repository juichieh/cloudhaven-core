# 🤖 AI Tools

`library/ai-tools/` 保存具體 AI 工具。

這裡收藏的是：

> 產品 / 工具 / 服務 / 開源專案 / 可觀察的工具案例

不是能力，也不是方法論，也不是操作套路。

────────────────
## 收什麼

可以收：

- AI 工具
- MCP 工具
- Agent 工具
- Coding 工具
- Research 工具
- Mobile AI 工具
- 商業資料工具
- 值得追蹤的新工具

例子：

```text
acti.md
databox-mcp.md
```

────────────────
## 不收什麼

不要收：

- 能力分類 → 放 `library/zoo/`
- 方法論 → 放 `library/frameworks/`
- Prompt DNA → 放 `prompt-dna/`
- 可執行流程 / checklist / 操作套路 → 放 `skills/`
- Action 顯示文字
- Workflow 描述
- 單日新聞全文
- 尚未判斷價值的臨時素材

────────────────
## Tool vs Skill

這是未來很容易搞混的地方。

請用這條規則判斷：

```text
Tool  = 用什麼做
Skill = 怎麼做
```

Tool 是外部工具、API、服務、產品或平台。

Skill 是 Cloudhaven 內部保存的操作套路、流程與 checklist。

例子：

```text
GitHub
→ Tool / 外部平台
→ 不放 skills/

GitHub Library Update Skill
→ 如何檢查 repo、確認路徑、更新檔案、回報 commit
→ 放 skills/
```

```text
Databox MCP
→ Tool / 具體工具
→ 放 library/ai-tools/

Business Data Audit Skill
→ 如何檢查營運資料、找 KPI 異常、輸出提醒
→ 放 skills/
```

────────────────
## 與 Zoo 的差異

AI Tool 回答：

> 這是什麼工具？

Zoo 回答：

> 這代表什麼能力？

例如：

```text
Acti → 工具
Keyboard Agent → 能力

Databox MCP → 工具
Business Agent → 能力
```

────────────────
## 與 Action / Workflow 的差異

Action 是 UI 顯示文字。

Workflow 只是人類對一串 Skill Chain 的描述。

兩者都不是 AI Tool。

```text
Action：正在查資料
Workflow：旅行團比較流程
Skill：Travel Page Audit Skill
Tool：Google Search / Google Maps / GitHub
```

────────────────
## 建議欄位

AI Tool 卡建議包含：

- Metadata
- 類型
- 一句介紹
- 推薦原因
- 適合誰
- 時效性
- 收藏等級
- Zoo 狀態
- 龍蝦一句話
- 關聯連結

────────────────
## 🔗 連結規則

如果工具對應某個 Zoo 能力卡，請加上反向連結。

例子：

```markdown
[Keyboard Agent](../zoo/keyboard-agent.md)
[Business Agent](../zoo/business-agent.md)
```

────────────────
## 🦞 龍蝦一句話

「Tool 是你拿在手上的工具；Skill 是你知道怎麼用它把事情做好。」
