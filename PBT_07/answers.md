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
