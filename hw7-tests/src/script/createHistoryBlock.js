import { clearHistoryButton } from './clearHistory.js'
import { showWeatherBlock } from './showWeatherBlock.js'

// СОЗДАНИЕ ТАБЛИЦЫ ИСТОРИИ
export function createHistoryBlock(weatherHistory) {
    let historyTable = []
    for (let item in weatherHistory) {
        historyTable.push(
            `<ul class = "historyTable">
            <li>${item}</li>
            <li>${weatherHistory[item].temperature}°C</li>
            <li>${weatherHistory[item].feelslike}°C</li>
            <li>${weatherHistory[item].observation_time}</li>
            <li>${weatherHistory[item].weather_descriptions}</li>
            <li>${weatherHistory[item].precip} mm</li>
            <li>${weatherHistory[item].pressure} mb</li>
            <li>${weatherHistory[item].wind_dir}, ${weatherHistory[item].wind_speed} kmph</li>
        </ul>`)
    }

    let historyBlock = `
    <input type="button" id="button" value="clear" class="clearButton">    
    <ul class="historyTable">
        <li>Location</li>
        <li>Weather</li>
        <li>Feels like</li>
        <li>Observation time</li>
        <li>Day is </li>
        <li>Precip</li>
        <li>Pressure</li>
        <li>Wind</li>
    </ul>
    ${historyTable.join('')}`

    showWeatherBlock(historyBlock);
    clearHistoryButton()
}