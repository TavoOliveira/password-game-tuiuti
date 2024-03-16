from pyscript import document

def enviar_texto(event):
    input_texto = document.querySelector("#input-texto")
    saida = document.querySelector("#saida")
            
    saida.textContent = input_texto.value