


function calculaIMC() {
    var peso = document.getElementById("peso").value
    var altura = document.getElementById("altura").value
    var res = document.getElementById("res")
    var imc

    imc = peso / (altura * altura)


    if (imc < 18.5) {
        res.innerText = 'Você está ABAIXO do normal com o IMC de: ' + imc.toFixed(2)
    }else if (imc > 18.5 && imc < 24.9) {
        res.innerText = 'Você está com imc IDEAL com o IMC de: ' + imc.toFixed(2)
    } else if (imc > 25.0 && imc < 29.9) {
        res.innerText = 'Você está com SOBREPESO e seu IMC foi de: ' + imc.toFixed(2)
    } if (imc > 30.0 && imc < 39.9){
        res.innerText = 'Você está com OBESIDADE e seu IMC foi de: ' + imc.toFixed(2)
    }
    if (imc > 40.0){
        res.innerText = 'Você está com OBESIDADE GRAVE e seu IMC foi de: ' + imc.toFixed(2)
    }
    document.getElementById('peso').value = ' '
    document.getElementById('altura').value = ' '
    
    
        
    
}