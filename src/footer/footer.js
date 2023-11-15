export default function Footer() {
    return /*html*/`
    <footer>
        <div class="bg-primary py-4 pb-8">
            <div class="max-w-5xl px-2 lg:px-4 m-auto flex flex-col-reverse md:flex-row">
            <div class="flex-1">
                <p class="mt-4 text-white font-bold text-center md:text-left">
                    Sistema Agroeconômico Manancial LTDA
                </p>
                <p class="lg:mt-4 mt-2 text-white text-sm md:text-md font-light text-center md:text-left">
                    Av. Brig. Luiz Antônio, 2050, Conjunto 151 Bela Vista<br/>
                    São Paulo / SP. CEP 01.318-912. CNPJ - 50.262.750/0001-00
                </p>
            </div>
                <div class="flex-2  text-right">
                    <div id="socials" class="text-center md:text-left">
                        <div class="mt-4 mb-4 indent-2 text-white text-center md:text-left  font-bold">
                            Siga a Manancial
                        </div>
                        <div class="flex flex-row justify-center space-x-4">
                            <a target="_blank" href="https://www.instagram.com/aaronedwardsagro/" class="p-2 bg-primary-400 rounded md:py-3 md:mr-5 text-white font-light">
                                <svg class="inline-block mr-2" fill="#fff" xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                                <span class="hidden md:inline">@aaronedwardsagro</span>
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/in/aaron-edwards-4a572628/" class="p-2 bg-primary-400 rounded md:py-3 md:mr-5 text-white  font-light">
                                <svg class="inline-block mr-2" fill="#fff" xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
                                <span class="hidden md:inline">Aaron Edwards</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-secondary py-2">
            <div class="max-w-5xl px-4 m-auto flex">
                <div class="flex-1">
                    <div id="socials" class="text-center">
                        <div class="flex flex-row place-content-center  text-center">
                        <p class="my-2 text-black">&copy; 2023 Sistema Manancial. Todos os direitos reservados.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    `;
}