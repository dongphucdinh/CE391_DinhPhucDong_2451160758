# Câu A1 — Viewport & Mobile-First
## 1. Thẻ meta viewport chuẩn
````
<meta name="viewport" content="width=device-width, initial-scale=1.0">
````
## 2. Giải thích từng thuộc tính
### `name="viewport"`
- Khai báo thẻ meta này dùng để điều khiển viewport của trình duyệt.
### `width=device-width`
- Chiều rộng trang web sẽ bằng chiều rộng thật của thiết bị.
- Ví dụ: điện thoại rộng 390px thì viewport cũng là 390px.
### `initial-scale=1.0`
- Mức zoom ban đầu là 100%.
= Trang web không bị tự động phóng to hoặc thu nhỏ khi mở trên điện thoại.
## 3. Nếu thiếu thẻ meta viewport, iPhone hiển thị thế nào?
- Nếu thiếu thẻ viewport, iPhone thường giả lập trang web như màn hình desktop rộng khoảng 980px.
Kết quả:
- Website bị thu nhỏ lại
- Chữ rất bé
- Người dùng phải zoom bằng tay
- Layout mobile không hoạt động đúng
- Media query responsive có thể hiển thị sai
## 4. Mobile-First và Desktop-First khác nhau thế nào?
### Mobile-First
- Mobile-First nghĩa là viết CSS mặc định cho màn hình nhỏ trước, sau đó dùng `min-width` để mở rộng layout cho màn hình lớn.
- Ví dụ breakpoint 768px:
````
/* CSS mặc định cho mobile */
.container {
    width: 100%;
    padding: 16px;
}
.card {
    width: 100%;
}
@media (min-width: 768px) {
    .container {
        width: 720px;
        margin: 0 auto;
    }
    .card {
        width: 50%;
    }
}
````
### Desktop-First
- Desktop-First nghĩa là viết CSS mặc định cho màn hình lớn trước, sau đó dùng `max-width` để chỉnh lại cho màn hình nhỏ.
- Ví dụ breakpoint 768px:
````
.container {
    width: 960px;
    margin: 0 auto;
}
.card {
    width: 33.33%;
}
@media (max-width: 768px) {
    .container {
        width: 100%;
        padding: 16px;
    }
    .card {
        width: 100%;
    }
}
````
## 5. Tại sao Mobile-First được khuyên dùng?
- Mobile-First được khuyên dùng vì:
- Phù hợp với xu hướng người dùng truy cập web bằng điện thoại nhiều
- CSS gọn hơn, dễ mở rộng lên màn hình lớn
- Tối ưu hiệu năng cho thiết bị nhỏ
- Giúp website responsive tốt hơn
- Tránh tình trạng phải sửa quá nhiều từ layout desktop xuống mobile

# Câu A2 — Breakpoints
| Breakpoint | Kích thước | Thiết bị đại diện | Ví dụ lưới sản phẩm |
|---|---|---|---|
| Extra Small (XS) | < 576px | Điện thoại nhỏ | 1 cột |
| Small (SM) | ≥ 576px | Điện thoại lớn | 2 cột |
| Medium (MD) | ≥ 768px | Tablet | 2–3 cột |
| Large (LG) | ≥ 992px | Laptop | 3–4 cột |
| Extra Large (XL) | ≥ 1200px | Desktop lớn | 4 cột |
| XXL | ≥ 1400px | Màn hình rất lớn | 5–6 cột |
## Giải thích
### XS (<576px)
Thiết bị:
```text
Điện thoại nhỏ
```
Nên dùng:
```text
1 cột
```
để dễ đọc và bấm trên màn hình nhỏ.
--
### SM (≥576px)
Thiết bị:
```text
Điện thoại lớn
```
Nên dùng:
```text
2 cột
```
để tận dụng không gian màn hình hơn.
---
### MD (≥768px)
Thiết bị:
```text
Tablet
```
Nên dùng:
```text
2–3 cột
```
vì tablet có chiều ngang lớn hơn mobile.

---
### LG (≥992px)
Thiết bị:
```text
Laptop
```
Nên dùng:
```text
3–4 cột
```
để hiển thị nhiều sản phẩm hơn.
### XL (≥1200px)
Thiết bị:
```text
Desktop lớn
```
Nên dùng:
```text
4 cột
```
để layout rộng và cân đối.
### XXL (≥1400px)
- Thiết bị:
```text
Màn hình rất lớn
```
- Nên dùng:
```text
5–6 cột
```
để tận dụng không gian màn hình lớn.

#### Câu A3: 
| Chiều rộng màn hình | `.container` width |
|---|---|
| 375px (iPhone SE) | 100% |
| 600px | 540px |
| 800px | 720px |
| 1000px | 960px |
| 1400px | 1140px |
## Giải thích
### 375px
Không media query nào được kích hoạt vì:
```css
375 < 576
```
nên:
```css
.container {
    width: 100%;
}
```
### 600px
Thoả:
```css
@media (min-width: 576px)
```
nên:
```css
width: 540px;
```
### 800px
Thoả:
```css
@media (min-width: 768px)
```
nên:
```css
width: 720px;
```
### 1000px
Thoả:
```css
@media (min-width: 992px)
```
nên:
```css
width: 960px;
```
### 1400px
Thoả:
```css
@media (min-width: 1200px)
```
nên:
```css
width: 1140px;
```
# Câu A4 — SCSS Basics
## 1. Variable
SCSS cho phép tạo biến để lưu màu sắc, font, khoảng cách...
### Ví dụ
```scss
$primary-color: #805ad5;
$radius: 8px;
.button {
    background-color: $primary-color;
    border-radius: $radius;
}
```
### Lợi ích
- Chỉ cần sửa 1 chỗ
- Toàn bộ project tự cập nhật
- Dễ maintain
## 2. Nesting
SCSS cho phép viết CSS lồng nhau theo cấu trúc HTML.
### Ví dụ
```scss
.navbar {
    background: black;
    ul {
        display: flex;
        li {
            margin-right: 20px;
            a {
                color: white;
                &:hover {
                    color: yellow;
                }
            }
        }
    }
}
```
### Lợi ích
- Code gọn hơn
- Dễ đọc hơn
- Bám sát cấu trúc HTML
## 3. Mixins
Mixin giống như hàm CSS dùng lại nhiều lần.
### Ví dụ
```scss
@mixin flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}
.hero {
    @include flex-center;
    height: 100vh;
}
```
### Lợi ích
- Tái sử dụng code
- Giảm lặp CSS
- Viết responsive nhanh hơn
---
## 4. @extend / Inheritance
`@extend` cho phép kế thừa style từ class khác.
### Ví dụ
```scss
.button {
    padding: 12px 20px;
    border-radius: 8px;
}

.btn-primary {
    @extend .button;
    background: blue;
}
```
### Lợi ích
- Dùng lại style có sẵn
- Tránh lặp code
- Dễ maintain
## 5. Tại sao trình duyệt KHÔNG đọc được file .scss?
Trình duyệt chỉ hiểu:
- HTML
- CSS
- JavaScript
SCSS là ngôn ngữ mở rộng của CSS nên browser không hiểu trực tiếp file `.scss`.
## 6. Cần bước gì để chuyển SCSS → CSS?
Cần dùng **SCSS Compiler** để compile:
```text
SCSS → CSS
```
Ví dụ:
- Live Sass Compiler (VS Code)
- Webpack
- Vite
- Sass CLI
Sau khi compile:
```scss
style.scss
```
- tạo ra:
```css
style.css
```
Browser sẽ đọc file `.css`.

---
## Lệnh compile SCSS (Bài B3)
Lệnh đã sử dụng để biên dịch SCSS sang CSS:
```bash
npx sass scss/style.scss style.css
```
# Câu C1 — Phân tích trang web thực: YouTube
## Trang web chọn
Trang được chọn: YouTube
Các kích thước kiểm tra:
- Mobile: 375px
- Tablet: 768px
- Desktop: 1440px
---
## Mobile — 375px
### Navigation thay đổi thế nào?
Ở màn hình mobile, navigation được rút gọn.  
Các mục menu lớn không hiển thị đầy đủ như desktop.  
Giao diện ưu tiên icon, thanh tìm kiếm và các nút chức năng cơ bản.
### Lưới content mấy cột?
Video hiển thị chủ yếu theo dạng:
```text
1 cột
```
Mỗi video nằm một hàng để dễ xem trên màn hình nhỏ.
### Elements nào bị ẩn trên mobile?
Một số phần thường bị ẩn hoặc thu gọn:
- Sidebar menu bên trái
- Một số text của navigation
- Một số nút phụ
- Layout nhiều cột
### Font size có thay đổi không?
Có thể có thay đổi nhẹ.  
Font trên mobile thường nhỏ/gọn hơn để phù hợp màn hình hẹp, nhưng vẫn đủ dễ đọc.

---
##Tablet — 768px
### Navigation thay đổi thế nào?
Ở tablet, navigation rộng hơn mobile.  
Một số icon/menu có thể xuất hiện lại, nhưng sidebar vẫn có thể bị thu gọn.
### Lưới content mấy cột?
Video thường hiển thị khoảng:
```text
2 cột
```
Màn hình tablet đủ rộng để chia content thành nhiều cột hơn mobile.
### Elements nào bị ẩn?
Một số thành phần phụ vẫn có thể bị ẩn:
- Sidebar đầy đủ
- Một số text phụ
- Một số nút ít quan trọng
### Font size có thay đổi không?
Font có thể lớn hơn mobile một chút hoặc giữ gần giống desktop.
---
## Desktop — 1440px
### Navigation thay đổi thế nào?
Ở desktop, navigation hiển thị đầy đủ hơn:
- Logo
- Thanh tìm kiếm lớn
- Các icon chức năng
- Sidebar bên trái
- Menu điều hướng rõ ràng
### Lưới content mấy cột?
Video hiển thị nhiều cột, thường khoảng:
```text
4 cột
```
Tùy kích thước màn hình và zoom trình duyệt.
### Elements nào bị ẩn trên mobile nhưng hiện ở desktop?
Các thành phần hiện lại trên desktop:
- Sidebar trái
- Menu đầy đủ
- Thanh tìm kiếm rộng
- Nhiều cột video
- Text mô tả/menu phụ
### Font size có thay đổi không?
Có thể có thay đổi nhẹ.  
Desktop thường có nhiều không gian nên font và khoảng cách layout dễ nhìn hơn.
---
## Media Queries tìm trong DevTools
Trong DevTools → tab Elements → Styles, có thể tìm thấy các rule dạng:
```css
@media (max-width: 768px) {
    ...
}
```
hoặc:
```css
@media (min-width: 1024px) {
    ...
}
```
Ý nghĩa:
- `max-width`: áp dụng CSS khi màn hình nhỏ hơn hoặc bằng kích thước đó
- `min-width`: áp dụng CSS khi màn hình lớn hơn hoặc bằng kích thước đó
## 5. Nhận xét chung
YouTube sử dụng responsive design để thay đổi layout theo kích thước màn hình.
- Mobile: ưu tiên 1 cột, ẩn bớt sidebar/menu
- Tablet: tăng lên khoảng 2 cột
- Desktop: hiện sidebar và nhiều cột video
- Navigation thay đổi từ đầy đủ sang dạng rút gọn
- Một số thành phần bị ẩn trên mobile để tiết kiệm không gian

# Câu C2 — Thiết kế Responsive Strategy
## 1. Mobile
### Wireframe
```text
+----------------------+
| Logo                 |
| SĐT đặt bàn           |
+----------------------+
| Hero image           |
+----------------------+
| Form đặt bàn         |
| - Ngày               |
| - Giờ                |
| - Số người           |
| - Ghi chú            |
+----------------------+
| Grid ảnh món ăn      |
| 1 cột                |
+----------------------+
| Google Maps          |
+----------------------+
| Footer               |
+----------------------+
```
### Phân tích
- Header xếp dọc hoặc logo trái, số điện thoại dưới.
- Form đặt bàn nằm ngay sau hero để người dùng dễ đặt bàn.
- Grid ảnh món ăn hiển thị 1 cột.
- Google Maps nằm dưới form và ảnh.
- Có thể ẩn bớt menu navigation nếu có, chỉ giữ logo và số điện thoại.
## 2. Tablet
### Wireframe
```text
+--------------------------------+
| Logo              SĐT đặt bàn   |
+--------------------------------+
| Hero image                     |
+--------------------------------+
| Form đặt bàn                   |
+--------------------------------+
| Grid ảnh món ăn                |
| 2 cột                          |
+--------------------------------+
| Google Maps                    |
+--------------------------------+
| Footer                         |
+--------------------------------+
```
### Phân tích
- Header chuyển sang nằm ngang.
- Form vẫn ưu tiên đặt ở phía trên.
- Grid ảnh món ăn chia 2 cột.
- Google Maps nằm dưới grid ảnh hoặc dưới form.
- Không cần sidebar.
## 3. Desktop
### Wireframe
```text
+--------------------------------------------------+
| Logo                              SĐT đặt bàn     |
+--------------------------------------------------+
| Hero image toàn trang                            |
+--------------------------------------------------+
|  Form đặt bàn        |  Google Maps              |
|  Ngày, giờ, số người |                           |
|  Ghi chú             |                           |
+--------------------------------------------------+
| Grid ảnh món ăn                                  |
| 3 cột hoặc 6 cột                                |
+--------------------------------------------------+
| Footer                                           |
+--------------------------------------------------+
```
### Phân tích
- Desktop dùng layout 2 cột cho form và bản đồ.
- Form đặt bàn nằm bên trái.
- Google Maps nằm bên phải.
- Grid ảnh món ăn hiển thị 3 cột hoặc 6 cột.
- Không cần sidebar vì nội dung chính đã đủ rõ ràng.
## 4. CSS Skeleton Mobile-First
```css
* {
    box-sizing: border-box;
}
body {
    margin: 0;
    font-family: Arial, sans-serif;
}
.header {
    display: grid;
    gap: 8px;
    padding: 16px;
}
.hero {
    min-height: 300px;
    background-size: cover;
    background-position: center;
}
.main {
    display: grid;
    gap: 24px;
    padding: 16px;
}
.booking-form {
    display: grid;
    gap: 12px;
}
.food-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
}
.map {
    min-height: 300px;
}
.footer {
    padding: 20px;
    text-align: center;
}
@media (min-width: 768px) {
    .header {
        grid-template-columns: 1fr auto;
        align-items: center;
    }
    .food-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media (min-width: 1024px) {
    .main {
        max-width: 1200px;
        margin: 0 auto;
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
            "form map"
            "gallery gallery";
    }
    .booking-form {
        grid-area: form;
    }
    .map {
        grid-area: map;
    }
    .food-grid {
        grid-area: gallery;
        grid-template-columns: repeat(3, 1fr);
    }
}
```