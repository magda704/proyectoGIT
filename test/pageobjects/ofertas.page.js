const { $, expect, browser } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class OfertasPage extends Page {

    get elementoEnPaginaOfertas () {
        return $('[href="https://www.mercadolibre.com.mx/ofertas/supermercado#menu=categories"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async desplegarMenuDeOfertas () {
        await this.menuDeOfertas.moveTo();
        await browser.pause(2000);
    }

    async desplegarMenuDeCategorias () {
        await this.menuDeCategorias.moveTo();
        await browser.pause(2000);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
}


module.exports = new OfertasPage();
