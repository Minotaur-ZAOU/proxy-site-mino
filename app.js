var url = require('url');
var querystring = require('querystring');
var express = require('express');
var Unblocker = require('unblocker');
var Transform = require('stream').Transform;

// Expressアプリケーションの初期化
var app = express();

var unblockerConfig = { prefix: '/proxy/' };
var unblocker = new Unblocker(unblockerConfig);

// Proxyミドルウェアを使用
app.use(unblocker);

// publicフォルダ内の静的ファイルをサーブ
app.use(express.static(__dirname + '/public'));

// no-JS フォールバック
app.get("/no-js", (req, res) => {
    var site = querystring.parse(url.parse(req.url).query).url;
    res.redirect(unblockerConfig.prefix + site);
});

// サーバーのポート設定
const port = process.env.PORT || 8080;

app.listen(port, function() {
    console.log(`Server running at http://localhost:${port}/`);
}).on("upgrade", unblocker.onUpgrade);
