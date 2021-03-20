import { clearHistoryButton } from '../src/script/clearHistory.js';
import { createHistoryBlock } from '../src/script/createHistoryBlock.js';

let assert = chai.assert;

describe('clearHistory', () => {
    it('clear localStorage', () => {
      localStorage.setItem('weatherHistory', JSON.stringify('test test test'))
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
      clearHistoryButton()
      assert.isNull(JSON.parse(localStorage.getItem('weatherHistory')));
      localStorage.removeItem('weatherHistory')

    })
})


