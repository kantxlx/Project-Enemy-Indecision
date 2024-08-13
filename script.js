document.addEventListener('DOMContentLoaded', function () {

    const undecisionsInput = document.getElementById('undecisionsInput');
    const numDecisionsInput = document.getElementById('numDecisionsInput');
    const processButton = document.getElementById('processButton');
    const undecisionsList = document.getElementById('undecisionsList');
    const resultModal = document.getElementById('resultModal');
    const countdownDiv = document.getElementById('countdown');
    const retryButton = document.getElementById('retryButton');
    const newDrawButton = document.getElementById('newDrawButton');

    function decision(undecisions, numDecisions) {

        if (undecisions.length < numDecisions) {
            return ['Quantidade de decisões não pode ser maior do que a quantidade de indecisões!!!'];
        }

        const selectedDecisions = [];

        while (selectedDecisions.length < numDecisions) {
            const randomIndex = Math.floor(Math.random() * undecisions.length);
            const decisionAlreadyExists = selectedDecisions.includes(undecisions[randomIndex]);

            if (decisionAlreadyExists) {
                continue;
            }

            selectedDecisions.push(undecisions[randomIndex]);

        }

        return selectedDecisions;
    }

    function updateUndecisionsList(decisions) {
        undecisionsList.innerHTML = '';

        decisions.forEach(function (item) {
            const li = document.createElement('li');
            li.textContent = item;
            undecisionsList.appendChild(li);
        });

    }

    function startCountdownAndShowResult(decisions) {
        resultModal.classList.remove('hidden');

        let countdown = 3;

        countdownDiv.textContent = `Aguarde ${countdown} segundos...`;

        const interval = setInterval(() => {
            countdown--;
            countdownDiv.textContent = `Aguarde ${countdown} segundos...`;
            if (countdown <= 0) {
                clearInterval(interval);
                countdownDiv.textContent = '';
                updateUndecisionsList(decisions);
            }
        }, 1000);
    }

    function resetPage() {
        resultModal.classList.add('hidden');
        undecisionsInput.value = '';
        numDecisionsInput.value = '';
        undecisionsList.innerHTML = '';
    }

    processButton.addEventListener('click', function () {
        const undecisionsValue = undecisionsInput.value.trim();
        const numDecisionsValue = parseInt(numDecisionsInput.value.trim());

        if (undecisionsValue !== '' && !isNaN(numDecisionsValue)) {
            const undecisions = undecisionsValue.split(',').map(item => item.trim());
            const numDecisions = numDecisionsValue;

            const decisions = decision(undecisions, numDecisions);
            startCountdownAndShowResult(decisions);
        }
    });

    retryButton.addEventListener('click', function () {
        const undecisionsValue = undecisionsInput.value.trim();
        const numDecisionsValue = parseInt(numDecisionsInput.value.trim());

        if (undecisionsValue !== '' && !isNaN(numDecisionsValue)) {
            const undecisions = undecisionsValue.split(',').map(item => item.trim());
            const numDecisions = numDecisionsValue;

            const decisions = decision(undecisions, numDecisions);
            startCountdownAndShowResult(decisions);
        }
    });

    newDrawButton.addEventListener('click', resetPage);
});