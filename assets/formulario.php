<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario MySQL</title>
</head>
<style>

</style>
<body>
    <form method="post">
    <h1 class="page-title">Cadastro de Produtos</h1>
        <label for="nome_produto">Nome do Produto</label>
        <input type="text" id="nome_produto" name="nome_produto" required>

        <label for="marca">Marca</label>
        <input type="text" id="marca" name="marca" required>

        <label for="qtd_estoque">Quantidade no Estoque</label>
        <input type="text" id="qtd_estoque" name="qtd_estoque" required>

        <label for="preco">Preço</label>
        <input type="text" id="preco" name="preco" required>

        <label for="tipo">Tipo</label>
        <input type="text" id="tipo" name="tipo" required>

        <label for="descricao">Descrição</label>
        <input type="text" id="descricao" name="descricao" required>

        <button type="submit" value="Cadastrar">Cadastrar</button>
    </form>

</body>
</html>

<?php
  if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $sql = mysqli_connect("localhost", "root", "", "balademel");

    $nome_produto = $_POST['nome_produto'];
    $marca = $_POST['marca'];
    $qtd_estoque = $_POST['qtd_estoque'];
    $preco = $_POST['preco'];
    $tipo = $_POST['tipo'];
    $descricao = $_POST['descricao'];
    mysqli_query($sql, "insert into mel (nome_produto, marca, qtd_estoque, preco, tipo, descricao) VALUES ('$nome_produto', '$marca', '$qtd_estoque', '$preco', '$tipo', '$descricao')");
?>