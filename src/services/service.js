export function Service(title, offer, description, requirements) {
    return /*html*/`
        <div class="h-full">                                
            <div class="relative flex flex-col h-full p-6 rounded-lg bg-white border border-slate-100 shadow shadow-slate-950/5">
                <div class="mb-5">
                    <div class="text-slate-900 dark:text-slate-200 font-semibold mb-1">
                        ${title}
                    </div>
                    <div class="inline-flex items-baseline mb-2">
                        <span class="text-slate-900 dark:text-slate-200 font-bold text-3xl"></span>
                        <span class="text-slate-900 dark:text-slate-200 font-bold text-4xl">${offer}</span>
                    </div>
                    <div class="font-light text-black my-5">
                        ${description}
                    </div>
                    <a class="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-[#3E885B] px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-green-950/10 hover:bg-green-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-green-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="#0">
                        Agende uma conversa agora
                    </a>
                </div>
                
                <div class="font-bold text-sm mb-3 uppercase">Vantagens:</div>
                    <ul class="text-sm space-y-3 grow list-disc">
                        ${requirements.map((requirement) =>
                            `<li class="ml-4">
                                <span>${requirement}</span>
                            </li>`
                        ).join('')}
                    </ul>
                </div>
            </div>
    `;
}