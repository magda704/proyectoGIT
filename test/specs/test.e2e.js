const { expect, browser } = require('@wdio/globals');
const InicioPage = require('../pageobjects/inicio.page');

describe('Navegando en Mercado Libre', () => {     

    it('Verificar el menú de categorías', async () => {
        await InicioPage.open();
        await InicioPage.desplegarMenuDeCategorias();
        await expect(await InicioPage.menuDeVehiculosInternoEnCategorias).toHaveText('Vehículos');
        await expect(await InicioPage.menuDeSupermercadoInternoEnCategorias).toHaveText('Supermercado');
        await expect(await InicioPage.menuDeTecnologiaInternoEnCategorias).toHaveText('Tecnología');
        await expect(await InicioPage.menuDeModaInternoEnCategorias).toHaveText('Moda');
        await expect(await InicioPage.menuDeHerramientasInternoEnCategorias).toHaveText('Herramientas');
        await expect(await InicioPage.menuDeJuguetesInternoEnCategorias).toHaveText('Juguetes');
        await expect(await InicioPage.menuDeBebesInternoEnCategorias).toHaveText('bebes');
        await expect(await InicioPage.menuDeBebesInternoEnCategorias).toHaveText('construccion');
    });

    it('Verificar el submenu de Vehículos', async () => {
      await InicioPage.open();
      await InicioPage.desplegarMenuDeCategorias();
      await InicioPage.irAVehiculos();
      // Verificar que la URL contenga 'vehiculos' sin importar otros parámetros.
      await expect(await browser.getUrl()).toContain('vehiculos');
  });
  
    it('Verificar el submenu de Tecnología', async () => {
      await InicioPage.open();
      await InicioPage.desplegarMenuDeCategorias();
      await InicioPage.irATecnologia();
      // Verificación de la URL completa (completa con "tecnologia" al final)
      await expect(await browser.getUrl()).toEqual('https://www.mercadolibre.com.mx/tecnologia');  
  });

  it('Verificar el submenu de Moda', async () => {
    await InicioPage.open();
    await InicioPage.desplegarMenuDeCategorias();
    await InicioPage.irAModa();
    // Verificar que la URL contenga 'moda' sin importar otros parámetros.
    await expect(await browser.getUrl()).toContain('moda');
});

    it('Verificar el submenu de Juguetes', async () => {
        await InicioPage.open();
        await InicioPage.desplegarMenuDeCategorias();
        await InicioPage.irAJuguetes();
        await expect(await browser.getUrl()).toContain('juguetes');  // Verificación de que la URL contiene "juguetes"
    });

    it('Verificar la página de Supermercado', async () => {
        await InicioPage.open();
        await InicioPage.irASupermercado();
        await expect(await browser.getUrl()).toContain('supermercado');  // Verificación de que la URL contiene "supermercado"
    });

    it('Verificar la página de Bebes', async () => {
      await InicioPage.open();
      await InicioPage.irABebes();
      await expect(await browser.getUrl()).toContain('Bebes');  // Verificación de que la URL contiene "supermercado"
  });

  it('Verificar la página de Construccion', async () => {
    await InicioPage.open();
    await InicioPage.irAConstruccion();
    await expect(await browser.getUrl()).toContain('construccion');  // Verificación de que la URL contiene "supermercado"
});

it('Verificar la página de inmueble', async () => {
  await InicioPage.open();
  await InicioPage.irAInmueble();
  await expect(await browser.getUrl()).toContain('inmueble');  // Verificación de que la URL contiene "supermercado"
});

});
