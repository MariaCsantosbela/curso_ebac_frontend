const form = document.getElementById("formulario");
const campoA = document.getElementById("campo-A");
const campoB = document.getElementById("campo-B");
const mensagem = document.getElementById("menssagem");





form.addEventListener("submit", function(event){
    event.preventDefault();

    const valorA = parseInt(campoA.value);
    const valorB = parseInt(campoB.value);
    if (valorB > valorA) {
        mensagem.textContent = 'O valor B é maior que o valor A, você acertou o exercício.Parabéns este formulário é valido! ';
    } else {
        mensagem.textContent = 'Não foi dessa vez :( . O valor B deve ser maior que A, tente novamente. Este formulário não é valido!';
    }

});





