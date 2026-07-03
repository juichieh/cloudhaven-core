# 🛠️ Skills

`skills/` 保存可重用流程、Debug Checklist、操作套路與施工手感。

它讓 Cloudhaven 的經驗可以被複製，

而不是每次都從零摸索。

────────────────
## Skills 是什麼？

Skill 回答的是：

> 這件事要怎麼一步一步做？

它偏向可執行、可重複、可檢查的流程。

可以是：

- Debug checklist
- 操作流程
- 施工 SOP
- 檢查清單
- 任務套路
- 錯誤排查順序
- Agent 執行任務前後的檢查步驟

────────────────
## 收什麼

適合放進 `skills/` 的內容：

- 已經驗證有效的工作流程
- 多次重複出現的操作套路
- 排錯時可以照著做的 checklist
- Agent 可以直接拿去執行的步驟
- 人類與 Agent 都能照著跑的施工手感

例子：

```text
prompt-drift-check.md
travel-page-audit-checklist.md
github-library-update-sop.md
```

────────────────
## 不收什麼

不要收：

- 方法論 / 思考框架 → `library/frameworks/`
- 長期認知 / 分類索引 → `knowledge/`
- 具體工具 → `library/ai-tools/`
- AI 能力 / 新物種 → `library/zoo/`
- Prompt 核心 DNA → `prompt-dna/`
- 單日研究筆記 → `research/`
- Agent 角色設定 → `agents/`
- Workflow 檔案或 Workflow 資料夾
- Action 顯示文字

────────────────
## Skills vs Frameworks

這是最容易重複的地方。

請用這條規則判斷：

```text
Framework = 方法論 / 思考框架 / 為什麼這樣做
Skill     = 可執行套路 / 一步一步怎麼做
```

例子：

```text
Show Director Framework V1
→ 如何把資訊導演成一集節目
→ 放 library/frameworks/

Prompt Drift Check Skill
→ 每次改早報前要檢查哪些項目
→ 放 skills/
```

如果內容偏「觀念與結構」，放 Framework。

如果內容偏「照著跑的步驟」，放 Skill。

────────────────
## Skills vs Knowledge

```text
Knowledge = 我們知道什麼
Skill     = 我們怎麼做
```

例子：

```text
Knowledge：旅行團常見雷點有哪些
Skill：檢查旅行團頁面時，依序檢查哪些欄位
```

────────────────
## Skill vs Workflow

Workflow 不是 Cloudhaven 的保存單位。

Workflow 不建立模組。

Workflow 不建立資料夾。

Workflow 不保存。

Workflow 只是人類用來描述「多個 Skill、Decision、Loop、Judge、Retry、Permission 串在一起」的形容詞。

真正要保存的是底下可重複使用的 Skill 與相關檢查套路。

例子：

```text
Travel Workflow
= Parser Skill
+ Journey Skill
+ Hotel Skill
+ Audit Skill
+ Decision Skill
+ Decision / Loop / Judge / Retry / Permission
```

所以：

```text
不要建立 workflow/
不要建立 travel-workflow.md 當正式能力
要拆成可重用 Skill，必要時在 room 裡描述它們如何串接
```

一句話：

> Workflow 是 Skill Chain，不是新物種。

────────────────
## Action vs Skill

Action 是 UI 顯示層。

Skill 是 Engine 執行層。

```text
Action = 使用者看到「目前正在做什麼」
Skill  = 系統真正用來完成任務的可重用能力
```

例子：

```text
Action：正在分析旅行團
Engine：travel-page-audit-checklist Skill
```

Action 不需要保存成正式知識卡。

如果只是 UI 顯示文字，不要放進 `skills/`。

────────────────
## Skill vs Tool

Skill 是 Cloudhaven 內部可重用的操作套路。

Tool 是外部工具、API、服務或產品。

```text
Skill = 怎麼做
Tool  = 用什麼做
```

例子：

```text
GitHub Library Update Skill
→ 一套更新 repo、檢查路徑、commit 回報的流程

GitHub
→ 外部工具 / 平台
```

如果它是具體產品、服務、API、MCP、App，就放 `library/ai-tools/`。

如果它是「如何操作這些工具完成任務」的可重用步驟，才放 `skills/`。

────────────────
## UI / Engine 共識

Cloudhaven 採用這個邊界：

```text
UI 顯示層：Action
描述用語：Workflow
Engine 執行層：Skill + Decision + Loop + Judge + Retry + Permission
外部能力：Tool
```

### Decision vs Judge

Decision 是決策層，負責選擇下一步、排序、取捨與路線判斷。

Judge 是審查層，負責檢查結果是否合格、是否有漏洞、是否需要重跑。

```text
Decision = 決定怎麼走
Judge    = 檢查走得對不對
```

其中只有 `Skill` 和 `Tool` 是主要保存單位。

`Workflow` 只是描述 Skill Chain 的詞。

`Action` 只是 UI 顯示目前狀態的詞。

────────────────
## 建議格式

Skill 建議包含：

- 目的
- 使用時機
- 輸入
- 步驟
- 檢查清單
- 常見錯誤
- 完成判準
- 可交給哪個 Agent 執行
- 可能呼叫哪些 Tool

────────────────
## 🦞 龍蝦一句話

「Workflow 只是形容一串連招；真正要練的是 Skill，真正要判斷路線的是 Decision。」
