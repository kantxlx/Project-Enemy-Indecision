document.addEventListener('DOMContentLoaded', function () {

    const campoIndecisoes = document.getElementById('campoIndecisoes');
    const campoQtdeDecisoes = document.getElementById('campoQtdeDecisoes');
    const botaoProcessar = document.getElementById('botaoProcessar');
    const listaIndecisoes = document.getElementById('listaIndecisoes');

    function escolherDecisoes(indecisoes, qtdeDecisoes) {

        if (indecisoes.length < qtdeDecisoes) {
            return ['Quantidade de decisões não pode ser maior do que a quantidade de indecisões!!!'];
        }

        const decisoesSelecionadas = [];

        while (decisoesSelecionadas.length < qtdeDecisoes) {
            const indiceAleatorio = Math.floor(Math.random() * indecisoes.length);
            const decisaoJaExiste = decisoesSelecionadas.includes(indecisoes[indiceAleatorio]);

            if (decisaoJaExiste) {
                continue
            }

            decisoesSelecionadas.push(indecisoes[indiceAleatorio]);
        }

        return decisoesSelecionadas;
    }

    function atualizarListaDecisoes(decisoes) {
        listaIndecisoes.innerHTML = '';

        decisoes.forEach(function (decisao) {
            const itemLista = document.createElement('li');
            itemLista.textContent = decisao;
            listaIndecisoes.appendChild(itemLista);
        });
    }

    let indecisoes = [];
    let qtdeDecisoes = 0;

    botaoProcessar.addEventListener('click', function () {
        const valorIndecisoes = campoIndecisoes.value.trim();
        const valorQtdeDecisoes = parseInt(campoQtdeDecisoes.value.trim());

        if (valorIndecisoes !== '' && !isNaN(valorQtdeDecisoes)) {
            indecisoes = valorIndecisoes.split(',').map(item => item.trim());
            qtdeDecisoes = valorQtdeDecisoes;

            const decisoes = escolherDecisoes(indecisoes, qtdeDecisoes);

            atualizarListaDecisoes(decisoes);
        }
    });

});