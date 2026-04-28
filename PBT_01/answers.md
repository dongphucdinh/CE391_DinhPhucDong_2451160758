# PHẦN A — KIỂM TRA ĐỌC HIỂU

## Câu A1

### 1. Thứ tự các bước khi truy cập Shopee.vn

1. Trình duyệt gửi yêu cầu đến máy chủ DNS (Domain Name System) để hỏi địa chỉ IP của `shopee.vn`.
2. DNS phản hồi lại địa chỉ IP của máy chủ.
3. Trình duyệt thiết lập kết nối an toàn với server thông qua giao thức HTTPS để bảo vệ dữ liệu.
4. Trình duyệt gửi một HTTP GET Request đến server để yêu cầu nội dung trang chủ Shopee.
5. Server nhận yêu cầu, xử lý dữ liệu và trả về HTTPS Response.
6. Trình duyệt nhận file HTML, đọc từ trên xuống, tiếp tục tải CSS/JS rồi dựng giao diện hiển thị cho người dùng.

### 2. Ảnh chụp màn hình

Ảnh nằm trong thư mục `screenshots`.

---

## Câu A2

Trang web bị đánh giá SEO chưa tốt vì đang mắc lỗi **Div Soup** (lạm dụng thẻ `div`, thiếu Semantic HTML). Google Bot và các công cụ tìm kiếm sẽ khó xác định đâu là phần đầu trang, menu điều hướng và nội dung chính.

### 4 lỗi Semantic và cách sửa

#### Lỗi 1: `<div class="header">`

- Thiếu thẻ `header`
- Cách sửa: Dùng thẻ `<header>` để Google hiểu đây là phần đầu trang chứa logo và khu vực điều hướng.

#### Lỗi 2: `<div class="menu">`

- Thiếu thẻ `nav`
- Cách sửa: Các liên kết như Trang chủ / Sản phẩm nên đặt trong thẻ `<nav>` để hỗ trợ SEO và trình đọc màn hình.

#### Lỗi 3: `<div class="main">`

- Thiếu thẻ `main`
- Cách sửa: Nội dung quan trọng nhất của trang nên đặt trong thẻ `<main>` (mỗi trang chỉ nên có 1 thẻ `<main>`).

#### Lỗi 4: `<div class="product">`

- Thiếu thẻ `article`
- Cách sửa: Một sản phẩm là nội dung độc lập nên dùng thẻ `<article>` để tăng ý nghĩa ngữ nghĩa.
#### Sửa lại :
```html
<header>
    <div class="logo">ShopTLU</div>
    <nav>
        <ul>
            <li><a href="/">Trang chủ</a></li>
            <li><a href="/products">Sản phẩm</a></li>
        </ul>
    </nav>
</header>

<main>
    <article class="product">
        <h2>iPhone 16 Pro</h2>
        <p class="price">25.990.000đ</p>

        <figure class="image">
            <img src="https://th.bing.com/th/id/OIP.26BTLmqIr5wvgVH2n6QWhAHaHa?w=189&h=189&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
                 alt="iPhone 16 Pro màu Titan tự nhiên">

            <figcaption>Mẫu iPhone mới nhất 2026</figcaption>
        </figure>
    </article>
</main>

<footer>
    <p>© 2026 ShopTLU</p>
</footer>
```
## Câu A3:
### Mô tả từng dòng :
- **Dòng 1:** Hộp 1
- **Dòng 2:** Text A | Text B
- **Dòng 3:** Hộp 2
- **Dòng 2:** Text C | Text D
- **Dòng 3:** Hộp 3
### Giải thích :
- `div` là phần tử block
- Chiếm toàn bộ chiều ngang có sẵn.
- Tự động xuống dòng trước và sau nó.
`span` và `strong` là phần tử inline
- Không xuống dòng.
- Hiển thị nối tiếp nhau trên cùng dòng.
## CÂU A4:
### Giải thích sự khác nhau :
- `thead` Chứa các tiêu đề của cột (thường dùng thẻ <th> bên trong).
- Đặc điểm: Giúp trình duyệt và các thiết bị đọc màn hình (Screen Reader) hiểu được ý nghĩa của dữ liệu bên dưới. Khi in một bảng dài ra nhiều trang giấy, một số trình duyệt sẽ tự động lặp lại `thead` ở đầu mỗi trang.
- `tbody` Mục đích: Chứa nội dung dữ liệu chính của bảng (thường dùng thẻ <td>).
- Đặc điểm: Một bảng có thể có nhiều `tbody` để phân nhóm dữ liệu. Đây là phần chiếm diện tích lớn nhất.
- `tfoot`Mục đích: Chứa thông tin tổng kết (ví dụ: Tổng tiền, Tổng số lượng, Ghi chú cuối bảng).
- Đặc điểm: Tương tự như header, khi in ấn, phần footer có thể được lặp lại ở cuối mỗi trang giấy.
### Tại sao không nên dùng Table để tạo layout trong web:
- Lý do 1: Không thân thiện với SEO và Screen Readers
- Lý do 2: Khó khăn trong việc Responsive (Hiển thị di động)
- Lý do 3: Tốc độ tải trang và hiệu suất (Performance)
### Lỗi của Bài B3 : 
- Lỗi 1: Dòng 1 — `<!DOCTYPE>` thiếu kiểu tài liệu HTML — Sửa thành `<!DOCTYPE html>`.

- ỗi 2: Dòng 2 — Thẻ `<html>` thiếu thuộc tính ngôn ngữ — Sửa thành `<html lang="vi">`.

- Lỗi 3: Dòng 4 — Thẻ `<title>` chưa đóng — Thêm `</title>`.

- Lỗi 4: Dòng 5 — charset viết sai utf8 — Sửa thành UTF-8.

- Lỗi 5: Trong head thiếu meta viewport — Thêm thẻ viewport.

- Lỗi 6: Dòng 8 — Thẻ `<h1>` đóng sai cú pháp — Sửa thành `</h1>`.

- Lỗi 7: Dòng 12 — Thẻ `<a>` đầu tiên chưa đóng — Thêm `</a>`.

- Lỗi 8: Dòng 12-13 — href chưa đúng chuẩn liên kết nội bộ — Sửa thành #home, #products.

- Lỗi 9: Dòng 18 — Dùng `<h3>` chưa hợp lý cho tiêu đề section — Đổi thành `<h2>`.

- Lỗi 10: Dòng 19 — img thiếu dấu ngoặc kép và thiếu alt — Bổ sung đầy đủ.

- Lỗi 11: Dòng 21 — Đóng thẻ sai thứ tự giữa `<p>` và `<b>` — Sửa thành `<p><strong>...</strong></p>`.

- Lỗi 12: Dòng 26-33 — Table thiếu thead và tbody — Bổ sung cấu trúc chuẩn.

- Lỗi 13: Dòng 28-29 — Ô tiêu đề bảng dùng td thay vì th — Đổi thành th.

- Lỗi 14: Dòng 37 — Có 2 thẻ main trong trang — Đổi main thứ hai thành aside.

- Lỗi 15: Dòng 42 — Thẻ `<p>` trong footer chưa đóng — Thêm `</p>`.

- Lỗi 16: Phần sản phẩm thiếu semantic ảnh — Bọc img bằng figure + figcaption.

- Lỗi 17: Dòng 45 — Sau thẻ `</body>` thiếu thẻ đóng tài liệu `</html>` — Thêm `</html>` ở cuối file.

## Bài B4 Semantic HTML5
1.
- `<header>` : phần đầu trang Shopee (thanh trên cùng)
- `<section>` : khu vực chia nội dung trang
- `<footer>` : phần cuối trang chứa thông tin website
2.
- Shopee không dùng thẻ `<table>`, chủ yếu dùng div + CSS layout.
3.
### Form

Tìm thấy form tìm kiếm sản phẩm ở phần đầu trang Shopee

- action: Không thấy khai báo trực tiếp 
- method: Không thấy khai báo trực tiếp
- role: search
- autocomplete: off

Input types được dùng:
- text / search (ô nhập từ khóa)
- submit (nút tìm kiếm)