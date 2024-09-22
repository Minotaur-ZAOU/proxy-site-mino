<?php
if (isset($_GET['url'])) {
    $url = $_GET['url'];

    // URLが有効かどうかをチェック
    if (filter_var($url, FILTER_VALIDATE_URL)) {
        // コンテンツを取得
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        $content = curl_exec($ch);
        curl_close($ch);

        // コンテンツを表示
        echo $content;
    } else {
        echo "無効なURLです。";
    }
} else {
    echo "URLが指定されていません。";
}
?>
