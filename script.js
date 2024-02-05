const buttonClick = document.querySelector(".button-click")

function generateNumber(){
    const valueMin = Math.ceil(document.querySelector(".input-min").value)
    const valueMax = Math.floor(document.querySelector(".input-max").value)
    
    const result = Math.floor(Math.random() * (valueMax - valueMin + 1)) + valueMin;

    console.log(valueMin, valueMax)
    alert("O Resultado entre " + valueMin + " e " + valueMax + " é de " + result )
}


buttonClick.addEventListener("click", generateNumber);