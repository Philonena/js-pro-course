import { showWeatherBlock } from '../src/script/showWeatherBlock.js';

let assert = chai.assert;

describe('show Weather Block', () => {
  it('show new Block', () => {
    showWeatherBlock('test')
    let output = document.querySelector('.forecast')
    assert.equal(output.innerHTML, 'test');
  })
  it('show not new Block', () => {
    showWeatherBlock('second test')
    let output = document.querySelector('.forecast')
    assert.equal(output.innerHTML, 'second test');
    document.querySelector('.forecast').remove();
  })
})