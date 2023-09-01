import './header.css';
import logo from '../../logo.png';

export default function Header() {
    return /*html*/`
    <header class="absolute inset-x-0 top-0 z-50 bg-white">
    <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Sistema Manancial</span>
          <img class="h-10 w-auto" src="${logo}" alt="">
        </a>
      </div>
      <div class="flex lg:hidden">
        <button id="openmenu-btn" type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
          <span class="sr-only">Open main menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <a href="#about" class="menu-action text-sm font-semibold leading-6 text-gray-900">Conheça mais</a>
        <a href="#services" class="menu-action text-sm font-semibold leading-6 text-gray-900">Serviços</a>
        <a href="#contact" class="menu-action text-sm font-semibold leading-6 text-gray-900">Contatos</a>
      </div>
    </nav>
    <!-- Mobile menu, show/hide based on menu open state. -->
    <div id="mobile-menu" class="lg:hidden hidden" role="dialog" aria-modal="true">
      <!-- Background backdrop, show/hide based on slide-over state. -->
      <div class="fixed inset-0 z-50"></div>
      <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Sistema Manancial</span>
            <img class="h-10 w-auto" src="${logo}" alt="">
          </a>
          <button id="closemenu-btn" type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
            <span class="sr-only">Close menu</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a href="#about" class="menu-action -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Conheça mais</a>
              <a href="#services" class="menu-action -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Serviços</a>
              <a href="#contact" class="menu-action -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Contatos</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
    `;
}


export function addMenuEvents() {
    const menu = document.getElementById('mobile-menu');
    const actionsBtn = document.getElementsByClassName('menu-action');
    const openBtn = document.getElementById('openmenu-btn');
    const closeBtn = document.getElementById('closemenu-btn');

    openBtn.addEventListener('click', function() {
        menu.style.display = 'block';
    }, false);

    closeBtn.addEventListener('click', function() {
        menu.style.display = 'none';
    }, false);

    [...actionsBtn].map((btn) => {
        btn.addEventListener('click', function() {
            menu.style.display = 'none';
        }, true);
    })
}