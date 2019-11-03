'use strict'

class IframeSC {
    // el src apunta a mi usuario (perfil vacío), para NO mostrar en el iframe, por defecto, un mensaje de error por falta de URL de musica proporcionada
    // '166' es el valor elegido en la altura  porque es el valor que proporciona por defecto SC en su iframe
    constructor (id = 'sc-widget', width = '332', height = '166', scrolling = 'no', frameborder = 'no', allow = 'autoplay', src = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/134165712&') {
    // constructor (id = 'sc-widget', width = '332', height = '166', scrolling = 'no', frameborder = 'no', allow = 'autoplay', src = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/163140191&') {
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
    color: `rgb(${random(0,255)},${random(0,255)},${random(0,255)}`,
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