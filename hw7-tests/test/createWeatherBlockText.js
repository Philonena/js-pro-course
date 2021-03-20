import { createWeatherBlockText } from '../src/script/createWeatherBlockText.js';

let assert = chai.assert;

describe('create Weather Block Text', () => {
  it('the required text in the required tags', async () => {
      const resp = await fetch('data.json');
      const data = await resp.json();
      createWeatherBlockText(data);
      assert.equal(document.querySelector('.forecast').innerHTML, '\n        <h2 class="location">test, test</h2>\n        <div class="weather">\n            <img class="icon" src="https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0011_light_snow_showers.png">\n            <h3 class="degrees">0°C</h3>\n        </div>\n        <ul class="properties">\n            <li>Feels like -4°C</li>\n            <li>Time: 01:02 PM</li>\n            <li>Today is Light Snow Shower</li>\n            <li>Precip: 0 mm</li>\n            <li>Pressure: 1017 mb</li>\n            <li>Wind: W, 26 kmph</li>\n        </ul>')

      document.querySelector('.forecast').remove();
  })
})
