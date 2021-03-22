import { getData } from '../src/script/index.js';

let assert = chai.assert;

describe('main module', () => {
    it('getData', async() => {
        await getData('minsk')
        let output = document.querySelector('.location');
        assert.equal(output.innerHTML, 'Minsk, Belarus');
        document.querySelector('.forecast').remove();
    })
    it('getData with error', async() => {
        await getData('мяу')
        let output = document.querySelector('.error');
        assert.equal(output.innerHTML, 'Сheck the entered data');
        document.querySelector('.forecast').remove();
    })
})