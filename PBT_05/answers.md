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