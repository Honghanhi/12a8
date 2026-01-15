// ===== DỮ LIỆU SẢN PHẨM =====
const productsData = [
    {
        id: 1,
        name: "Smart TV QLED 4K 65 inch",
        price: 25990000,
        stock: 15,
        rating: 4.8,
        reviews: 342,
        trend: "trending",
        category: "Tivi",
        description: "TV thông minh với công nghệ Quantum Dot, AI upscaling 4K, độ phân giải Ultra HD và hệ điều hành Tizen OS 7.0",
        material: "Khung viền kim loại cao cấp, màn hình QLED",
        origin: "Hàn Quốc",
        brand: "Samsung",
        technology: "Quantum Dot, AI Upscaling, HDR10+, Object Tracking Sound"
    },
    {
        id: 2,
        name: "Máy giặt AI EcoBubble 12kg",
        price: 18500000,
        stock: 8,
        rating: 4.9,
        reviews: 278,
        trend: "popular",
        category: "Máy giặt",
        description: "Máy giặt cửa trước với công nghệ bọt khí AI, tiết kiệm điện năng A+++, giặt nhanh 15 phút",
        material: "Thân máy inox, lồng giặt hợp kim titan",
        origin: "Thái Lan",
        brand: "Samsung",
        technology: "EcoBubble AI, Digital Inverter, QuickDrive, SmartThings App"
    },
    {
        id: 3,
        name: "Máy rửa chén độc lập 14 bộ",
        price: 16800000,
        stock: 0,
        rating: 4.7,
        reviews: 156,
        trend: "popular",
        category: "Máy rửa chén",
        description: "Máy rửa chén với 8 chương trình rửa tự động, công nghệ cảm biến thông minh, sấy khô hoàn hảo",
        material: "Thép không gỉ 304, giỏ đựng cao cấp",
        origin: "Đức",
        brand: "Bosch",
        technology: "PerfectDry, AquaSensor, LoadSensor, TimeLight"
    },
    {
        id: 4,
        name: "Bếp ga âm 5 lò hồng ngoại",
        price: 8900000,
        stock: 22,
        rating: 4.6,
        reviews: 423,
        trend: "trending",
        category: "Bếp ga",
        description: "Bếp ga âm cao cấp với 5 lò công suất cao, đánh lửa IC tự động, mặt kính chịu nhiệt 8H",
        material: "Mặt kính cường lực, vòng chia lửa đồng thau",
        origin: "Việt Nam",
        brand: "Rinnai",
        technology: "Hồng ngoại siêu tiết kiệm, IC tự động, van an toàn chống rò rỉ"
    },
    {
        id: 5,
        name: "Nồi cơm điện tử IH 1.8L",
        price: 4200000,
        stock: 35,
        rating: 4.9,
        reviews: 892,
        trend: "trending",
        category: "Nồi cơm điện",
        description: "Nồi cơm cao tần IH với 12 chương trình nấu, lòng niêu bền bỉ, giữ nhiệt 48 giờ",
        material: "Lòng nồi hợp kim nhôm phủ kim cương 5 lớp",
        origin: "Nhật Bản",
        brand: "Panasonic",
        technology: "IH cao tần, Fuzzy Logic AI, Diamond Fluorine Coating"
    },
    {
        id: 6,
        name: "Smart TV OLED 8K 77 inch",
        price: 89900000,
        stock: 3,
        rating: 5.0,
        reviews: 87,
        trend: "trending",
        category: "Tivi",
        description: "TV OLED 8K cao cấp với độ tương phản vô hạn, công nghệ AI Picture Pro, âm thanh Dolby Atmos",
        material: "Màn hình OLED tự phát sáng, khung viền siêu mỏng",
        origin: "Hàn Quốc",
        brand: "LG",
        technology: "α9 Gen 6 AI Processor, OLED evo, webOS 23, ThinQ AI"
    },
    {
        id: 7,
        name: "Máy giặt sấy AI 10.5kg/7kg",
        price: 32500000,
        stock: 6,
        rating: 4.8,
        reviews: 164,
        trend: "popular",
        category: "Máy giặt",
        description: "Máy giặt sấy kết hợp AI với chức năng hơi nước diệt khuẩn, sấy khô hoàn toàn, điều khiển từ xa",
        material: "Thân máy cao cấp, lồng giặt inox 316",
        origin: "Hàn Quốc",
        brand: "LG",
        technology: "AI DD, TurboWash 360, Steam Care, SmartThinQ"
    },
    {
        id: 8,
        name: "Máy rửa chén âm tủ 13 bộ",
        price: 28900000,
        stock: 4,
        rating: 4.9,
        reviews: 98,
        trend: "popular",
        category: "Máy rửa chén",
        description: "Máy rửa chén âm tủ cao cấp với công nghệ Zeolith sấy khô tuyệt đối, tiêu thụ nước cực thấp",
        material: "Thép không gỉ toàn bộ, khay rửa linh hoạt",
        origin: "Đức",
        brand: "Siemens",
        technology: "Zeolith Drying, Home Connect, VarioSpeed Plus, AquaStop"
    },
    {
        id: 9,
        name: "Bếp từ đôi cảm ứng 4000W",
        price: 5600000,
        stock: 28,
        rating: 4.7,
        reviews: 567,
        trend: "trending",
        category: "Bếp ga",
        description: "Bếp từ cao cấp với 2 vùng nấu linh hoạt, cảm ứng trượt điều khiển công suất, timer tự động tắt",
        material: "Mặt kính Schott Ceran chịu nhiệt, khung thép không gỉ",
        origin: "Malaysia",
        brand: "Electrolux",
        technology: "PowerBoost, FlexiBridge, Timer, Child Lock"
    },
    {
        id: 10,
        name: "Nồi cơm điện cao tần 1.5L",
        price: 6800000,
        stock: 18,
        rating: 5.0,
        reviews: 421,
        trend: "trending",
        category: "Nồi cơm điện",
        description: "Nồi cơm cao tần cao cấp với 15 chương trình nấu tự động, công nghệ áp suất tối ưu hóa hạt cơm",
        material: "Lòng nồi đồng nguyên chất 3 lớp chống dính",
        origin: "Nhật Bản",
        brand: "Zojirushi",
        technology: "Pressure IH, Platinum Infused Nonstick, Umami Setting"
    }
];

// ===== BIẾN TOÀN CỤC =====
let cart = [];
let currentFilter = 'all';
let currentSlide = 0;

// ===== KHỞI TẠO KHI LOAD TRANG =====
document.addEventListener('DOMContentLoaded', function() {
    initSpaceBackground();
    renderFeaturedSlider();
    renderProducts();
    setupEventListeners();
    updateCartCount();
});

// ===== NỀN VŨ TRỤ CÔNG NGHỆ VỚI GỢN SÓNG =====
function initSpaceBackground() {
    const canvas = document.getElementById('space-canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Mảng lưu các ngôi sao
    const stars = [];
    for (let i = 0; i < 200; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2,
            speed: Math.random() * 0.5
        });
    }
    
    // Mảng lưu các gợn sóng khi di chuột
    const ripples = [];
    
    // Lắng nghe sự kiện di chuột
    canvas.addEventListener('mousemove', function(e) {
        ripples.push({
            x: e.clientX,
            y: e.clientY,
            radius: 0,
            maxRadius: 100,
            alpha: 1
        });
    });
    
    // Animation loop
    function animate() {
        ctx.fillStyle = 'rgba(10, 14, 39, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Vẽ các ngôi sao
        stars.forEach(star => {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 240, 255, ${Math.random() * 0.5 + 0.5})`;
            ctx.fill();
            
            star.y += star.speed;
            if (star.y > canvas.height) {
                star.y = 0;
                star.x = Math.random() * canvas.width;
            }
        });
        
        // Vẽ các gợn sóng
        for (let i = ripples.length - 1; i >= 0; i--) {
            const ripple = ripples[i];
            
            ctx.beginPath();
            ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(0, 240, 255, ${ripple.alpha})`;
            ctx.lineWidth = 2;
            ctx.stroke();
            
            ripple.radius += 2;
            ripple.alpha -= 0.02;
            
            if (ripple.alpha <= 0) {
                ripples.splice(i, 1);
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    // Resize canvas khi thay đổi kích thước cửa sổ
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ===== RENDER SLIDER SẢN PHẨM NỔI BẬT =====
function renderFeaturedSlider() {
    const slider = document.getElementById('slider');
    const featuredProducts = productsData.filter(p => p.trend === 'trending').slice(0, 5);
    
    slider.innerHTML = featuredProducts.map(product => `
        <div class="slider-item" onclick="showProductDetail(${product.id})">
            <div class="slider-item-image">
                <!-- Placeholder cho ảnh sản phẩm: ${product.name} -->
            </div>
            <h3>${product.name}</h3>
            <div class="rating">⭐ ${product.rating} (${product.reviews} đánh giá)</div>
            <div class="price">${formatPrice(product.price)}</div>
            <button class="btn-3d" onclick="event.stopPropagation(); addToCart(${product.id})">
                Thêm vào giỏ
            </button>
        </div>
    `).join('');
}

// ===== ĐIỀU KHIỂN SLIDER =====
function setupSliderControls() {
    const slider = document.getElementById('slider');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    prevBtn.addEventListener('click', () => {
        slider.scrollBy({ left: -380, behavior: 'smooth' });
    });
    
    nextBtn.addEventListener('click', () => {
        slider.scrollBy({ left: 380, behavior: 'smooth' });
    });
}

// ===== RENDER DANH SÁCH SẢN PHẨM =====
function renderProducts(filter = 'all') {
    const grid = document.getElementById('products-grid');
    let filteredProducts = productsData;
    
    if (filter === 'trending') {
        filteredProducts = productsData.filter(p => p.trend === 'trending');
    } else if (filter === 'popular') {
        filteredProducts = productsData.filter(p => p.trend === 'popular');
    } else if (filter === 'instock') {
        filteredProducts = productsData.filter(p => p.stock > 0);
    }
    
    grid.innerHTML = filteredProducts.map(product => {
        const stockClass = product.stock > 0 ? 'in-stock' : 'out-of-stock';
        const stockText = product.stock > 0 ? `Còn hàng: ${product.stock}` : 'Hết hàng';
        const badge = product.trend === 'trending' ? 'BÁN CHẠY' : product.trend === 'popular' ? 'PHỔ BIẾN' : '';
        
        return `
            <div class="product-card" data-id="${product.id}">
                ${badge ? `<div class="product-badge">${badge}</div>` : ''}
                <div class="product-image">
                    <!-- Placeholder: Ảnh ${product.name} -->
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <div class="product-price">${formatPrice(product.price)}</div>
                    <div class="product-rating">⭐ ${product.rating} (${product.reviews} đánh giá)</div>
                    <div class="product-stock ${stockClass}">${stockText}</div>
                    <div class="product-actions">
                        <button class="btn-view" onclick="showProductDetail(${product.id})">Xem chi tiết</button>
                        <button class="btn-add-cart" onclick="addToCart(${product.id})" ${product.stock === 0 ? 'disabled' : ''}>
                            Thêm giỏ hàng
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// ===== HIỂN THI CHI TIẾT SẢN PHẨM =====
function showProductDetail(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById('product-modal');
    const modalBody = document.getElementById('modal-body');
    
    const stockClass = product.stock > 0 ? 'in-stock' : 'out-of-stock';
    const stockText = product.stock > 0 ? `Còn hàng: ${product.stock}` : 'Hết hàng';
    
    modalBody.innerHTML = `
        <div class="detail-image">
            <!-- Placeholder: Ảnh chi tiết ${product.name} -->
        </div>
        <div class="detail-info">
            <h2>${product.name}</h2>
            <div class="product-rating">⭐ ${product.rating} (${product.reviews} đánh giá)</div>
            <div class="detail-price">${formatPrice(product.price)}</div>
            <div class="product-stock ${stockClass}">${stockText}</div>
            
            <div class="detail-section">
                <h4>Mô tả sản phẩm</h4>
                <p>${product.description}</p>
            </div>
            
            <div class="detail-section">
                <h4>Thông số kỹ thuật</h4>
                <p><strong>Chất liệu:</strong> ${product.material}</p>
                <p><strong>Xuất xứ:</strong> ${product.origin}</p>
                <p><strong>Hãng sản xuất:</strong> ${product.brand}</p>
            </div>
            
            <div class="detail-section">
                <h4>Công nghệ nổi bật</h4>
                <p>${product.technology}</p>
            </div>
            
            <div class="detail-actions">
                <button class="btn-3d" onclick="addToCart(${product.id}); closeModal('product-modal')" ${product.stock === 0 ? 'disabled' : ''}>
                    Thêm vào giỏ hàng
                </button>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

// ===== THÊM SẢN PHẨM VÀO GIỎ HÀNG =====
function addToCart(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product || product.stock === 0) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        if (existingItem.quantity < product.stock) {
            existingItem.quantity++;
            showSuccessMessage('Đã tăng số lượng sản phẩm trong giỏ hàng!');
        } else {
            showSuccessMessage('Số lượng sản phẩm đã đạt tối đa!');
        }
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            maxStock: product.stock
        });
        showSuccessMessage('Đã thêm sản phẩm vào giỏ hàng!');
    }
    
    updateCartCount();
}

// ===== HIỂN THỊ GIỎ HÀNG =====
function showCart() {
    const modal = document.getElementById('cart-modal');
    const cartItems = document.getElementById('cart-items');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Giỏ hàng của bạn đang trống</div>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <!-- Ảnh ${item.name} -->
                </div>
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <div class="cart-item-price">${formatPrice(item.price)}</div>
                    <div class="cart-item-controls">
                        <button class="qty-btn" onclick="decreaseQuantity(${item.id})">-</button>
                        <span class="qty-display">${item.quantity}</span>
                        <button class="qty-btn" onclick="increaseQuantity(${item.id})">+</button>
                        <button class="btn-remove" onclick="removeFromCart(${item.id})">Xóa</button>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    updateCartTotal();
    modal.style.display = 'block';
}

// ===== TĂNG SỐ LƯỢNG SẢN PHẨM =====
function increaseQuantity(productId) {
    const item = cart.find(i => i.id === productId);
    if (item && item.quantity < item.maxStock) {
        item.quantity++;
        showCart();
        updateCartCount();
    } else {
        showSuccessMessage('Đã đạt số lượng tối đa!');
    }
}

// ===== GIẢM SỐ LƯỢNG SẢN PHẨM =====
function decreaseQuantity(productId) {
    const item = cart.find(i => i.id === productId);
    if (item && item.quantity > 1) {
        item.quantity--;
        showCart();
        updateCartCount();
    }
}

// ===== XÓA SẢN PHẨM KHỎI GIỎ =====
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    showCart();
    updateCartCount();
    showSuccessMessage('Đã xóa sản phẩm khỏi giỏ hàng!');
}

// ===== CẬP NHẬT SỐ LƯỢNG GIỎ HÀNG =====
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelector('.cart-count').textContent = count;
}

// ===== CẬP NHẬT TỔNG TIỀN =====
function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('cart-total').textContent = formatPrice(total);
}

// ===== THANH TOÁN =====
function checkout() {
    if (cart.length === 0) {
        showSuccessMessage('Giỏ hàng của bạn đang trống!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const message = `Đặt hàng thành công!\n\nTổng tiền: ${formatPrice(total)}\nSố sản phẩm: ${cart.length}\n\nCảm ơn bạn đã mua hàng tại Tech Home!`;
    
    // Giả lập đặt hàng thành công
    cart = [];
    updateCartCount();
    closeModal('cart-modal');
    
    // Hiển thị thông báo
    setTimeout(() => {
        showSuccessMessage(message);
    }, 300);
}

// ===== ĐÓNG MODAL =====
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// ===== HIỂN THỊ THÔNG BÁO THÀNH CÔNG =====
function showSuccessMessage(message) {
    const modal = document.getElementById('success-modal');
    document.getElementById('success-message').textContent = message;
    modal.style.display = 'block';
}

function closeSuccessModal() {
    document.getElementById('success-modal').style.display = 'none';
}

// ===== FORMAT GIÁ TIỀN =====
function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(price);
}

// ===== SCROLL ĐẾN PHẦN SẢN PHẨM =====
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// ===== THIẾT LẬP CÁC EVENT LISTENERS =====
function setupEventListeners() {
    // Nút đóng modal
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });
    
    // Click ngoài modal để đóng
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
    
    // Nút giỏ hàng
    document.getElementById('cart-btn').addEventListener('click', showCart);
    
    // Nút thanh toán
    document.getElementById('checkout-btn').addEventListener('click', checkout);
    
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const filter = this.getAttribute('data-filter');
            renderProducts(filter);
        });
    });
    
    // Navigation smooth scroll
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                
                // Update active nav
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // Slider controls
    setupSliderControls();
    
    // Contact form
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        showSuccessMessage('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong 24h.');
        this.reset();
    });
    
    // Scroll effect for header
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
}
