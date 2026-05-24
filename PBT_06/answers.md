# Câu A1 — Grid System
## Phân tích class Bootstrap
```html
col-12
```
- Mobile: chiếm 12/12 cột
- Full width
```html
col-md-6
```
- Từ 768px trở lên:
- chiếm 6/12 cột
- Mỗi hàng 2 box
```html
col-lg-3
```
- Từ 992px trở lên:
- chiếm 3/12 cột
- Mỗi hàng 4 box
---
| Kích thước | < 768px | 768px - 991px | ≥ 992px |
|---|---|---|---|
| Số cột | 1 cột | 2 cột | 4 cột |
| Box layout | 4 hàng | 2 hàng | 1 hàng |
---
## Layout < 768px
Mỗi box chiếm toàn bộ chiều ngang:
```text
+--------+
| Box 1  |
+--------+
+--------+
| Box 2  |
+--------+
+--------+
| Box 3  |
+--------+
+--------+
| Box 4  |
+--------+
```
---
## Layout 768px - 991px
Mỗi box chiếm 6/12 → 2 box mỗi hàng:
```text
+--------+--------+
| Box 1  | Box 2  |
+--------+--------+

+--------+--------+
| Box 3  | Box 4  |
+--------+--------+
```
---
## Layout ≥ 992px
Mỗi box chiếm 3/12 → 4 box cùng 1 hàng:
```text
+--------+--------+--------+--------+
| Box 1  | Box 2  | Box 3  | Box 4  |
+--------+--------+--------+--------+
```
## Câu hỏi thêm
### col-md-6 nghĩa là gì?
```html
col-md-6
```
nghĩa là:
- Từ breakpoint `md` trở lên (`≥768px`)
- Element sẽ chiếm:
```text
6 / 12 cột
```
tức là:
```text
50% chiều ngang
```
nên mỗi hàng chứa được:
```text
2 box
```
---
### Tại sao không cần viết col-sm-12?
Vì Bootstrap dùng Mobile-First.
Khi chưa có breakpoint nào được áp dụng, element mặc định sẽ:
```text
chiếm toàn bộ chiều ngang
```
Ngoài ra:
```html
col-12
```
đã áp dụng cho tất cả kích thước nhỏ hơn `md`.
Nên:
```html
col-sm-12
```
là dư thừa và không cần thiết.
Layout mobile đã đúng từ:
```html
col-12
```
# Câu A2 — Utilities & Components
## 1. Giải thích class `d-none d-md-block`
```html
d-none d-md-block
```
### Ý nghĩa
```html
d-none
```
- Ẩn element:
```css
display: none;
```
```html
d-md-block
```
- Từ breakpoint `md` trở lên (`≥768px`):
```css
display: block;
```
### Kết quả
| Kích thước màn hình | Hiển thị? |
|---|---|
| < 768px | Ẩn |
| ≥ 768px | Hiện |
### Use case
Ví dụ:
- Ẩn sidebar trên mobile
- Chỉ hiện menu desktop trên tablet/laptop
---
# 2. 5 spacing utilities
Bootstrap spacing:
```text
m = margin
p = padding
t = top
b = bottom
s = start (left)
e = end (right)
x = left + right
y = top + bottom
```
---
## mt-3
```html
mt-3
```
- Margin top mức 3
```css
margin-top: 1rem;
```
### Use case
Tạo khoảng cách phía trên element.
---
## mb-4
```html
mb-4
```
- Margin bottom mức 4
```css
margin-bottom: 1.5rem;
```
### Use case
Tạo khoảng cách phía dưới.
---
## px-4
```html
px-4
```
- Padding trái + phải mức 4
```css
padding-left: 1.5rem;
padding-right: 1.5rem;
```
### Use case
Tăng khoảng cách ngang bên trong element.
---
## py-2
```html
py-2
```
- Padding trên + dưới mức 2
```css
padding-top: 0.5rem;
padding-bottom: 0.5rem;
```
### Use case
Tăng chiều cao button/card.
---
## mb-auto
```html
mb-auto
```
- Margin bottom tự động.
### Use case
Dùng trong Flexbox để đẩy element sang vị trí khác.
Ví dụ:
```css
margin-top: auto;
```
đẩy nút xuống đáy card.
---
# 3. Sự khác nhau giữa container classes
## .container
```html
<div class="container">
```
### Đặc điểm
- Có max-width theo từng breakpoint
- Responsive
- Có margin auto căn giữa
### Use case
Layout website thông thường.
---
## .container-fluid
```html
<div class="container-fluid">
```
### Đặc điểm
- Luôn rộng 100%
- Full width mọi kích thước màn hình
### Use case
Hero banner, full-width section.
---
## .container-md
```html
<div class="container-md">
```
### Đặc điểm
- Nhỏ hơn `md`:
```text
width: 100%
```
- Từ `md` trở lên:
```text
có max-width như container
```
### Use case
Mobile full-width nhưng desktop căn giữa đẹp hơn.
# Câu C1 — Tùy biến Bootstrap
## 1. Đổi màu `$primary` sang `#E63946`
Bootstrap dùng SASS variables để quản lý theme colors.
Muốn đổi màu primary, cần:
- Cài Bootstrap source SCSS
- Dùng Sass compiler
- Override biến `$primary`
- Compile lại SCSS → CSS
---
## 2. Quy trình thực hiện
### Bước 1 — Cài Bootstrap SCSS
Ví dụ dùng npm:
```bash
npm install bootstrap
```
---
### Bước 2 — Tạo file SCSS riêng
Ví dụ:
```scss
custom.scss
```
---
### Bước 3 — Override biến `$primary`
```scss
$primary: #E63946;
```
---
### Bước 4 — Import Bootstrap
```scss
$primary: #E63946;
@import "node_modules/bootstrap/scss/bootstrap";
```
---
### Bước 5 — Compile SCSS → CSS
Ví dụ:
```bash
sass custom.scss custom.css
```
hoặc dùng:
- Live Sass Compiler
- Vite
- Webpack
---
## 3. Cần công cụ gì?
Cần:
- Sass compiler
- Bootstrap SCSS source files
Ví dụ:
- Live Sass Compiler
- Sass CLI
- Webpack
- Vite
---
## 4. Tại sao KHÔNG nên override trực tiếp?
Ví dụ không nên:
```css
.btn-primary {
    background: red;
}
```
### Vì sao không tốt?
Cách này chỉ sửa riêng `.btn-primary`.
Nhưng Bootstrap còn dùng `$primary` cho:
- links
- alerts
- badges
- borders
- forms
- pagination
- dropdowns
- nhiều component khác
Kết quả:
- giao diện không đồng bộ
- chỗ đỏ chỗ xanh
- khó maintain
---
## 5. Tại sao nên dùng SASS variables?
Ví dụ:
```scss
$primary: #E63946;
```
Bootstrap sẽ tự cập nhật toàn bộ component liên quan.
### Ưu điểm
- Theme đồng bộ
- Dễ maintain
- Chỉ sửa 1 chỗ
- Responsive/theme system hoạt động đúng
- Professional workflow
---
## 6. Kết luận
Nên dùng:
```scss
$primary
```
thay vì override từng class riêng lẻ để giữ hệ thống theme Bootstrap đồng nhất và dễ bảo trì.
# Câu C2 — So sánh CSS thuần và Bootstrap
## 1. CSS thuần: Navbar responsive + product card
### HTML
```html
<nav class="navbar">
    <div class="logo">MyShop</div>
    <ul class="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">About</a></li>
    </ul>

    <button class="menu-btn">☰</button>
</nav>
<div class="product-card">
    <img src="https://via.placeholder.com/300x200" alt="Product">
    <div class="card-body">
        <h3>Sản phẩm A</h3>
        <p>Giá: 299.000đ</p>
        <button>Mua ngay</button>
    </div>
</div>
```
### CSS thuần
```css
* {
    box-sizing: border-box;
}
body {
    margin: 0;
    font-family: Arial, sans-serif;
}
.navbar {
    background-color: #1f2937;
    color: white;
    padding: 16px 32px;

    display: flex;
    justify-content: space-between;
    align-items: center;
}
.logo {
    font-size: 24px;
    font-weight: bold;
}
.menu {
    display: flex;
    gap: 24px;
    list-style: none;
    margin: 0;
    padding: 0;
}
.menu a {
    color: white;
    text-decoration: none;
}
.menu a:hover {
    color: #facc15;
    text-decoration: underline;
}
.menu-btn {
    display: none;
    background: none;
    border: none;
    color: white;
    font-size: 28px;
}
.product-card {
    width: 300px;
    margin: 30px;
    background-color: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}
.product-card img {
    width: 100%;
    display: block;
}
.card-body {
    padding: 16px;
}
.card-body p {
    color: red;
    font-weight: bold;
}
.card-body button {
    width: 100%;
    padding: 12px;
    border: none;
    background-color: #2563eb;
    color: white;
    border-radius: 8px;
    cursor: pointer;
}
.card-body button:hover {
    background-color: #1d4ed8;
}
@media (max-width: 768px) {
    .menu {
        display: none;
    }
    .menu-btn {
        display: block;
    }
    .product-card {
        width: calc(100% - 32px);
        margin: 16px;
    }
}
```
---
## 2. Bootstrap version
### HTML Bootstrap
```html
<nav class="navbar navbar-expand-md navbar-dark bg-dark px-4">
    <a class="navbar-brand fw-bold" href="#">MyShop</a>
    <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="menu">
        <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Products</a></li>
            <li class="nav-item"><a class="nav-link" href="#">About</a></li>
        </ul>
    </div>
</nav>
<div class="card m-4 shadow" style="width: 18rem;">
    <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Product">
    <div class="card-body">
        <h5 class="card-title">Sản phẩm A</h5>
        <p class="card-text text-danger fw-bold">Giá: 299.000đ</p>
        <button class="btn btn-primary w-100">Mua ngay</button>
    </div>
</div>
```
---
## 3. So sánh
| Tiêu chí | CSS thuần | Bootstrap |
|---|---|---|
| Số dòng CSS cần viết | Nhiều, khoảng 70–100 dòng | Rất ít hoặc gần như 0 dòng CSS |
| Thời gian phát triển | Lâu hơn vì phải tự viết layout, responsive, hover | Nhanh hơn vì có class sẵn |
| Khả năng tùy biến | Cao, kiểm soát toàn bộ giao diện | Nhanh nhưng dễ giống Bootstrap nếu không custom |
| Responsive | Phải tự viết media query | Có sẵn grid, navbar collapse, breakpoint |
| Component | Tự code từ đầu | Có sẵn card, navbar, button, modal, dropdown |
---
## 4. Khi nào NÊN dùng Bootstrap?
Nên dùng Bootstrap khi:
- Cần làm nhanh project
- Làm landing page, admin dashboard, prototype
- Muốn responsive nhanh
- Không cần design quá khác biệt
- Team muốn dùng component có sẵn
Ví dụ:
```text
Dashboard quản trị, form đăng nhập, trang bán hàng đơn giản
```
---
## 5. Khi nào KHÔNG NÊN dùng Bootstrap?
Không nên dùng Bootstrap khi:
- Website cần thiết kế rất riêng, khác biệt nhiều
- Muốn tối ưu CSS cực nhẹ
- Dự án yêu cầu design system riêng
- Không muốn phụ thuộc framework
- Cần animation/layout custom phức tạp
Ví dụ:
```text
Portfolio sáng tạo, website thương hiệu cao cấp, UI game, landing page design độc lạ
```