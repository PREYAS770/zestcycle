document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Dynamic Category Filtering Implementation
    const filterButtons = document.querySelectorAll('.tab-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Manage Active States
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            productCards.forEach(card => {
                const cardCat = card.getAttribute('data-cat');
                if(filterValue === 'all' || cardCat === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => card.style.opacity = '1', 50);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => card.style.display = 'none', 300);
                }
            });
        });
    });

    // 2. Interactive Category Card Clicks
    const catCards = document.querySelectorAll('.category-card');
    catCards.forEach(card => {
        card.addEventListener('click', () => {
            const selectedCat = card.getAttribute('data-category');
            const targetTab = document.querySelector(`.tab-btn[data-filter="${selectedCat}"]`);
            if (targetTab) {
                targetTab.click();
                document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 3. Scroll Reveal Animation Logic
    const animateBoxes = document.querySelectorAll('.animate-box');
    const checkScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;
        animateBoxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            if(boxTop < triggerBottom) {
                box.classList.add('visible');
            }
        });
    };
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Trigger once on initialization

    // 4. Scroll To Top Button Logic
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', () => {
        if(window.scrollY > 400) {
            scrollTopBtn.add('show'); // Simulation helper line
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 5. Interactive Simulated Add to Cart
    const buyBtns = document.querySelectorAll('.add-to-cart-btn');
    const cartCountEl = document.querySelector('.cart-count');
    let count = 0;
    
    buyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            count++;
            cartCountEl.textContent = count;
            btn.innerHTML = '<i class="fas fa-check"></i> Added';
            btn.style.backgroundColor = '#ff6a00';
            btn.style.borderColor = '#ff6a00';
            btn.style.color = '#fff';
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-shopping-cart"></i> Buy Now';
                btn.style.backgroundColor = '';
                btn.style.borderColor = '';
                btn.style.color = '';
            }, 2000);
        });
    });
});
