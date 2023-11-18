import {links} from "../links.json";

export class Link {

    constructor(elements) {
        this.subscribe(elements);
    }
    subscribe(elements) {
        const self = this;
        for(let elem of elements) {
            elem.addEventListener("click", () => {
                self.run(elem.dataset.redirect);
            })
        }
    }

    run(key) {
        const link = links.find((item) => {
            return item.id = key;
        })

        if(link) {
            window.location.href = link.url;
        }
    }
}