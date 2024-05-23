import './src/style.css'
import App from './src/app'
import { Link } from './src/link';

document.querySelector('#app').innerHTML = App();

new Link(document.querySelectorAll('a[data-redirect]'));
