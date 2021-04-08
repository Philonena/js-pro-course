// ЗАПИСЬ ДАННЫХ В ИСТОРИЮ
export function savingDataToHistory(data) {
    let weatherHistory = JSON.parse(localStorage.getItem('weatherHistory')) || {};

    weatherHistory[data.location.name + ', ' + data.location.country] = {
        temperature: data.current.temperature,
        feelslike: data.current.feelslike,
        observation_time: data.current.observation_time,
        weather_descriptions: data.current.weather_descriptions[0],
        precip: data.current.precip,
        pressure: data.current.pressure,
        wind_dir: data.current.wind_dir,
        wind_speed: data.current.wind_speed
    }

    localStorage.setItem('weatherHistory', JSON.stringify(weatherHistory))
}