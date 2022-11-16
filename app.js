import { modalBody,spinner,creaCard } from "./ui.js";

const urlBase = 'https://rickandmortyapi.com/api/character/';

const loadData = (urlBase, page = 1) => {
    const url = `${urlBase}?page=${page}`;
    fetch(url)
        .then(respuesta => {
            return respuesta.json();
        }).then(respJson => {
            console.log(respJson);
            const info = respJson.info;
            const personajes = respJson.results;
            console.log(info);
            //validacion
            const btnPrev = document.querySelector('#prev');
            const btnNext = document.querySelector('#next');
            if (!info.prev) {
                btnPrev.classList.add('disabled');

            } else {
                btnPrev.classList.remove('disabled');
                btnPrev.setAttribute('data-id', Number(page) - 1);
            }
            if (!info.next) {
                btnNext.classList.add('disabled');

            } else {
                btnNext.classList.remove('disabled');
                btnNext.setAttribute('data-id', Number(page) + 1);
            }
            showCharacters(personajes);
        })
}