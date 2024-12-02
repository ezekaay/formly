<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <?php include 'components/header.php'; ?>
    
    <main>
        <div class="workspace">
        <?php include 'templates/sidebar.html';?>
        <?php include 'templates/canvas.html';?>
        </div>
    </main>

    <?php include 'components/footer.php'; ?>
    <script type="module" src="assets/js/main.js"></script>

</body>
</html>