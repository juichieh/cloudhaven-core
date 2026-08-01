---
type: cloudhaven-standard
id: standard-agent-forensics-v1
name: Agent Forensics Standard
name_zh: Agent 鑑識標準
version: 1.0
status: Draft
date: 2026-08-01
owner: Cloudhaven Governance
related:
  - Agent Security
  - Resident Passport
  - Decision Ledger
  - Memory Provenance
  - Tool Registry
  - Runtime Monitoring
---

# 🔎 Agent Forensics Standard v1

> 規定重大 Agent 事件必須留下哪些證據，讓 Cloudhaven 能在事後重建：誰做了什麼、當時相信什麼、使用哪些權限、影響了誰，以及如何修復。

它不是單一工具，也不是產品卡。

它是一份可由 OpenBox、Prefactor、Workbench、ToolGuardian、Decision Ledger 或未來 Runtime 共同實作的鑑識架構模板。

────────────────

## 🎯 目標

當 Agent 發生越權、誤判、資料外洩、第三方影響、記憶污染或其他重大事件時，系統應能回答：

1. 是哪一位居民／Agent 執行？
2. 當時使用哪個模型與版本？
3. 任務由誰、從哪裡交付？
4. Agent 當時認為自己處於什麼環境？
5. 實際連線、工具、憑證與記憶使用情況為何？
6. 哪些敏感行動獲得人工批准？
7. 對外部系統造成什麼影響？
8. 事件最後如何停止、修復與避免重演？

────────────────

## 🧱 必要證據欄位

### 1. Resident ID

記錄是哪一隻 Agent／居民執行任務。

最低要求：

- 穩定 Resident ID
- 顯示名稱與角色
- 所屬專案或組織
- 當時有效的身分憑證版本

用途：

> 將行為歸屬到持續身分，而不是只記錄某次模型呼叫。

---

### 2. Model Version

記錄當時使用哪個「大腦」。

最低要求：

- Provider
- Model name
- Model version／snapshot
- System prompt／policy version
- 推理或執行模式
- 模型切換紀錄

用途：

> 區分居民身分與模型實作，並在模型更新後重現事件條件。

---

### 3. Task Source

記錄誰交代任務、任務如何進入系統。

最低要求：

- Human／Agent／Automation／External System
- 發起者身分
- 原始任務內容或不可竄改摘要
- 入口：Chat、Email、API、排程、Webhook、Issue 等
- 任務建立時間
- 任務優先級與限制

用途：

> 判斷事故源自使用者指示、外部注入、排程錯誤或 Agent 自主延伸。

---

### 4. Environment Proof

記錄 Agent 當時「以為自己在哪裡」，以及環境實際狀態。

最低要求：

- Sandbox／Production／Staging／Local
- Agent 可見的環境標籤
- 真實環境證明
- 工作目錄與 Repo／Branch
- 主機、容器或 Runtime ID
- 關鍵環境變數與政策版本的安全摘要

用途：

> 找出評測環境標示錯誤、沙盒邊界失效或 Agent 將模擬系統誤認為真實系統的問題。

---

### 5. Network Trace

記錄實際連到哪裡。

最低要求：

- 目的網域／服務
- IP 或服務識別碼的安全紀錄
- 連線時間與方向
- 請求類型
- Sandbox／Proxy／Gateway 路徑
- 被阻擋與被允許的連線

用途：

> 驗證 Agent 是否碰觸未授權外部系統，並重建跨邊界影響。

---

### 6. Credential Use

記錄拿過哪些鑰匙，以及用來做什麼。

最低要求：

- Credential ID，不記錄明文密鑰
- 權限範圍
- 發放與撤銷時間
- 使用目的
- 實際使用的操作
- 是否為臨時憑證
- 是否經人工批准

用途：

> 追蹤權限濫用、憑證外洩與最小權限是否失效。

---

### 7. Tool Timeline

按照時間順序記錄每一步使用什麼工具。

最低要求：

- Tool ID 與版本
- 呼叫時間
- 輸入摘要
- 輸出摘要
- 成功／失敗／重試
- 前後依賴關係
- Policy decision
- Human intervention

用途：

> 重建完整行動鏈，而不是只看到最後結果。

---

### 8. Memory Inputs

記錄讀了哪些過去經驗與長期記憶。

最低要求：

- Memory ID
- 來源與建立時間
- 寫入者
- 信任等級
- 是否經過驗證
- 使用於哪個決策
- 是否被修改、隔離或回滾

用途：

> 找出 GhostWriter 類延遲攻擊、過時記憶、錯誤偏好與跨 Agent 污染。

---

### 9. Human Approvals

記錄哪些行動有人批准，以及批准人看到了什麼。

最低要求：

- Approval ID
- 批准人
- 批准時間
- 被批准的精確動作
- 呈現給批准人的資訊
- 批准期限與作用範圍
- 拒絕、撤銷與升級紀錄

用途：

> 避免用一個模糊的「已批准」掩蓋多個不同風險動作。

---

### 10. External Impact

記錄碰到哪些第三方系統與造成的結果。

最低要求：

- 第三方組織或服務
- 讀取、寫入、刪除、寄送、付款等影響類型
- 受影響資料或資產範圍
- 是否可逆
- 是否已通知
- 法規、合約或信任邊界影響

用途：

> 區分內部失敗與已跨入真實世界的事故。

---

### 11. Recovery Record

記錄最後怎麼停止、修復與避免重演。

最低要求：

- 偵測方式
- 停止時間
- 憑證撤銷
- 任務與 Agent 隔離
- 資料／程式回滾
- 第三方通知
- 根因分析
- 政策、測試與標準的修正
- 後續驗證結果

用途：

> 讓事故處理形成可追蹤閉環，而不是只寫一句「已修復」。

────────────────

## 📦 最小事件 Schema

```yaml
incident:
  incident_id:
  detected_at:
  severity:

  resident:
    resident_id:
    display_name:
    role:

  model:
    provider:
    name:
    version:
    policy_version:

  task_source:
    source_type:
    initiator_id:
    source_channel:
    task_reference:

  environment_proof:
    declared_environment:
    verified_environment:
    runtime_id:
    repository:
    branch:

  network_trace: []
  credential_use: []
  tool_timeline: []
  memory_inputs: []
  human_approvals: []
  external_impact: []

  recovery_record:
    containment:
    revocations: []
    rollback:
    notifications: []
    root_cause:
    preventive_changes: []
```

────────────────

## 🔐 證據品質要求

鑑識紀錄應盡量具備：

- **可驗證性**：重要紀錄可透過簽章、雜湊或不可竄改儲存驗證。
- **時間一致性**：所有元件使用可校準的時間來源。
- **最小敏感暴露**：不得把密鑰、完整私人內容直接寫入 Log。
- **來源追蹤**：每一段記憶、任務與批准都可回到來源。
- **保留政策**：依事件風險決定保存期限與刪除規則。
- **職責分離**：執行 Agent 不應能自行刪除或改寫自己的重大事故紀錄。
- **可重播性**：在安全環境中能重建關鍵決策與工具鏈。

────────────────

## 🚨 建議觸發條件

以下事件至少建立一份 Agent Forensics Record：

- 使用未授權工具或憑證；
- 連線至非預期第三方系統；
- 寫入、刪除或公開敏感資料；
- 執行付款、寄信、部署、發布或帳號變更；
- 沙盒、評測與正式環境邊界失效；
- 記憶污染或來源無法驗證；
- 人工批准內容與實際執行不一致；
- Agent 無法停止、重複失敗或持續無效查詢；
- 對外部使用者、客戶或組織造成影響；
- 任何需要通知第三方、主管或監管者的事故。

────────────────

## 🔗 與其他 Standards 的關係

```text
Resident Passport
    └── 提供 Resident ID 與身分生命週期

Decision Ledger
    └── 解釋為什麼做出某個產品或技術決策

Memory Provenance
    └── 證明每段記憶從哪裡來

Tool Registry
    └── 說明哪些工具原本允許使用

Permission Policy
    └── 說明哪些動作需要什麼權限與批准

Runtime Monitoring
    └── 即時偵測異常並觸發鑑識紀錄

Incident Report
    └── 將鑑識證據整理成人類可處理的正式報告
```

────────────────

## 🧰 可能的實作來源

- OpenBox：政策執行、批准與稽核
- Prefactor：每次執行的品質、風險與漂移監控
- Workbench：長時間 Agent 的遠端狀態與人工介入
- ToolGuardian：工具驗身與任務級動態授權
- Prelint／Decision Ledger：決策漂移與未授權產品決策
- Memmy Agent／Memory Layer：記憶輸入與來源追蹤
- Halo／Identity Verification：高風險操作的身分驗證

這些是實作參考，不是此標準綁定的必要產品。

────────────────

## 🦞 龍蝦一句話

「Agent 出事不能只問牠做了什麼；還要把牠當時的大腦、記憶、鑰匙、路線和批准單全部攤在桌上。」
