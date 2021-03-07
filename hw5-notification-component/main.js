import {showNotification} from './script.js'

async function getData() {
    const resp = await fetch('data.json');
    const data = await resp.json();
    showNotification(data);
}

getData()