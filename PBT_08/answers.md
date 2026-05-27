# Câu A1
## 1. Function Declaration
```js
function tinhThueBaoHiem(luong) {
    let thue = 0;
    if (luong > 11000000) {
        thue = luong * 0.1;
    }
    return {
        thue: thue,
        thuc_nhan: luong - thue
    };
}
```
---
## 2. Function Expression
```js
const tinhThueBaoHiem2 = function(luong) {
    let thue = 0;
    if (luong > 11000000) {
        thue = luong * 0.1;
    }
    return {
        thue: thue,
        thuc_nhan: luong - thue
    };
};
```
---
## 3. Arrow Function
```js
const tinhThueBaoHiem3 = (luong) => {
    let thue = 0;
    if (luong > 11000000) {
        thue = luong * 0.1;
    }
    return {
        thue: thue,
        thuc_nhan: luong - thue
    };
};
```
---
# Hoisting khác nhau như thế nào?
## Function Declaration
Có hoisting hoàn toàn.
Có thể gọi hàm trước khi khai báo.
```js
console.log(tinhTong(2, 3));
function tinhTong(a, b) {
    return a + b;
}
```
Kết quả:
```js
5
```
---
## Function Expression
Không hoisting function.
Nếu gọi trước sẽ lỗi.
```js
console.log(tinhTong2(2, 3));
const tinhTong2 = function(a, b) {
    return a + b;
};
```
Kết quả:
```js
ReferenceError
```
---
## Arrow Function
Hoạt động giống Function Expression.
```js
console.log(tinhTong3(2, 3));
const tinhTong3 = (a, b) => {
    return a + b;
};
```
Kết quả:
```js
ReferenceError
```
---
# Câu A2
## Đoạn 1
```js
function counter() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}
const c = counter();
console.log(c.increment());  
console.log(c.increment());  
console.log(c.increment());  
console.log(c.decrement());  
console.log(c.getCount());
```
## Dự đoán output
```js
1
2
3
2
2
```
---
# Giải thích
Biến `count` được giữ lại nhờ closure.
- `increment()` tăng `count`
- `decrement()` giảm `count`
- `getCount()` trả về giá trị hiện tại
`count` không bị mất sau khi `counter()` chạy xong.
---
## Đoạn 2
```js
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var:", i), 100);
}
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let:", j), 200);
}
```
## Output sau 200ms
```js
var: 3
var: 3
var: 3
let: 0
let: 1
let: 2
```
---
# Giải thích
## `var`
`var` có function scope nên tất cả callback dùng chung biến `i`.
Sau vòng lặp:
```js
i = 3
```
nên in:
```js
3 3 3
```
---
## `let`
`let` có block scope.
Mỗi vòng lặp tạo một biến `j` riêng nên in:
```js
0 1 2
```