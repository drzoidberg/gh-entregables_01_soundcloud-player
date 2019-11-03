'use strict'

// crea un nodo con las propiedades del objeto que se le pasa como plantilla
function createNode(node, obj) {
    const element = document.createElement(node);
    for (let param in obj){
        element.setAttribute(`${param}`,`${obj[param]}`);
    }

    return element;
}
// #solución original de 'user7895783' en stackoverflow, posteriormente adaptada a la situacion
// --> https://stackoverflow.com/questions/12274748/setting-multiple-attributes-for-an-element-at-once-with-javascript


// da formato al atributo src del elemento con las props del objeto que se le pasa como plantilla
function formatURIParams(paramObj) {
    let paramStr = [];
    for (let param in paramObj) {
        paramStr += `${param}=${paramObj[param]}&`;
    }
    // corta el último '&' para obtener una URI limpia
    paramStr = paramStr.slice(0, -1);

    return paramStr;
}