import './src/style.css'
import App from './src/app'
import { addMenuEvents } from './src/header/header';

document.querySelector('#app').innerHTML = App();
addMenuEvents();