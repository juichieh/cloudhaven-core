# 🏛️ Cloudhaven City Map

`architecture/` 保存 Cloudhaven Core 的結構藍圖與城市規劃。

這裡不是施工紀錄，而是回答：

> 母艦怎麼運作？

包含：

- 模組之間的關係
- 資料如何流動
- Workspace 與 Room 怎麼分工
- Agent 如何進出與回航
- 新模組何時應該建立
- 如何避免資料夾職責重複
- 未來擴建時要維持的骨架原則

────────────────
## 與根目錄 ARCHITECTURE.md 的關係

根目錄的 `ARCHITECTURE.md` 是 Cloudhaven 的入口地圖。

`architecture/` 是更完整的城市規劃區。

```text
ARCHITECTURE.md
→ 給第一次進來的人快速理解整艘母艦

architecture/
→ 保存更細的結構設計、模組關係與擴建規則
```

────────────────
## 不收什麼

不要放：

- 單一工具卡 → `library/ai-tools/`
- AI 能力卡 → `library/zoo/`
- 方法論卡 → `library/frameworks/`
- Prompt DNA → `prompt-dna/`
- Debug checklist → `skills/`
- 單日研究筆記 → `research/`
- Agent 個性設定 → `agents/`

────────────────
## 🦞 龍蝦一句話

「architecture/ 是母艦設計圖，不是雜物間。」
