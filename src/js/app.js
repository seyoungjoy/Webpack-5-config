import {sum} from './math.js';
import '../css/style.css';
import '../img/test-img.png';

window.addEventListener('DOMContentLoaded', () => {
    const el = document.querySelector('#app');
    el.innerHTML = `<h1>1+2 = ${sum(1,2)}</h1>
    <img src="test-img.png" alt="테스트"/>
`
})
