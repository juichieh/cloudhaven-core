# Cloudhaven Museum

Cloudhaven Museum V1 是位於 `rooms/` 的靜態網站 Prototype。

目前範圍：

```text
Museum Lobby
└── Italy Wing
    └── Florence
        ├── Museum Navigation
        └── 5 Exhibits
```

## Preview

直接開啟：

```text
website/index.html
```

GitHub Pages 由以下 workflow 自動發布：

```text
.github/workflows/cloudhaven-museum-pages.yml
```

它只會上傳 `website/`，不會把 Cloudhaven Core 的其他內容暴露到網站根目錄。

預期網址：

```text
https://juichieh.github.io/cloudhaven-core/
```

在 GitHub Pages 完成一次性啟用前，可使用等效靜態預覽：

```text
https://raw.githack.com/juichieh/cloudhaven-core/main/rooms/cloudhaven-museum/website/index.html
```

第一次開啟 RawGitHack 會顯示 External Content Notice，確認來源為
`juichieh/cloudhaven-core` 後點擊 `Open the page` 即可進入 Museum。

本 Prototype 僅使用 HTML、CSS 與少量 JavaScript，不需要建置步驟或套件管理器。

## Status

- Phase 1 — Museum Design Language: Approved
- Phase 2 — Florence Wing IA & Wireframe: Approved
- Phase 3 — HTML Prototype: Ready for UI Review

設計與命名規格請見 [SPEC.md](SPEC.md)，圖片來源與授權請見 [CREDITS.md](CREDITS.md)。
