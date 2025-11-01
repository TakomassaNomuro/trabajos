document.getElementById('tabuadaForm').addEventListener('submit', function(event) {
    // Impede o envio padrão do formulário, que recarregaria a página
    event.preventDefault();

    // Obtém o valor do campo de entrada e converte para número inteiro
    const numero = parseInt(document.getElementById('numero').value);

    // Obtém o elemento onde a tabela será exibida
    const resultadoDiv = document.getElementById('resultado');

    // Validação básica
    if (isNaN(numero) || numero < 1) {
        resultadoDiv.innerHTML = '<p style="color: red;">Por favor, digite um número inteiro válido (maior ou igual a 1).</p>';
        return;
    }

    // Inicia a criação da estrutura da tabela HTML
    let tabelaHTML = '<h2>Tabuada do ' + numero + '</h2>';
    tabelaHTML += '<table>';
    tabelaHTML += '<thead><tr><th>Operação</th><th>Resultado</th></tr></thead>';
    tabelaHTML += '<tbody>';

    // Loop para calcular a tabuada (de 1 a 10)
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        
        // Adiciona uma nova linha (<tr>) à tabela para cada iteração
        tabelaHTML += '<tr>';
        tabelaHTML += '<td>' + numero + ' x ' + i + '</td>'; // Coluna da operação
        tabelaHTML += '<td>' + resultado + '</td>';           // Coluna do resultado
        tabelaHTML += '</tr>';
    }

    // Finaliza a estrutura da tabela
    tabelaHTML += '</tbody></table>';

    // Insere o HTML da tabela gerada na div de resultado
    resultadoDiv.innerHTML = tabelaHTML;
});