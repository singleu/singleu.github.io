import { Service } from "./service";

export default function Services() {
    return /*html*/`
<section id="services" class="bg-gray-50 pb-8">
    <div id="planos" class="absolute"></div>
    <div class="max-w-5xl px-4 m-auto">
        <div class="relative isolate py-10">
            <div class="">
                <h1 class="text-2xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl my-10">Planos Manancial</h1>
                <div class="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 items-start lg:max-w-none lg:p-0 p-4">
                    ${Service('Relatório Semanal', '/relatorio-semanal.html', 'Grátis', 'Mantenha-se informado sobre a lavoura dos EUA em primeira mão por quem conhece.', ['Acompanhamento da lavoura dos EUA','Informação acessível', 'Relatório direto e franco', 'Atualização Semanal'])}
                    ${Service('Consultoria automatizada ', '/consultoria-automatizada.html', 'R$ 999/ano', 'A inovação na comercialização agrícola: os indicadores de mercado traduzidos para sua tomada de decisão', ['Alerta de Compra e Venda', 'Recomendações Aaron Edwards', 'Posição Semanal dos Fundos','Temporada de Compra e Venda'])}
                    ${Service('Consultoria Personalizada', '/consultoria-personalizada.html', 'Para Você', 'Receba orientação personalizada para alcançar seus objetivos de forma eficiente', ['Plano comercial customizado', 'Estratégias Personalizadas', 'Acompanhamento na execução', 'Consultoria Automatizada'])}
                </div>
            </div>
        </div>
    </div>
</section>
    `;
}