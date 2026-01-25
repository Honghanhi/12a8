// ===== DỮ LIỆU SẢN PHẨM - KHÔNG CÓ TRƯỜNG IMAGE =====
// Tự động dùng: images/product-{id}.jpg

// ===== NOTIFICATION SYSTEM =====
function showNotification(title, message, type = 'success', duration = 3000) {
    const container = document.getElementById('notification-container');
    if (!container) return;
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    const icons = {
        success: '✓',
        checkout: '🛒',
        error: '✕'
    };
    
    notification.innerHTML = `
        <div class="notification-icon">${icons[type]}</div>
        <div class="notification-content">
            <div class="notification-title">${title}</div>
            <div class="notification-message">${message}</div>
            <div class="notification-progress">
                <div class="notification-progress-bar"></div>
            </div>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">×</button>
    `;
    
    container.appendChild(notification);
    
    // Tự động xóa sau duration
    setTimeout(() => {
        if (notification.parentElement) {
            notification.classList.add('removing');
            setTimeout(() => notification.remove(), 300);
        }
    }, duration);
}

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
        needs: ["living-room", "entertainment"],
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
        needs: ["laundry"],
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
        needs: ["kitchen"],
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
        needs: ["kitchen"],
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
        needs: ["kitchen"],
        description: "Nồi cơm cao tần IH với 12 chương trình nấu, lòng niêu bền bỉ, giữ nhiệt 48 giờ",
        material: "Lòng nồi hợp kim nhôm phủ kim cương 5 lớp",
        origin: "Nhật Bản",
        brand: "Panasonic",
        technology: "IH cao tần, Fuzzy Logic AI, Diamond Fluorine Coating"
    },
    {
        id: 6,
        name: "Tủ lạnh Inverter 550L Side by Side",
        price: 35900000,
        stock: 5,
        rating: 4.9,
        reviews: 567,
        trend: "trending",
        category: "Tủ lạnh",
        needs: ["kitchen"],
        description: "Tủ lạnh Side by Side 550L với công nghệ Inverter tiết kiệm 40% điện, làm lạnh nhanh 5 phút",
        material: "Thép không gỉ bạc, kính cường lực",
        origin: "Hàn Quốc",
        brand: "LG",
        technology: "Inverter Compressor, Linear Cooling, Fresh Converter"
    },
    {
        id: 7,
        name: "Máy điều hòa 1HP Inverter",
        price: 8200000,
        stock: 18,
        rating: 4.7,
        reviews: 421,
        trend: "popular",
        category: "Điều hòa",
        needs: ["living-room", "bedroom"],
        description: "Máy lạnh Inverter 1HP tiêu thụ điện 360W/h, mát lạnh 2 phút, vận hành yên tĩnh",
        material: "Nhôm bền bỉ, giấu dây lạnh",
        origin: "Thái Lan",
        brand: "Daikin",
        technology: "Inverter, Flash Cooling, Coanda Air Flow"
    },
    {
        id: 8,
        name: "Máy sấy quần áo 8kg",
        price: 12500000,
        stock: 12,
        rating: 4.6,
        reviews: 289,
        trend: "popular",
        category: "Máy giặt",
        needs: ["laundry"],
        description: "Máy sấy quần áo 8kg với 16 chương trình, cảm biến độ ẩm thông minh, tiết kiệm năng lượng A++",
        material: "Vỏ nhôm cao cấp, lồng inox",
        origin: "Đức",
        brand: "Bosch",
        technology: "AutoDry, Sensitive Drying System, EcoMode"
    },
    {
        id: 9,
        name: "Lò nướng hơi nước 60L",
        price: 42000000,
        stock: 3,
        rating: 4.8,
        reviews: 145,
        trend: "trending",
        category: "Lò nướng",
        needs: ["kitchen"],
        description: "Lò nướng cao cấp với hơi nước tích hợp, 20 chương trình nấu tự động, màn hình cảm ứng",
        material: "Thép không gỉ 304, kính cường lực",
        origin: "Đức",
        brand: "Siemens",
        technology: "Steam Function, Pyrolytic Cleaning, TFT Display"
    },
    {
        id: 10,
        name: "Bàn chải đánh răng điện Sonic",
        price: 2800000,
        stock: 45,
        rating: 4.7,
        reviews: 723,
        trend: "popular",
        category: "Sức khỏe",
        needs: ["health", "bedroom"],
        description: "Bàn chải đánh răng điện với rung 42000 lần/phút, pin dùng 30 ngày, 5 chế độ làm sạch",
        material: "Nhựa silicone y tế, đầu bàn chải dupont",
        origin: "Nhật Bản",
        brand: "Philips",
        technology: "Sonic Technology, Smart Timer, Pressure Sensor"
    },
    {
        id: 11,
        name: "Máy tập chạy bộ điện tử",
        price: 15800000,
        stock: 7,
        rating: 4.5,
        reviews: 198,
        trend: "popular",
        category: "Thể thao",
        needs: ["health"],
        description: "Máy chạy bộ điện tử với màn hình LCD 5 inch, tốc độ tối đa 16km/h, tải trọng 120kg",
        material: "Khung sắt cao cấp, bề mặt chạy cao su",
        origin: "Trung Quốc",
        brand: "Xiaomi",
        technology: "Foldable Design, Shock Absorption, Heart Rate Monitor"
    },
    {
        id: 12,
        name: "Máy xay sinh tố 1800W",
        price: 3500000,
        stock: 28,
        rating: 4.8,
        reviews: 512,
        trend: "trending",
        category: "Đồ dùng nhà bếp",
        needs: ["kitchen"],
        description: "Máy xay sinh tố công suất lớn 1800W, lâm mở tàn tay nhanh, chế độ tự động 5 mức",
        material: "Thân nhựa PET chắc chắn, lọ thủy tinh",
        origin: "Trung Quốc",
        brand: "Ninja",
        technology: "Blentec Motor, Smart One-Touch Operation, 3 Speed Settings"
    },
    {
        id: 13,
        name: "Lò vi sóng 30L Inverter",
        price: 6800000,
        stock: 14,
        rating: 4.6,
        reviews: 334,
        trend: "popular",
        category: "Lò vi sóng",
        needs: ["kitchen"],
        description: "Lò vi sóng 30L với công nghệ Inverter, 10 mức công suất, nấu đều hơn 35%",
        material: "Thép không gỉ, bồn chứa ceramic",
        origin: "Hàn Quốc",
        brand: "LG",
        technology: "Inverter Microwave, Sensor Cooking, Smart Inverter"
    },
    {
        id: 14,
        name: "Tủ chườngm âm 218L 2 cánh",
        price: 11500000,
        stock: 6,
        rating: 4.7,
        reviews: 267,
        trend: "popular",
        category: "Tủ lạnh",
        needs: ["kitchen"],
        description: "Tủ chứa rượu vang chuyên dụng, nhiệt độ 5-22°C, khóa tự động, đèn LED", 
        material: "Thép không gỉ, kính cường lực",
        origin: "Pháp",
        brand: "Sommelier",
        technology: "Climate Control, UV Protection, Digital Thermostat"
    },
    {
        id: 15,
        name: "Quạt thông minh WiFi 48W",
        price: 5200000,
        stock: 32,
        rating: 4.6,
        reviews: 445,
        trend: "trending",
        category: "Điều hòa",
        needs: ["living-room", "bedroom"],
        description: "Quạt thông minh có WiFi, điều khiển qua app, 3 chế độ gió, tự động tắt hẹn giờ",
        material: "Nhôm hợp kim, cánh quạt nylon",
        origin: "Trung Quốc",
        brand: "Xiaomi",
        technology: "Smart WiFi Control, Stepless Speed Adjustment, Remote App"
    },
    {
        id: 16,
        name: "Máy lọc nước RO 10 cấp",
        price: 9800000,
        stock: 9,
        rating: 4.8,
        reviews: 378,
        trend: "trending",
        category: "Máy lọc nước",
        needs: ["kitchen", "health"],
        description: "Máy lọc nước RO 10 cấp loại bỏ 99.9% chất bẩn, nước sạch 20L/ngày, bể nước nóng",
        material: "Thép không gỉ 304, vỏ nhựa ABS",
        origin: "Hàn Quốc",
        brand: "Kangaroo",
        technology: "RO Membrane, Reverse Osmosis, Hot Water Tank"
    },
    {
        id: 17,
        name: "Máy hút bụi công suất mạnh 2000W",
        price: 4500000,
        stock: 21,
        rating: 4.5,
        reviews: 312,
        trend: "popular",
        category: "Thiết bị làm sạch",
        needs: ["living-room"],
        description: "Máy hút bụi năng lượng cao, có lọc HEPA, túi hứng bụi 25L, ống hút 5m",
        material: "Thân sắt sơn, vỏ nhựa bền",
        origin: "Tây Ban Nha",
        brand: "Bosch",
        technology: "HEPA Filter, High Suction Power, Compact Design"
    },
    {
        id: 18,
        name: "Bồn tắm massage góc 150x150cm",
        price: 28900000,
        stock: 2,
        rating: 4.7,
        reviews: 89,
        trend: "popular",
        category: "Phòng tắm",
        needs: ["bedroom"],
        description: "Bồn tắm massage góc với 12 vòi phun, sưởi ấm nước, đèn LED, khí nén âm",
        material: "Acrylic cường lực, khung thép không gỉ",
        origin: "Tây Ban Nha",
        brand: "Jacuzzi",
        technology: "Hydro Jet Massage, Air Jets, Heating System, Chromotherapy"
    },
    {
        id: 19,
        name: "Bảng điều khiển thông minh smarthome",
        price: 7500000,
        stock: 11,
        rating: 4.6,
        reviews: 234,
        trend: "trending",
        category: "Smart Home",
        needs: ["living-room"],
        description: "Bảng điều khiển thông minh kết nối WiFi, điều khiển 20+ thiết bị, lập lịch tự động",
        material: "Thủy tinh cảm ứng, khung nhôm",
        origin: "Trung Quốc",
        brand: "Aqara",
        technology: "WiFi Control, Voice Assistant, Home Automation"
    },
    {
        id: 20,
        name: "Máy phát WiFi Mesh 5G ba dải",
        price: 6200000,
        stock: 19,
        rating: 4.8,
        reviews: 567,
        trend: "trending",
        category: "Công nghệ",
        needs: ["living-room"],
        description: "Router WiFi Mesh 5G ba dải, sóng mạnh 300m², tốc độ 4800Mbps, 6 ăng ten",
        material: "Nhựa cao cấp, ăng ten kim loại",
        origin: "Trung Quốc",
        brand: "TP-Link",
        technology: "WiFi 6, Mesh Network, Dual-Band + WiFi 6, Beamforming"
    }
];

// ===== BIẾN TOÀN CỤC =====
let cart = [];
let currentFilter = 'all';
let selectedProducts = [];
let favorites = [];
let priceMin = 0;
let priceMax = 100000000;
let selectedRatings = [];
let selectedBrands = [];
let addToCartInProgress = new Set(); // Debounce để tránh click nhiều lần

// ===== KHỞI TẠO =====
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    renderFeaturedSlider();
    initSlider();
    generateCategoriesGrid();
    updateNeedsCounts();
    setupEventListeners();
    updateCartCount();
});

// ===== RENDER DANH SÁCH SẢN PHẨM =====
function renderProducts(filter = 'all') {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    
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
        const isSelected = selectedProducts.includes(product.id);
        const isFavorite = favorites.includes(product.id);
        const selectedClass = isSelected ? 'selected' : '';
        
        // 📌 QUAN TRỌNG: Tự động tạo tên file từ ID
        // Chỉ cần tải product-1.jpg, product-2.jpg, ... vào thư mục images/
        const imageUrl = `images/product-${product.id}.jpg`;
        
        return `
            <div class="product-card ${selectedClass}" data-id="${product.id}">
                <div class="product-image">
                    <img src="${imageUrl}" 
                         alt="${product.name}" 
                         class="product-image-img"
                         onerror="this.src='https://dummyimage.com/200x200?text=' + encodeURIComponent('${product.name}')"
                    >
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <div class="product-price">${formatPrice(product.price)}</div>
                    <div class="product-rating">⭐ ${product.rating} (${product.reviews} đánh giá)</div>
                    <div class="product-stock ${stockClass}">${stockText}</div>
                    <div class="product-brand">🏷️ ${product.brand}</div>
                    <div class="product-actions">
                        <button class="btn-view" onclick="showProductDetail(${product.id})">Xem chi tiết</button>
                        <button class="btn-add-cart" onclick="addToCart(${product.id}, this)" ${product.stock === 0 ? 'disabled' : ''}>
                            Thêm giỏ hàng
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// ===== RENDER SLIDER =====
function renderFeaturedSlider() {
    const slider = document.getElementById('slider');
    if (!slider) return;
    
    const featuredProducts = productsData.filter(p => p.trend === 'trending').slice(0, 5);
    
    slider.innerHTML = featuredProducts.map(product => `
        <div class="slider-item" onclick="showProductDetail(${product.id})">
            <div class="slider-item-image">
                <img src="images/product-${product.id}.jpg" 
                     alt="${product.name}"
                     onerror="this.src='https://dummyimage.com/200x200?text=' + encodeURIComponent('${product.name}')"
                >
            </div>
            <h3>${product.name}</h3>
            <div class="rating">⭐ ${product.rating}</div>
            <div class="price">${formatPrice(product.price)}</div>
            <button class="btn-3d" onclick="event.stopPropagation(); addToCart(${product.id}, this)">
                Thêm vào giỏ
            </button>
        </div>
    `).join('');
}

// ===== FORMAT GIÁ =====
function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN').format(price) + 'đ';
}

// ===== THÊM VÀO GIỎ =====
function addToCart(productId, button = null) {
    const product = productsData.find(p => p.id === productId);
    
    // Validation
    if (!product) {
        showNotification('Lỗi', 'Sản phẩm không tồn tại!', 'error');
        return;
    }
    
    if (product.stock <= 0) {
        showNotification('Hết hàng', `"${product.name}" hiện đã hết hàng!`, 'error');
        return;
    }
    
    // Add to cart immediately
    cart.push(product);
    updateCartCount();
    showNotification('Thêm sản phẩm', `"${product.name}" đã được thêm vào giỏ hàng!`, 'success');
    
    // Optional: disable button briefly for visual feedback
    if (button) {
        button.disabled = true;
        button.style.opacity = '0.6';
        
        setTimeout(() => {
            button.disabled = false;
            button.style.opacity = '1';
        }, 500);
    }
}

// ===== CẬP NHẬT SỐ LƯỢNG GIỎ =====
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

// ===== XEM CHI TIẾT =====
function showProductDetail(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById('product-modal');
    const modalBody = document.getElementById('modal-body');
    
    const imageUrl = `images/product-${product.id}.jpg`;
    const stockClass = product.stock > 0 ? 'in-stock' : 'out-of-stock';
    const stockText = product.stock > 0 ? `✓ Còn hàng: ${product.stock}` : '✕ Hết hàng';
    const stockBadge = product.stock > 0 ? '' : 'disabled';
    
    modalBody.innerHTML = `
        <div class="detail-container">
            <div class="detail-image-section">
                <div class="detail-image-wrapper">
                    <img src="${imageUrl}" 
                         alt="${product.name}" 
                         class="detail-image-large"
                         onerror="this.src='https://dummyimage.com/400x400?text=' + encodeURIComponent('${product.name}')"
                    >
                </div>
                <div class="detail-stock ${stockClass}">${stockText}</div>
            </div>
            
            <div class="detail-info-section">
                <div class="detail-header">
                    <h2>${product.name}</h2>
                    <div class="detail-brand">🏷️ ${product.brand}</div>
                </div>
                
                <div class="detail-price-section">
                    <div class="detail-price">${formatPrice(product.price)}</div>
                    <div class="detail-rating">⭐ ${product.rating} (${product.reviews} đánh giá)</div>
                </div>
                
                <div class="detail-section">
                    <h4>📝 Mô tả sản phẩm</h4>
                    <p>${product.description}</p>
                </div>
                
                <div class="detail-specs">
                    <div class="detail-section">
                        <h4>📍 Nơi sản xuất</h4>
                        <p class="spec-value">${product.origin}</p>
                    </div>
                    
                    <div class="detail-section">
                        <h4>🔧 Chất liệu</h4>
                        <p class="spec-value">${product.material}</p>
                    </div>
                    
                    <div class="detail-section">
                        <h4>⚙️ Công nghệ được sử dụng</h4>
                        <div class="tech-list">
                            ${product.technology.split(', ').map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                        </div>
                    </div>
                </div>
                
                <div class="detail-actions">
                    <button class="btn-3d" onclick="addToCart(${product.id}, this)" ${product.stock === 0 ? 'disabled' : ''}>
                        🛒 Thêm vào giỏ hàng
                    </button>
                    <button class="btn-3d btn-close-modal" onclick="document.getElementById('product-modal').style.display='none'">
                        ✕ Đóng
                    </button>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

// ===== FILTER THEO NHU CẦU =====
function filterByNeed(need) {
    const filteredProducts = productsData.filter(p => p.needs && p.needs.includes(need));
    const grid = document.getElementById('products-grid');
    
    if (grid) {
        grid.innerHTML = filteredProducts.map(product => {
            const imageUrl = `images/product-${product.id}.jpg`;
            const stockClass = product.stock > 0 ? 'in-stock' : 'out-of-stock';
            const stockText = product.stock > 0 ? `Còn hàng: ${product.stock}` : 'Hết hàng';
            
            return `
                <div class="product-card" data-id="${product.id}">
                    <div class="product-image">
                        <img src="${imageUrl}" 
                             alt="${product.name}" 
                             class="product-image-img"
                             onerror="this.src='https://dummyimage.com/200x200?text=' + encodeURIComponent('${product.name}')"
                        >
                    </div>
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <div class="product-price">${formatPrice(product.price)}</div>
                        <div class="product-rating">⭐ ${product.rating}</div>
                        <div class="product-stock ${stockClass}">${stockText}</div>
                        <div class="product-actions">
                            <button class="btn-add-cart" onclick="addToCart(${product.id}, this)">Thêm giỏ</button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }
    
    const productsSection = document.getElementById('products');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// ===== FILTER THEO DANH MỤC =====
function filterByCategory(category) {
    const filteredProducts = productsData.filter(p => p.category === category);
    const grid = document.getElementById('products-grid');
    
    if (grid) {
        grid.innerHTML = filteredProducts.map(product => {
            const imageUrl = `images/product-${product.id}.jpg`;
            const stockClass = product.stock > 0 ? 'in-stock' : 'out-of-stock';
            const stockText = product.stock > 0 ? `Còn hàng: ${product.stock}` : 'Hết hàng';
            
            return `
                <div class="product-card" data-id="${product.id}">
                    <div class="product-image">
                        <img src="${imageUrl}" 
                             alt="${product.name}" 
                             class="product-image-img"
                             onerror="this.src='https://dummyimage.com/200x200?text=' + encodeURIComponent('${product.name}')"
                        >
                    </div>
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <div class="product-price">${formatPrice(product.price)}</div>
                        <div class="product-rating">⭐ ${product.rating}</div>
                        <div class="product-stock ${stockClass}">${stockText}</div>
                        <div class="product-actions">
                            <button class="btn-add-cart" onclick="addToCart(${product.id}, this)">Thêm giỏ</button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }
}

// ===== TẠO DANH MỤC =====
function generateCategoriesGrid() {
    const categories = [...new Set(productsData.map(p => p.category))];
    const grid = document.getElementById('categories-grid');
    
    if (!grid) return;
    
    grid.innerHTML = categories.map(category => {
        const count = productsData.filter(p => p.category === category).length;
        return `
            <div class="need-card" onclick="filterByCategory('${category}')">
                <h3>${category}</h3>
                <span class="need-count">(${count} sản phẩm)</span>
            </div>
        `;
    }).join('');
}

// ===== CẬP NHẬT SỐ LƯỢNG NHU CẦU =====
function updateNeedsCounts() {
    const needs = ['living-room', 'kitchen', 'laundry', 'bedroom', 'health', 'entertainment'];
    
    needs.forEach(need => {
        const count = productsData.filter(p => p.needs && p.needs.includes(need)).length;
        const element = document.getElementById(`count-${need}`);
        if (element) {
            element.textContent = `(${count} sản phẩm)`;
        }
    });
}

// ===== SETUP EVENTS =====
function setupEventListeners() {
    const cartBtn = document.getElementById('cart-btn');
    if (cartBtn) {
        cartBtn.addEventListener('click', showCart);
    }
    
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', checkout);
    }
    
    const filterToggle = document.getElementById('filter-toggle-btn');
    if (filterToggle) {
        filterToggle.addEventListener('click', () => {
            const filter = document.getElementById('advanced-filter');
            if (filter) {
                filter.style.display = filter.style.display === 'none' ? 'block' : 'none';
            }
        });
    }
    
    const closeButtons = document.querySelectorAll('.close-modal');
    closeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.closest('.modal').style.display = 'none';
        });
    });
}

// ===== HIỂN THỊ GIỎ =====
function showCart() {
    const modal = document.getElementById('cart-modal');
    if (!modal) return;
    
    const cartItems = document.getElementById('cart-items');
    if (cartItems) {
        if (cart.length === 0) {
            cartItems.innerHTML = '<p>Giỏ hàng trống</p>';
        } else {
            cartItems.innerHTML = cart.map((item, index) => `
                <div>
                    <span>${item.name} - ${formatPrice(item.price)}</span>
                    <button onclick="removeFromCart(${index})">Xóa</button>
                </div>
            `).join('');
        }
    }
    
    // Tính tổng giá trị giỏ hàng
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const cartTotal = document.getElementById('cart-total');
    if (cartTotal) {
        cartTotal.textContent = formatPrice(total);
    }
    
    modal.style.display = 'block';
}

// ===== SLIDER FUNCTIONALITY =====
let currentSlideIndex = 0;
let sliderAutoScrollInterval;

function removeFromCart(index) {
    if (index >= 0 && index < cart.length) {
        const removedItem = cart.splice(index, 1);
        updateCartCount();
        showCart(); // Cập nhật lại hiển thị giỏ hàng
        showNotification('Xóa sản phẩm', `"${removedItem[0].name}" đã bị xóa khỏi giỏ hàng!`, 'success');
    }
}

function checkout() {
    if (cart.length === 0) {
        showNotification('Giỏ hàng trống', 'Vui lòng thêm sản phẩm trước khi thanh toán!', 'error');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const itemList = cart.map(item => `• ${item.name}: ${formatPrice(item.price)}`).join('\n');
    
    showNotification(
        '✨ Thanh toán thành công!', 
        `Đơn hàng của bạn:\n${itemList}\n\nTổng tiền: ${formatPrice(total)}\n\nCảm ơn bạn đã mua sắm tại TECH HOME!`, 
        'checkout', 
        4000
    );
    
    // Xóa giỏ hàng sau khi thanh toán thành công
    cart = [];
    updateCartCount();
    const modal = document.getElementById('cart-modal');
    if (modal) modal.style.display = 'none';
}

// ===== SLIDER FUNCTIONALITY =====

function initSlider() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    if (prevBtn) prevBtn.addEventListener('click', () => scrollSlider(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => scrollSlider(1));
    
    startAutoScroll();
}

function scrollSlider(direction) {
    const slider = document.getElementById('slider');
    if (!slider) return;
    
    const itemWidth = 380; // min-width (350px) + gap (30px)
    const scrollAmount = itemWidth * direction;
    
    slider.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
    
    // Reset auto-scroll timer
    clearInterval(sliderAutoScrollInterval);
    startAutoScroll();
}

function startAutoScroll() {
    sliderAutoScrollInterval = setInterval(() => {
        const slider = document.getElementById('slider');
        if (!slider) return;
        
        // Nếu scroll đến cuối, quay lại đầu
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
            slider.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            scrollSlider(1);
        }
    }, 5000); // Auto-scroll mỗi 5 giây
}

// ===== SCROLL TỚI SẢN PHẨM =====
function scrollToProducts() {
    const section = document.getElementById('products');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ===== SHOW ALL =====
function showAllProducts() {
    renderProducts('all');
    const section = document.getElementById('products');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
