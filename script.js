// Esperamos a que todo el HTML cargue antes de ejecutar el código
document.addEventListener('DOMContentLoaded', () => {
    // 1. LÓGICA DE FILTROS DE CATEGORÍA
    const filterButtons = document.querySelectorAll('.filter-btn');
    const masonryItems = document.querySelectorAll('.masonry-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase active de todos los botones y ponérsela al presionado
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            masonryItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');

                if (filterValue === 'all' || itemCategory === filterValue) {
                    item.classList.remove('oculto');
                } else {
                    item.classList.add('oculto');
                }
            });
        });
    });

    // 2. MENÚ HAMBURGUESA (Móviles)
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navMenu.classList.toggle('activo');
        });

        // Cerrar menú al hacer clic en cualquier opción
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('activo');
            });
        });
    }

    // 3. VISOR DE FOTOS (LIGHTBOX)
    const visor = document.getElementById('visor-fotos');
    const imgAmpliada = document.getElementById('img-ampliada');
    const cerrarVisor = document.querySelector('.cerrar-visor');
    const galeriaImgs = document.querySelectorAll('.masonry-item img');

    galeriaImgs.forEach(img => {
        img.addEventListener('click', () => {
            visor.style.display = 'block';
            imgAmpliada.src = img.src;
        });
    });

    if (cerrarVisor) {
        cerrarVisor.addEventListener('click', () => {
            visor.style.display = 'none';
        });
    }

    if (visor) {
        visor.addEventListener('click', (e) => {
            if (e.target === visor) {
                visor.style.display = 'none';
            }
        });
    }
});
