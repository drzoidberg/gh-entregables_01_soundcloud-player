document.addEventListener('DOMContentLoaded', (event) => {

    // arranca el objeto SoundCloud para realizar búsquedas
    SC.initialize({
        client_id: 'aa06b0630e34d6055f9c6f8beb8e02eb',
    });

    const busqueda = {
        q: '',
        limit: ''
    }

    // crea el container y lo inyecta en el DOM
    const div = document.createElement('div');
    div.setAttribute('id', 'iframeSCPlayerContainer');

    // crea el iframe y lo inyecta en el DOM
    const iframeSCObject = new IframeSC();
    iframeSCObject.src += formatURIParams(iframeSCURIParams)
    const iframeSCPlayer = createNode('iframe', iframeSCObject );
    iframeSCPlayer.setAttribute('id', 'iframeSCPlayer');
    document.body.appendChild(iframeSCPlayer);

    // crea el div 'dropzone' y lo inyecta en el DOM
    const divSCDropzone = createNode('div', { id: 'divSCDropzone', style: 'width: 166px; height: 166px; background: grey; display: inline-block' });
    document.body.appendChild(divSCDropzone);

    // crea el input text con los params y lo inyecta en el DOM
    const inputSCTextSearch = createNode('input', { type: 'text', id: 'inputSCTextSearch', placeholder: 'type in your query' } );
    document.body.appendChild(inputSCTextSearch);

    // y así sucesivamente…
    const numResultsSC = createNode('input', { type: 'number', id: 'numResultsSC', min: 1, max: 30, step: 2, value: 10, placeholder: 'number of search results' } );
    document.body.appendChild(numResultsSC);

    const searchSCButton = createNode('button', { type: 'button', id: 'searchSCButton' } );
    searchSCButton.innerText = 'Search';
    document.body.appendChild(searchSCButton);

    let resultTmp = '';

    // cuando se hace click en el botón 'Search' se hace la búsqueda…
    searchSCButton.addEventListener('click', (event) => {
        busqueda.q = inputSCTextSearch.value;
        busqueda.limit = numResultsSC.value;

        SC
            .get('/tracks/', busqueda)
            .then( (results) => {
                let contador = 1;
                results.forEach( result => {
                    resultTmp = createNode('p', { class: 'pepino', id: `pepino${contador}`, draggable: true });
                    resultTmp.innerHTML = `${result.title}`;
                    document.body.appendChild(resultTmp);
                    contador++;
                })
            })


        // })
        // .then( (results) => console.log(results[0].id) )
        .catch( (error) => console.log(error))
    })
})



// SC.stream('/tracks/293').then(function(player){
//     player.play();
// });