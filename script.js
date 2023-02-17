
function contar(){
    var qtdP = document.getElementById("qtdPessoas").value
    var resultado = qtdP*35
    var result = document.getElementById("Result")
    result.innerHTML = "R$"+resultado
}