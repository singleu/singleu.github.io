import About from './about/about';
import Contact from './contact/contact';
import Footer from './footer/footer';
import Header from './header/header';
import Hero from './hero/hero';
import Services from './services/services';

export default function App() {
    return /*html*/`
    <div>
        ${Header()}
        ${Hero()}
        ${About()}
        ${Services()}
        ${Footer()}
    </div>
    `;
}