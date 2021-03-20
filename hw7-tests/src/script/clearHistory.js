// ОЧИСТКА ИСТОРИИ
export function clearHistoryButton() {
    document.querySelector('.clearButton').addEventListener('click', () => {
        document.querySelector('.forecast').remove();
        localStorage.removeItem('weatherHistory')
    })
}
