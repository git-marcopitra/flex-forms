<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="dist/petr-material/petr-material.css">
    <link rel="stylesheet" href="styles.css">
    <script src="./data.js"></script>
</head>
<body>
    <!-- Responsável por decidir qual form será utilizado -->
    <select petr-form-selector id="forms" class="border">
        <option value="" selected disabled>Selecione o teu formulário</option>
        <option value="signin"> Formulário de Login </option>
        <option value="signup"> Formulário de registro </option>
    </select>

    <button onclick="getData()"> Refresh </button>
    <button onclick="sendData()"> Save </button>

    <!-- Tabelas a ser aprensentadas -->

    <table>
        <thead>
            <tr>
                <th> Formulário </th>
                <th> Nome do campo </th>
                <th> Tipo </th>
                <th> Placeholder </th>
                <th> Label </th>
                <th> Valor </th>
                <th> Operação </th>
            </tr>
        </thead>
        <tbody petr-table-form>
            <!-- I can consul fragments of table in generators.js -->
        </tbody>
    </table>
    

    <fieldset petr-prev-form>
    </fieldset>
    
    <script src="script.js"></script>
    <script src="./petr-flex-form.js"></script>
    <!-- In GeneratorJS you will custom your html source, but becarefull -->
    <script src="./generators.js"></script>

</body>
</html>