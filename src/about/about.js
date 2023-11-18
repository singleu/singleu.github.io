import "./about.css";

export default function About() {
    return /*html*/`
    <section id="about">
        <div id="sobre" class="absolute"></div>
        <div class="max-w-5xl px-4 m-auto mt-24 md:mt-36 mb-8 md:mb-20">
            <div class="flex flex-col md:flex-row">
                <div class="w-9/12 m-auto   mb-14 px-4 text-center icon-vector">
                    <img id="author-img" class="rounded-md" src="/author.jpg">
                </div>
                <div class="w-auto px-6">
                    <h1 class="text-sm font-bold uppercase">método exclusivo</h1>
                    <h1  class="text-3xl mt-2 font-bold">Aaron Edwards</h1>
                    <p class="leading-8 mb-6 mt-4">
                        Descubra o método exclusivo desenvolvido por Aaron Edwards, renomado consultor de mercado, e aprenda a fazer o mercado de soja e milho trabalhar a favor da sua fazenda. Com enfoque em ajudar produtores a vender bem sua produção, e assim gerir a receita de sua fazenda
                    </p>
                    <div class="md:hidden">
                        <a href="#planos" class="text-sm font-semibold leading-6 text-white rounded-lg px-4 py-2 bg-primary">
                            Conheça os Planos
                        </a>
                    </div>
                </div>
            </div>
            <div class="flex flex-row max-w-full overflow-scroll md:overflow-hidden flex-nowrap mt-8 md:mt-4 space-x-3">
                <div class="flex-none w-1/2 bg-gray-100 rounded p-4 md:flex md:w-1/3 md:bg-white">
                    <span class="icon icon-check"></span>
                    <div class="inline-block md:pl-4">
                        <h4 class="uppercase font-bold">Estratégia comprovada</h4>
                        <p class="text-xs font-extralight">Dados concretos com histórico sólido</p>
                    </div>
                </div>
                <div class="flex-none w-1/2 bg-gray-100 rounded p-4 md:flex md:w-1/3 md:bg-white">
                    <span class="icon icon-mobile"></span>
                    <div class="inline-block md:pl-4">
                        <h4 class="uppercase font-bold">Acessível e Pessoal</h4>
                        <p class="text-xs font-extralight">Consultoria e alertas direto no seu aparelho</p>
                    </div>
                </div>
                <div class="flex-none w-1/2 bg-gray-100 rounded p-4 md:flex  md:w-1/3 md:bg-white">
                    <span class="icon icon-action"></span>
                    <div class="inline-block md:pl-4">
                        <h4 class="uppercase font-bold">Plano e Ação</h4>
                        <p class="text-xs font-extralight">Saiba quando e quanto precisa vender</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
}