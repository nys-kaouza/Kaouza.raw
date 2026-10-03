// Esperamos a que todo el HTML cargue antes de ejecutar el código
document.addEventListener('DOMContentLoaded', () => {
    
    // =========================================
    // 1. LÓGICA DEL VISOR DE FOTOS (LIGHTBOX)
    // =========================================
    const visor = document.getElementById("visor-fotos");
    const imgAmpliada = document.getElementById("img-ampliada");
    const btnCerrar = document.querySelector(".cerrar-visor");
    const imagenes = document.querySelectorAll(".gallery-grid img");

    // Al darle clic a cualquier imagen, abrir el visor
    imagenes.forEach(img => {
        img.addEventListener("click", function() {
            visor.style.display = "block";
            imgAmpliada.src = this.src;
        });
    });

    // Cerrar el visor al darle clic a la "X"
    btnCerrar.addEventListener("click", () => {
        visor.style.display = "none";
    });

    // Cerrar si hacen clic en el fondo oscuro
    visor.addEventListener("click", (evento) => {
        if (evento.target === visor) {
            visor.style.display = "none";
        }
    });

    // =========================================
    // 2. LÓGICA DEL MENÚ HAMBURGUESA
    // =========================================
    const menuHamburguesa = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    // Abrir o cerrar el menú al tocar las 3 rayitas
    menuHamburguesa.addEventListener('click', () => {
        navMenu.classList.toggle('activo');
    });

    // Cerrar el menú automáticamente cuando el cliente elige una opción (vital en celulares)
    document.querySelectorAll('.nav-menu a').forEach(enlace => {
        enlace.addEventListener('click', () => {
            navMenu.classList.remove('activo');
        });
    });

});