let data = []
let key = localStorage.getItem('key') ? JSON.parse(localStorage.getItem('key')) : false;
let not = localStorage.getItem('not') ? JSON.parse(localStorage.getItem('not')) : 1;

if (key === false) {
    getData();
}

async function getData() {
    let resp = await fetch('data.json');
    data = await resp.json();
    showNotification(data.find(el => el.id == not));
}

function showNotification(element) {
    let component = createBlock('section', 'component');
    let notText = createBlock('div', 'notText');
    let header = createBlock('h3', 'notHead');
    let body = createBlock('p', 'notBody');
    let closeButton = createBlock('i', 'fas fa-times close');
    let disableTips = createBlock('input', 'disableTips');
    let pagination = createPagination('div', 'pagination');

    disableTips.type = 'checkbox';

    closeButton.tabIndex = 1;
    disableTips.tabIndex = 5;

    notText.append(header, body);
    component.append(notText, closeButton, pagination, disableTips);
    document.body.append(component);

    addNotificationText(element);
}

function createBlock(teg, tegClass) {
    let block = document.createElement(teg);
    block.className = tegClass;
    return block;
}

function createPagination(teg, tegClass) {
    let pagination = createBlock(teg, tegClass);
    let prev = createBlock('i', 'fas fa-angle-left prev');
    let next = createBlock('i', 'fas fa-angle-right next');
    prev.tabIndex = 2;
    next.tabIndex = 4;

    pagination.append(prev);

    for (let item of data) {
        let block = document.createElement('input');
        block.type = 'radio';
        block.name = 'radioButton';
        block.id = item.id;
        block.tabIndex = 3;
        if (item.id === not) {
            block.checked = true;
        }
        pagination.append(block);
    }

    pagination.append(next);

    return pagination;
}


function addNotificationText(element) {
    let head = document.querySelector('.notHead');
    let body = document.querySelector('.notBody');

    head.innerHTML = element.title;
    body.innerHTML = element.phrase;
}

document.querySelector('body').addEventListener('click', clickOnBody);
document.querySelector('body').addEventListener('keydown', (ev) => {
    if (ev.keyCode === 13) {
        clickOnBody(ev);
    }
    if (ev.keyCode === 27) {
        document.querySelector('.component').remove();
    }
})

function clickOnBody(ev) {
    if (ev.target.name === 'radioButton') {
        not = +ev.target.id;
        addNotificationText(data.find(el => el.id == not));
        localStorage.setItem('not', not);
    };

    if (ev.target.className === 'fas fa-times close') {
        document.querySelector('.component').remove();
    }

    if (ev.target.className === 'disableTips') {
        if (ev.keyCode === 13 && ev.target.checked === false) {
            ev.target.checked = true;
        } else {
            if (ev.keyCode === 13 && ev.target.checked === true) {
                ev.target.checked = false;
            }
        }
        localStorage.setItem('key', ev.target.checked);
    }

    if (ev.target.className === 'fas fa-angle-left prev') {
        not = (not == 1) ? data.length : not - 1;
        localStorage.setItem('not', not);
        document.getElementById(not).checked = true;
        addNotificationText(data.find(el => el.id == not));
    }

    if (ev.target.className === 'fas fa-angle-right next') {
        not = (not == data.length) ? 1 : not + 1;
        localStorage.setItem('not', not);
        document.getElementById(not).checked = true;
        addNotificationText(data.find(el => el.id == not));
    }
}