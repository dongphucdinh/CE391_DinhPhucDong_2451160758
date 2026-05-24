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