# 🧬 Prompt DNA

`prompt-dna/` 保存早報與 Prompt 的核心 DNA，避免 Prompt Drift。

當一段 prompt 真正長出風格、節奏與有效結構，就值得把它拆出骨架留在這裡。

這不是 prompt 墳場，而是讓 Cloudhaven 保留語氣、邏輯與作戰手感的基因庫。

────────────────
## 收什麼

Prompt DNA 保存的是：

- 語氣
- 邏輯
- 節奏
- 世界觀
- 作戰手感
- 不能失去的核心句
- Prompt Drift 檢查問題
- 常見走味症狀

────────────────
## 不收什麼

不要收：

- 完整 Prompt 備份
- 單日輸出
- 工具卡
- 能力卡
- 方法論全文
- 還沒有定稿的草稿

完整方法論請放：

```text
library/frameworks/
```

具體工具請放：

```text
library/ai-tools/
```

AI 能力請放：

```text
library/zoo/
```

────────────────
## Prompt DNA 與 Framework 的差異

Prompt DNA 保存：

> 為什麼它成功？

Framework 保存：

> 怎麼做？

例子：

```text
prompt-dna/show-director-dna.md
library/frameworks/show-director-framework-v1.md
```

────────────────
## 什麼時候該建立 Prompt DNA？

當一個 Prompt 出現以下特徵時，就值得建立：

- 已經有穩定風格
- 讀起來明顯有節奏
- 多次使用後效果穩定
- 改版時容易走味
- 有幾句核心句不能丟
- 已經成為某個固定節目或工作流的核心

────────────────
## 🔗 連結規則

Prompt DNA 應該連回對應 Framework。

例子：

```markdown
[Show Director Framework V1](../library/frameworks/show-director-framework-v1.md)
```

Framework 也應該連回 Prompt DNA。

例子：

```markdown
[Show Director DNA](../../prompt-dna/show-director-dna.md)
```

────────────────
## 🦞 龍蝦一句話

「Prompt 可以改版，但基因不能走味。」
