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
        needs: ["living-room", "entertainment"],
        image: "images/tv-qled-65.jpg", // 📌 Chèn hình ảnh tại đây - Thay 'images/tv-qled-65.jpg' bằng đường dẫn thực tế
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
        image: "images/washing-machine-12kg.jpg", // 📌 Chèn hình ảnh
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
        image: "images/dishwasher-14.jpg", // 📌 Chèn hình ảnh
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
        image: "images/cooktop-5burner.jpg", // 📌 Chèn hình ảnh
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
        image: "images/rice-cooker-1.8l.jpg", // 📌 Chèn hình ảnh
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
        needs: ["living-room", "entertainment"],
        image: "images/tv-oled-8k-77.jpg", // 📌 Chèn hình ảnh
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
        needs: ["laundry"],
        image: "images/washer-dryer-combo.jpg", // 📌 Chèn hình ảnh
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
        needs: ["kitchen"],
        image: "images/built-in-dishwasher-13.jpg", // 📌 Chèn hình ảnh
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
        needs: ["kitchen"],
        image: "images/induction-cooktop-4000w.jpg", // 📌 Chèn hình ảnh
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
        needs: ["kitchen"],
        image: "images/rice-cooker-1.5l-premium.jpg", // 📌 Chèn hình ảnh
        description: "Nồi cơm cao tần cao cấp với 15 chương trình nấu tự động, công nghệ áp suất tối ưu hóa hạt cơm",
        material: "Lòng nồi đồng nguyên chất 3 lớp chống dính",
        origin: "Nhật Bản",
        brand: "Zojirushi",
        technology: "Pressure IH, Platinum Infused Nonstick, Umami Setting"
    },
    // ===== THÊM 40 SẢN PHẨM GIA DỤNG MỚI =====
    {
        id: 11,
        name: "Tủ lạnh French Door 4 cửa 700L",
        price: 42500000,
        stock: 5,
        rating: 4.8,
        reviews: 234,
        trend: "trending",
        category: "Tủ lạnh",
        needs: ["kitchen"],
        image: "images/fridge-french-door-700l.jpg", // 📌 Chèn hình ảnh
        description: "Tủ lạnh cao cấp với 4 cửa, công nghệ làm lạnh đa chiều, bảo quản tươi lâu hơn 48 giờ",
        material: "Thép không gỉ cao cấp",
        origin: "Hàn Quốc",
        brand: "Samsung",
        technology: "Twin Cooling, AI Energy Saving, Digital Inverter"
    },
    {
        id: 12,
        name: "Lò vi sóng thông minh 30L",
        price: 8200000,
        stock: 20,
        rating: 4.6,
        reviews: 189,
        trend: "popular",
        category: "Lò vi sóng",
        needs: ["kitchen"],
        image: "images/microwave-30l.jpg", // 📌 Chèn hình ảnh
        description: "Lò vi sóng thông minh với 15 chức năng nấu, cảm biến thông minh tự động điều chỉnh công suất",
        material: "Thép không gỉ, kính chịu nhiệt",
        origin: "Nhật Bản",
        brand: "Panasonic",
        technology: "Inverter Technology, 15 Auto Menu"
    },
    {
        id: 13,
        name: "Máy hút mùi khử mùi thông minh 90cm",
        price: 12500000,
        stock: 12,
        rating: 4.7,
        reviews: 156,
        trend: "trending",
        category: "Máy hút mùi",
        needs: ["kitchen"],
        image: "images/range-hood-90cm.jpg", // 📌 Chèn hình ảnh
        description: "Máy hút mùi có điều khiển cảm ứng, độ hút 800m³/h, chế độ tự động và manual",
        material: "Kính hiện đại, thép không gỉ",
        origin: "Đức",
        brand: "Bosch",
        technology: "Auto Cleanup, LED Lighting, 3-speed Extraction"
    },
    {
        id: 14,
        name: "Máy sấy quần áo heat pump 8kg",
        price: 21800000,
        stock: 8,
        rating: 4.9,
        reviews: 201,
        trend: "trending",
        category: "Máy sấy",
        needs: ["laundry"],
        image: "images/dryer-heat-pump-8kg.jpg", // 📌 Chèn hình ảnh
        description: "Máy sấy heat pump tiết kiệm điện 60%, sấy nhẹ không làm hỏng quần áo, có chế độ hơi nước",
        material: "Vỏ kim loại cao cấp",
        origin: "Hàn Quốc",
        brand: "LG",
        technology: "Dual Inverter Heat Pump, Steam Technology, ThinQ AI"
    },
    {
        id: 15,
        name: "Máy lọc nước thông minh 5 lõi",
        price: 9800000,
        stock: 16,
        rating: 4.8,
        reviews: 267,
        trend: "popular",
        category: "Máy lọc nước",
        needs: ["kitchen", "health"],
        image: "images/water-filter-5stage.jpg", // 📌 Chèn hình ảnh
        description: "Máy lọc nước 5 lõi loại bỏ 99.9% tạp chất, có hiển thị TDS, tự động xả rửa",
        material: "Nhựa PP cao cấp",
        origin: "Việt Nam",
        brand: "Kangaroo",
        technology: "5-Stage Filtration, TDS Display, Auto Backwash"
    },
    {
        id: 16,
        name: "Bàn là hơi nước chuyên nghiệp 2.5L",
        price: 6500000,
        stock: 14,
        rating: 4.6,
        reviews: 178,
        trend: "popular",
        category: "Bàn là",
        needs: ["laundry"],
        image: "images/steam-iron-2.5l.jpg", // 📌 Chèn hình ảnh
        description: "Bàn là hơi nước với bàn lớn, tính năng chỉnh nhiệt 5 mức, xử lý nước cứng thông minh",
        material: "Bàn nhôm, sứ ceramic",
        origin: "Đức",
        brand: "Bosch",
        technology: "Vertical Steaming, Anti-Calc System, 5-Heat Settings"
    },
    {
        id: 17,
        name: "Máy rửa xe áp lực 130 bar",
        price: 4800000,
        stock: 19,
        rating: 4.7,
        reviews: 143,
        trend: "trending",
        category: "Máy rửa",
        needs: [],
        image: "images/pressure-washer-130bar.jpg", // 📌 Chèn hình ảnh
        description: "Máy rửa xe áp lực cao, tiêu hao nước thấp, tặng 6 đầu phun đa năng",
        material: "Thép sơn tĩnh điện",
        origin: "Đức",
        brand: "Kärcher",
        technology: "130 Bar Pressure, 380L/h Flow, Variable Nozzle"
    },
    {
        id: 18,
        name: "Máy hút bụi công suất mạnh 2000W",
        price: 7200000,
        stock: 11,
        rating: 4.5,
        reviews: 198,
        trend: "popular",
        category: "Máy hút bụi",
        needs: [],
        image: "images/vacuum-2000w.jpg", // 📌 Chèn hình ảnh
        description: "Máy hút bụi công suất mạnh, dung tích 3L, có lọc HEPA bảo vệ sức khỏe",
        material: "Nhựa ABS, lõi lọc HEPA",
        origin: "Hàn Quốc",
        brand: "LG",
        technology: "2000W Power, HEPA Filter, 3L Capacity"
    },
    {
        id: 19,
        name: "Khô tay cảm ứng 1200W",
        price: 3500000,
        stock: 25,
        rating: 4.4,
        reviews: 112,
        trend: "popular",
        category: "Thiết bị phòng tắm",
        needs: [],
        image: "images/hand-dryer-1200w.jpg", // 📌 Chèn hình ảnh
        description: "Khô tay cảm ứng tự động, công suất 1200W, tiết kiệm năng lượng, thiết kế hiện đại",
        material: "Thép không gỉ",
        origin: "Nhật Bản",
        brand: "Panasonic",
        technology: "1200W Motor, Automatic Sensor, Energy Efficient"
    },
    {
        id: 20,
        name: "Lò nướng điện 45L",
        price: 9500000,
        stock: 9,
        rating: 4.8,
        reviews: 246,
        trend: "trending",
        category: "Lò nướng",
        needs: ["kitchen"],
        image: "images/oven-45l.jpg", // 📌 Chèn hình ảnh
        description: "Lò nướng điện 45L với 12 chế độ nướng, điều khiển nhiệt độ 50-250°C, kính lớn",
        material: "Thép sơn, kính cường lực",
        origin: "Hàn Quốc",
        brand: "LG",
        technology: "12 Baking Modes, Convection Heating, Digital Control"
    },
    {
        id: 21,
        name: "Máy xay sinh tố thông minh 1200W",
        price: 5900000,
        stock: 13,
        rating: 4.7,
        reviews: 234,
        trend: "popular",
        category: "Máy xay",
        needs: ["kitchen"],
        image: "images/blender-1200w.jpg", // 📌 Chèn hình ảnh
        description: "Máy xay sinh tố công suất 1200W, 10 chế độ xay, dung tích 1.5L",
        material: "Nhựa tritan, motor đồng",
        origin: "Mỹ",
        brand: "Vitamix",
        technology: "1200W Motor, 10-Speed Setting, Tritan Container"
    },
    {
        id: 22,
        name: "Nồi cơm áp suất điện 6L",
        price: 4900000,
        stock: 17,
        rating: 4.6,
        reviews: 289,
        trend: "popular",
        category: "Nồi cơm điện",
        needs: ["kitchen"],
        image: "images/pressure-cooker-6l.jpg", // 📌 Chèn hình ảnh
        description: "Nồi cơm áp suất điện 6L, 8 chế độ nấu, timer 24 giờ, nấu chín nhanh gấp 3 lần",
        material: "Thép không gỉ",
        origin: "Nhật Bản",
        brand: "Zojirushi",
        technology: "Pressure Cooking, 8 Modes, 24-Hour Timer"
    },
    {
        id: 23,
        name: "Bếp điện từ lẩu 3000W",
        price: 3200000,
        stock: 22,
        rating: 4.5,
        reviews: 167,
        trend: "popular",
        category: "Bếp ga",
        needs: ["kitchen"],
        image: "images/portable-induction-3000w.jpg", // 📌 Chèn hình ảnh
        description: "Bếp điện từ lẩu 3000W, cảm ứng trượt, chế độ nấu 6 mức, an toàn tự động tắt",
        material: "Mặt kính, khung nhôm",
        origin: "Trung Quốc",
        brand: "Midea",
        technology: "3000W, Touch Control, 6 Levels"
    },
    {
        id: 24,
        name: "Loa Bluetooth thông minh 20W",
        price: 2800000,
        stock: 31,
        rating: 4.6,
        reviews: 412,
        trend: "popular",
        category: "Loa",
        needs: ["living-room", "entertainment"],
        image: "images/smart-speaker-20w.jpg", // 📌 Chèn hình ảnh
        description: "Loa Bluetooth 20W, có trợ lý ảo, kết nối nhiều thiết bị, pin 12 giờ",
        material: "Nhựa, vải canvas",
        origin: "Hàn Quốc",
        brand: "LG",
        technology: "20W Output, Bluetooth 5.0, 12-Hour Battery"
    },
    {
        id: 25,
        name: "Quạt trần thông minh 3 cánh",
        price: 6800000,
        stock: 10,
        rating: 4.7,
        reviews: 198,
        trend: "popular",
        category: "Quạt",
        needs: ["bedroom"],
        image: "images/ceiling-fan-3blade.jpg", // 📌 Chèn hình ảnh
        description: "Quạt trần thông minh 3 cánh, 3 tốc độ, đèn LED tích hợp, điều khiển từ xa",
        material: "Nhôm, gỗ",
        origin: "Hàn Quốc",
        brand: "Samsung",
        technology: "3-Speed Fan, LED Lighting, Remote Control"
    },
    {
        id: 26,
        name: "Đèn thông minh RGB 16 triệu màu",
        price: 1200000,
        stock: 45,
        rating: 4.8,
        reviews: 567,
        trend: "trending",
        category: "Đèn",
        needs: ["bedroom", "living-room"],
        image: "images/smart-led-light-rgb.jpg", // 📌 Chèn hình ảnh
        description: "Đèn thông minh RGB 16 triệu màu, điều khiển bằng app, tiết kiệm điện 80%",
        material: "Nhựa, LED",
        origin: "Trung Quốc",
        brand: "Yeelight",
        technology: "RGB 16M Colors, App Control, 80% Energy Saving"
    },
    {
        id: 27,
        name: "Máy lạnh window 1 HP",
        price: 8900000,
        stock: 7,
        rating: 4.6,
        reviews: 154,
        trend: "popular",
        category: "Máy lạnh",
        needs: ["bedroom"],
        image: "images/window-ac-1hp.jpg", // 📌 Chèn hình ảnh
        description: "Máy lạnh window 1 HP, làm lạnh nhanh, tiêu thụ điện 1.2kW, chế độ sưởi ấm",
        material: "Thép sơn",
        origin: "Hàn Quốc",
        brand: "LG",
        technology: "1 HP, Fast Cooling, Heating Mode, 1.2kW"
    },
    {
        id: 28,
        name: "Máy tạo độ ẩm siêu âm 4L",
        price: 2200000,
        stock: 28,
        rating: 4.7,
        reviews: 289,
        trend: "popular",
        category: "Máy tạo độ ẩm",
        needs: ["bedroom", "health"],
        image: "images/humidifier-4l.jpg", // 📌 Chèn hình ảnh
        description: "Máy tạo độ ẩm siêu âm 4L, phun mưa mịn, timer 12 giờ, tiết kiệm điện",
        material: "Nhựa ABS",
        origin: "Trung Quốc",
        brand: "Philips",
        technology: "4L Capacity, Ultrasonic, 12-Hour Timer"
    },
    {
        id: 29,
        name: "Máy sưởi ấm 2000W",
        price: 1800000,
        stock: 20,
        rating: 4.5,
        reviews: 123,
        trend: "popular",
        category: "Máy sưởi",
        needs: [],
        image: "images/heater-2000w.jpg", // 📌 Chèn hình ảnh
        description: "Máy sưởi ấm 2000W, 3 mức nhiệt, timer, an toàn tự động tắt khi đổ",
        material: "Thép, gốm tổ ong",
        origin: "Hàn Quốc",
        brand: "Midea",
        technology: "2000W, 3 Heat Levels, Timer, Auto Shutoff"
    },
    {
        id: 30,
        name: "Máy giặt mini cầm tay",
        price: 1500000,
        stock: 33,
        rating: 4.4,
        reviews: 178,
        trend: "popular",
        category: "Máy giặt",
        needs: ["laundry"],
        image: "images/portable-washer.jpg", // 📌 Chèn hình ảnh
        description: "Máy giặt mini cầm tay, dung tích 2kg, 6 chế độ giặt, chạy USB hoặc pin",
        material: "Nhựa ABS",
        origin: "Trung Quốc",
        brand: "Generic",
        technology: "2kg Capacity, 6 Wash Modes, USB/Battery Powered"
    },
    {
        id: 31,
        name: "Bình nước nóng thông minh 5L",
        price: 3800000,
        stock: 12,
        rating: 4.8,
        reviews: 234,
        trend: "trending",
        category: "Bình nước",
        needs: ["kitchen", "health"],
        image: "images/water-heater-5l.jpg", // 📌 Chèn hình ảnh
        description: "Bình nước nóng thông minh 5L, nóng nước 3 phút, giữ nhiệt 24 giờ, tiết kiệm điện",
        material: "Thép không gỉ",
        origin: "Nhật Bản",
        brand: "Zojirushi",
        technology: "5L Capacity, 3-Minute Heating, 24-Hour Keep Warm"
    },
    {
        id: 32,
        name: "Nôi điện tự động cho bé",
        price: 4500000,
        stock: 8,
        rating: 4.9,
        reviews: 156,
        trend: "trending",
        category: "Thiết bị gia đình",
        needs: ["health"],
        image: "images/electric-cradle.jpg", // 📌 Chèn hình ảnh
        description: "Nôi điện tự động rung nhẹ, 8 chế độ rung, kiểm soát nhiệt độ, nhạc nước",
        material: "Gỗ, vải cotton",
        origin: "Hàn Quốc",
        brand: "Babycare",
        technology: "8 Swing Modes, Temperature Control, Lullaby Music"
    },
    {
        id: 33,
        name: "Máy đánh trứng điện",
        price: 1200000,
        stock: 24,
        rating: 4.6,
        reviews: 145,
        trend: "popular",
        category: "Máy nhà bếp nhỏ",
        needs: ["kitchen"],
        image: "images/egg-beater.jpg", // 📌 Chèn hình ảnh
        description: "Máy đánh trứng điện 3 tốc độ, công suất 200W, dễ vệ sinh",
        material: "Nhựa ABS, thép không gỉ",
        origin: "Trung Quốc",
        brand: "Midea",
        technology: "3-Speed Setting, 200W Power"
    },
    {
        id: 34,
        name: "Quạt cá nhân mini USB",
        price: 450000,
        stock: 50,
        rating: 4.5,
        reviews: 234,
        trend: "popular",
        category: "Quạt",
        needs: [],
        image: "images/mini-usb-fan.jpg", // 📌 Chèn hình ảnh
        description: "Quạt mini USB, gọn nhẹ, 3 tốc độ, dùng cho bàn làm việc hoặc du lịch",
        material: "Nhựa ABS",
        origin: "Trung Quốc",
        brand: "Generic",
        technology: "USB Powered, 3-Speed, Portable"
    },
    {
        id: 35,
        name: "Máy tính tiền điện tử",
        price: 2800000,
        stock: 15,
        rating: 4.7,
        reviews: 189,
        trend: "popular",
        category: "Thiết bị quản lý",
        needs: [],
        image: "images/cash-register.jpg", // 📌 Chèn hình ảnh
        description: "Máy tính tiền điện tử, 2 cổng kết nối, màn hình LCD, xả ngăn kéo tự động",
        material: "Nhựa ABS",
        origin: "Trung Quốc",
        brand: "ECR",
        technology: "Electronic Register, LCD Display, Auto Drawer"
    },
    {
        id: 36,
        name: "Bộ bàn ủi quần áo đa năng",
        price: 1500000,
        stock: 18,
        rating: 4.6,
        reviews: 156,
        trend: "popular",
        category: "Bàn là",
        needs: ["laundry"],
        image: "images/ironing-board-set.jpg", // 📌 Chèn hình ảnh
        description: "Bộ bàn ủi quần áo đa năng, bàn có lót cách nhiệt, bao gồm giá đỡ quần áo",
        material: "Thép, bông",
        origin: "Việt Nam",
        brand: "Household",
        technology: "Multi-Function Board, Heat-Resistant Pad"
    },
    {
        id: 37,
        name: "Tủ sấy quần áo 2 tầng",
        price: 3500000,
        stock: 9,
        rating: 4.7,
        reviews: 167,
        trend: "trending",
        category: "Tủ sấy",
        needs: ["laundry"],
        image: "images/drying-cabinet-2tier.jpg", // 📌 Chèn hình ảnh
        description: "Tủ sấy quần áo 2 tầng, công suất 1000W, có timer 12 giờ, quạt tuần hoàn",
        material: "Thép sơn, lưới inox",
        origin: "Trung Quốc",
        brand: "Shinon",
        technology: "2-Tier Cabinet, 1000W, 12-Hour Timer"
    },
    {
        id: 38,
        name: "Máy chà sàn liên động",
        price: 8900000,
        stock: 6,
        rating: 4.8,
        reviews: 145,
        trend: "trending",
        category: "Máy vệ sinh",
        needs: [],
        image: "images/floor-polisher.jpg", // 📌 Chèn hình ảnh
        description: "Máy chà sàn liên động, công suất 1500W, 3 bàn chà thay thế, điều khiển tốc độ",
        material: "Thép, nhôm",
        origin: "Hàn Quốc",
        brand: "LG",
        technology: "1500W Motor, 3 Brush Pads, Speed Control"
    },
    {
        id: 39,
        name: "Bàn nấu mặt kính 2 bếp",
        price: 7500000,
        stock: 10,
        rating: 4.6,
        reviews: 134,
        trend: "popular",
        category: "Bếp ga",
        needs: ["kitchen"],
        image: "images/glass-cooktop-2burner.jpg", // 📌 Chèn hình ảnh
        description: "Bàn nấu mặt kính 2 bếp, công suất cao, dễ vệ sinh, an toàn với thiết bị chống trầy",
        material: "Kính, thép sơn",
        origin: "Trung Quốc",
        brand: "Hausfeld",
        technology: "2-Burner, Glass Surface, Anti-Scratch"
    },
    {
        id: 40,
        name: "Tủ lạnh tủ đứng 300L",
        price: 18900000,
        stock: 4,
        rating: 4.9,
        reviews: 187,
        trend: "trending",
        category: "Tủ lạnh",
        needs: ["kitchen"],
        image: "images/upright-freezer-300l.jpg", // 📌 Chèn hình ảnh
        description: "Tủ lạnh tủ đứng 300L, làm lạnh đều, tiêu thụ điện thấp 120W, chế độ siêu lạnh",
        material: "Thép không gỉ",
        origin: "Hàn Quốc",
        brand: "Samsung",
        technology: "300L Capacity, Even Cooling, 120W Consumption"
    },
    {
        id: 41,
        name: "Máy rửa bát mini để bàn",
        price: 6200000,
        stock: 11,
        rating: 4.7,
        reviews: 178,
        trend: "popular",
        category: "Máy rửa chén",
        needs: ["kitchen"],
        image: "images/mini-dishwasher.jpg", // 📌 Chèn hình ảnh
        description: "Máy rửa bát mini để bàn, dung tích 6 bộ, 6 chế độ rửa, tiêu thụ nước 5L/chu kỳ",
        material: "Thép không gỉ",
        origin: "Nhật Bản",
        brand: "Panasonic",
        technology: "6-Place Setting, 6 Wash Modes, 5L Water Usage"
    },
    {
        id: 42,
        name: "Điều hòa không khí di động 1 HP",
        price: 7800000,
        stock: 9,
        rating: 4.6,
        reviews: 156,
        trend: "popular",
        category: "Máy lạnh",
        needs: ["bedroom"],
        image: "images/portable-ac-1hp.jpg", // 📌 Chèn hình ảnh
        description: "Điều hòa di động 1 HP, lắp đặt dễ, có lọc khí, tiêu thụ điện 1.5kW",
        material: "Thép sơn",
        origin: "Hàn Quốc",
        brand: "LG",
        technology: "1 HP, Portable, Air Filter, 1.5kW"
    },
    {
        id: 43,
        name: "Máy kiểm tra không khí CO2",
        price: 4500000,
        stock: 14,
        rating: 4.8,
        reviews: 201,
        trend: "trending",
        category: "Thiết bị y tế",
        needs: ["health"],
        image: "images/co2-meter.jpg", // 📌 Chèn hình ảnh
        description: "Máy kiểm tra CO2 thời gian thực, cảnh báo mức độ, lưu dữ liệu, pin 20 giờ",
        material: "Nhựa ABS",
        origin: "Nhật Bản",
        brand: "Geonav",
        technology: "Real-Time CO2, Alert System, Data Storage, 20-Hour Battery"
    },
    {
        id: 44,
        name: "Cân điện tử nhà bếp 5kg",
        price: 800000,
        stock: 40,
        rating: 4.7,
        reviews: 345,
        trend: "popular",
        category: "Máy nhà bếp nhỏ",
        needs: ["kitchen"],
        image: "images/digital-scale-5kg.jpg", // 📌 Chèn hình ảnh
        description: "Cân điện tử nhà bếp 5kg, độ chính xác 1g, màn hình LCD, chế độ tara",
        material: "Thép không gỉ, nhựa",
        origin: "Trung Quốc",
        brand: "Generic",
        technology: "5kg Capacity, 1g Precision, LCD Display, Tara Mode"
    },
    {
        id: 45,
        name: "Hộp cơm điện giữ nóng 1.5L",
        price: 1500000,
        stock: 28,
        rating: 4.6,
        reviews: 212,
        trend: "popular",
        category: "Hộp cơm",
        needs: ["kitchen"],
        image: "images/lunch-box-warmer-1.5l.jpg", // 📌 Chèn hình ảnh
        description: "Hộp cơm điện giữ nóm 1.5L, có khay chia, thích hợp mang cơm đi làm",
        material: "Nhựa ABS, thép không gỉ",
        origin: "Trung Quốc",
        brand: "Hausfeld",
        technology: "1.5L Capacity, Compartment Design, Heat Retention"
    },
    {
        id: 46,
        name: "Vị dùi trộn tự động",
        price: 600000,
        stock: 35,
        rating: 4.5,
        reviews: 178,
        trend: "popular",
        category: "Máy nhà bếp nhỏ",
        needs: ["kitchen"],
        image: "images/automatic-stirrer.jpg", // 📌 Chèn hình ảnh
        description: "Vị dùi trộn tự động, 1 pin AA, có 2 tốc độ, nhẹ gọn tiện lợi",
        material: "Nhựa ABS",
        origin: "Trung Quốc",
        brand: "Generic",
        technology: "Battery Powered (AA), 2-Speed, Lightweight"
    },
    {
        id: 47,
        name: "Bộ nồi inox 3 chiếc",
        price: 2200000,
        stock: 22,
        rating: 4.6,
        reviews: 267,
        trend: "popular",
        category: "Nồi",
        needs: ["kitchen"],
        image: "images/stainless-steel-pot-set.jpg", // 📌 Chèn hình ảnh
        description: "Bộ nồi inox 3 chiếc, đáy từ dùng cho mọi loại bếp, tay cầm không nóng",
        material: "Inox cao cấp",
        origin: "Trung Quốc",
        brand: "Household",
        technology: "3-Piece Set, Induction Bottom, Heat-Resistant Handles"
    },
    {
        id: 48,
        name: "Máy nước uống nóng lạnh",
        price: 5800000,
        stock: 7,
        rating: 4.8,
        reviews: 234,
        trend: "trending",
        category: "Máy nước",
        needs: ["kitchen", "health"],
        image: "images/water-dispenser-hot-cold.jpg", // 📌 Chèn hình ảnh
        description: "Máy nước uống nóng lạnh, chế độ tiệt trùng tự động, an toàn cho bé",
        material: "Thép sơn",
        origin: "Hàn Quốc",
        brand: "Kangaroo",
        technology: "Hot/Cold Water, Auto Sterilization, Child Safety"
    },
    {
        id: 49,
        name: "Máy massage toàn thân",
        price: 12500000,
        stock: 5,
        rating: 4.9,
        reviews: 145,
        trend: "trending",
        category: "Thiết bị sức khỏe",
        needs: ["health"],
        image: "images/full-body-massager.jpg", // 📌 Chèn hình ảnh
        description: "Máy massage toàn thân 4D, 12 chế độ massage, điều khiển bằng remote",
        material: "Vải simili, nhựa",
        origin: "Hàn Quốc",
        brand: "LG",
        technology: "4D Massage, 12 Modes, Remote Control"
    },
    {
        id: 50,
        name: "Lối vào thông minh nhận diện khuôn mặt",
        price: 8900000,
        stock: 3,
        rating: 4.9,
        reviews: 89,
        trend: "trending",
        category: "Khóa thông minh",
        needs: [],
        image: "images/smart-door-lock-facial.jpg", // 📌 Chèn hình ảnh
        description: "Lối vào thông minh nhận diện khuôn mặt, mở bằng vân tay hoặc mã PIN",
        material: "Hợp kim nhôm",
        origin: "Hàn Quốc",
        brand: "Samsung",
        technology: "Facial Recognition, Fingerprint, PIN Code, WiFi"
    }
];

// ===== BIẾN TOÀN CỤC =====
let cart = [];
let currentFilter = 'all';
let currentSlide = 0;
let selectedProducts = []; // Mảng lưu sản phẩm được chọn để so sánh
let favorites = []; // Mảng lưu sản phẩm yêu thích
let priceMin = 0;
let priceMax = 100000000;
let selectedRatings = [];
let selectedBrands = [];

// ===== KHỞI TẠO KHI LOAD TRANG =====
document.addEventListener('DOMContentLoaded', function() {
    initSpaceBackground();
    renderFeaturedSlider();
    renderProducts();
    generateCategoriesGrid();
    setupEventListeners();
    updateCartCount();
});
    setupEventListeners();
    updateCartCount();
;

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
    
    // Áp dụng các bộ lọc nâng cao
    filteredProducts = filteredProducts.filter(p => {
        // Lọc theo giá
        if (p.price < priceMin || p.price > priceMax) return false;
        
        // Lọc theo đánh giá
        if (selectedRatings.length > 0) {
            const minRating = Math.min(...selectedRatings);
            if (p.rating < minRating) return false;
        }
        
        // Lọc theo thương hiệu
        if (selectedBrands.length > 0) {
            if (!selectedBrands.includes(p.brand)) return false;
        }
        
        return true;
    });
    
    grid.innerHTML = filteredProducts.map(product => {
        const stockClass = product.stock > 0 ? 'in-stock' : 'out-of-stock';
        const stockText = product.stock > 0 ? `Còn hàng: ${product.stock}` : 'Hết hàng';
        const badge = product.trend === 'trending' ? 'BÁN CHẠY' : product.trend === 'popular' ? 'PHỔ BIẾN' : '';
        const isSelected = selectedProducts.includes(product.id);
        const isFavorite = favorites.includes(product.id);
        const selectedClass = isSelected ? 'selected' : '';
        
        return `
            <div class="product-card ${selectedClass}" data-id="${product.id}">
                <input type="checkbox" class="product-checkbox" ${isSelected ? 'checked' : ''} 
                       onchange="toggleProductSelection(${product.id})">
                ${badge ? `<div class="product-badge">${badge}</div>` : ''}
                <div class="product-image">
                    <!-- 📌 CHÈN HÌNH ẢNH: Hình ảnh từ thư mục images/ -->
                    <img src="${product.image || 'https://via.placeholder.com/200x200?text=' + encodeURIComponent(product.name)}" 
                         alt="${product.name}" 
                         class="product-image-img"
                         onerror="this.src='https://via.placeholder.com/200x200?text=' + encodeURIComponent('${product.name}')"
                    >
                </div>
                <div class="product-info">
                    <div style="display: flex; justify-content: space-between; align-items: start;">
                        <h3 style="flex: 1;">${product.name}</h3>
                        <button class="btn-favorite ${isFavorite ? 'active' : ''}" 
                                onclick="toggleFavorite(${product.id})" 
                                title="${isFavorite ? 'Bỏ yêu thích' : 'Thêm yêu thích'}">
                            ${isFavorite ? '❤️' : '🤍'}
                        </button>
                    </div>
                    <div class="product-price">${formatPrice(product.price)}</div>
                    <div class="product-rating">⭐ ${product.rating} (${product.reviews} đánh giá)</div>
                    <div class="product-stock ${stockClass}">${stockText}</div>
                    <div style="color: #ffea00; font-size: 13px; margin: 8px 0;">🏷️ ${product.brand}</div>
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
    
    // Thêm event listeners cho checkboxes
    document.querySelectorAll('.product-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const productId = parseInt(this.closest('.product-card').dataset.id);
            toggleProductSelection(productId);
        });
    });
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
    
    // Advanced Filter Toggle
    document.getElementById('filter-toggle-btn').addEventListener('click', function() {
        const filter = document.getElementById('advanced-filter');
        if (filter.style.display === 'none') {
            filter.style.display = 'block';
            initAdvancedFilter();
        } else {
            filter.style.display = 'none';
        }
    });
    
    // Compare Button
    document.getElementById('compare-btn').addEventListener('click', showCompareModal);
    
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

// ===== HÀM LỌC NÂNG CAO =====
function initAdvancedFilter() {
    // Tạo danh sách thương hiệu độc nhất
    const brands = [...new Set(productsData.map(p => p.brand))].sort();
    const brandFilter = document.getElementById('brand-filter');
    
    brandFilter.innerHTML = brands.map(brand => `
        <label>
            <input type="checkbox" class="brand-checkbox" value="${brand}"> ${brand}
        </label>
    `).join('');
    
    // Event listeners cho các bộ lọc
    document.getElementById('price-min').addEventListener('input', updatePriceDisplay);
    document.getElementById('price-max').addEventListener('input', updatePriceDisplay);
    
    document.querySelectorAll('.rating-checkbox').forEach(cb => {
        cb.addEventListener('change', function() {
            updateSelectedRatings();
        });
    });
    
    document.querySelectorAll('.brand-checkbox').forEach(cb => {
        cb.addEventListener('change', function() {
            updateSelectedBrands();
        });
    });
    
    document.getElementById('apply-filter-btn').addEventListener('click', applyAdvancedFilter);
    document.getElementById('reset-filter-btn').addEventListener('click', resetFilter);
}

function updatePriceDisplay() {
    const minInput = document.getElementById('price-min');
    const maxInput = document.getElementById('price-max');
    const minVal = parseInt(minInput.value);
    const maxVal = parseInt(maxInput.value);
    
    if (minVal > maxVal) {
        minInput.value = maxVal;
    }
    if (maxVal < minVal) {
        maxInput.value = minVal;
    }
    
    document.getElementById('price-min-val').textContent = formatPrice(parseInt(minInput.value));
    document.getElementById('price-max-val').textContent = formatPrice(parseInt(maxInput.value));
}

function updateSelectedRatings() {
    selectedRatings = [];
    document.querySelectorAll('.rating-checkbox:checked').forEach(cb => {
        selectedRatings.push(parseInt(cb.value));
    });
}

function updateSelectedBrands() {
    selectedBrands = [];
    document.querySelectorAll('.brand-checkbox:checked').forEach(cb => {
        selectedBrands.push(cb.value);
    });
}

function applyAdvancedFilter() {
    priceMin = parseInt(document.getElementById('price-min').value);
    priceMax = parseInt(document.getElementById('price-max').value);
    updateSelectedRatings();
    updateSelectedBrands();
    
    renderProducts(currentFilter);
    showSuccessMessage('Áp dụng bộ lọc thành công!');
}

function resetFilter() {
    document.getElementById('price-min').value = 0;
    document.getElementById('price-max').value = 100000000;
    document.querySelectorAll('.rating-checkbox').forEach(cb => cb.checked = false);
    document.querySelectorAll('.brand-checkbox').forEach(cb => cb.checked = false);
    
    priceMin = 0;
    priceMax = 100000000;
    selectedRatings = [];
    selectedBrands = [];
    
    renderProducts(currentFilter);
    showSuccessMessage('Đặt lại bộ lọc!');
}

// ===== HÀM CHỌN VÀ SO SÁNH SẢN PHẨM =====
function toggleProductSelection(productId) {
    if (selectedProducts.includes(productId)) {
        selectedProducts = selectedProducts.filter(id => id !== productId);
    } else {
        if (selectedProducts.length >= 4) {
            showSuccessMessage('⚠️ Tối đa có thể so sánh 4 sản phẩm!');
            return;
        }
        selectedProducts.push(productId);
    }
    
    updateCompareButton();
    updateProductCardSelection();
}

function updateCompareButton() {
    const countSpan = document.querySelector('.compare-count');
    countSpan.textContent = `(${selectedProducts.length})`;
}

function updateProductCardSelection() {
    document.querySelectorAll('.product-card').forEach(card => {
        const productId = parseInt(card.dataset.id);
        if (selectedProducts.includes(productId)) {
            card.classList.add('selected');
            card.querySelector('.product-checkbox').checked = true;
        } else {
            card.classList.remove('selected');
            card.querySelector('.product-checkbox').checked = false;
        }
    });
}

function showCompareModal() {
    if (selectedProducts.length === 0) {
        showSuccessMessage('⚠️ Vui lòng chọn ít nhất 1 sản phẩm để so sánh!');
        return;
    }
    
    const modal = document.getElementById('compare-modal');
    const container = document.getElementById('compare-container');
    
    const selectedProds = selectedProducts.map(id => productsData.find(p => p.id === id));
    
    container.innerHTML = selectedProds.map(product => `
        <div class="compare-item">
            <h3>${product.name}</h3>
            <div class="compare-spec">
                <strong>Giá</strong>
                <span>${formatPrice(product.price)}</span>
            </div>
            <div class="compare-spec">
                <strong>Đánh giá</strong>
                <span>⭐ ${product.rating} (${product.reviews} đánh giá)</span>
            </div>
            <div class="compare-spec">
                <strong>Tồn kho</strong>
                <span>${product.stock > 0 ? `Còn: ${product.stock}` : 'Hết hàng'}</span>
            </div>
            <div class="compare-spec">
                <strong>Thương hiệu</strong>
                <span>${product.brand}</span>
            </div>
            <div class="compare-spec">
                <strong>Xuất xứ</strong>
                <span>${product.origin}</span>
            </div>
            <div class="compare-spec">
                <strong>Công nghệ</strong>
                <span>${product.technology}</span>
            </div>
            <button class="btn-add-cart" onclick="addToCart(${product.id})" style="width: 100%; margin-top: 10px;">
                Thêm giỏ hàng
            </button>
        </div>
    `).join('');
    
    modal.style.display = 'block';
}

document.getElementById('clear-compare-btn').addEventListener('click', function() {
    selectedProducts = [];
    updateCompareButton();
    updateProductCardSelection();
    document.getElementById('compare-modal').style.display = 'none';
    showSuccessMessage('Đã xóa tất cả sản phẩm so sánh!');
});

// ===== HÀM YÊU THÍCH =====
function toggleFavorite(productId) {
    if (favorites.includes(productId)) {
        favorites = favorites.filter(id => id !== productId);
    } else {
        favorites.push(productId);
    }
    
    // Cập nhật UI
    document.querySelectorAll('.product-card').forEach(card => {
        const cardId = parseInt(card.dataset.id);
        if (cardId === productId) {
            const btn = card.querySelector('.btn-favorite');
            if (favorites.includes(productId)) {
                btn.textContent = '❤️';
                btn.classList.add('active');
            } else {
                btn.textContent = '🤍';
                btn.classList.remove('active');
            }
        }
    });
}

// ===== HÀM LỌC THEO DANH MỤC =====
function filterByCategory(category) {
    // Lọc sản phẩm theo danh mục
    const filteredProducts = productsData.filter(p => p.category === category);
    
    // Hiển thị sản phẩm
    const grid = document.getElementById('products-grid');
    grid.innerHTML = filteredProducts.map(product => {
        const stockClass = product.stock > 0 ? 'in-stock' : 'out-of-stock';
        const stockText = product.stock > 0 ? `Còn hàng: ${product.stock}` : 'Hết hàng';
        const badge = product.trend === 'trending' ? 'BÁN CHẠY' : product.trend === 'popular' ? 'PHỔ BIẾN' : '';
        const isSelected = selectedProducts.includes(product.id);
        const isFavorite = favorites.includes(product.id);
        const selectedClass = isSelected ? 'selected' : '';
        
        return `
            <div class="product-card ${selectedClass}" data-id="${product.id}">
                <input type="checkbox" class="product-checkbox" ${isSelected ? 'checked' : ''} 
                       onchange="toggleProductSelection(${product.id})">
                ${badge ? `<div class="product-badge">${badge}</div>` : ''}
                <div class="product-image">
                    <!-- 📌 CHÈN HÌNH ẢNH: Hình ảnh từ thư mục images/ -->
                    <img src="${product.image || 'https://via.placeholder.com/200x200?text=' + encodeURIComponent(product.name)}" 
                         alt="${product.name}" 
                         class="product-image-img"
                         onerror="this.src='https://via.placeholder.com/200x200?text=' + encodeURIComponent('${product.name}')"
                    >
                </div>
                <div class="product-info">
                    <div style="display: flex; justify-content: space-between; align-items: start;">
                        <h3 style="flex: 1;">${product.name}</h3>
                        <button class="btn-favorite ${isFavorite ? 'active' : ''}" 
                                onclick="toggleFavorite(${product.id})" 
                                title="${isFavorite ? 'Bỏ yêu thích' : 'Thêm yêu thích'}">
                            ${isFavorite ? '❤️' : '🤍'}
                        </button>
                    </div>
                    <div class="product-price">${formatPrice(product.price)}</div>
                    <div class="product-rating">⭐ ${product.rating} (${product.reviews} đánh giá)</div>
                    <div class="product-stock ${stockClass}">${stockText}</div>
                    <div style="color: #ffea00; font-size: 13px; margin: 8px 0;">🏷️ ${product.brand}</div>
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
    
    // Cập nhật tiêu đề
    document.getElementById('products-title').textContent = `${category} (${filteredProducts.length} sản phẩm)`;
    
    // Scroll tới section products
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    
    // Ẩn bộ lọc nâng cao
    document.getElementById('advanced-filter').style.display = 'none';
}

function showAllProducts() {
    currentFilter = 'all';
    renderProducts();
    document.getElementById('products-title').textContent = 'Danh sách sản phẩm';
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// ===== HÀM CẬP NHẬT SỐ LƯỢNG SẢN PHẨM TRÊN CARD NHU CẦU =====
function updateNeedsCounts() {
    const needs = ['living-room', 'kitchen', 'laundry', 'bedroom', 'health', 'entertainment'];
    
    needs.forEach(need => {
        const count = productsData.filter(p => p.needs && p.needs.includes(need)).length;
        const countElement = document.getElementById(`count-${need}`);
        if (countElement) {
            countElement.textContent = `(${count} sản phẩm)`;
        }
    });
}

// Gọi hàm cập nhật khi trang load
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(updateNeedsCounts, 100);
});

// ===== HÀM TẠO DANH MỤC SẢN PHẨM =====
function generateCategoriesGrid() {
    // Lấy danh mục độc nhất từ sản phẩm
    const categories = [...new Set(productsData.map(p => p.category))];
    
    // Biểu tượng cho mỗi danh mục
    const categoryIcons = {
        'Tivi': '📺',
        'Máy giặt': '👕',
        'Máy rửa chén': '🍽️',
        'Bếp ga': '🔥',
        'Nồi cơm điện': '🍚'
    };
    
    const grid = document.getElementById('categories-grid');
    grid.innerHTML = categories.map(category => {
        const count = productsData.filter(p => p.category === category).length;
        const icon = categoryIcons[category] || '📦';
        
        return `
            <div class="need-card" onclick="filterByCategory('${category}')">
                <div class="need-icon">${icon}</div>
                <h3>${category}</h3>
                <span class="need-count">(${count} sản phẩm)</span>
            </div>
        `;
    }).join('');
}

// ===== HÀM LỌC THEO NHU CẦU (GIỮ NGUYÊN) =====
function filterByNeed(need) {
    // Lọc sản phẩm theo nhu cầu
    const filteredProducts = productsData.filter(p => p.needs && p.needs.includes(need));
    
    // Hiển thị sản phẩm
    const grid = document.getElementById('products-grid');
    grid.innerHTML = filteredProducts.map(product => {
        const stockClass = product.stock > 0 ? 'in-stock' : 'out-of-stock';
        const stockText = product.stock > 0 ? `Còn hàng: ${product.stock}` : 'Hết hàng';
        const badge = product.trend === 'trending' ? 'BÁN CHẠY' : product.trend === 'popular' ? 'PHỔ BIẾN' : '';
        const isSelected = selectedProducts.includes(product.id);
        const isFavorite = favorites.includes(product.id);
        const selectedClass = isSelected ? 'selected' : '';
        
        return `
            <div class="product-card ${selectedClass}" data-id="${product.id}">
                <input type="checkbox" class="product-checkbox" ${isSelected ? 'checked' : ''} 
                       onchange="toggleProductSelection(${product.id})">
                ${badge ? `<div class="product-badge">${badge}</div>` : ''}
                <div class="product-image">
                    <!-- 📌 CHÈN HÌNH ẢNH: Hình ảnh từ thư mục images/ -->
                    <img src="${product.image || 'https://via.placeholder.com/200x200?text=' + encodeURIComponent(product.name)}" 
                         alt="${product.name}" 
                         class="product-image-img"
                         onerror="this.src='https://via.placeholder.com/200x200?text=' + encodeURIComponent('${product.name}')"
                    >
                </div>
                <div class="product-info">
                    <div style="display: flex; justify-content: space-between; align-items: start;">
                        <h3 style="flex: 1;">${product.name}</h3>
                        <button class="btn-favorite ${isFavorite ? 'active' : ''}" 
                                onclick="toggleFavorite(${product.id})" 
                                title="${isFavorite ? 'Bỏ yêu thích' : 'Thêm yêu thích'}">
                            ${isFavorite ? '❤️' : '🤍'}
                        </button>
                    </div>
                    <div class="product-price">${formatPrice(product.price)}</div>
                    <div class="product-rating">⭐ ${product.rating} (${product.reviews} đánh giá)</div>
                    <div class="product-stock ${stockClass}">${stockText}</div>
                    <div style="color: #ffea00; font-size: 13px; margin: 8px 0;">🏷️ ${product.brand}</div>
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
    
    // Cập nhật tiêu đề
    const needNames = {
        'living-room': '🛋️ Phòng khách',
        'kitchen': '🍳 Nhà bếp',
        'laundry': '👔 Giặc ủi',
        'bedroom': '🛏️ Phòng ngủ',
        'health': '❤️ Sức khỏe',
        'entertainment': '🎮 Giải trí'
    };
    
    document.getElementById('products-title').textContent = `Sản phẩm cho ${needNames[need] || need} (${filteredProducts.length} sản phẩm)`;
    
    // Scroll tới section products
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    
    // Ẩn bộ lọc nâng cao
    document.getElementById('advanced-filter').style.display = 'none';
}

// ===== HÀM GENERATE DANH SÁCH DANH MỤC SẢN PHẨM =====
function generateCategoriesGrid() {
    // Lấy danh mục độc nhất từ sản phẩm
    const categories = [...new Set(productsData.map(p => p.category))].sort();
    
    // Biểu tượng cho mỗi danh mục
    const categoryIcons = {
        'Tivi': '📺',
        'Máy giặt': '👕',
        'Máy rửa chén': '🍽️',
        'Bếp ga': '🔥',
        'Nồi cơm điện': '🍚'
    };
    
    const grid = document.getElementById('categories-grid');
    grid.innerHTML = categories.map(category => {
        const count = productsData.filter(p => p.category === category).length;
        const icon = categoryIcons[category] || '📦';
        
        return `
            <div class="category-card" onclick="filterByCategory('${category}')">
                <div class="category-icon">${icon}</div>
                <h3>${category}</h3>
                <span class="category-count">(${count} sản phẩm)</span>
            </div>
        `;
    }).join('');
}

// ===== HÀM LỌC THEO DANH MỤC SẢN PHẨM =====
function filterByCategory(category) {
    // Lọc sản phẩm theo danh mục
    const filteredProducts = productsData.filter(p => p.category === category);
    
    // Hiển thị sản phẩm
    const grid = document.getElementById('products-grid');
    grid.innerHTML = filteredProducts.map(product => {
        const stockClass = product.stock > 0 ? 'in-stock' : 'out-of-stock';
        const stockText = product.stock > 0 ? `Còn hàng: ${product.stock}` : 'Hết hàng';
        const badge = product.trend === 'trending' ? 'BÁN CHẠY' : product.trend === 'popular' ? 'PHỔ BIẾN' : '';
        const isSelected = selectedProducts.includes(product.id);
        const isFavorite = favorites.includes(product.id);
        const selectedClass = isSelected ? 'selected' : '';
        
        return `
            <div class="product-card ${selectedClass}" data-id="${product.id}">
                <input type="checkbox" class="product-checkbox" ${isSelected ? 'checked' : ''} 
                       onchange="toggleProductSelection(${product.id})">
                ${badge ? `<div class="product-badge">${badge}</div>` : ''}
                <div class="product-image">
                    <!-- 📌 CHÈN HÌNH ẢNH: Hình ảnh từ thư mục images/ -->
                    <img src="${product.image || 'https://via.placeholder.com/200x200?text=' + encodeURIComponent(product.name)}" 
                         alt="${product.name}" 
                         class="product-image-img"
                         onerror="this.src='https://via.placeholder.com/200x200?text=' + encodeURIComponent('${product.name}')"
                    >
                </div>
                <div class="product-info">
                    <div style="display: flex; justify-content: space-between; align-items: start;">
                        <h3 style="flex: 1;">${product.name}</h3>
                        <button class="btn-favorite ${isFavorite ? 'active' : ''}" 
                                onclick="toggleFavorite(${product.id})" 
                                title="${isFavorite ? 'Bỏ yêu thích' : 'Thêm yêu thích'}">
                            ${isFavorite ? '❤️' : '🤍'}
                        </button>
                    </div>
                    <div class="product-price">${formatPrice(product.price)}</div>
                    <div class="product-rating">⭐ ${product.rating} (${product.reviews} đánh giá)</div>
                    <div class="product-stock ${stockClass}">${stockText}</div>
                    <div style="color: #ffea00; font-size: 13px; margin: 8px 0;">🏷️ ${product.brand}</div>
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
    
    // Cập nhật tiêu đề
    document.getElementById('products-title').textContent = `${category} (${filteredProducts.length} sản phẩm)`;
    
    // Scroll tới section products
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    
    // Ẩn bộ lọc nâng cao
    document.getElementById('advanced-filter').style.display = 'none';
}
