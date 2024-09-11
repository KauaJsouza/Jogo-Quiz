const respostasCorretas = [2, 3, 0, 1, 1, 3, 2, 2, 2, 3];

document.addEventListener('DOMContentLoaded', function () {
    const options = document.querySelectorAll('.options li');

    options.forEach(option => {
        option.addEventListener('click', function () {
            // Remover a seleção anterior
            const selectedOptions = this.parentNode.querySelectorAll('.selected');
            selectedOptions.forEach(selected => selected.classList.remove('selected'));

            // Marcar a opção atual como selecionada
            this.classList.add('selected');
        });
    });
});

function verificarRespostas() {
    let acertos = 0;
    let erros = 0;

    function verificarPergunta(indicePergunta) {
        const pergunta = document.querySelector(`.pergunta[data-question="${indicePergunta}"]`);
        const respostaSelecionada = pergunta.querySelector('.options li.selected');
        if (respostaSelecionada) {
            const valorResposta = parseInt(respostaSelecionada.getAttribute('data-value'));
            if (valorResposta === respostasCorretas[indicePergunta]) {
                acertos++;
            } else {
                erros++;
            }
        } else {
            erros++; // Considerar como erro se nenhuma opção for selecionada
        }
    }

    for (let i = 0; i < respostasCorretas.length; i++) {
        verificarPergunta(i);
    }

    localStorage.setItem("acertos", acertos);
    localStorage.setItem("erros", erros);

    window.location.href = "./HTML/resultado.html";
}
