'use strict'

// crea un nodo con las propiedades del objeto que se le pasa como plantilla
function createNode(node, obj) {
    const element = document.createElement(node);
    for (let param in obj) {
        element.setAttribute(`${param}`, `${obj[param]}`);
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

// limita el numero de caracteres del campo de texto, según el campo que se le pase, y le añade el  carácter '…'.
function formatField(typeOfField, field) {
    if (typeOfField === 'title') {
        if (field.length >= 17) {
            // corta la string y controla que corte un carácter más si el último carácter es un espacio en blanco
            let str = field.substring(0, 14);
            if (str[str.length - 1] === ' ') {
                return str.substring(0, 13) + '…';
            }
            return str.substring(0, 14) + '…';
        }
        return field;
    } else if (typeOfField === 'artwork_url') {
        if (field === null) {
            return 'img/icons-track.png';
        }
        return field;
    } else if (typeOfField === 'description') {
        if (field === null) {
            return 'No description provided.';
        } else if (field.length >= 78) {
            let str = field.substring(0, 78);
            if (str[str.length - 1] === ' ') {
                return str.substring(0, 77) + '…';
            }
            return str.substring(0, 78) + '…';
        } else if (field != '') {
            return field;
        }
        return 'No description provided.'
    } else if (typeOfField === 'duration') {
        return millisToMinsSecs(field);
    } else if (typeOfField === 'genre') {
        if (field === null) {
            return 'No genre';
        } else if (field.length >= 21) {
            let str = field.substring(0, 21);
            if (str[str.length - 1] === ' ') {
                return str.substring(0, 20) + '…';
            }
            return str.substring(0, 21) + '…';
        } else if (field != '') {
            return field;
        }
        return 'No genre'
    } else if (typeOfField === 'date') {
        if (field === null) {
            return 'No genre';
        } else return field.substring(0, 10);
    } else if (typeOfField === 'username') {
        if (field === null) {
            return 'No username provided';
        } else if (field.length >= 21) {
            let str = field.substring(0, 21);
            if (str[str.length - 1] === ' ') {
                return str.substring(0, 20) + '…';
            }
            return str.substring(0, 21) + '…';
        }
        return field;
    }
}

function millisToMinsSecs(millis) {
    var mins = Math.floor(millis / 60000);
    var secs = ((millis % 60000) / 1000).toFixed(0);
    return mins + ":" + (secs < 10 ? '0' : '') + secs;
}