let chave = "1aa1df67d6f9908150068c7ee26ea34c";

function clique() {
    let cidade = document.querySelector(".input-cidade").value
    buscarCidade(cidade);
}

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
async function buscarCidade(cidade) {
        let dados = await fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            cidade +
            "&appid=" +
            chave +
            "&lang=pt_br" +
            "&units=metric")
            .then(res => res.json())
        console.log(dados);
        colocaNaTela(dados);
    }

function colocaNaTela(dados) {
        document.querySelector(".cidade").innerHTML = dados.name;
        document.querySelector(".tempo").innerHTML = dados.main.temp;
        document.querySelector(".descricao").innerHTML = dados.weather[0].description;
        document.querySelector(".umidade").innerHTML = dados.main.humidity;
}