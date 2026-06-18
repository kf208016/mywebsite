# 個人名片網站

活潑有設計感的單頁個人形象網站，純靜態（HTML / CSS / JS），可直接丟上 GitHub Pages。

## 檔案說明

| 檔案 | 用途 |
|------|------|
| `index.html` | 網站內容。搜尋 `✏️ 改這裡` 就能找到所有要替換成你自己資料的地方 |
| `style.css` | 樣式與配色。想換顏色改最上面的 `:root` 變數即可 |
| `script.js` | 進場動畫與年份 |

## 在本機預覽

直接用瀏覽器打開 `index.html` 就能看。

## 部署到 GitHub Pages

1. 在 GitHub 建一個新的 repo（例如 `my-website`）。
   - 若想要網址是 `https://你的帳號.github.io`，repo 名稱要取成 `你的帳號.github.io`。
2. 把這個資料夾推上去：
   ```bash
   git init
   git add .
   git commit -m "個人名片網站"
   git branch -M main
   git remote add origin https://github.com/你的帳號/my-website.git
   git push -u origin main
   ```
3. 進 repo 的 **Settings → Pages**，在 *Build and deployment* 的 *Source* 選 **Deploy from a branch**，Branch 選 `main` / `/ (root)`，按 Save。
4. 等一兩分鐘，網址會出現在同一頁：
   - `https://你的帳號.github.io/my-website/`（一般 repo）
   - `https://你的帳號.github.io/`（repo 名為 `你的帳號.github.io`）

之後每次 `git push`，網站就會自動更新。

## 換配色

打開 `style.css` 最上面：

```css
--accent:   #ff5d8f;  /* 粉 */
--accent-2: #6c5ce7;  /* 紫 */
--accent-3: #00e0c7;  /* 青 */
```

把這三個色碼換成你喜歡的就行。
