let inputTexto = document.querySelector("#input-texto");
let btnEnviar = document.querySelector("#btn-enviar");
let saida = document.querySelector("#saida");

function enviarTexto() {
    saida.textContent = inputTexto.value;
}