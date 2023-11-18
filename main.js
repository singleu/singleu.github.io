import './src/style.css'
import App from './src/app'
import { addMenuEvents } from './src/header/header';
import { Link } from './src/link';

document.querySelector('#app').innerHTML = App();

addMenuEvents();
new Link(document.querySelectorAll('a[data-redirect]'));
