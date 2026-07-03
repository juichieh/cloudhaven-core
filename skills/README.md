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

────────────────
## 🦞 龍蝦一句話

「Framework 是招式原理，Skill 是照著打的連招表。」
