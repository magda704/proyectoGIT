const { $, expect, browser } = require('@wdio/globals');
const Page = require('./page');

/**
 * Sub página que contiene selectores y métodos específicos para la página principal.
 */
class InicioPage extends Page {
    /**
     * Definir selectores usando métodos getter.
     */
    get menuDeCategorias () {
        return $('//a[contains(text(),"Categorías")]/parent::li');
    }

    get menuDeVehiculosInternoEnCategorias () {
        return $('//a[text()="Vehículos"]');
    }

    get menuDeSupermercadoInternoEnCategorias () {
        return $('[href="https://www.mercadolibre.com.mx/ofertas/supermercado#menu=categories"]');
    }

    get menuDeTecnologiaInternoEnCategorias () {
        return $('//a[text()="Tecnología"]');
    }

    get menuDeModaInternoEnCategorias () {
        return $('//a[text()="Moda"]');
    }

    get menuDeHerramientasInternoEnCategorias () {
        return $('//a[text()="Herramientas"]');
    }

    get menuDeJuguetesInternoEnCategorias () {
        return $('//a[text()="Juguetes"]');
    }

    get menuDeBebesInternoEnCategorias () {
        return $('body > header > div > div.nav-area.nav-bottom-area.nav-center-area > div > ul > li:nth-child(1) > div > ul > li:nth-child(13) > a');
    }

    get menuDeConstruccionInternoEnCategorias () {
        return $('/html/body/header/div/div[5]/div/ul/li[1]/div/ul/li[9]/a');
    }

    /**
     * Métodos para navegar a las categorías y otros elementos del sitio.
     */
    async desplegarMenuDeCategorias () {
        await this.menuDeCategorias.waitForDisplayed({ timeout: 5000 });
        await this.menuDeCategorias.click();
    }

    async irAVehiculos() {
        await this.menuDeVehiculosInternoEnCategorias.waitForDisplayed({ timeout: 5000 });
        await this.menuDeVehiculosInternoEnCategorias.click();
    }

    async irASupermercado() {
        await this.menuDeSupermercadoInternoEnCategorias.waitForDisplayed({ timeout: 5000 });
        await this.menuDeSupermercadoInternoEnCategorias.click();
    }

    async irATecnologia() {
        await this.menuDeTecnologiaInternoEnCategorias.waitForDisplayed({ timeout: 5000 });
        await this.menuDeTecnologiaInternoEnCategorias.click();
    }

    async irAModa() {
        await this.menuDeModaInternoEnCategorias.waitForDisplayed({ timeout: 5000 });
        await this.menuDeModaInternoEnCategorias.click();
    }

    async irAHerramientas() {
        await this.menuDeHerramientasInternoEnCategorias.waitForDisplayed({ timeout: 5000 });
        await this.menuDeHerramientasInternoEnCategorias.click();
    }

    async irAJuguetes () {
        const submenu = await $('li#submenu-juguetes'); // Cambia por el selector adecuado del submenú
        await submenu.waitForDisplayed({ timeout: 10000, timeoutMsg: 'El submenú de juguetes no se desplegó correctamente' });
    
        const enlaceJuguetes = await $('//a[text()="Juguetes"]');
        await enlaceJuguetes.waitForDisplayed({ timeout: 10000, timeoutMsg: 'El enlace de juguetes no es visible' });
    
        await enlaceJuguetes.click();
    }
    
    async irABebes () {
        const enlaceBebes = await $('//a[text()="Bebés"]');
        await enlaceBebes.waitForDisplayed({ timeout: 15000, timeoutMsg: 'El enlace de Bebés no está visible después de 15 segundos' });
    
        await enlaceBebes.click();
    }
    
    async irAConstruccion () {
        const enlaceConstruccion = await $('//a[text()="Construcción"]');
        console.log(await enlaceConstruccion.isDisplayed()); // Verifica si el enlace es visible
        await enlaceConstruccion.click();
    }
    

    open () {
        return super.open();
    }
}

module.exports = new InicioPage();
