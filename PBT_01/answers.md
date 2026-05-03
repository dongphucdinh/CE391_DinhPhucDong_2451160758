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

### Phần C
#### Câu C1:
```<body>

<header> <!-- phần đầu trang -->
    <nav> <!-- menu điều hướng -->
        <ul>
            <li><a href="#">Trang chủ</a></li>
            <li><a href="#">Điện thoại</a></li>
            <li><a href="#">Phụ kiện</a></li>
        </ul>
    </nav>
</header>

<main> <!-- nội dung chính -->

    <nav aria-label="breadcrumb"> <!-- breadcrumb là điều hướng -->
        <ol> <!-- có thứ tự cấp bậc -->
            <li><a href="#">Trang chủ</a></li>
            <li><a href="#">Điện thoại</a></li>
            <li>iPhone 16</li>
        </ol>
    </nav>

    <section> <!-- khu vực chi tiết sản phẩm -->

        <section> <!-- khu vực ảnh sản phẩm -->
            <ul>
                <li><img src="#" alt="Ảnh 1"></li>
                <li><img src="#" alt="Ảnh 2"></li>
                <li><img src="#" alt="Ảnh 3"></li>
                <li><img src="#" alt="Ảnh 4"></li>
                <li><img src="#" alt="Ảnh 5"></li>
            </ul>
        </section>

        <article> <!-- thông tin sản phẩm độc lập -->
            <h1>iPhone 16</h1>
            <p>Giá</p>
            <p>Đánh giá sao</p>
            <p>Mô tả sản phẩm</p>
        </article>

        <section> <!-- bảng thông số -->
            <h2>Thông số kỹ thuật</h2>
            <table>
                <thead>
                    <tr>
                        <th>Thuộc tính</th>
                        <th>Giá trị</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Màn hình</td>
                        <td>6.1 inch</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section> <!-- khu vực đánh giá -->
            <h2>Đánh giá / Bình luận</h2>

            <article> <!-- mỗi bình luận độc lập -->
                <h3>Người dùng A</h3>
                <p>Rất tốt</p>
            </article>

            <article>
                <h3>Người dùng B</h3>
                <p>Hài lòng</p>
            </article>
        </section>

    </section>

    <aside> <!-- nội dung phụ -->
        <h2>Sản phẩm tương tự</h2>
        <ul>
            <li><a href="#">iPhone 15</a></li>
            <li><a href="#">Samsung S24</a></li>
            <li><a href="#">Xiaomi 14</a></li>
        </ul>
    </aside>

</main>

<footer> <!-- chân trang -->
    <p>Bản quyền website</p>
</footer>

</body>
```
#### C2
Ý kiến “chỉ dùng <div> cho mọi thứ rồi thêm class là đủ” nghe có vẻ tiện lúc đầu, nhưng về kỹ thuật thì không tối ưu. Semantic HTML tồn tại để mô tả đúng ý nghĩa nội dung, giúp trình duyệt, công cụ tìm kiếm và công nghệ hỗ trợ hiểu cấu trúc trang tốt hơn.

Lý do đầu tiên là SEO. Công cụ tìm kiếm không chỉ đọc chữ mà còn phân tích cấu trúc HTML để xác định phần nào quan trọng. Ví dụ, tiêu đề bài viết nên dùng <h1>, khu vực điều hướng dùng <nav>, nội dung chính dùng <main>. Nếu tất cả đều là <div>, bot tìm kiếm khó nhận biết đâu là nội dung chính, đâu là menu hay quảng cáo. Điều này có thể làm giảm khả năng lập chỉ mục và xếp hạng trang.

Lý do thứ hai là Accessibility. Người dùng sử dụng screen reader cần các mốc cấu trúc để điều hướng nhanh. Khi dùng <header>, <nav>, <main>, <footer>, họ có thể nhảy trực tiếp đến phần mong muốn thay vì nghe đọc toàn bộ trang. Nếu chỉ dùng <div>, trải nghiệm sẽ kém hơn nhiều, đặc biệt với người khiếm thị.

Ví dụ cụ thể: một website bán hàng có thanh menu danh mục. Nếu dùng <nav>, screen reader sẽ thông báo đây là vùng điều hướng, còn bot tìm kiếm hiểu đây là menu chính. Nếu thay bằng <div class="menu">, ý nghĩa đó bị mất, chỉ còn hình thức.

Tuy vậy, <div> vẫn rất phù hợp trong các trường hợp không mang ý nghĩa nội dung, chẳng hạn dùng làm container để chia layout, nhóm các card sản phẩm, tạo grid, flexbox hoặc bọc các phần tử để áp CSS/JavaScript. Nói ngắn gọn: semantic HTML dùng cho ý nghĩa nội dung, còn <div> dùng cho bố cục và nhóm phần tử. Kết hợp cả hai mới là cách làm chuyên nghiệp.