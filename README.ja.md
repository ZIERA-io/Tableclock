# Tempus

**ディスプレイ・TVウォール・オフィス画面向けのカスタマイズ時計。**
好みのデザインに設定して、短いリンクでシェアできます。アプリのインストールもアカウントも不要です。

[![Vercelでデプロイ](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ZIERA-io/clock_web)

---

## 概要

Tempusはブラウザで動くカスタマイズ時計です。色、文字盤スタイル、ロゴ、タイムゾーンを1分以内に設定してURLでシェアできます。すべての設定がリンクに埋め込まれているので、開くとそのまま復元されます。

Supabaseを接続すると、アップロードしたロゴがサーバーに保存され、リンクが `https://tableclock.io/スタジオ` のように短くなります。

---

## 機能

**時計**
- アナログ / デジタル切り替え
- アナログ文字盤5種 — クラシック、ミニマル、モダン、レトロ、スポーツ
- 時計サイズ調整（40–130%）
- タイムゾーン、24時間表示、秒針・日付表示

**外観**
- 12種のカラーテーマプリセット
- 背景・文字盤・目盛り・針・アクセント・テキストの6色を個別調整
- 中央ロゴ — テキスト/絵文字、画像URL、ファイルアップロード
- デジタル用フォント9種

**シェア**
- 全設定をURLハッシュにエンコード — バックエンド不要
- Supabase接続で `tableclock.io/名前` 形式の短縮リンク対応
- アップロード画像はSupabase Storageに保存されURLで配信

**UI / 言語**
- 韓国語・英語・日本語・中国語対応
- 3秒操作なしでコントロールが自動フェード

**ディスプレイ・TV向け機能**
- Wake Lock APIでスクリーンオフを防止
- フルスクリーンモード（ネイティブFullscreen API）
- ロビーや会議室の常設ディスプレイとしてそのまま使用可能

---

## 始め方

```bash
git clone https://github.com/ZIERA-io/clock_web.git
cd clock_web
npm install
npm run dev
```

http://localhost:5173 を開いてください。時計画面をクリックすると設定パネルが開きます。

## ビルド

```bash
npm run build
```

成果物は `dist/` に出力されます。

---

## 短縮リンクの設定（オプション）

Supabaseなしでも URLハッシュ方式でシェアできます。画像をアップロードするとリンクが長くなりますが、短縮リンクとサーバー画像保存を使いたい場合はSupabaseを接続してください。

**1. Supabaseプロジェクト作成** — https://supabase.com

**2. `.env` ファイルを作成:**

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

**3. SQLスキーマを実行** — `.env.example` 参照

**4. `logos` ストレージバケット作成**（パブリックバケット、INSERTポリシー `true`）

設定後:
- 設定パネルの **リンク名** フィールドに好きな名前を入力（例: `studio`）
- **保存** をクリック → `https://tableclock.io/studio` が生成される
- 重複する名前はエラーで拒否される
- ログインなしで作成したリンクは後から編集不可

---

## デプロイ

`vercel.json` に短縮リンクのルーティング設定が含まれています。

```bash
npx vercel --prod
```

短縮リンクを使う場合、VercelプロジェクトのEnvironment Variablesに `VITE_SUPABASE_URL` と `VITE_SUPABASE_ANON_KEY` を追加してください。

---

## 技術スタック

| レイヤー | 技術 |
|---|---|
| フロントエンド | Vite · React 18 · TypeScript |
| 時計レンダリング | SVG + `requestAnimationFrame`（60fps、React再レンダーなし） |
| バックエンド（任意） | Supabase（Postgres + Storage） |
| ホスティング | Vercel |
| アナリティクス | Vercel Analytics |

---

[English](README.md) · [한국어](README.ko.md)
