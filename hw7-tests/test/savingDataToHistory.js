import { savingDataToHistory } from '../src/script/savingDataToHistory.js';

let assert = chai.assert;

describe('save History', () => {
  it('save to localStorage', async () => {
      localStorage.removeItem('weatherHistory')
      const resp = await fetch('data.json');
      const data = await resp.json();
      savingDataToHistory(data);
      let output = JSON.parse(localStorage.getItem('weatherHistory'))['test, test'] || false
      assert.notEqual(output, false);
  })
  it('have the necessary properties', async () => {
      localStorage.removeItem('weatherHistory')
      const resp = await fetch('data.json');
      const data = await resp.json();
      savingDataToHistory(data);
      let output = JSON.parse(localStorage.getItem('weatherHistory'))['test, test']
      assert.include(output, {"temperature": 0});
      assert.include(output, {"feelslike": -4,});
      assert.include(output, {"observation_time": "01:02 PM"});
      assert.include(output, {"weather_descriptions": "Light Snow Shower"});
      assert.include(output, {"precip": 0});
      assert.include(output, {"pressure": 1017});
      assert.include(output, {"wind_dir": "W"});
      assert.include(output, {"wind_speed": 26});
      localStorage.removeItem('weatherHistory')
  })
})
