(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function n(){return`
    <footer class="fixed w-full bottom-0">
        <div class="bg-primary py-4 pb-8 mt-16">
            <div class="max-w-5xl px-2 lg:px-4 m-auto flex flex-col-reverse md:flex-row">
            <div class="flex-1">
                <p class="mt-4 text-white font-bold text-center md:text-left">
                   Singleu Consultoria em Tecnologia da Informação LTDA
                </p>
                <p class="lg:mt-4 mt-2 text-white text-sm md:text-md font-light text-center md:text-left">
                    Av. Brig. Faria Lima, 2050, Andar 11 Conjunto 1102 <br/>
                    São Paulo / SP. CEP 01.452-922. CNPJ - 41.807.896/0001-00
                </p>
            </div>
                <div class="flex-2  text-right">
                    <div id="socials" class="text-center md:text-left">
                        <div class="mt-4 mb-4 indent-2 text-white text-center md:text-left  font-bold">
                            Entre em Contato
                        </div>
                        <div class="flex flex-row justify-center space-x-4">
                            <a href="mailto:lucas.cdsilva+singleu@gmail.com" class="p-2 bg-primary-400 rounded md:py-3 md:mr-5 text-white font-light">
                                <svg class="inline-block mr-2" fill="#fff" xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                                <span class="hidden md:inline">lucas.cdsilva@gmail.com</span>
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/in/lucascdsilva/" class="p-2 bg-primary-400 rounded md:py-3 md:mr-5 text-white  font-light">
                                <svg class="inline-block mr-2" fill="#fff" xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
                                <span class="hidden md:inline">Lucas Carvalho</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    `}const r="/assets/logo-3246df52.png";function c(){return`
    <header id="header" class="sticky inset-x-0 top-0 z-50">
    <div class="max-w-5xl px-4 m-auto">
      <nav class="flex items-center justify-between px-6 py-4" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Singleu</span>
            <img class="h-12 w-auto" src="${r}" alt="Singleu Consultoria">
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
    `}function d(){return`
<section id="hero" class="bg-primary lg:bg-white">
  <div class="max-w-5xl lg:px-4 m-auto">
    <div class="relative isolate lg:p-6 lg:px-8">
      <div class="lg:max-w-[640px] m-auto center bg-primary lg:rounded-lg lg:py-10 p-8 lg:my-20 py-32">
        <div>
          <h1 class="text-lg font-semibold tracking-tight text-white  sm:text-2xl mb-6">SINGLEU CONSULTORIA</h1>
          <h2 class="text-4xl font-semibold tracking-tight text-white  sm:text-5xl">Tecnologia personalizada, soluções únicas</h2>
          <p class="mt-6 text-lg leading-8 font-light text-white">Especializados em consultoria personalizada, oferecemos soluções exclusivas, abordagem centrada no usuário. Garantindo eficiência, inovação e resultados excepcionais.</p>
          <div class="mt-10 flex  gap-x-6">
            <a href="mailto:lucas.csilva+singleu@gmail.com" class="text-sm sm:hidden hidden md:inline  font-semibold leading-6 text-black rounded-lg px-4 py-2 bg-secondary">
              Entre em Contato
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`}function m(){return`
    <div>
        ${c()}
        ${d()}
        ${n()}
    </div>
    `}const u=[{id:"relatorio-semanal",name:"Relatorio Semanal",url:"https://wa.me/5511910381883?text=Tenho+interesse+no+plano+%22Relat%C3%B3rio+Semanal%22"},{id:"plano-comercial",name:"Plano Comercial",url:"https://wa.me/5511910381883?text=Tenho+interesse+em+desenvolver+um+plano+comercial"},{id:"consultoria-automatizada",name:"Consultoria Automatizada",url:"https://wa.me/5511910381883?text=Tenho+interesse+no+plano+%22Consultoria+Automatizada%22"},{id:"consultoria-personalizada",name:"Consultoria Personalizada",url:"https://wa.me/5511910381883?text=Tenho+interesse+no+plano+%22Consultoria+Personalizada%22 "}];class f{constructor(i){this.subscribe(i)}subscribe(i){const a=this;for(let s of i)s.addEventListener("click",()=>{a.run(s.dataset.redirect)})}run(i){const a=u.find(s=>s.id==i);a&&(window.location.href=a.url)}}document.querySelector("#app").innerHTML=m();new f(document.querySelectorAll("a[data-redirect]"));
