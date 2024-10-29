<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo com PHP</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Bem-vindo!</h1>
        <p>A data e hora atual é:</p>
        <!-- Exibir conteúdo PHP -->
        <div class="datetime">
            <?php 
            // Inclui o arquivo 'projeto.php' que contém o código PHP necessário
            // Este arquivo pode ter funções ou comandos que geram a data e hora atual
            include 'projeto.php'; 
            ?>
        </div>
    </div>
</body>
</html>
