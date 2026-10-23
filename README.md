# Game Design Lab

名作ゲームの仕組みを、遊べるデモで分解する。1日10分、ゲームプランナーの入門ノート。

**遊んで、変えて、面白さを学ぶ。**

GitHub Pages（Jekyll）で公開する静的サイトです。ビルド作業は GitHub が自動で行うので、ファイルを追加して push するだけで更新されます。

## 公開のしかた（最初の1回だけ）

1. このリポジトリを GitHub に push する
2. GitHub のリポジトリ画面 → **Settings → Pages**
3. **Build and deployment** の Source を「Deploy from a branch」、Branch を `main` / `/ (root)` にして Save
4. 数分後、`https://<ユーザー名>.github.io/<リポジトリ名>/` で公開される

> リポジトリ名を `game-design-lab` 以外にした場合は、`_config.yml` の `baseurl` をリポジトリ名に合わせて変更してください（例：`baseurl: "/my-lab"`）。

## 教材を1本追加する

1. `docs/lesson-template.html` をコピーして `_lessons/day006.html` を作る
2. 遊べるデモを `demos/day006.html` に置く（1ファイルで完結するHTML）
3. commit して push

トップページの「今日の教材」、教材一覧、前後の教材リンクは自動で更新されます。

## フォルダ構成

```
_config.yml           サイト設定（タイトル・baseurl）
_lessons/             教材本文（dayNNN.html）
demos/                遊べるデモ（dayNNN.html・単体で動く）
_layouts/             ページの枠（default / lesson）
_includes/            共通部品（ヘッダー・フッター・動画・デモ）
assets/css/lab.css    デザイン（色・文字・余白はファイル先頭の変数で変更）
assets/js/archive.js  教材一覧の検索・絞り込み
lessons/index.html    教材一覧ページ
index.html            トップページ
docs/                 教材テンプレート（サイトには公開されない）
```

## 手元で確認したいとき（任意）

Ruby が入っていれば、次のコマンドで `http://localhost:4000/game-design-lab/` に表示できます。

```sh
bundle install
bundle exec jekyll serve
```
