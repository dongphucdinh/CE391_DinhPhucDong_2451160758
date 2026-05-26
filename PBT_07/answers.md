# Câu A1 — var / let / const
## Đoạn 1
```js
console.log(x);
var x = 5;
```
### Dự đoán output
```js
undefined
```
### Giải thích
`var` được hoisting lên đầu scope nhưng chưa được gán giá trị.
JavaScript hiểu như sau:
```js
var x;
console.log(x);
x = 5;
```
Nên `x` tồn tại nhưng giá trị là `undefined`.
---
## Đoạn 2
```js
console.log(y);
let y = 10;
```
### Dự đoán output
```js
ReferenceError
```
### Giải thích
`let` cũng được hoisting nhưng nằm trong Temporal Dead Zone (TDZ).
Không thể truy cập biến trước khi khai báo.
---
## Đoạn 3
```js
const z = 15;
z = 20;
console.log(z);
```
### Dự đoán output
```js
TypeError
```
### Giải thích
`const` không cho phép gán lại giá trị sau khi khởi tạo.
---
## Đoạn 4
```js
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
```
### Dự đoán output
```js
[1, 2, 3, 4]
```
### Giải thích
`const` không cho thay đổi tham chiếu của biến, nhưng vẫn cho phép thay đổi nội dung bên trong object hoặc array.
Sai:
```js
arr = [1, 2, 3, 4];
```
Đúng:
```js
arr.push(4);
```
---
## Đoạn 5
```js
let a = 1;
{
    let a = 2;
    console.log("Trong block:", a);
}
console.log("Ngoài block:", a);
```
### Dự đoán output
```js
Trong block: 2
Ngoài block: 1
```
### Giải thích
`let` có block scope.
Biến `a` bên trong block `{}` là biến khác với `a` bên ngoài.
---
# Câu A2 — Data Types & Coercion
## Dự đoán kết quả
```js
console.log(typeof null);        // "object"
console.log(typeof undefined);   // "undefined"
console.log(typeof NaN);         // "number"
console.log("5" + 3);            // "53"
console.log("5" - 3);            // 2
console.log("5" * "3");          // 15
console.log(true + true);        // 2
console.log([] + []);            // ""
console.log([] + {});            // "[object Object]"
console.log({} + []);            // 0
```
---
# Giải thích
- `typeof null` là `"object"` bug lịch sử JS
- `NaN` vẫn thuộc kiểu `number`
- `"5" + 3` nối chuỗi `"53"`
- `"5" - 3` ép sang number `2`
- `true = 1` nên `true + true = 2`
- `[]` chuyển thành `""`
- `{}` chuyển thành `"[object Object]"`
---
# Câu A3 — So sánh `==` vs `===`
## Dự đoán
```js
console.log(5 == "5");              // true
console.log(5 === "5");             // false
console.log(null == undefined);     // true
console.log(null === undefined);    // false
console.log(NaN == NaN);            // false
console.log(0 == false);            // true
console.log(0 === false);           // false
console.log("" == false);           // true
```
---
# Giải thích
- `==` : So sánh sau khi ép kiểu
- `===` : So sánh cả value và type
# Câu A4 — Truthy & Falsy
# Tất cả giá trị Falsy trong JavaScript
```js
false
0
-0
0n
""
null
undefined
NaN
```
Ngoài các giá trị trên, tất cả còn lại đều là Truthy.
---
# Dự đoán kết quả
```js
if ("0") console.log("A");      // In
if ("") console.log("B");       // Không in
if ([]) console.log("C");       // In
if ({}) console.log("D");       // In
if (null) console.log("E");     // Không in
if (0) console.log("F");        // Không in
if (-1) console.log("G");       // In
if (" ") console.log("H");      // In
```
---
# Giải thích
- `"0"` là string nên truthy
- `""` là chuỗi rỗng nên falsy
- `[]` và `{}` đều truthy
- `null` và `0` là falsy
- `-1` khác 0 nên truthy
- `" "` chứa dấu cách nên không rỗng - truthy
# Câu A5 — Template Literals
## Cách 1
### Code cũ
```js
var greeting = "Xin chào " + name + "! Bạn " + age + " tuổi.";
```
### Template Literal
```js
var greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;
```
---
## Cách 2
### Code cũ
```js
var url = "https://api.example.com/users/" + userId + "/orders?page=" + page;
```
### Template Literal
```js
var url = `https://api.example.com/users/${userId}/orders?page=${page}`;
```
---
## Cách 3
### Code cũ
```js
var html = "<div class=\"card\">" +
    "<h2>" + title + "</h2>" +
    "<p>" + description + "</p>" +
    "<span>Giá: " + price + "đ</span>" +
    "</div>";
```
### Template Literal
```js
var html = `
<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>
`;
```
---
# Câu C1 — Debug JavaScript
## 1. Các lỗi trong code
### Lỗi 1: Thiếu dấu `;`
```js
return "Phần trăm giảm không hợp lệ"
```
Nên viết:
```js
return "Phần trăm giảm không hợp lệ";
```
JavaScript có thể tự thêm `;`, nhưng nên viết đầy đủ để tránh lỗi khó hiểu.
---
### Lỗi 2: Không kiểm tra `giaBan` có phải số không
```js
const gia = tinhGiaGiamGia("100000", 20)
```
`giaBan` đang là string `"100000"`, dễ gây lỗi do type coercion.
Cách sửa:
```js
if (typeof giaBan !== "number" || isNaN(giaBan)) {
    return "Giá bán không hợp lệ";
}
```
---
### Lỗi 3: Không kiểm tra `phanTramGiam` có phải số không
Nếu `phanTramGiam` không phải number thì phép tính có thể sai.
Cách sửa:
```js
if (typeof phanTramGiam !== "number" || isNaN(phanTramGiam)) {
    return "Phần trăm giảm không hợp lệ";
}
```
---
### Lỗi 4: Dùng `=` thay vì `===`
Code sai:
```js
if (giaSauGiam = 0) {
```
`=` là gán giá trị, không phải so sánh.
Cách sửa:
```js
if (giaSauGiam === 0) {
```
---
### Lỗi 5: Dùng `var` không cần thiết
```js
var giamGia = giaBan * phanTramGiam / 100;
```
Nên dùng `let` hoặc `const`.
Vì `giamGia` không gán lại nên dùng:
```js
const giamGia = giaBan * phanTramGiam / 100;
```
---
### Lỗi 6: Test truyền sai kiểu dữ liệu
Code sai:
```js
const gia = tinhGiaGiamGia("100000", 20);
```
`"100000"` là string.
Cách sửa:
```js
const gia = tinhGiaGiamGia(100000, 20);
```
---
### Lỗi 7: Lỗi ẩn do `var` trong vòng lặp
Code sai:
```js
for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log("Item " + i);
    }, 1000);
}
```
Kết quả sẽ in:
```js
Item 5
Item 5
Item 5
Item 5
Item 5
```
Vì `var` có function scope, tất cả `setTimeout` dùng chung một biến `i`.
Cách sửa:
```js
for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log("Item " + i);
    }, 1000);
}
```
Khi dùng `let`, mỗi vòng lặp có một biến `i` riêng.
---
# Code sau khi sửa
```js
function tinhGiaGiamGia(giaBan, phanTramGiam) {
    if (typeof giaBan !== "number" || isNaN(giaBan) || giaBan < 0) {
        return "Giá bán không hợp lệ";
    }
    if (
        typeof phanTramGiam !== "number" ||
        isNaN(phanTramGiam) ||
        phanTramGiam < 0 ||
        phanTramGiam > 100
    ) {
        return "Phần trăm giảm không hợp lệ";
    }
    const giamGia = giaBan * phanTramGiam / 100;
    const giaSauGiam = giaBan - giamGia;
    if (giaSauGiam === 0) {
        console.log("Sản phẩm miễn phí!");
    }
    return giaSauGiam;
}
// Test
const gia = tinhGiaGiamGia(100000, 20);
console.log("Giá sau giảm: " + gia + "đ");
const gia2 = tinhGiaGiamGia(50000, 110);
console.log("Giá: " + gia2);
for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log("Item " + i);
    }, 1000);
}
```
---