import './hero.css';

export default function Hero() {
    return /*html*/`
<section id="hero">
  <div class="max-w-5xl lg:px-4 m-auto">
    <div class="relative isolate lg:p-6 lg:px-8">
      <div class="lg:max-w-[464px] lg:bg-[#3E885B] bg-[#013114db] lg:rounded-lg lg:py-10 p-8 lg:my-20 py-32">
        <div>
          <h1 class="text-lg font-semibold tracking-tight text-white  sm:text-2xl mb-6">SISTEMA MANANCIAL</h1>
          <h2 class="text-4xl font-semibold tracking-tight text-white  sm:text-5xl">Comercialização Confiante</h2>
          <p class="mt-6 text-lg leading-8 font-light text-white">Traduzindo os indicadores de mercado para a sua tomada de decisão</p>
          <div class="mt-10 flex  gap-x-6">
            <a href="#about" class="text-sm font-semibold leading-6 text-black rounded-lg px-4 py-2 bg-[#FCBA04]"> Conheça mais </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="banner-plan" class="bg-[#FCBA04] p-4 text-center feature">
    <div class="relative  px-3 py-2 text-1xl text-black font-extralight ring-1 ring-black rounded-lg max-w-2xl m-auto ">
      Desenvolvendo seu plano comercial?
      <a href="#" class="font-semibold  text-black">
        <span class="absolute inset-0" aria-hidden="true"></span>
        <span class="font-medium">
          Agende uma conversa 
        </span>
        <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  </div>
</section>
`;
}