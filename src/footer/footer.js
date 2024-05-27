export default function Footer() {
    return /*html*/`
    <footer class="fixed w-full bottom-0">
        <div class="bg-primary py-4 pb-8 mt-16">
            <div class="max-w-5xl px-2 lg:px-4 m-auto flex flex-col-reverse md:flex-row">
            <div class="flex-1">
                <p class="mt-4 text-white font-bold text-center md:text-left">
                    LUCAS CARVALHO DA SILVA CONSULTORIA EM TECNOLOGIA DA INFORMACAO LTDA
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
    `;
}