import {sum} from './math.js';
// import '../img/test-img.png';

window.addEventListener('DOMContentLoaded', () => {
    const el = document.querySelector('#app');
    el.innerHTML = `<h1>1+2 = ${sum(1,2)}</h1>
    
`
})
