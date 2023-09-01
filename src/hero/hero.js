import './hero.css';

export default function Hero() {
    return /*html*/`
<section id="hero" class="bg-white">
  <div class="relative isolate px-6 pt-14 lg:px-8">
    <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div class="hidden sm:mb-8 sm:flex sm:justify-center">
        <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-black ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Desenvolvendo seu plano comercial?
          <a href="#" class="font-semibold text-green-800"><span class="absolute inset-0" aria-hidden="true"></span>
            Agende uma conversa <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
      <div class="text-center">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Sistema Manancial</h1>
        <p class="mt-6 text-lg leading-8 text-black">Oferecendo informações essenciais e soluções personalizadas para o cultivo de maneira lucrativa e sustentável.</p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a href="#" class="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
            Fale com um especialista
           </a>
           <a href="#about" class="text-sm font-semibold leading-6 text-gray-900"> Conheça mais <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </div>
  </div>
</section>
`;
}