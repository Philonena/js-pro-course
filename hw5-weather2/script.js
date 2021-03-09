// let weatherHistory = JSON.parse(localStorage.getItem('weatherHistory')) || {};

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
        console.log(latitude, longitude);
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
function getData(firstParameter, secondParameter) {
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

// НАПОЛНЕНИЕ БЛОКА С ПОГОДОЙ
function createWeatherBlockText(data) {
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

// ВЫВОД БЛОКА ПОГОДЫ
function showWeatherBlock(text) {
    if (document.querySelector('.forecast')) {
        document.querySelector('.forecast').innerHTML = text;
    } else {
        const forecast = document.createElement('div');
        forecast.className = 'forecast';
        forecast.innerHTML = text;
    
        document.body.append(forecast);
    }
}

// СОЗДАНИЕ ТАБЛИЦЫ ИСТОРИИ
function createHistoryBlock(weatherHistory) {
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
    assignAction()
}


// ЗАПИСЬ ДАННЫХ В ИСТОРИЮ
function savingDataToHistory(data) {
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

// ОЧИСТКА ИСТОРИИ
function assignAction() {
    document.querySelector('.clearButton').addEventListener('click', () => {
        document.querySelector('.forecast').remove();
        localStorage.removeItem('weatherHistory')
        weatherHistory = {}
        console.log(weatherHistory)
    })
}