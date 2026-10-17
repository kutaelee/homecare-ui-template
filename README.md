<div align="center">
  <a href="https://gyuforge.com/"><img src="docs/gyuforge-banner.svg" width="100%" alt="ホームケア UI テンプレート — 制作：GYUFORGE"></a>

  # ホームケア UI テンプレート — 日本語版
  **制作：[GYUFORGE](https://gyuforge.com/)** · Next.js / React / Tailwind CSS · [ライセンス：MIT](LICENSE)
</div>

> **独立した日本語エディションです。** 韓国語サイト内の言語切り替えではありません。ページも管理画面も日本語のコンテンツを使います。

韓国語版: [main](https://github.com/kutaelee/homecare-ui-template/tree/main) · 日本語版: **japanese** · [日本語デモを開く](https://homecare-ui-template-ja.vercel.app/)

**日本語ライブデモ:** https://homecare-ui-template-ja.vercel.app/

**韓国語ライブデモ:** https://homecare-ui-demo-public.vercel.app/

## 日本語版を起動する

**準備:** Node.js 20.9 以上と npm。

### Gitから

```bash
git clone --branch japanese --single-branch https://github.com/kutaelee/homecare-ui-template.git homecare-ui-template-ja
cd homecare-ui-template-ja
npm install
npm run dev
```

### ZIPから

この [japanese ブランチ](https://github.com/kutaelee/homecare-ui-template/tree/japanese) で「Code → Download ZIP」を選び、解凍したフォルダで実行します。

```bash
npm install
npm run dev
```

ブラウザで http://localhost:3000 を開きます。終了は `Ctrl + C`。

```bash
npm run public-check  # 日本語版の構造・元の事業者情報・秘匿パターンを検査
npm run test          # public-check、ESLint、TypeScript
npm run build         # ビルド
npm run start         # ビルド済みアプリの起動
```

## 収録ページ

| ページ | URL |
| --- | --- |
| トップ | `/` |
| サービスと詳細 | `/services`, `/services/grout`, `/services/aircon-cleaning` ほか |
| 事例ギャラリーと詳細 | `/cases`, `/cases/sample-01` ほか |
| FAQ・ブログ風カード | `/faq`, `/blog` |
| お問い合わせ | `/contact`, `/inquiry/new` |
| 予約 | `/reservation` |
| Q&A | `/qna`, `/qna/new`, `/qna/sample-1` |
| 会員・決済（UIのみ） | `/login`, `/signup`, `/mypage`, `/payment/mock-bank-transfer` |
| 管理画面 | `/admin`, `/admin/inquiries`, `/admin/reservations`, `/admin/qna`, `/admin/cases`, `/admin/services`, `/admin/faqs`, `/admin/assets`, `/admin/settings` |
| 利用案内 | `/terms`, `/privacy` |

**管理画面はサンプルのみ:** 架空の見積もり・予約情報、Q&A返信、事例、FAQ、サービス紹介、画像素材、設定のUIを再現しています。編集はReactの一時的な状態だけです。サーバー保存・認証・送信は行いません。

## カスタマイズ

- `src/components/JapaneseSite.tsx` — 公開ページ、グローバルヘッダー・フッター、フォームUI
- `src/components/JapaneseAdmin.tsx` — 管理画面と編集操作
- `src/data/japanese.ts` — 架空の事業者情報、サービス、事例、FAQ
- `src/app/globals.css` — 配色、Noto Sans JP
- `public/illustrations/` — サンプルSVG

日本語版の実際の画面は、上記の公開デモで確認できます。スクリーンショットは現時点で未収録です。韓国語版の画像を日本語版のものとして流用していません。

## 安全性・ライセンス

実在の企業情報、個人情報、旧ブログのパーサーやRSS URL、予約API、決済・認証キーは使用しません。架空の東京・横浜・さいたまの地名は**例示のみ**です。実運用にはバックエンド、適切な個人情報保護対策、利用規約などが必要です。

`npm run public-check` は静的パターン検査であり、完全な監査ではありません。リリース前に `npm run test` / `npm run build` とブラウザ操作検証を推奨します。

[ライセンス：MIT](LICENSE) — 著作権表示：© 2026 GYUTAE LEE。制作：[GYUFORGE](https://gyuforge.com/)。フッターの「制作」リンクは任意のクレジットであり、MITライセンスの追加条件にはしません。
