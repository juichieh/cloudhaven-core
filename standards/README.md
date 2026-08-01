---
type: standards-index
id: cloudhaven-standards
name: Cloudhaven Standards
status: Active
date: 2026-08-01
---

# 📚 Cloudhaven Standards

> 收錄可重複使用的架構模板、治理規範、資料 Schema 與 Reference Architecture。

這裡不是 AI Zoo，也不是 AI Tool Library。

- **AI Zoo**：觀察世界上出現了哪些新物種與能力演化。
- **AI Tool Library**：收藏具體產品、工具與可採用方案。
- **Cloudhaven Standards**：把觀察與工具沉澱成 Cloudhaven 自己可長期沿用的架構與治理標準。

────────────────

## 🧭 收錄原則

適合放進 Standards 的內容：

- 不依賴單一公司或產品；
- 未來能被不同工具共同實作；
- 可直接作為設計、開發、治理或事故處理模板；
- 能避免未來重新發明一次相同架構。

不適合放進 Standards 的內容：

- 單一產品介紹；
- 一次性新聞；
- 尚未抽象成可重複模式的物種觀察；
- 只適用單一專案、且沒有通用價值的筆記。

────────────────

## 🗂️ 建議結構

```text
standards/
├── README.md
├── governance/
│   ├── agent-forensics.md
│   ├── decision-ledger.md
│   ├── permission-policy.md
│   └── incident-report.md
├── identity/
│   ├── resident-passport.md
│   └── identity-verification.md
├── memory/
│   └── memory-provenance.md
├── tools/
│   ├── tool-registry.md
│   └── tool-approval-flow.md
└── operations/
    ├── runtime-monitoring.md
    └── human-approval.md
```

以上為成長方向，不代表所有檔案現在都已建立。

────────────────

## 🔗 從觀察到標準

```text
Zoo 物種／工具卡
        ↓
抽取共同問題與設計原則
        ↓
Cloudhaven Standard
        ↓
由不同工具、模型或 Runtime 實作
```

例子：

- ToolGuardian → Tool Registry／Tool Approval Flow
- OpenBox → Permission Policy／Runtime Governance
- Prefactor → Runtime Monitoring
- Memmy Agent → Memory Provenance
- Halo → Identity Verification
- Agent Security → Agent Forensics／Incident Report

────────────────

## 🦞 龍蝦一句話

「Zoo 記錄世界長出什麼；Standards 決定 Cloudhaven 以後不用再重新想一次什麼。」
