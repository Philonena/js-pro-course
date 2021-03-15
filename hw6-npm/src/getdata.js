import {showWeatherBlock} from './main.js'
import {createWeatherBlockText} from './main.js'
import {savingDataToHistory} from './main.js'

// ПОЛУЧЕНИЕ ДАННЫХ
export function getData(firstParameter, secondParameter) {
    fetch(`http://api.weatherstack.com/current?access_key=398b72a14594b34c8ae70e20cc025c73&query=${firstParameter},${secondParameter}`).
    then(res => {
        return res.json()
    }).
    then(data => {
        if (data.success === false) {
            showWeatherBlock('<p class="error">Сheck the entered data</p>')
        } else {
            createWeatherBlockText(data);
            savingDataToHistory(data);
        }
    })
}