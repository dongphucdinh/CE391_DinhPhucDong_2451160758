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
