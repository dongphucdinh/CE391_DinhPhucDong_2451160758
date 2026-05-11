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