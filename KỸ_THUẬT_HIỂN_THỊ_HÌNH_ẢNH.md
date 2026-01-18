# 📸 HIỂN THỊ HÌNH ẢNH - CHI TIẾT KỸ THUẬT

## 🎯 CÔNG NGHỆ HIỂN THỊ HÌNH ẢNH

### 1. CẤU TRÚC HTML MỚI
```html
<div class="product-image">
    <!-- 📌 CHÈN HÌNH ẢNH: Hình ảnh từ thư mục images/ -->
    <img src="${product.image || 'https://via.placeholder.com/200x200?text=' + encodeURIComponent(product.name)}" 
         alt="${product.name}" 
         class="product-image-img"
         onerror="this.src='https://via.placeholder.com/200x200?text=' + encodeURIComponent('${product.name}')">
</div>
```

### 2. CSS STYLING
```css
.product-image {
    width: 100%;
    height: 200px;
    border-radius: 8px;
    overflow: hidden;
    background: rgba(0, 240, 255, 0.05);
    margin-bottom: 15px;
}

.product-image-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    background: linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(255, 0, 255, 0.1));
    display: block;
}
```

---

## 🔄 LUỒNG HOẠT ĐỘNG

### Khi trang load:
```
1. Đọc dữ liệu sản phẩm từ productsData[]
2. Mỗi sản phẩm có field "image": "images/ten-file.jpg"
3. renderProducts() tạo HTML với <img src="${product.image}">
4. Trình duyệt tìm hình ảnh trong thư mục images/
   ├─ ✅ Tìm thấy → Hiển thị hình ảnh
   └─ ❌ Không tìm → Dùng placeholder.com tự động
5. CSS áp dụng styling cho hình ảnh
```

### Khi lọc sản phẩm:
```
filterByCategory('Tivi')
  ↓
Gọi map product → tạo HTML mới
  ↓
Hình ảnh được hiển thị với logic như trên
```

```
filterByNeed('living-room')
  ↓
Gọi map product → tạo HTML mới
  ↓
Hình ảnh được hiển thị với logic như trên
```

---

## 📝 DANH SÁCH CÁC HÀM ĐÃ CẬP NHẬT

### 1. renderProducts()
**Vị trí:** script.js, line ~1030-1070
```javascript
function renderProducts(filter = 'all') {
    // ... code lọc sản phẩm ...
    grid.innerHTML = filteredProducts.map(product => {
        return `
            <div class="product-card">
                <!-- ... checkbox ... -->
                <div class="product-image">
                    <img src="${product.image || placeholder}" class="product-image-img">
                </div>
                <!-- ... product info ... -->
            </div>
        `;
    }).join('');
}
```

### 2. filterByCategory()
**Vị trí:** script.js, line ~1567-1625
```javascript
function filterByCategory(category) {
    // Lọc theo category
    const filteredProducts = productsData.filter(p => p.category === category);
    
    // Hiển thị với hình ảnh
    grid.innerHTML = filteredProducts.map(product => {
        return `<img src="${product.image || placeholder}">...`;
    }).join('');
}
```

### 3. filterByNeed()
**Vị trí:** script.js, line ~1682-1740
```javascript
function filterByNeed(need) {
    // Lọc theo nhu cầu
    const filteredProducts = productsData.filter(p => 
        p.needs && p.needs.includes(need)
    );
    
    // Hiển thị với hình ảnh
    grid.innerHTML = filteredProducts.map(product => {
        return `<img src="${product.image || placeholder}">...`;
    }).join('');
}
```

---

## 🌐 PLACEHOLDER FALLBACK

### Khi hình ảnh không tìm thấy:
```javascript
// Sử dụng placeholder.com
src="https://via.placeholder.com/200x200?text=TV+QLED+65+inch"
```

### Ưu điểm:
✅ Tự động tạo placeholder với tên sản phẩm
✅ Không gây lỗi khi hình ảnh thiếu
✅ Hiển thị tên sản phẩm trên ảnh giữ chỗ
✅ Cứ cập nhật hình ảnh là tự động thay đổi

---

## 🛠️ TÙY CHỈNH

### Thay đổi kích thước hình ảnh:
```css
/* Hiện tại: 200px */
.product-image-img {
    height: 250px;  ← Thay đổi ở đây
}
```

### Thay đổi kiểu border-radius:
```css
/* Hiện tại: 8px (góc bo tròn) */
.product-image-img {
    border-radius: 12px;  ← Thay đổi ở đây
}
```

### Thay đổi background gradient:
```css
/* Hiện tại: Neon cyan + magenta */
.product-image-img {
    background: linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(255, 0, 255, 0.1));
    /* Thay đổi ở đây */
}
```

---

## 🔍 CÁC TRƯỜNG HỢP KHÁC

### Khi thêm sản phẩm mới:
```javascript
{
    id: 51,
    name: "Sản phẩm mới",
    // ... các field khác ...
    image: "images/ten-file.jpg",  // ← CẤP THIẾT
    // ...
}
```

### Nếu không có hình ảnh cho sản phẩm:
```javascript
{
    id: 51,
    name: "Sản phẩm mới",
    image: "",  // ← Để trống, sẽ dùng placeholder
    // ...
}
```

### Để hiển thị hình ảnh từ URL Internet:
```javascript
{
    id: 51,
    name: "Sản phẩm mới",
    image: "https://example.com/image.jpg",  // ← URL đầy đủ
    // ...
}
```

---

## 📊 KIỂM TRA KỊA HÀNG

### Cách kiểm tra hình ảnh:

1. **Mở DevTools** (F12)
2. **Tab Network** → Reload trang
3. Tìm requests có tên: `tv-qled-65.jpg`, `washing-machine-12kg.jpg`, ...
   - ✅ Status 200 = Hình ảnh tìm thấy
   - ❌ Status 404 = Hình ảnh không tìm thấy (dùng placeholder)

4. **Tab Elements** → Tìm `<img class="product-image-img">`
   - Kiểm tra `src` attribute
   - Kiểm tra `alt` attribute

---

## ⚡ TỐI ƯU HOÁ

### Để tăng tốc độ:
1. **Nén hình ảnh** - Dùng TinyPNG, Compress.com
2. **WebP format** - Thay vì JPG để nhỏ hơn
3. **Lazy loading** - Chỉ load khi cuộn tới

### Code lazy loading (tùy chọn):
```html
<img src="${product.image}" 
     alt="${product.name}" 
     class="product-image-img"
     loading="lazy">
```

---

## 🎨 MỘT SỐ MẹO

### 1. Ảnh nào dễ nhìn?
- **Sáng** > Tối (dễ nhìn trên background tối)
- **Có sản phẩm rõ ràng** > Ảnh nền
- **Tỉ lệ 1:1** (vuông) > Tỉ lệ khác

### 2. Định dạng tốt nhất?
- **JPG** - Tệp nhỏ, phù hợp hình ảnh
- **PNG** - Có transparency, tệp lớn hơn
- **WebP** - Nhỏ hơn JPG, hỗ trợ mới

### 3. Kích thước công ty:
- **50-200KB** - Tối ưu cho web
- **1-3MB** - Quá nặng, phải nén lại

---

## 🚀 TIẾP THEO

1. ✅ HTML & CSS đã chuẩn bị
2. ✅ JavaScript đã cập nhật
3. 📌 **CẦN TẠO THƯMỤC `images/`**
4. 📌 **CẦN THÊM 50 HÌNH ẢNH**
5. ✅ Kết quả: Ứng dụng hoàn hảo!

---

## 📞 LIÊN HỆ VẤN ĐỀ

**Nếu hình ảnh không hiển thị:**
- ✓ Kiểm tra thư mục `images/` có tồn tại?
- ✓ Kiểm tra tên file có khớp với script.js?
- ✓ Mở DevTools → Network để kiểm tra status
- ✓ Xóa cache trình duyệt (Ctrl+Shift+Delete)
- ✓ F5 hoặc Ctrl+F5 để tải lại trang

**Nếu placeholder hiển thị:**
- → Điều này là BÌNH THƯỜNG khi hình ảnh chưa có
- → Cứ thêm hình ảnh vào thư mục images/ là OK

---

✨ **HỆ THỐNG HÌNH ẢNH ĐÃ SẴN SÀNG 100%!**
