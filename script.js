document.addEventListener('DOMContentLoaded', function() {
    // Все товары магазина
    const allProducts = {
        popular: [
            {
                id: 1,
                name: 'iPhone 15 Pro Max',
                description: '6.7" OLED, A17 Pro, 48MP камера',
                price: 1299,
                oldPrice: 1399,
                image: 'https://avatars.mds.yandex.net/get-mpic/1926093/2a00000195fbc9b5ba439962d634b8ead6b2/orig'
            },
            {
                id: 2,
                name: 'Samsung Galaxy S24 Ultra',
                description: '6.8" Dynamic AMOLED, Snapdragon 8 Gen 3',
                price: 1399,
                oldPrice: 1499,
                image: 'https://avatars.mds.yandex.net/get-mpic/5253277/2a000001922b04467a43a2a7aeb57ebcea4b/orig'
            },
            {
                id: 3,
                name: 'Xiaomi 14 Pro',
                description: '6.73" AMOLED, Snapdragon 8 Gen 3',
                price: 999,
                image: 'https://i.ytimg.com/vi/WKSOjfJ38LU/maxresdefault.jpg'
            }
        ],
        deals: [
            {
                id: 14,
                name: 'Realme GT 3',
                description: '6.74" AMOLED, Snapdragon 8+ Gen 1, 50MP камера, 240W зарядка',
                price: 599,
                oldPrice: 699,
                image: 'https://avatars.mds.yandex.net/get-mpic/1599966/img_id4779774596010734128.jpeg/orig'
            },
            {
                id: 12,
                name: 'POCO X6 Pro',
                description: '6.67" AMOLED, Dimensity 8200, 64MP камера',
                price: 349,
                oldPrice: 399,
                image: 'https://avatars.mds.yandex.net/get-mpic/5319505/img_id3286632590364560373.jpeg/orig'
            }
        ],
        okak: [
            {
                id: 6,
                name: 'OKAK',
                description: 'окак самый лучщий телефон окак одобряет',
                price: 0,
                oldPrice: 0,
                image: 'https://derzay.philology.sfedu.ru/images/mem_6.jpg'
            },
            {
                id: 7,
                name: 'OKAK повербанк',
                description: 'заряжет что угодно что даже не разряжено',
                price: 10,
                image: 'https://derzay.philology.sfedu.ru/images/mem_6.jpg'
            }
        ],
        sumsung: [
            {
                id: 8,
                name: 'SUMSUNG Galaxy Z',
                description: 'Складной 7.6" AMOLED, процессор Exynos 2200',
                price: 1799,
                image: 'https://avatars.mds.yandex.net/get-mpic/5314345/img_id2674649053708970489.jpeg/orig'
            },
            {
                id: 2,
                name: 'Samsung Galaxy S24 Ultra',
                description: '6.8" Dynamic AMOLED, Snapdragon 8 Gen 3',
                price: 1399,
                oldPrice: 1499,
                image: 'https://avatars.mds.yandex.net/get-mpic/5253277/2a000001922b04467a43a2a7aeb57ebcea4b/orig'
            },
            {
                id: 9,
                name: 'SUMSUNG Note 30',
                description: '6.9" AMOLED, S-Pen, процессор Exynos 2300',
                price: 1299,
                image: 'https://avatars.mds.yandex.net/i?id=5dc28d97142e4c08df9f3b5d052b73a9_l-5311803-images-thumbs&n=13'
            }
        ],
        xiaomi: [
            {
                id: 3,
                name: 'Xiaomi 14 Pro',
                description: '6.73" AMOLED, Snapdragon 8 Gen 3',
                price: 999,
                image: 'https://i.ytimg.com/vi/WKSOjfJ38LU/maxresdefault.jpg'
            },
            {
                id: 10,
                name: 'XIAOMI 14 Ultra',
                description: '6.81" AMOLED, Snapdragon 8 Gen 3, 200MP камера',
                price: 1299,
                image: 'https://action24.ru/media/uploads/2024/02/01/xiaomi_14_ultra_pribudet_ranshe_ozhidaemogo_chego_zhdat_kogda_i_pochem_picture2_0.jpg'
            },
            {
                id: 11,
                name: 'XIAOMI Redmi Note 13',
                description: '6.67" AMOLED, Snapdragon 7 Gen 2, 108MP камера',
                price: 399,
                image: 'https://xistore.by/upload/resize/upload/catalog/gossip/151808/b53/fullBlock3_736_578_75.jpg'
            }
        ],
        poco: [
            {
                id: 12,
                name: 'POCO X6 Pro',
                description: '6.67" AMOLED, Dimensity 8200, 64MP камера',
                price: 349,
                oldPrice: 399,
                image: 'https://avatars.mds.yandex.net/get-mpic/5319505/img_id3286632590364560373.jpeg/orig'
            },
            {
                id: 13,
                name: 'POCO F5',
                description: '6.67" AMOLED, Snapdragon 7+ Gen 2, 64MP камера',
                price: 449,
                image: 'https://avatars.mds.yandex.net/get-mpic/1045304/2a0000018b846526d7d75a5797b44168e464/orig'
            }
        ],
        realme: [
            {
                id: 14,
                name: 'Realme GT 3',
                description: '6.74" AMOLED, Snapdragon 8+ Gen 1, 50MP камера, 240W зарядка',
                price: 599,
                oldPrice: 699,
                image: 'https://avatars.mds.yandex.net/get-mpic/1599966/img_id4779774596010734128.jpeg/orig'
            },
            {
                id: 15,
                name: 'Realme 11 Pro+',
                description: '6.7" AMOLED, Dimensity 7050, 200MP камера, 100W зарядка',
                price: 449,
                image: 'https://avatars.mds.yandex.net/get-mpic/5189780/2a00000191b8a045bce3511f14c7e2db2d6e/orig'
            }
        ]
    };

    // Корзина
    let cart = [];
    
    // Элементы DOM
    const DOM = {
        productsGrid: document.getElementById('products-grid'),
        dealsGrid: document.getElementById('deals-grid'),
        okakGrid: document.getElementById('okak-grid'),
        sumsungGrid: document.getElementById('sumsung-grid'),
        xiaomiGrid: document.getElementById('xiaomi-grid'),
        pocoGrid: document.getElementById('poco-grid'),
        realmeGrid: document.getElementById('realme-grid'),
        cartCount: document.querySelector('.cart-count'),
        cartModal: document.querySelector('.cart-modal'),
        cartItems: document.querySelector('.cart-items'),
        totalPrice: document.querySelector('.total-price'),
        closeCartBtn: document.querySelector('.close-cart'),
        cartIcon: document.querySelector('.cart-icon'),
        notification: document.querySelector('.notification'),
        checkoutBtn: document.querySelector('.checkout-btn'),
        productModal: document.querySelector('.product-details-modal'),
        closeModalBtn: document.querySelector('.close-modal'),
        modalImg: document.querySelector('.modal-product-img'),
        modalName: document.querySelector('.modal-product-name'),
        modalDesc: document.querySelector('.modal-product-desc'),
        modalCurrentPrice: document.querySelector('.modal-current-price'),
        modalOldPrice: document.querySelector('.modal-old-price'),
        modalAddToCartBtn: document.querySelector('.modal-add-to-cart')
    };

    // Отображение всех товаров
    function displayAllProducts() {
        // Популярные товары
        allProducts.popular.forEach(product => {
            DOM.productsGrid.appendChild(createProductCard(product));
        });

        // Акционные товары
        allProducts.deals.forEach(deal => {
            DOM.dealsGrid.appendChild(createProductCard(deal, true));
        });

        // Товары брендов
        allProducts.okak.forEach(product => {
            DOM.okakGrid.appendChild(createProductCard(product));
        });

        allProducts.sumsung.forEach(product => {
            DOM.sumsungGrid.appendChild(createProductCard(product));
        });

        allProducts.xiaomi.forEach(product => {
            DOM.xiaomiGrid.appendChild(createProductCard(product));
        });

        allProducts.poco.forEach(product => {
            DOM.pocoGrid.appendChild(createProductCard(product));
        });

        allProducts.realme.forEach(product => {
            DOM.realmeGrid.appendChild(createProductCard(product));
        });
    }

    // Создание карточки товара
    function createProductCard(product, isDeal = false) {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${isDeal ? '<div class="deal-badge">АКЦИЯ</div>' : ''}
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">
                    <span class="current-price">$${product.price}</span>
                    ${product.oldPrice ? `<span class="old-price">$${product.oldPrice}</span>` : ''}
                </div>
                <div class="product-actions">
                    <button class="cool-btn buy-now" data-id="${product.id}">КУПИТЬ</button>
                    <button class="cool-btn outline details-btn" data-id="${product.id}">ПОДРОБНЕЕ</button>
                </div>
            </div>
        `;
        
        return productCard;
    }

    // Показать детали товара
    function showProductDetails(productId) {
        // Находим товар
        let product = null;
        for (const category in allProducts) {
            product = allProducts[category].find(p => p.id === productId);
            if (product) break;
        }
        
        if (!product) return;
        
        // Заполняем модальное окно
        DOM.modalImg.src = product.image;
        DOM.modalImg.alt = product.name;
        DOM.modalName.textContent = product.name;
        DOM.modalDesc.textContent = product.description;
        DOM.modalCurrentPrice.textContent = `$${product.price}`;
        
        if (product.oldPrice) {
            DOM.modalOldPrice.textContent = `$${product.oldPrice}`;
            DOM.modalOldPrice.style.display = 'inline';
        } else {
            DOM.modalOldPrice.style.display = 'none';
        }
        
        // Обработчик для кнопки добавления в корзину
        DOM.modalAddToCartBtn.onclick = () => {
            addToCart(product.id);
            DOM.productModal.classList.remove('active');
        };
        
        // Показываем модальное окно
        DOM.productModal.classList.add('active');
    }

    // Добавление в корзину
    function addToCart(productId) {
        // Находим товар во всех категориях
        let product = null;
        for (const category in allProducts) {
            const found = allProducts[category].find(p => p.id === productId);
            if (found) {
                product = found;
                break;
            }
        }
        
        if (!product) return;
        
        // Проверяем, есть ли уже товар в корзине
        const existingItem = cart.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        
        updateCart();
        showNotification(`${product.name} добавлен в корзину`);
    }

    // Обновление корзины
    function updateCart() {
        // Обновляем счетчик
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        DOM.cartCount.textContent = totalItems;
        
        // Обновляем модальное окно корзины
        DOM.cartItems.innerHTML = '';
        
        if (cart.length === 0) {
            DOM.cartItems.innerHTML = '<p>Ваша корзина пуста</p>';
            DOM.totalPrice.textContent = 'Итого: $0';
            return;
        }
        
        let totalPrice = 0;
        
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            totalPrice += itemTotal;
            
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-img">
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                </div>
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <div class="cart-item-price">$${item.price} x ${item.quantity} = $${itemTotal}</div>
                    <button class="cart-item-remove" data-id="${item.id}">УДАЛИТЬ</button>
                    <div class="cart-item-quantity">
                        <button class="decrease" data-id="${item.id}">-</button>
                        <span>${item.quantity}</span>
                        <button class="increase" data-id="${item.id}">+</button>
                    </div>
                </div>
            `;
            DOM.cartItems.appendChild(cartItem);
        });
        
        DOM.totalPrice.textContent = `Итого: $${totalPrice.toFixed(2)}`;
        
        // Добавляем обработчики событий для кнопок в корзине
        document.querySelectorAll('.cart-item-remove').forEach(button => {
            button.addEventListener('click', removeFromCart);
        });
        
        document.querySelectorAll('.increase').forEach(button => {
            button.addEventListener('click', increaseQuantity);
        });
        
        document.querySelectorAll('.decrease').forEach(button => {
            button.addEventListener('click', decreaseQuantity);
        });
    }

    // Удаление из корзины
    function removeFromCart(e) {
        const productId = parseInt(e.target.getAttribute('data-id'));
        cart = cart.filter(item => item.id !== productId);
        updateCart();
        showNotification('Товар удален из корзины');
    }

    // Увеличение количества
    function increaseQuantity(e) {
        const productId = parseInt(e.target.getAttribute('data-id'));
        const item = cart.find(item => item.id === productId);
        if (item) {
            item.quantity += 1;
            updateCart();
        }
    }

    // Уменьшение количества
    function decreaseQuantity(e) {
        const productId = parseInt(e.target.getAttribute('data-id'));
        const item = cart.find(item => item.id === productId);
        
        if (item) {
            if (item.quantity > 1) {
                item.quantity -= 1;
            } else {
                cart = cart.filter(i => i.id !== productId);
            }
            updateCart();
        }
    }

    // Уведомление
    function showNotification(message) {
        DOM.notification.textContent = message;
        DOM.notification.classList.add('show');
        
        setTimeout(() => {
            DOM.notification.classList.remove('show');
        }, 3000);
    }

    // Таймер акций
    function updateDealTimer() {
        const now = new Date();
        const endOfDay = new Date();
        endOfDay.setHours(23, 59, 59, 999);
        
        const diff = endOfDay - now;
        
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = Math.floor(seconds).toString().padStart(2, '0');
    }

    // Оформление заказа
    function checkout() {
        if (cart.length === 0) {
            showNotification('Корзина пуста!');
            return;
        }
        
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        showNotification(`Заказ оформлен! Сумма: $${total.toFixed(2)}`);
        cart = [];
        updateCart();
        DOM.cartModal.classList.remove('active');
    }

    // Инициализация
    function init() {
        displayAllProducts();
        
        // Таймер
        updateDealTimer();
        setInterval(updateDealTimer, 1000);
        
        // Корзина
        DOM.cartIcon.addEventListener('click', () => {
            DOM.cartModal.classList.add('active');
        });
        
        DOM.closeCartBtn.addEventListener('click', () => {
            DOM.cartModal.classList.remove('active');
        });
        
        // Закрытие корзины при клике вне ее
        document.addEventListener('click', (e) => {
            if (!DOM.cartModal.contains(e.target) && e.target !== DOM.cartIcon && !DOM.cartIcon.contains(e.target)) {
                DOM.cartModal.classList.remove('active');
            }
        });
        
        // Добавление обработчиков для кнопок
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('buy-now')) {
                const productId = parseInt(e.target.getAttribute('data-id'));
                addToCart(productId);
            } else if (e.target.classList.contains('details-btn')) {
                const productId = parseInt(e.target.getAttribute('data-id'));
                showProductDetails(productId);
            }
        });
        
        // Закрытие модального окна товара
        DOM.closeModalBtn.addEventListener('click', () => {
            DOM.productModal.classList.remove('active');
        });
        
        // Закрытие при клике вне окна
        DOM.productModal.addEventListener('click', (e) => {
            if (e.target === DOM.productModal) {
                DOM.productModal.classList.remove('active');
            }
        });
        
        // Оформление заказа
        DOM.checkoutBtn.addEventListener('click', checkout);
        
        // Плавная прокрутка для навигации
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    init();
});