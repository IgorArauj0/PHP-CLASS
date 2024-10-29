<?php
// Define o fuso horário padrão para 'America/Sao_Paulo', garantindo que a data e hora
// exibidas estejam corretas para este local. 
date_default_timezone_set('America/Sao_Paulo');

// Exibe a data e hora atuais formatadas no padrão 'dia/mês/ano hora:minuto:segundo'.
// A função 'date' pega o formato especificado e retorna a data e hora atuais.
echo date("d/m/Y H:i:s");
?>
