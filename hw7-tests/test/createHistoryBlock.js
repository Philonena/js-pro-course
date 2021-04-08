import { createHistoryBlock } from '../src/script/createHistoryBlock.js';

let assert = chai.assert;

describe('create History Block', () => {
    it('the required text in the required tags', () => {
      createHistoryBlock({
        "test, Belarus": {
            "temperature": -2,
            "feelslike": -7,
            "observation_time": "06:42 PM",
            "weather_descriptions": "Partly cloudy",
            "precip": 0,
            "pressure": 1015,
            "wind_dir": "W",
            "wind_speed": 26
        }
    })
    assert.equal(document.querySelector('.forecast').innerHTML, '\n    <input type="button" id="button" value="clear" class="clearButton">    \n    <ul class="historyTable">\n        <li>Location</li>\n        <li>Weather</li>\n        <li>Feels like</li>\n        <li>Observation time</li>\n        <li>Day is </li>\n        <li>Precip</li>\n        <li>Pressure</li>\n        <li>Wind</li>\n    </ul>\n    <ul class="historyTable">\n            <li>test, Belarus</li>\n            <li>-2°C</li>\n            <li>-7°C</li>\n            <li>06:42 PM</li>\n            <li>Partly cloudy</li>\n            <li>0 mm</li>\n            <li>1015 mb</li>\n            <li>W, 26 kmph</li>\n        </ul>')
    document.querySelector('.forecast').remove();

    })
})


