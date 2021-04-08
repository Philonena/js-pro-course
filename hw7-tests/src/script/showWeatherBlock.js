// ВЫВОД БЛОКА ПОГОДЫ
export function showWeatherBlock(text) {
    if (document.querySelector('.forecast')) {
        document.querySelector('.forecast').innerHTML = text;
    } else {
        const forecast = document.createElement('div');
        forecast.className = 'forecast';
        forecast.innerHTML = text;
    
        document.body.append(forecast);
    }
}