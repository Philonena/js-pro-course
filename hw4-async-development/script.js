document.querySelector('#form').addEventListener('submit', showWeatherBlock);

function showWeatherBlock(ev) {
    ev.preventDefault();

    let city = document.querySelector('#city').value;
    let country = document.querySelector('#country').value;

    fetch(`http://api.weatherstack.com/current?access_key=398b72a14594b34c8ae70e20cc025c73&query=${city},${country}`).
        then(res => {return res.json()}).
        then(data => {
            if (data.success === false) {
                createErrorBlock()
            } else {
                createWeatherBlock(data)
            }
        })
    
    document.querySelector('#form').reset();
}

function createWeatherBlock(data) {
    if (document.querySelector('.forecast')) {
        document.querySelector('.forecast').remove();
    }

    let forecastBlock = document.createElement('div');
    forecastBlock.classList.add('forecast');

    let locationBlock = document.createElement('h2');
    let locationText = document.createTextNode(`${data.location.name}, ${data.location.country}`);
    locationBlock.classList.add('location');
    locationBlock.append(locationText);
    
    let weatherBlock = document.createElement('div');
    weatherBlock.classList.add('weather');

    let iconBlock = document.createElement('img');
    iconBlock.classList.add('icon');
    iconBlock.src = data.current.weather_icons[0];

    let degreesBlock = document.createElement('h3');
    let degreesText = document.createTextNode(`${data.current.temperature}°C`);
    degreesBlock.classList.add('degrees');
    degreesBlock.append(degreesText);

    weatherBlock.append(iconBlock);
    weatherBlock.append(degreesBlock);

    let propertiesBlock = document.createElement('ul');
    propertiesBlock.classList.add('properties');  

    let feelslikeBlock = document.createElement('li');
    let feelslikeText = document.createTextNode(`Feels like ${data.current.feelslike}°C`);
    feelslikeBlock.append(feelslikeText);  
    
    let observationTimeBlock = document.createElement('li');
    let observationTimeText = document.createTextNode(`Time: ${data.current.observation_time}`);
    observationTimeBlock.append(observationTimeText);  

    let weatherDescriptionsBlock = document.createElement('li');
    let weatherDescriptionsText = document.createTextNode(`Today is ${data.current.weather_descriptions[0]}`);
    weatherDescriptionsBlock.append(weatherDescriptionsText);   
   
    let precipBlock = document.createElement('li');
    let precipText = document.createTextNode(`Precip: ${data.current.precip} mm`);
    precipBlock.append(precipText);  

    let pressureBlock = document.createElement('li');
    let pressureText = document.createTextNode(`Pressure: ${data.current.pressure} mb`);
    pressureBlock.append(pressureText);  

    let windBlock = document.createElement('li');
    let windText = document.createTextNode(`Wind: ${data.current.wind_dir}, ${data.current.wind_speed} kmph`);
    windBlock.append(windText);  

    propertiesBlock.append(observationTimeBlock);
    propertiesBlock.append(feelslikeBlock);
    propertiesBlock.append(weatherDescriptionsBlock);
    propertiesBlock.append(precipBlock);
    propertiesBlock.append(pressureBlock);
    propertiesBlock.append(windBlock);

    forecastBlock.append(locationBlock);
    forecastBlock.append(weatherBlock);
    forecastBlock.append(propertiesBlock);

    document.body.append(forecastBlock);
}

function createErrorBlock() {
    if (document.querySelector('.forecast')) {
        document.querySelector('.forecast').remove();
    }

    let forecastBlock = document.createElement('div');
    forecastBlock.classList.add('forecast');

    let locationBlock = document.createElement('p');
    let locationText = document.createTextNode(`Сheck the entered data`);
    locationBlock.classList.add('error');
    locationBlock.append(locationText);

    forecastBlock.append(locationBlock);

    document.body.append(forecastBlock);

}