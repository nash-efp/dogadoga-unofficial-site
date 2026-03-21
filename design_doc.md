Project: DOGADOGA Underground Archive (D.U.A.)
1. コンセプト
テーマ: 秘密基地。カオス、サイケデリック、ジャズ・フュージョン、パンク。

目的: DOGADOGAの過去情報の集積、SNS動画の整理、コード譜/TAB譜の提供。

制約: 運用コスト完全無料、セキュアなファン投稿システム。

2. 技術スタック
Framework: Astro (SSGモード)

Styling: Tailwind CSS + CSS Animations (Glitch, Neon effects)

Hosting: GitHub Pages (または Cloudflare Pages)

Backend (Data): GitHub Issues (投稿窓口) + Local Markdown/JSON (データベース代替)

Deployment: GitHub Actions

3. ディレクトリ構造案
Plaintext
/
├── src/
│   ├── content/
│   │   ├── gigs/           # ライブ情報 (Markdown)
│   │   ├── discography/    # 楽曲・アルバム情報 (Markdown)
│   │   └── theory/         # コード・TAB譜 (Markdown/abcjs)
│   ├── components/
│   │   ├── Splash.astro    # 起動演出 (Terminal-like UI)
│   │   ├── GlitchCard.astro # パンク風コンポーネント
│   │   └── VideoEmbed.astro # SNS動画埋め込み用
│   └── pages/
├── public/
│   └── assets/             # 画像・PDF（TAB譜）
├── .github/
│   └── ISSUE_TEMPLATE/     # セットリスト投稿用テンプレート
└── data/
    └── setlists.json       # 投稿からマニュアル反映したデータ
4. UI/UX 仕様
A. スプラッシュ画面 (Splash.astro)
初回訪問時にターミナル風のタイピングアニメーションを表示。

文言: 「DOGADOGAの秘密基地へようこそ！（ファンによる非公式サイトです）」

アクション: [ENTER] ボタンクリックでメインUIへ遷移。

B. ビジュアル・アイデンティティ
Base Color: #0d0d0d (Darker than black)

Accent Color: Neon Green (#39ff14), Cyber Pink (#ff00ff)

Effect: * ホバー時のグリッチエフェクト。

意図的に 1~2deg 傾けたレイアウト（rotate-1, -rotate-1）。

背景に微細なグレイン・ノイズ（ノイズテクスチャ）。

5. 機能要件
Gigs Archive: 開催日、会場、セットリスト、SNS動画の埋め込み表示。

Digital Liner Notes: 楽曲ごとのクレジットと、ファン目線の解説。

Lab (Theory): ギターコード譜の表示。レスポンシブなTAB譜閲覧。

Issue Reporting: サイトからGitHub Issueへ遷移し、テンプレートに沿ってセットリストを提供。

6. データベース・スキーマ (Markdown Frontmatter)
Markdown
---
title: "ライブタイトル or 公演名"
date: 2026-04-23
venue: "下北沢Club Que"
youtube_id: "XXXXXX"
setlist:
  - title: "曲名A"
    is_new: true
  - title: "曲名B"
notes: "即興のジャズセッションが凄まじかった。"
contributor: "Asano"
---