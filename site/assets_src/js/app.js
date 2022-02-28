import {sum} from './math.js';
// import "core-js/stable";
// import "regenerator-runtime/runtime";

window.addEventListener('DOMContentLoaded', () => {
    const el = document.querySelector('#app');
    el.innerHTML = `<h1>1+2 = ${sum(1,2)}</h1>`
})

const list = document.querySelector('.list');

const nums = [1,2,3,4,5];

nums.map((num) => {
    list.insertAdjacentHTML('beforeend', `<li>${num}</li>`)
})
