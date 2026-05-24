# Câu A1 — 5 Loại Positioning

| Position | Vẫn chiếm chỗ trong flow? | Tham chiếu vị trí | Cuộn theo trang? | Use case |
|---|---|---|---|---|
| static | Có | Không dùng top/left | Có | Layout mặc định |
| relative | Có | So với vị trí gốc của chính nó | Có | Dịch nhẹ element, làm mốc cho absolute |
| absolute | Không | Parent positioned gần nhất | Có | Badge, dropdown, tooltip |
| fixed | Không | Viewport | Không | Chat button, modal |
| sticky | Có → Không | Viewport khi sticky | Không khi đã sticky | Sticky header, sidebar |

## Câu hỏi thêm

### Khi nào absolute tham chiếu body?

Khi không có ancestor nào có:

````
position: relative;
position: absolute;
position: fixed;
position: sticky;
````
# Câu A2 — Flexbox vs Grid
## Trường hợp 1
````
.container { 
    display: flex; 
}

.item { 
    flex: 1; 
}
````
### Dự đoán bố cục
- 4 items nằm trên cùng 1 hàng
- Mỗi item có chiều rộng bằng nhau
### Sơ đồ
````
+------+------+------+------+
| Item | Item | Item | Item |
+------+------+------+------+
````
---
## Trường hợp 2
````
.container { 
    display: flex; 
    flex-wrap: wrap; 
}

.item { 
    width: 45%; 
    margin: 2.5%; 
}
````
### Dự đoán bố cục
Mỗi item chiếm:
````
45% + 2.5% + 2.5% = 50%
````
- Mỗi hàng chứa 2 items
Có 6 items nên:
````
3 hàng × 2 cột
````
### Sơ đồ
````
+--------+--------+
| Item 1 | Item 2 |
+--------+--------+

+--------+--------+
| Item 3 | Item 4 |
+--------+--------+

+--------+--------+
| Item 5 | Item 6 |
+--------+--------+
````
## Trường hợp 3
````
.container { 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
}
````
### Dự đoán bố cục
- 3 items nằm trên 1 hàng
- Item đầu sát trái
- Item cuối sát phải
- Item giữa nằm ở giữa
- Các item căn giữa theo chiều dọc
### Sơ đồ
````
|Item 1          Item 2          Item 3|
````
## Trường hợp 4
````
.container { 
    display: grid; 
    grid-template-columns: 200px 1fr 200px; 
    gap: 20px; 
}
````
### Dự đoán bố cục
- Grid có 3 cột
- Cột trái rộng 200px
- Cột giữa chiếm phần còn lại (`1fr`)
- Cột phải rộng 200px
- 3 items nằm trên cùng 1 hàng
### Sơ đồ
````
+--------+------------------+--------+
| 200px  |       1fr        | 200px  |
+--------+------------------+--------+
````
## Trường hợp 5
````
.container { 
    display: grid; 
    grid-template-columns: repeat(3, 1fr); 
    gap: 10px; 
}
````
### Dự đoán bố cục
- Grid có 3 cột bằng nhau
- 7 items sẽ tự xuống hàng
### Số hàng
````
7 items / 3 cột = 3 hàng
````
### Bố cục
- Hàng 1: item 1 2 3
- Hàng 2: item 4 5 6
- Hàng 3: item 7
### Sơ đồ
````
+------+------+------+
|  1   |  2   |  3   |
+------+------+------+

+------+------+------+
|  4   |  5   |  6   |
+------+------+------+

+------+
|  7   |
+------+
````
- Item 7 nằm ở cột đầu tiên của hàng thứ 3.

# Câu C1 — Flexbox vs Grid: Khi nào dùng gì? 
## 1. Navigation bar ngang
**Dùng: Flexbox**
- Vì navbar là layout theo **1 chiều ngang**: logo bên trái, menu ở giữa, buttons bên phải.
- Flexbox phù hợp để căn giữa theo chiều dọc bằng:
````
align-items: center;
````
= và chia khoảng cách ngang bằng:
````
justify-content: space-between;
````
## 2. Lưới ảnh Instagram
**Dùng: Grid**
= Vì đây là layout dạng **2 chiều** gồm hàng và cột.
= Ví dụ 3 cột đều nhau:
````
grid-template-columns: repeat(3, 1fr);
````
- Số ảnh không biết trước thì Grid sẽ tự động đẩy ảnh xuống hàng tiếp theo.
## 3. Layout blog: main content + sidebar
**Dùng: Grid**
- Vì layout blog là bố cục trang gồm nhiều vùng rõ ràng: main content và sidebar.
- Grid giúp chia cột dễ hơn, ví dụ:
````
grid-template-columns: 1fr 300px;
````
## 4. Footer với 4 cột thông tin
**Dùng: Grid hoặc Flexbox**
- Nên dùng **Grid** nếu muốn chia đều 4 cột rõ ràng.
= Ví dụ:
````
grid-template-columns: repeat(4, 1fr);
````
= Có thể dùng Flexbox nếu footer chỉ cần xếp các nhóm theo 1 hàng ngang đơn giản.
## 5. Card sản phẩm
**Dùng: Flexbox**
- Vì nội dung trong card xếp theo **1 chiều dọc**:
````
Ảnh
Tên + giá
Nút mua
````
- Để nút luôn dính đáy card, dùng:
````
.card {
    display: flex;
    flex-direction: column;
}
.card button {
    margin-top: auto;
}
````
# Câu C2 — Debug Flexbox
## Lỗi 1: Cards không đều chiều cao, nút "Mua" bị nhảy lên/xuống
### Nguyên nhân
- Các card có nội dung dài ngắn khác nhau nên chiều cao không đều.  
- Nút "Mua" nằm ngay sau nội dung nên nếu phần text dài/ngắn khác nhau thì nút sẽ bị lệch vị trí.
### Code sửa
````
.card-container {
    display: flex;
    flex-wrap: wrap;
}
.card {
    width: 30%;
    margin: 1.5%;

    display: flex;
    flex-direction: column;
}
.card img {
    width: 100%;
}
.card h3 {
    font-size: 18px;
}
.card .btn {
    padding: 10px;
    margin-top: auto;
}
````
### Giải thích
Dùng:
````
display: flex;
flex-direction: column;
````
- Để card xếp nội dung theo chiều dọc.
Dùng
````
margin-top: auto;
````
- Cho nút để đẩy nút xuống đáy card.
---
## Lỗi 2: Muốn item nằm giữa cả ngang lẫn dọc nhưng vẫn dính góc trái trên
### Nguyên nhân
 `.hero` đã có `display: flex`, nhưng chưa có thuộc tính căn giữa.
- Mặc định Flexbox sẽ để item ở đầu container:
````
justify-content: flex-start;
align-items: stretch;
````
### Code sửa
````
.hero {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.hero-content {
    text-align: center;
}
````
### Giải thích
Dùng:
````
justify-content: center;
````
- Để căn giữa theo chiều ngang.
Dùng:
````
align-items: center;
````
- Để căn giữa theo chiều dọc.
---
## Lỗi 3: Sidebar bị co lại khi content quá dài
### Nguyên nhân
- Trong Flexbox, các item mặc định có thể bị co lại vì:
````
flex-shrink: 1;
````
- Nên khi `.content` quá dài, `.sidebar` có thể bị ép nhỏ hơn `250px`.
### Code sửa
````
.layout {
    display: flex;
}
.sidebar {
    width: 250px;
    flex-shrink: 0;
}
.content {
    flex: 1;
}
````
### Giải thích
Dùng:
````
flex-shrink: 0;
````
- Để sidebar không bị co lại.
= Khi đó sidebar luôn giữ đúng chiều rộng `250px`, còn `.content` chiếm phần còn lại.