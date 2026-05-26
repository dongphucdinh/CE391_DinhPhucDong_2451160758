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
