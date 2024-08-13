document.addEventListener('DOMContentLoaded', function () {

    const indecisoesInput = document.getElementById('indecisoesInput');
    const qtdeDecisoesInput = document.getElementById('qtdeDecisoesInput');
    const processButton = document.getElementById('processButton');
    const indecisoesList = document.getElementById('indecisoesList');
    const resultModal = document.getElementById('resultModal');
    const countdownDiv = document.getElementById('countdown');
    const retryButton = document.getElementById('retryButton');
    const newDrawButton = document.getElementById('newDrawButton');
    const inputSection = document.getElementById('inputSection');

    function decidir(indecisoes, qtdeDecisoes) {
        let result = [];
        while (qtdeDecisoes > result.length) {
            const indiceAleatorio = Math.floor(Math.random() * indecisoes.length);
            const decisaoExiste = result.find((decisao) => indecisoes[indiceAleatorio] === decisao);
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

    function startCountdownAndShowResult(decisoes) {
        resultModal.classList.remove('hidden');
        let countdown = 3;
        countdownDiv.textContent = `Aguarde ${countdown} segundos...`;
        const interval = setInterval(() => {
            countdown--;
            countdownDiv.textContent = `Aguarde ${countdown} segundos...`;
            if (countdown <= 0) {
                clearInterval(interval);
                countdownDiv.textContent = '';
                updateIndecisoesList(decisoes);
            }
        }, 1000);
    }

    function resetPage() {
        resultModal.classList.add('hidden');
        indecisoesInput.value = '';
        qtdeDecisoesInput.value = '';
        indecisoesList.innerHTML = '';
    }

    processButton.addEventListener('click', function () {
        const indecisoesValue = indecisoesInput.value.trim();
        const qtdeDecisoesValue = parseInt(qtdeDecisoesInput.value.trim());

        if (indecisoesValue !== '' && !isNaN(qtdeDecisoesValue)) {
            const indecisoes = indecisoesValue.split(',').map(item => item.trim());
            const qtdeDecisoes = qtdeDecisoesValue;

            const decisoes = decidir(indecisoes, qtdeDecisoes);
            startCountdownAndShowResult(decisoes);
        }
    });

    retryButton.addEventListener('click', function () {
        const indecisoesValue = indecisoesInput.value.trim();
        const qtdeDecisoesValue = parseInt(qtdeDecisoesInput.value.trim());

        if (indecisoesValue !== '' && !isNaN(qtdeDecisoesValue)) {
            const indecisoes = indecisoesValue.split(',').map(item => item.trim());
            const qtdeDecisoes = qtdeDecisoesValue;

            const decisoes = decidir(indecisoes, qtdeDecisoes);
            startCountdownAndShowResult(decisoes);
        }
    });

    newDrawButton.addEventListener('click', resetPage);
});
