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