import './hero.css';

export default function Hero() {
    return /*html*/`
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
`;
}