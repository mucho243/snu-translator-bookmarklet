# ServiceNow University 翻訳補助ブックマークレット

[ServiceNow Communityのブログ記事「最新技術を最速で学ぶためにブラウザ翻訳を最大限活用しよう」](https://www.servicenow.com/community/japan-blog/%E6%9C%80%E6%96%B0%E6%8A%80%E8%A1%93%E3%82%92%E6%9C%80%E9%80%9F%E3%81%A7%E5%AD%A6%E3%81%B6%E3%81%9F%E3%82%81%E3%81%AB%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6%E7%BF%BB%E8%A8%B3%E3%82%92%E6%9C%80%E5%A4%A7%E9%99%90%E6%B4%BB%E7%94%A8%E3%81%97%E3%82%88%E3%81%86/ba-p/3602010) で紹介されている、LMS環境のフレーム制限（レベル4など）を回避してブラウザ翻訳を効かせるためのブックマークレットです。

## 📥 使い方

1. ブラウザのブックマークバーに新しいブックマークを追加します。
2. URL欄に以下のコードをすべて貼り付けます。
   ```javascript
   javascript:(function(){const t=document.querySelector('iframe.scorm-iframe.is-visible')||document.querySelector('iframe.scorm-iframe');t&&t.src?window.open(t.src,'_blank'):alert('ServiceNow Universityのコース用フレームが見つかりませんでした。');})();
3. ServiceNow Universityのコース画面（メインコンテンツが表示されている状態）で作成したブックマークをクリックします。
4. 新しいタブでコンテンツのソースが直接開くため、ブラウザの「日本語に翻訳」を実行します。

## 💡 簡単インストール
コードのコピーが不要な[専用インストールページ（GitHub Pages）](https://mucho243.github.io/snu-translator-bookmarklet)をご用意しています。ページ内のボタンをブックマークバーにドラッグ＆ドロップするだけで簡単に導入できます。
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/d721b312-190c-4e72-846b-4fa57639ef64" />
