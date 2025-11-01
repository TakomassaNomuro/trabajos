

function fazTudo(select, idCelsius, idFahrenheit, idKelvin) {
    
    const celciusSelect = document.getElementById(idCelsius).value = select.value;
    const fahrenheitSelect = document.getElementById(idFahrenheit).value = select.value;
    const kelvinSelect = document.getElementById(idKelvin).value = select.value

    
    const valuer = parseFloat(select.value);

    if (select.id === 'tcomumc'){
        document.getElementById(idCelsius).value = valuer + '°C';

        document.getElementById(idFahrenheit).value = (valuer * 9 / 5) + 32 + '°F';
        document.getElementById(idKelvin).value = valuer + 273.15 + 'K';
    }
    else if (select.id === 'tcomumf') {
        document.getElementById(idFahrenheit).value = valuer + '°F';
        document.getElementById(idCelsius).value = (valuer - 32) * 5 / 9 + '°C';
        document.getElementById(idKelvin).value = (valuer - 32) * 5 / 9 + 273.15 + 'K';
    }
    else if (select.id === 'tcomumk') {
        document.getElementById(idKelvin).value = valuer + 'K';
        document.getElementById(idCelsius).value = valuer - 273.15 + '°C';
        document.getElementById(idFahrenheit).value = (valuer - 273.15) * 9 / 5 + 32 + '°F';
    }
}
const celciusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const kelvinInput = document.getElementById('kelvin');


celciusInput.addEventListener('input', () => {

    if(celciusInput.value === ''){
        fahrenheitInput.value = '';
        kelvinInput.value = '';
        return;

    }
    
    const val = parseFloat(celciusInput.value);
   


    if (!isNaN(val)) {
        fahrenheitInput.value = (val * 9 / 5 + 32).toFixed(2) + '°F';
        kelvinInput.value = (val + 273.15).toFixed(2) + 'K';
    }

});


fahrenheitInput.addEventListener('input', () => {

     if(fahrenheitInput.value === ''){
        celciusInput.value = '';
        kelvinInput.value = '';
        return;

    }

    const val = parseFloat(fahrenheitInput.value);
    if (!isNaN(val)) {
        
        celciusInput.value = ((val - 32) * 5 / 9).toFixed(2) + '°C';
        kelvinInput.value = ((val - 32) * 5 / 9 + 273.15).toFixed(2) + 'K';
    }
});
kelvinInput.addEventListener('input', () => {
    
    if(kelvinInput.value === ''){
        fahrenheitInput.value = '';
        celciusInput.value = '';
        return;

    }

    const val = parseFloat(kelvinInput.value);
    if (!isNaN(val)) {
       
        celciusInput.value = (val - 273.15).toFixed(2) + '°C';
        fahrenheitInput.value = ((val - 273.15) * 9 / 5 + 32).toFixed(2) + '°F';
    }
});


 

