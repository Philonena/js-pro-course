import { showWeatherBlock } from './showWeatherBlock.js'

// НАПОЛНЕНИЕ БЛОКА С ПОГОДОЙ
export function createWeatherBlockText(data) {
    let weatherText = `
        <h2 class="location">${data.location.name}, ${data.location.country}</h2>
        <div class="weather">
            <img class="icon" src="${data.current.weather_icons[0]}">
            <h3 class="degrees">${data.current.temperature}°C</h3>
        </div>
        <ul class="properties">
            <li>Feels like ${data.current.feelslike}°C</li>
            <li>Time: ${data.current.observation_time}</li>
            <li>Today is ${data.current.weather_descriptions[0]}</li>
            <li>Precip: ${data.current.precip} mm</li>
            <li>Pressure: ${data.current.pressure} mb</li>
            <li>Wind: ${data.current.wind_dir}, ${data.current.wind_speed} kmph</li>
        </ul>`

    showWeatherBlock(weatherText);
}