// Variáveis
const botaoChutar = document.getElementById("botaoChutar");

let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

let maximoTentativas = 10;
document.getElementById("tentativasValor").textContent = maximoTentativas;

// Botão
botaoChutar.addEventListener("click", () => {
  const pegarValor = parseInt(document.getElementById("inputNumero").value);

  let mensagensValor;

  if (isNaN(pegarValor)) {
    mensagensValor = "Digite um número!";
  }
  if (maximoTentativas > 1) {
    if (pegarValor < 0 || pegarValor > 100) {
      mensagensValor = "Digite um número entre 0 e 100!";
    }

    if (numeroAleatorio > pegarValor) {
      mensagensValor = "O número secreto é maior, tente novamente.";
    }

    if (numeroAleatorio < pegarValor) {
      mensagensValor = "O número secreto é menor, tente novamente.";
    }

    maximoTentativas--;

    if (numeroAleatorio === pegarValor) {
      mensagensValor = "Você acertou, parabéns!";
      maximoTentativas = 10;
      numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    }
  } else {
    mensagensValor =
      "Você atingiu o número máximo de tentativas, o número aleatório era: " +
      numeroAleatorio;
    maximoTentativas = 10;
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  }

  document.getElementById("tentativasValor").textContent = maximoTentativas;
  document.getElementById("mensagensValor").textContent = mensagensValor;
});
