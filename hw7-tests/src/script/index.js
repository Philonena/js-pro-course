import { showWeatherBlock } from './showWeatherBlock.js'
import { savingDataToHistory } from './savingDataToHistory.js'
import { createWeatherBlockText } from './createWeatherBlockText.js'
import { createHistoryBlock } from './createHistoryBlock.js'

// ДЕЙСТВИЕ НА ФОРМЕ
document.querySelector('#form').addEventListener('submit', (ev) => {
    ev.preventDefault();

    const city = document.querySelector('#city').value;
    const country = document.querySelector('#country').value;

    getData(city, country);

    document.querySelector('#form').reset();
});

// ДЕЙСТВИЕ ПО КНОПКИ МОЯ ПОГОДА
document.querySelector('.myWeatherButton').addEventListener('click', () => {
    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        getData(latitude, longitude);
    }

    function error() {
        showWeatherBlock('<p class="error">Невозможно получить ваше местоположение</p>');
    }

    navigator.geolocation.getCurrentPosition(success, error)
})

// ДЕЙСТВИЕ ПО КНОПКЕ ИСТОРИЯ
document.querySelector('.historyButton').addEventListener('click', () => {
    let weatherHistory = JSON.parse(localStorage.getItem('weatherHistory')) || {};
    if (Object.keys(weatherHistory).length > 0) {
        createHistoryBlock(weatherHistory)
    } else {
        showWeatherBlock('<p class="error">История пуста</p>');
    }
});

// ПОЛУЧЕНИЕ ДАННЫХ
export async function getData(firstParameter, secondParameter) {
    const resp = await fetch(`http://api.weatherstack.com/current?access_key=398b72a14594b34c8ae70e20cc025c73&query=${firstParameter},${secondParameter}`)
    const data = await resp.json();

    if (data.success === false) {
        showWeatherBlock('<p class="error">Сheck the entered data</p>')
    } else {
        createWeatherBlockText(data);
        savingDataToHistory(data);

    }
}


