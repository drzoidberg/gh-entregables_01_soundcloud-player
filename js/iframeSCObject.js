'use strict'

class IframeSC {
    // el src apunta a mi usuario (perfil vacío), para NO mostrar en el iframe, por defecto, un mensaje de error por falta de URL de música proporcionada
    // '166' es el valor elegido en la altura  porque es el valor que proporciona por defecto SC en su iframe

    baseURL = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/';
    constructor(id = 'sc-widget', width = '1200', height = '166', scrolling = 'no', frameborder = 'no', allow = 'autoplay', src = this.baseURL) {
        this.id = id;
        this.width = width;
        this.height = height;
        this.scrolling = scrolling;
        this.frameborder = frameborder;
        this.allow = allow;
        this.src = src;
    }
}

const iframeSCURIParams = {
    auto_play: false,
    buying: false,
    color: `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)}`,
    download: false,
    hide_related: true,
    liking: false,
    sharing: false,
    show_artwork: false,
    show_playcount: false,
    show_user: true,
    single_active: true,
    start_track: 0,
    visual: false
};

const iframeSCURIParamsPlay = {
    auto_play: true,
    buying: false,
    // color: `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)}`,
    download: false,
    hide_related: true,
    liking: false,
    sharing: false,
    show_artwork: false,
    show_playcount: false,
    show_user: true,
    single_active: true,
    start_track: 0,
    visual: false
};