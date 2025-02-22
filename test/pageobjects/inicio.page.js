const { $, expect, browser } = require('@wdio/globals');
const Page = require('./page');

/**
 * sub página que contiene selectores y métodos específicos para la página de inicio
 */
class InicioPage extends Page {
    /**
     * Definir selectores usando métodos getter
     */
    // Selector para el menú de Categorías
    get menuDeCategorias () {
        return $('//a[contains(text(),"Categorías")]/parent::li');
    }

    // Selectores internos de cada categoría
    get menuDeVehiculosInternoEnCategorias () {
        return $('//a[text()="Vehículos"]');
    }

    get menuDeTecnologiaInternoEnCategorias () {
        return $('//a[text()="Tecnología"]');
    }

    get menuDeModaInternoEnCategorias () {
        return $('//a[text()="Moda"]');
    }

    get menuDeHerramientasInternoEnCategorias () {
        return $('body > header > div > div.nav-area.nav-bottom-area.nav-center-area > div > ul > li:nth-child(1) > div > ul > li:nth-child(8) > a');
    }

    get menuDeJuguetesInternoEnCategorias () {
        return $('/html/body/header/div/div[5]/div/ul/li[1]/div/ul/li[12]/a');
    }

    get menuDeMueblesInternoEnCategorias () {
        return $('/html/body/header/div/div[5]/div/ul/li[1]/div/ul/li[5]/a');
    }

    get menuDeSupermercadoInternoEnCategorias () {
        return $('body > header > div > div.nav-area.nav-bottom-area.nav-center-area > div > ul > li:nth-child(4) > a');
    }

    get menuDeOfertas () {
        return $('//a[text()="Ofertas"]');
    }

    // Selector para el carrito
    get menuDeCarrito () {
        return $('#nav-cart');
    }

    get menuDeHistorial () {
        return $('body > header > div > div.nav-area.nav-bottom-area.nav-center-area > div > ul > li:nth-child(3) > a');
    }

    get menuDeEnviogratis () {
        return $('body > header > div > div.nav-area.nav-top-area.nav-right-area > a > img');
    }

    get menuDeCuenta () {
        return $('#nav-header-menu > ul > li > a:nth-child(1)');
    }

    get menuDeCodigo () {
        return $('/html/body/header/div/div[4]/div/a');
    }

    get menuDeBuscar () {
        return $('/html/body/header/div/div[2]/form/button/div');
    }

    get menuDeBarra () {
        return $('#cb1-edit');
    }

    // Método genérico para navegar a cualquier categoría
    async navegarACategoria(categoria) {
        const categoriaSelector = $(`//a[text()="${categoria}"]`);
        await categoriaSelector.click();
        await expect(categoriaSelector).toHaveText(categoria);
    }

    // Método para desplegar el menú de categorías
    async desplegarMenuDeCategorias () {
        await this.menuDeCategorias.waitForDisplayed({ timeout: 5000 });
        await this.menuDeCategorias.click(); // O usar moveTo si es hover
    }

    async irAVehiculos() {
        const vehiculosLink = await this.menuDeVehiculosInternoEnCategorias;
        
        // Esperar hasta que el enlace sea visible
        await vehiculosLink.waitForDisplayed({ timeout: 5000 });
        
        // Hacer clic en el enlace
        await vehiculosLink.click();
    }

    async irASupermercado () {
        await this.navegarACategoria('Supermercado');
    }

    async irATecnologia () {
        const tecnologiaMenu = this.menuDeTecnologiaInternoEnCategorias;
        await tecnologiaMenu.waitForClickable({ timeout: 5000, timeoutMsg: 'Tecnología menu not clickable' });
        await tecnologiaMenu.scrollIntoView();
        await tecnologiaMenu.click();
        await browser.waitUntil(async () => {
            return (await browser.getUrl()).includes('tecnologia');
        }, { timeout: 5000, timeoutMsg: 'Failed to navigate to Tecnología category' });
    }

    async irAModa () {
        const modaMenu = this.menuDeModa;
        
        // Espera a que el menú Moda sea clickeable
        await modaMenu.waitForClickable({ timeout: 5000, timeoutMsg: 'El menú Moda no es clickeable' });
        // Desplaza hacia el elemento y haz clic
        await modaMenu.scrollIntoView();
        await modaMenu.click();
        // Opcional: espera a que la página cargue (si es necesario)
        await browser.waitUntil(async () => {
            return (await browser.getUrl()).includes('ropa-bolsas-y-calzado');
        }, { timeout: 5000, timeoutMsg: 'No se pudo navegar a la categoría Moda' });
    }

    async irAHerramientas () {
        const herramientasMenu = this.menuDeHerramientas;
        // Espera a que el menú Herramientas sea clickeable
        await herramientasMenu.waitForClickable({ timeout: 5000, timeoutMsg: 'El menú Herramientas no es clickeable' });
        // Desplaza hacia el elemento y haz clic
        await herramientasMenu.scrollIntoView();
        await herramientasMenu.click();
        // Opcional: espera a que la página cargue (si es necesario)
        await browser.waitUntil(async () => {
            return (await browser.getUrl()).includes('herramientas');
        }, { timeout: 5000, timeoutMsg: 'No se pudo navegar a la categoría Herramientas' });
    }

    async irAJuguetes () {
    // Asegúrate de que el submenú que contiene "Juguetes" se despliegue antes de intentar acceder al enlace
    const submenu = await $('li#submenu-juguetes'); // Cambia por el selector adecuado
    await submenu.waitForDisplayed({ timeout: 10000, timeoutMsg: 'El submenú de juguetes no se despliega' });

    // Luego espera a que el enlace de "Juguetes" sea visible
    const enlaceJuguetes = await $('//a[contains(text(), "Juguetes")]');
    await enlaceJuguetes.waitForDisplayed({ timeout: 10000, timeoutMsg: 'El enlace de juguetes no es visible' });

    // Ahora haz clic en el enlace
    await enlaceJuguetes.click();
}


    async irAHogarYMuebles () {
        await this.navegarACategoria('Hogar y muebles');
    }

    async irAOfertas () {
        await this.menuDeOfertas.click();
        await expect(await this.menuDeOfertas).toHaveText('Ofertas');
    }

    async irACarrito () {
        await this.menuDeCarrito.click();
        await expect(await this.menuDeCarrito).toHaveText('Carrito');
    }

    async irAHistorial () {
        await this.menuDeHistorial.click();
        await expect(await this.menuDeHistorial).toHaveText('Historial');
    }

    async irAEnviogratis () {
        await this.menuDeEnviogratis.click();
        await expect(await this.menuDeEnviogratis).toBeDisplayed();
    }

    async irACuenta() {
        const cuentaLink = await $('#nav-header-menu > ul > li > a:nth-child(1)');
        await cuentaLink.waitForExist({ timeout: 5000 });
        await cuentaLink.waitForDisplayed({ timeout: 5000 });
        return cuentaLink.click();
    }

    async irACodigo () {
        await this.menuDeCodigo.click();
        await expect(await this.menuDeCodigo).toHaveText('ingresa tu codigo postal');
    }

    async irBuscar() {
        const BuscarLink = await $('/html/body/header/div/div[2]/form/button/div');
        await BuscarLinLink.waitForExist({ timeout: 5000 });
        await BuscarLinkLink.waitForDisplayed({ timeout: 5000 });
        return BuscarLink.click();
    }

    async irABarra () {
        await this.menuDeBarra.waitForDisplayed({ timeout: 5000 });
        await this.menuDeBarra.click();
        await expect(await this.menuDeBarra).toHaveText(""); // Revisión del selector
    }

    open () {
        return super.open();
    }
}

module.exports = new InicioPage();
