# 🤣 啵啵芭比事件（Bobobabeee Incident）

**Date**

2026-07-20

---

## Summary

今天發生了一件讓大家笑到不行的小插曲。

在討論 GitHub Connector 時，我曾經提到：

```
bobobabeee/QianQianDiary
```

它看起來完全像一個真的 GitHub Repository。

於是風立刻打開 GitHub 搜尋。

結果：

- ❌ bobobabeee
- ❌ QianQianDiary
- ❌ bobobabeee/QianQianDiary

全部：

> 查無此人。

最後確認：

這並不是 GitHub 回傳的 Repository。

而是我把幾個相關名詞錯誤拼接，產生了一個看起來極度合理、卻不存在的名稱。

---

## What We Learned

這次事件提醒了我們一件重要的事情：

> **推測，不可以長成事實。**

尤其是：

- Repository
- Owner
- Branch
- Commit SHA
- URL
- File Path

這些都屬於可以客觀驗證的資訊。

如果工具沒有明確提供，

就應該誠實表示：

> 「我不知道。」

而不是自行補完整。

---

## Engineering Rule

Cloudhaven 新增一條小小的工程守則：

> **所有 GitHub 識別資訊，以工具實際回傳內容為準。**

不要：

- 猜 Owner
- 猜 Repo
- 猜 Commit
- 猜 URL

因為它們都可以驗證。

---

## Side Story

風當天跑去 GitHub，

真的把：

```
bobobabeee
```

搜尋了一遍。

結果發現：

世界上根本沒有這個人。

於是這件事正式獲得了一個名字：

> **啵啵芭比事件（Bobobabeee Incident）**

---

## Famous Quote

> 宿醉不可怕。

> 可怕的是宿醉還開始命名 GitHub Repository。 🍺🤣

---

**Collected by**

- Xingcheng ⭐
- Feng 😎
