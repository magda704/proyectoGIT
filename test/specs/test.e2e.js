const InicioPage = require('./Inicio.page');

describe("Navegando en Mercado Libre", () => {

  it("Verificar el submenu de tecnología", async () => {
    await InicioPage.navegarATecnologia();
  });

  it("Verificar el submenu de moda", async () => {
    await InicioPage.navegarAModa();
  });

  it("Verificar el submenu de herramientas", async () => {
    await InicioPage.navegarAHerramientas();
  });

  it("Verificar el submenu de juguetes", async () => {
    await InicioPage.navegarAJuguetes();
  });

  it("Verificar el submenu de hogar y muebles", async () => {
    await InicioPage.navegarAHogarYMuebles();
  });

  it("Verificar la página del carrito", async () => {
    const textoCarrito = await InicioPage.irAlCarrito();
    expect(textoCarrito.trim()).toEqual("Carrito");
  });

  it("Verificar la página de cuenta", async () => {
    const textoCuenta = await InicioPage.irACuenta();
    expect(textoCuenta.trim()).toEqual("Cuenta");
  });

  it("Verificar el texto en el código postal", async () => {
    const textoCodigo = await InicioPage.verificarCodigoPostal();
    expect(textoCodigo.trim()).toContain("Ingresa tu código postal");
  });

  it("Verificar el texto del botón de búsqueda", async () => {
    const textoBuscar = await InicioPage.verificarBotonBuscar();
    expect(textoBuscar.trim()).toEqual("Buscar");
  });

  it("Verificar el texto en la barra", async () => {
    const textoBarra = await InicioPage.verificarBarraBusqueda();
    expect(textoBarra.trim()).toEqual("Barra");
  });

});
