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