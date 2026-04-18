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