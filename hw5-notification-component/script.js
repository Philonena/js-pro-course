export function showNotification(data) {
    let isNotificationDisable = localStorage.getItem('isNotificationDisable') || false;
    let currentNotificationId = localStorage.getItem('currentNotificationId') || 1;

    if (isNotificationDisable) {
        return;
    }

    let currentNotification = data.find(el => el.id == currentNotificationId);

    const notificationWrapper = document.createElement('section');
    notificationWrapper.className = 'component';

    notificationWrapper.innerHTML = `
        <div class="notText">
            <h3 class="notHead"></h3>
            <p class="notBody"></p>        
        </div>
        <input type="button" class="close" value="&#10008;">
        <div class="pagination">
            <input type="button" class="prev" value="&#5130;">
            ${data.map(notification =>
                `<input
                type="radio"
                name="radioButton"
                id="${notification.id}"
                ${notification.id == currentNotificationId ? 'checked' : ''} />`
            ).join('')}
            <input type="button" class="next" value="&#5125;">
        </div>
        <input class="disableTips" type="checkbox">`

    document.body.append(notificationWrapper);

    addNotificationText(currentNotification);

    setEventListeners(data, currentNotification, currentNotificationId);
}


function addNotificationText(currentNotification) {
    let notificationHead = document.querySelector('.notHead');
    let notificationBody = document.querySelector('.notBody');

    notificationHead.innerHTML = currentNotification.title;
    notificationBody.innerHTML = currentNotification.phrase;
}

function setEventListeners(data, currentNotification, currentNotificationId) {
    const paginationButton = document.querySelector('.pagination');
    paginationButton.addEventListener('click', (ev) => {
        if (ev.target.name === 'radioButton') {
            currentNotificationId = +ev.target.id;
            currentNotification = data.find(el => el.id == currentNotificationId)
            addNotificationText(currentNotification);
            localStorage.setItem('currentNotificationId', currentNotificationId);
        }
    });

    const closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', () => {
        document.querySelector('.component').remove();
    });

    const prevButton = document.querySelector('.prev')
    prevButton.addEventListener('click', () => {
        currentNotificationId = (currentNotificationId == 1) ? data.length : currentNotificationId - 1;
        localStorage.setItem('currentNotificationId', currentNotificationId);
        document.getElementById(currentNotificationId).checked = true;
        currentNotification = data.find(el => el.id == currentNotificationId)
        addNotificationText(currentNotification);
    })

    const nextButton = document.querySelector('.next')
    nextButton.addEventListener('click', () => {
        currentNotificationId = (currentNotificationId == data.length) ? 1 : currentNotificationId + 1;
        localStorage.setItem('currentNotificationId', currentNotificationId);
        document.getElementById(currentNotificationId).checked = true;
        currentNotification = data.find(el => el.id == currentNotificationId)
        addNotificationText(currentNotification);
    })

    const disableTips = document.querySelector('.disableTips');
    disableTips.addEventListener('click', (ev) => {
        if (ev.keyCode === 13 && ev.target.checked === false) {
            ev.target.checked = true;
        } else {
            if (ev.keyCode === 13 && ev.target.checked === true) {
                ev.target.checked = false;
            }
            localStorage.setItem('isNotificationDisable', ev.target.checked);
        }
    })
}
