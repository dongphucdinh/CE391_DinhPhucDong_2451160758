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