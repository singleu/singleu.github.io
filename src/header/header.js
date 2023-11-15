import './header.css';
import logo from '../../logo.png';

export default function Header() {
    return /*html*/`
    <header id="header" class="sticky inset-x-0 top-0 z-50">
    <div class="max-w-5xl px-4 m-auto">
      <nav class="flex items-center justify-between px-6 py-4" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Sistema Manancial</span>
            <img class="h-12 w-auto" src="${logo}" alt="">
          </a>
        </div>
        <div class="flex lg:hidden">
          <button id="openmenu-btn" type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span class="sr-only">Open main menu</span>
            <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a id="menu-sobre" href="#sobre"  class="menu-action font-semibold leading-6 text-gray-900 py-2 border-b-4 border-transparent">Conheça mais</a>
          <a id="menu-planos" href="#planos" class="menu-action font-semibold leading-6 text-gray-900 py-2 border-b-4 border-transparent">Planos</a>
          <a href="/relatorio-semanal.html" class="menu-action font-semibold leading-6 inline-flex justify-center whitespace-no wrap rounded-lg bg-primary px-3.5 py-2 font-medium text-white shadow-sm shadow-green-950/10 hover:bg-green-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-green-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 text-white">Comece grátis</a>
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
                <a href="#sobre" class="menu-action -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Conheça mais</a>
                <a href="#planos" class="menu-action -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Planos</a>
                <a href="/relatorio-semanal.html" class="menu-action -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 ">Comece grátis</a>
              </div>
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
    
    signalMenuPosition();
}


function signalMenuPosition() {
  const planPosY = document.getElementById('planos').offsetTop;
  const aboutPosY = document.getElementById('sobre').offsetTop;
  const aboutMenu = document.getElementById('menu-sobre');
  const plansMenu = document.getElementById('menu-planos');

  let sessao = null;

  document.addEventListener("scroll", (event) => {
    let lastKnownScrollYPosition = window.scrollY;

    if(lastKnownScrollYPosition >= aboutPosY && lastKnownScrollYPosition < planPosY) {
      if(sessao != 'sobre') {
        aboutMenu.classList.add('border-primary')
        aboutMenu.classList.remove('border-transparent')
        plansMenu.classList.add('border-transparent')
        console.log('sessão ', sessao);
      }

      sessao = 'sobre';
      return;
    }

    if(lastKnownScrollYPosition >= planPosY) {
      if(sessao != 'plano') {
        plansMenu.classList.add('border-primary')
        plansMenu.classList.remove('border-transparent')
        aboutMenu.classList.add('border-transparent')
        console.log('sessão ', sessao);
      }
      sessao = 'plano';
      return;
    }
    
    if(sessao != null) {
      plansMenu.classList.remove('border-primary')
      aboutMenu.classList.remove('border-primary')
      plansMenu.classList.add('border-transparent')
      aboutMenu.classList.add('border-transparent')
      console.log('sessão ', sessao);
    }
    sessao = null;
  });
}