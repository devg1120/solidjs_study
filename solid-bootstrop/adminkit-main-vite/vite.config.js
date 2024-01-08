import { defineConfig } from 'vite';

export default defineConfig({
  // index.html の場所
  root: 'static',
  // アセットなどのパスを変換するベースとなるパス
  // `/foo/` とすると `/foo/` 始まりのパスに変換される
  base: '/',
  // 静的ファイルの場所
  //  `public` を指定した場合 `<root>/public` が静的ファイルの格納場所になる
  publicDir: 'public',
});
