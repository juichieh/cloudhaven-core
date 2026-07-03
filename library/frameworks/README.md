# 🧠 Frameworks

`library/frameworks/` 保存方法論與可重複使用的思考框架。

Framework 回答的是：

> 這套方法怎麼運作？

不是保存完整 Prompt，也不是保存單日輸出。

────────────────
## 收什麼

可以收：

- 內容框架
- 決策框架
- 評分框架
- 工作流程
- 分析方法
- 可重複使用的思考結構

例子：

```text
show-director-framework-v1.md
cloudhaven-library-workflow.md
```

────────────────
## 不收什麼

不要收：

- Prompt DNA → 放 `prompt-dna/`
- 具體工具 → 放 `library/ai-tools/`
- 能力物種 → 放 `library/zoo/`
- 單日輸出
- 尚未定稿的草稿

────────────────
## Framework 與 Prompt DNA 的差異

Framework 保存：

> 方法 / How

Prompt DNA 保存：

> 靈魂 / Why / Spirit

例子：

```text
Show Director Framework V1
→ 如何把資訊導演成一集節目

Show Director DNA
→ 為什麼它不能走味、哪些句子不能丟
```

────────────────
## 建議欄位

Framework 卡建議包含：

- Metadata
- 核心定位
- 使用方式
- 輸出結構
- 避免事項
- 成功判準
- 可套用場景
- 對應 Prompt DNA
- 原始骨架（如果有）
- 關聯連結

────────────────
## 🔗 連結規則

如果 Framework 有對應 Prompt DNA，請互相連結。

從 Framework 連到 Prompt DNA：

```markdown
[Show Director DNA](../../prompt-dna/show-director-dna.md)
```

從 Prompt DNA 連回 Framework：

```markdown
[Show Director Framework V1](../library/frameworks/show-director-framework-v1.md)
```

────────────────
## 🦞 龍蝦一句話

「Framework 是武功招式，Prompt DNA 是內功心法。」
