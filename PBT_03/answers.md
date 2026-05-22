#### Câu A1:
#### Cách 1:
`Inline CSS`
CSS viết trực tiếp trong thẻ HTML bằng thuộc tính `<style>`
- Ví dụ :
````
<p style="color: red; font-size: 20px;">
    Dong
</p>
````
#### Ưu điểm
- Nhanh, đơn giản
- Sửa trực tiếp trên phần tử
#### Nhược điểm
- Code khó bảo trì
- Lặp lại nhiều
- Không tách riêng giao diện và nội dung
#### Khi nào nên dùng
- Test nhanh
- Chỉnh một phần tử nhỏ
- Debug tạm thời
#### Cách 2:
`Internal CSS`
CSS viết trong thẻ `<style>` bên trong file HTML.

- Ví dụ
````
<!DOCTYPE html>
<html>
<head>
    <style>
        p {
            color: blue;
            font-size: 18px;
        }
    </style>
</head>
<body>
    <p>Hello</p>
</body>
</html>
````

#### Ưu điểm
- Quản lý dễ hơn inline
- Không cần file riêng
- Nhược điểm
#### File HTML dài
- Không tái sử dụng cho nhiều trang
- Khi nào nên dùng
- Website nhỏ
- Trang đơn
- Demo hoặc bài tập
#### Cách 3:
`External CSS`
CSS nằm trong file riêng .css và liên kết bằng `<link>`.

- Ví dụ
````
index.html

<head>
    <link rel="stylesheet" href="style.css">
</head>

style.css

p {
    color: green;
    font-size: 22px;
}
````
#### Ưu điểm
- Dễ bảo trì
- Tái sử dụng cho nhiều trang
- Code sạch và chuyên nghiệp
#### Nhược điểm
- Cần thêm file CSS
- Nếu file CSS lỗi thì giao diện mất style
- Khi nào nên dùng
- Website thật
- Project lớn
- Làm việc nhóm

#### Câu hỏi thêm
- Nếu cùng 1 element có cả 3 cách CSS thì cách nào thắng?
- Thứ tự ưu tiên:
`Inline CSS`>`Internal CSS`>`External CSS`

- Ví dụ:
````
<head>
    <style>
        p {
            color: blue;
        }
    </style>

    <link rel="stylesheet" href="style.css">
</head>

<body>
    <p style="color: red;">Hello</p>
</body>
````
- Giả sử trong style.css:
````
p {
    color: green;
}
````
#### Kết quả chữ sẽ màu đỏ vì:
- External: xanh lá
- Internal: xanh dương
- Inline: đỏ
- Inline có độ ưu tiên cao nhất nên được áp dụng.
#### Giải thích
- CSS hoạt động theo Cascade (xếp tầng).
- Khi nhiều rule cùng tác động lên một phần tử:
- Browser xét độ ưu tiên (specificity)
- Rule nào mạnh hơn sẽ được dùng
- Nếu bằng nhau thì rule viết sau thắng
- Inline CSS có specificity cao hơn internal và external nên thường “thắng”.
##### Câu A2:
- h1 Chọn: ShopTLU
- price Chọn: 25.990.000đ, 45.990.000đ
- #app header Chọn: ShopTLU, Home, Products, About
- nav a:first-child Chọn: Home
- product.featured h2 Chọn: MacBook Pro
- article > p Chọn: 25.990.000đ Mô tả sản phẩm... 45.990.000đ Mô tả sản phẩm...
- a[href="/"] Chọn: Home
- .top-bar.dark h1 Chọn: ShopTLU
#### Câu A3:
Trường hợp 1: `content-box`
`width = content`
- Chiều rộng hiển thị: 400 + 20×2 + 5×2 = 450px
- Không gian chiếm trên trang: 450 + 10×2 = 470px
Trường hợp 2: `border-box`
`width = content + padding + border`
- Kích thước content thực tế: 400 - 20×2 - 5×2 = 350px
- Không gian chiếm trên trang: 400 + 10×2 = 420p
Trường hợp 3: `Margin collapse`
`.box-a { margin-bottom: 25px; }`
`.box-b { margin-top: 40px; }`
- Khoảng cách giữa 2 box: 40px : Không phải 65px vì margin dọc của 2 block bị collapse, CSS lấy margin lớn hơn, không cộng lại.
Nâng cao
`.box-a { margin-bottom: -10px; }`
`.box-b { margin-top: 40px; }`
- Khoảng cách: 40 + (-10) = 30px
#### Câu A4
- Specificity dạng (a, b, c)
````
p              → (0, 0, 1)  
.price         → (0, 1, 0)  
#main-price    → (1, 0, 0)  
p.price        → (0, 1, 1)  
````
- Trong đó:

- a = số id
- b = số class
- c = số thẻ HTML

- Màu cuối cùng của element: `<p class="price" id="main-price">`
- Là đỏ, vì: `#main-price { color: red; }`
- Nếu thêm inline style: `<p class="price" id="main-price" style="color: orange;">` Element có màu cam, vì inline style mạnh hơn CSS selector thường
- Nếu Rule A thêm !important: `p { color: black !important; }` Element có màu đen, vì !important được ưu tiên hơn rule thường, dù selector p yếu hơn #main-price
#### Câu B1 - Selectors đã sử dụng

1. Element selector:
   - body
   - table
   - th
   - td
   - footer

2. Class selector:
   - .navbar
   - .card
   - .active

3. ID selector:
   - #top-header
   - #ve-toi
   - #ky-nang
   - #lien-he

4. Descendant selector:
   - .navbar a
   - tbody tr

5. Pseudo-class selector:
   - .navbar a:hover
   - tbody tr:nth-child(even)
   - tbody tr:hover
#### Câu B2

## Phần 1: Content-box vs Border-box
- Hộp 1 (content-box): Chiều rộng thực tế = 300 + 20*2 + 5*2 = 350px
- Hộp 2 (border-box): Chiều rộng thực tế = 300px
## Phần 2: Layout 3 cột
Không dùng border-box
`Sidebar: 250 + 15*2 = 280px`
`Content: 500 + 20*2 = 540px`
`Ads: 250 + 15*2 = 280px`
Tổng:280 + 540 + 280 = 1100px
Vì container chỉ rộng 1000px, layout sẽ bị vỡ hoặc tràn ra ngoài.
- Có dùng border-box
````
Sidebar = 250px
Content = 500px
Ads = 250px
````
Tổng: 250 + 500 + 250 = 1000px
Vì dùng box-sizing: border-box, padding được tính bên trong width nên layout vừa đúng container.