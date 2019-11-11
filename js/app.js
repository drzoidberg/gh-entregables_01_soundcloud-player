'use strict'

document.addEventListener('DOMContentLoaded', (event) => {

    // PINTA EL LAYOUT INICIAL
    //////

    // arranca el objeto SoundCloud para realizar búsquedas
    SC.initialize({
        client_id: 'aa06b0630e34d6055f9c6f8beb8e02eb',
    });

    const busqueda = {
        q: '',
        limit: ''
    }

    let resultTmp = '';
    const resultsContainer = document.getElementById('results-container');
    const searchSCButton = document.getElementById('search-button');
    const searchTextField = document.getElementById('search-text-field');

    searchSCButton.addEventListener('click', (event) => {
        resultsContainer.innerHTML = ''; // limpia los resultados

        busqueda.q = searchTextField.value;
        // busqueda.limit = numResultsSC.value;
        busqueda.limit = 20;

        SC
            .get('/tracks/', busqueda)
            .then((results) => {
                let contador = 1;
                results.forEach(result => {
                    resultTmp = createNode('div', { class: 'card', id: `result${contador}`, draggable: true, 'data-trackid': `${result.id}` });
                    resultTmp.innerHTML =
                        `<div class="duration-container">
                    <a class="duration" href="#">${formatField('duration', result.duration)}</a>
                    </div>
                    <div class="genre-container">
                        <img src="img/icon-genre.png" class="icon-genre">
                        <a class="genre" href="#">${formatField('genre', result.genre)}</a>
                    </div>
                    <div class="date"><span>${formatField('date', result.created_at)}</span></span></div>
                    <div class="name"><span>${formatField('title', result.title)}</span></div>
                    <div class="author"><span>${formatField('username', result.user.username)}</span></div>
                        <div class="picture-container">
                            <a href="player-button-container">
                                <img src="img/play-button.png" class="player-button" style="opacity: 0">
                                <div id="pulse" style="opacity: 0"></div>
                            </a>
                            <img class="picture" src="${formatField('artwork_url', result.artwork_url)}">
                        </div>
                        <div class="description">
                            <p>
                                ${formatField('description', result.description)}
                            </p>
                        </div>`;
                    resultsContainer.appendChild(resultTmp);
                    let card = document.getElementById(`result${contador}`);
                    card.addEventListener('mouseover', (ev) => {
                        let imgPicture = card.querySelector('.picture-container img.picture')
                            .setAttribute('style', 'opacity: 0');
                        let platerButton = card.querySelector('.picture-container img.player-button')
                            .setAttribute('style', 'opacity: 1');
                    });
                    card.addEventListener('mouseout', (ev) => {
                        card.querySelector('.picture-container img.picture')
                            .setAttribute('style', 'opacity: 1');
                        card.querySelector('.picture-container img.player-button')
                            .setAttribute('style', 'opacity: 0');
                    });
                    card.addEventListener('click', (event) => {
                        dragged = event.target;
                        player = document.getElementById('iframeSCPlayer');
                        if (player !== null) {
                            player
                                .setAttribute('style', 'display: none');
                        }
                        logoContainer
                            .setAttribute('style', 'display: none');
                        dropzone.querySelector('.marco-rayado')
                            .setAttribute('style', 'display: flex');

                        let iframeToDelete = document.getElementById('iframeSCPlayer');
                        log(iframeToDelete)
                        if (iframeToDelete !== null) {
                            document.getElementById('dropzone-container').removeChild(iframeToDelete);
                        }

                        const iframeSCObjectPlay = new IframeSC();
                        iframeSCObjectPlay.src += 'tracks/' + dragged.getAttribute('data-trackid') + '&' + formatURIParams(iframeSCURIParamsPlay);

                        const iframeSCPlayerFinal = createNode('iframe', iframeSCObjectPlay);
                        iframeSCPlayerFinal.setAttribute('id', 'iframeSCPlayer');

                        document.getElementById('logo-container').setAttribute('style', 'display: none');
                        // document.getElementById('dropzone').setAttribute('style', 'display: none');
                        document.getElementById('dropzone-container')
                            .prepend(iframeSCPlayerFinal);

                    });;
                    contador++;
                })
            })
            .catch((error) => console.log(error));
    });


    // DRAG AND DROP
    let dragged;
    let dropzone = document.getElementById('dropzone');
    let logoContainer = document.getElementById('logo-container');
    let controlsWrapper = document.getElementById('controls-wrapper');
    let player = document.getElementById('iframeSCPlayer');

    // guarda la referencia del elemento dragged cuando empieza el drag y manipula el estilo
    document.addEventListener('dragstart', (event) => {
        dragged = event.target;
        player = document.getElementById('iframeSCPlayer');
        if (player !== null) {
            player
                .setAttribute('style', 'display: none');
        }
        logoContainer
            .setAttribute('style', 'display: none');
        dropzone.querySelector('.marco-rayado')
            .setAttribute('style', 'display: flex');

    });

    // cuando acaba el drag resetea el estilo del 'dropabble'
    document.addEventListener('dragend', (event) => {
        player = document.getElementById('iframeSCPlayer');
        if (player !== null) {
            player
                .setAttribute('style', 'display: block');
        }
        logoContainer
            .setAttribute('style', 'display: flex');
        dropzone.querySelector('.marco-rayado')
            .setAttribute('style', 'display: ');
    });

    // eventos de los elementos 'droppable'
    document.addEventListener('dragover', (event) => {
        // preventdefault para permitir el drop
        event.preventDefault();
    });

    document.addEventListener('drop', (event) => {
        event.preventDefault();
        if (event.target.className == 'dropzone') {
            // recargo el iframe con el nuevo src --> borro el iframe anterior y cargo uno nuevo con el src actualizado
            let iframeToDelete = document.getElementById('iframeSCPlayer');
            log(iframeToDelete)
            if (iframeToDelete !== null) {
                document.getElementById('dropzone-container').removeChild(iframeToDelete);
            }

            const iframeSCObjectPlay = new IframeSC();
            iframeSCObjectPlay.src += 'tracks/' + dragged.getAttribute('data-trackid') + '&' + formatURIParams(iframeSCURIParamsPlay);

            const iframeSCPlayerFinal = createNode('iframe', iframeSCObjectPlay);
            iframeSCPlayerFinal.setAttribute('id', 'iframeSCPlayer');

            document.getElementById('logo-container').setAttribute('style', 'display: none');
            // document.getElementById('dropzone').setAttribute('style', 'display: none');
            document.getElementById('dropzone-container')
                .prepend(iframeSCPlayerFinal);
        }
    });

});