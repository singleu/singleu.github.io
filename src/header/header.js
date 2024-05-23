import './header.css';
import logo from '../../logo.png';

export default function Header() {
    return /*html*/`
    <header id="header" class="sticky inset-x-0 top-0 z-50">
    <div class="max-w-5xl px-4 m-auto">
      <nav class="flex items-center justify-between px-6 py-4" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Singleu</span>
            <img class="h-12 w-auto" src="${logo}" alt="Singleu Consultoria">
          </a>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a href="mailto:lucas.cdsilva+singleu@gmail.com" class="menu-action font-semibold leading-6 inline-flex justify-center whitespace-no wrap rounded-lg bg-primary px-3.5 py-2 text-white shadow-sm shadow-green-950/10 hover:bg-gray-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-gray-300 dark:focus-visible:ring-slate-600 transition-colors duration-150">
           Entre Contato
          </a>
        </div>
      </nav>
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
    let lastKnownScrollYPosition = window.scrollY + 40;

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