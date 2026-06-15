# ZZZ Replica

[絕區零](https://zenless.hoyoverse.com/zh-tw/main) 官方遊戲網站的前端復刻專案，使用 Next.js 15 與 Tailwind CSS v4 建構。

## 技術棧

- **框架**：Next.js 15（App Router）
- **語言**：TypeScript（嚴格模式）
- **樣式**：Tailwind CSS v4（透過 `globals.css` 的 `@theme` 進行 CSS 配置）
- **UI 元件**：shadcn/ui
- **圖示**：lucide-react、react-icons
- **輪播**：Embla Carousel（透過 shadcn）
- **字體**：Geist Sans、Geist Mono、Noto Sans TC

## 快速開始

```bash
npm install
npm run dev
```

開啟 [http://localhost:3000](http://localhost:3000)。

## 指令

```bash
npm run dev      # 啟動開發伺服器
npm run build    # 正式環境建置
npm run lint     # 執行 ESLint
```

## 專案結構

```
src/
├── app/
│   ├── globals.css        # Tailwind v4 @theme 配置、全域 keyframes
│   ├── layout.tsx         # 根佈局 — 字體、metadata、Header
│   └── page.tsx           # 首頁 — 組合所有區塊
├── components/
│   ├── header/            # 固定導覽列，含捲動感知 Logo、下拉選單、行動版導覽
│   ├── banner/            # 全寬橫幅，含 YouTube Modal、下載徽章、平台圖示
│   ├── character/         # 角色展示，含縮圖輪播選擇器
│   ├── newscarousel/      # 新聞區塊，含 Embla 輪播與圓點導航
│   ├── footer/            # 預約表單、社群連結、回到頂部按鈕
│   └── ui/                # shadcn 元件（Button、Carousel、Dialog）
└── lib/
    └── db/
        ├── characters.ts  # 靜態角色資料（9 位角色）
        └── carousel.ts    # 靜態新聞輪播資料（6 則）
```

## 各區塊說明

### Header（導覽列）
固定於頂部的導覽列，包含：
- 捲動感知 Logo 切換（大圖 → 小圖，附淡入縮放動效）
- 桌面版「更多」與「追蹤我們」hover 下拉選單
- 行動版導覽覆蓋層（漢堡選單觸發、clip-path 滑入/滑出動效、「更多」子選單）
- 斷點：行動版 `md`（768px）、桌面版 `lg`（1024px）

### Banner（橫幅）
全寬英雄圖片，包含：
- 桌面版左側留白對齊（`lg:mx-50 xl:mx-60`）
- 播放按鈕開啟 YouTube Modal（自動播放；iframe 常駐 DOM，關閉時清除 src）
- 下載徽章 hover 時有縮放抖動動效
- 平台圖示格與 QR Code（僅桌面版）
- 疊加圖片在 `lg` / `xl` / `2xl` 的響應式縮放

### Character（角色介紹）
- 9 位角色，採對角 clip-path 佈局（白色 / 黃綠色 / 黑色區塊）
- Embla 輪播用於縮圖選擇
- 透過 IntersectionObserver 實現捲動進場動效
- 切換角色時有滑動過場（名稱/浮水印與其他元素採不同位移距離）
- 使用 vw 單位確保各視口一致比例

### NewsCarousel（新聞資訊）
- 6 則新聞，使用 shadcn Carousel（Embla）
- 僅圓點導航，當前圓點以 `#c8ff00` 標示
- 日期與標題顯示於圖片下方（僅桌面版）
- 「查看更多」按鈕：桌面版行內、行動版固定於底部
- 標題文字從右滑入、輪播從下滑入，離開視口時反向

### Footer（頁尾）
- 回到頂部按鈕（白色標籤形狀，懸掛於頂部邊框；行動版置中、桌面版偏左）
- 桌面版（xl）預約表單：手機號碼 + 電子信箱輸入、條款勾選、立即預約按鈕
- 行動版「事前預約」圓形按鈕，點擊開啟 shadcn Dialog Modal（表單內容相同）
- 社群圖示（9 個平台）、法律連結、版權聲明

## 樣式說明

本專案使用 **Tailwind CSS v4**，所有主題自訂皆在 `app/globals.css` 的 `@theme` 區塊中進行，**不使用** `tailwind.config.ts`。

```css
/* 正確做法 — 請勿新增 tailwind.config.ts */
@theme {
  --color-primary: #c8ff00;
}
```
