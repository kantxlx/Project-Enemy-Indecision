document.addEventListener('DOMContentLoaded', function () {

    const indecisoesInput = document.getElementById('indecisoesInput');
    const qtdeDecisoesInput = document.getElementById('qtdeDecisoesInput');
    const processButton = document.getElementById('processButton');
    const indecisoesList = document.getElementById('indecisoesList');

    function decidir(indecisoes, qtdeDecisoes) {

        let result = [];

        while (qtdeDecisoes > result.length) {
            const indiceAleatorio = Math.floor(Math.random() * indecisoes.length);
            const decisaoExiste = result.find((decisao) => indecisoes[indiceAleatorio] === decisao)

            if (!decisaoExiste) {
                result.push(indecisoes[indiceAleatorio]);
            }
        }

        return result;
    }

    function updateIndecisoesList(decisoes) {
        indecisoesList.innerHTML = '';

        decisoes.forEach(function (item) {
            const li = document.createElement('li');
            li.textContent = item;
            indecisoesList.appendChild(li);
        });
    }

    let indecisoes = [];
    let qtdeDecisoes = 0;

    processButton.addEventListener('click', function () {
        const indecisoesValue = indecisoesInput.value.trim();
        const qtdeDecisoesValue = parseInt(qtdeDecisoesInput.value.trim());

        if (indecisoesValue !== '' && !isNaN(qtdeDecisoesValue)) {
            indecisoes = indecisoesValue.split(',').map(item => item.trim());
            qtdeDecisoes = qtdeDecisoesValue;

            const decisoes = decidir(indecisoes, qtdeDecisoes);

            updateIndecisoesList(decisoes);
        }
    });

});




// for (let i = 0; i < qtdeDecisoes; i++) {
//     const indiceAleatorio = Math.floor(Math.random() * indecisoes.length);
//     //console.log(indiceAleatorio)
//     const decisaoExiste = result.find((decisao) => indecisoes[indiceAleatorio] === decisao)

//     if (!decisaoExiste) {
//         console.log('chegou aqui')
//         result.push(indecisoes[indiceAleatorio]);
//     }
// }
