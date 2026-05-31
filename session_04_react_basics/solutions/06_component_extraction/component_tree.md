# Component Tree — ShopVN

## 📊 Sơ đồ cây component

```
App
├── Navbar
│   ├── logo (string)
│   └── links (array of {label, href})
├── Hero
│   ├── title (string)
│   ├── subtitle (string)
│   └── buttonText (string)
├── ProductGrid
│   ├── title (string)
│   └── products (array of {id, name, price, image})
│       └── ProductCard (repeated)
│           ├── image (string)
│           ├── name (string)
│           └── price (string)
└── Footer
    └── text (string)
```

## 🎯 Props mỗi component

### Navbar
```jsx
function Navbar({ logo, links }) {
  // links = [
  //   { label: 'Giới thiệu', href: '#about' },
  //   { label: 'Sản phẩm', href: '#products' },
  //   ...
  // ]
}
```

### Hero
```jsx
function Hero({ title, subtitle, buttonText }) {
  // title: "Chào mừng đến với ShopVN"
  // subtitle: "Nơi mua sắm trực tuyến uy tín"
  // buttonText: "Mua ngay"
}
```

### ProductCard
```jsx
function ProductCard({ image, name, price }) {
  // image: "https://..."
  // name: "Áo thun nam"
  // price: "250.000đ"
}
```

### ProductGrid
```jsx
function ProductGrid({ title, products }) {
  // title: "Sản phẩm nổi bật"
  // products = [
  //   { id: 1, name: 'Áo thun nam', price: '250.000đ', image: '...' },
  //   ...
  // ]
}
```

### Footer
```jsx
function Footer({ text }) {
  // text: "© 2026 ShopVN. All rights reserved."
}
```

## 💡 Lý do tách component

| Component | Lý do tách |
|-----------|-----------|
| **Navbar** | Tái sử dụng ở mọi trang (Home, About, Products, Contact) — không duplicated code |
| **Hero** | Hero section có thể thay đổi nội dung (title, subtitle) nhưng cấu trúc HTML giống nhau — dùng props để config |
| **ProductCard** | **Lặp lại 4 lần** trong danh sách → Tách để dùng `.map()` và giảm code trùng lặp |
| **ProductGrid** | Quản lý layout grid + điều kiện empty state → Tách ra riêng để logic rõ ràng |
| **Footer** | Tái sử dụng ở mọi trang — chỉ cần truyền text thay đổi |

## 🔄 Data Flow

```
App (data store)
 ↓
Navbar ← navLinks[]
Hero ← title, subtitle, buttonText
ProductGrid ← products[]
 ├→ ProductCard ← products[0]
 ├→ ProductCard ← products[1]
 ├→ ProductCard ← products[2]
 └→ ProductCard ← products[3]
Footer ← copyrightText
```

## ✅ Lợi ích của cách tách này

1. **Tái sử dụng**: Navbar, Footer, ProductCard có thể dùng lại ở bất kỳ project nào
2. **Dễ bảo trì**: Mỗi component nhỏ, độc lập, chỉ focus vào 1 nhiệm vụ
3. **Dễ test**: Component nhỏ → Unit test đơn giản hơn
4. **Linh hoạt**: Thay đổi một component không ảnh hưởng component khác
5. **Giảm lặp lại**: ProductCard được viết 1 lần, dùng 4 lần qua `.map()`
