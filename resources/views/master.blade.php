<!DOCTYPE html>
<html lang="pt-bt">

<head>
    <meta charset="utf-8" />
    <link rel="icon" href="favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no" />
    <meta name="theme-color" content="#FFFFFF" />

    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Cardápio Online</title>
    <meta property="og:title" content="Cardápio Online">
    <meta property="og:description" content="Visualize o nosso Cardápio">
    <meta property="og:url" content="https://pedidu.com.br/">
    <meta property="og:image" content="https://i.imgur.com/lxl1mqk.png">
    <meta property="og:image:alt" content="https://i.imgur.com/lxl1mqk.png">
    <meta property="og:type" content="website">
</head>

<body>
    <div id="root"></div>
    <script src="{{ mix('assets/js/app.js') }}"></script>
</body>

</html>
