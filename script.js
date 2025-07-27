document.addEventListener('DOMContentLoaded', function() {
    
    // --- FUNGSI UNTUK MENU MOBILE (HAMBURGER) ---
    // Ini akan berjalan di semua halaman
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
    }

    // --- FUNGSI UNTUK FILTER PRODUK DI HALAMAN KATALOG ---
    // Ini hanya akan berjalan jika menemukan elemen #filter-buttons
    const filterContainer = document.querySelector('#filter-buttons');
    if (filterContainer) {
        const filterButtons = filterContainer.querySelectorAll('.btn-filter');
        const productItems = document.querySelectorAll('.product-item');

        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                const filterValue = this.getAttribute('data-filter');

                productItems.forEach(item => {
                    // Reset animasi untuk re-trigger
                    item.style.animation = 'none';
                    item.offsetHeight; // Trigger reflow
                    item.style.animation = null;

                    if (filterValue === 'all' || item.classList.contains(filterValue)) {
                        item.classList.remove('hide');
                    } else {
                        item.classList.add('hide');
                    }
                });
            });
        });
    }
});