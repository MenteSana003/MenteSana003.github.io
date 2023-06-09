document.addEventListener ('DOMContentLoaded', () => {
    const elementosCarousel =document.querySelectorAll('.carousel'); /*Cambio: Tenía "corousel" y era "carousel"*/
    M.Carousel.init(elementosCarousel, {
        duration: 150, /*Hacer cambio a 1500*/
        dist: -80, /*va a estar reducida un 80 la imagenes de los lados*/ 
        shift: 5,
        padding: 5,
        numVisible: 3, /*fotos que se ven*/ /*cambiar que se vea 1,3, 5, etc*/
        indicators: true,
        noWarp: true /*el desliz con true y false */
    });
});
