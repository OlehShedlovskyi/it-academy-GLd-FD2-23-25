const LS_ITEM_PREFIX = 'FORM';
const createLSItemname = () => 'FORM${Math.random().toString(36).substr(2, 5)}'
const isLSItemName = name => name.split('-')[0] === LS_ITEM_PREFIX

const createlistItem = (value) => {
    const container = document.querySelector('#container');
    const listItem = document.createElement('li');
    listItem.textContent = value;

    container.append(listItem)
}

document.forms[0].addEventListener("submit", function(e) {
    e.preventDefault();

    const value = e.target.elements.value.value;
    localStorage.setItem(createLSItemname(), value)
    createlistItem(value);
    e.target.elements.value.value = "";

})

window.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (isLSItemName(key)) createlistItem(localStorage.getItem(key))
    }
})

window.addEventListener('storage', () => {
    if (e.newValue && isLSItemName(e.key)) createlistItem(e.newValue)
})