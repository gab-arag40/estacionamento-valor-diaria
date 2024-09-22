function calcular() {
    var seunome = document.getElementById("nome").value;
    var suaplaca = document.getElementById("placa").value;
    var seusdias = document.getElementById("qntDias").value;
    var seucarro = document.getElementById("carro").value;
    var seuvalor = document.getElementById("valorDiaria").value

    var total = parseFloat(seuvalor) * parseInt(seusdias);

    var totaldesc = total - total * 0.10

    document.getElementById("resume").innerHTML = "NOME: " + seunome;
    document.getElementById("resume1").innerHTML = "PLACA: " + suaplaca;
    document.getElementById("resume2").innerHTML = "CARRO:  " + seucarro;
    document.getElementById("resume3").innerHTML = "VAI FICAR " + seusdias + " DIAS";
    document.getElementById("resume4").innerHTML = "VALOR SEM DESCONTO: " + total + " R$";

    if (total > 150) {
        document.getElementById("resume5").innerHTML = "VALOR COM DESCONTO 10%: " + totaldesc + " R$";
    }
}

function tchau() {
    alert("Volte Sempre !");

}
