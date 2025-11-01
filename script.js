function verificar() {
    let n = Number(document.getElementById("numero").value);
    let resultado = "";

    if (n > 0) {
        resultado = "positivo";
    } else if (n < 0) {
        resultado = "negativo";
    } else {
        resultado = "nulo";
    }

    document.getElementById("resultado").textContent = resultado;
}