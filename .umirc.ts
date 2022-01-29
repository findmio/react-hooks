import { defineConfig } from 'dumi';

export default defineConfig({
  title: '@findmio/react-hooks',
  favicon: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  locales: [['zh', '中文']],
  publicPath: './',
  history: { type: 'hash' },
});
