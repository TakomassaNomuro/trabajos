function verificarPrimo() {
    let n = Number(document.getElementById("numero").value);

    if (n < 2) {
        document.getElementById("resultado").textContent = "N";
        return;
    }

    let primo = true;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            primo = false;
            break;
        }
    }

    document.getElementById("resultado").textContent = primo ? "S" : "N";
}