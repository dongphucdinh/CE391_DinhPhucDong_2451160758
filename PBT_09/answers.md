# Câu A1 - DOM Tree & Query Selector
## 1. DOM Tree
```text
div#app
├── header
│   ├── h1
│   │   └── "Todo App"
│   └── nav
│       ├── a.active
│       │   └── "All"
│       ├── a
│       │   └── "Active"
│       └── a
│           └── "Completed"
│
└── main
    ├── form#todoForm
    │   ├── input#todoInput
    │   └── button
    │       └── "Add"
    │
    └── ul#todoList
        ├── li.todo-item
        │   └── "Learn HTML"
        └── li.todo-item.completed
            └── "Learn CSS"
```
---
## 2. Query Selector
### Chọn thẻ `<h1>`
```js
document.querySelector("h1");
```
### Chọn input trong form
```js
document.querySelector("#todoForm input");
```
### Chọn tất cả `.todo-item`
```js
document.querySelectorAll(".todo-item");
```
### Chọn link đang active
```js
document.querySelector("a.active");
```
### Chọn `<li>` đầu tiên trong `#todoList`
```js
document.querySelector("#todoList li:first-child");
```
### Chọn tất cả `<a>` bên trong `<nav>`
```js
document.querySelectorAll("nav a");
```
---
# Câu A2 - innerHTML vs textContent
## 1. Sự khác nhau
### `innerHTML`
`innerHTML` dùng để lấy hoặc gán nội dung HTML bên trong một phần tử.
Nếu chuỗi có chứa thẻ HTML, trình duyệt sẽ hiểu và render thành HTML.
```js
document.querySelector("#result").innerHTML = "<b>Hello</b>";
```
Kết quả hiển thị:
```html
Hello
```
Chữ `Hello` sẽ được in đậm.
---
### `textContent`
`textContent` dùng để lấy hoặc gán nội dung dạng văn bản thuần.
Nếu chuỗi có chứa thẻ HTML, trình duyệt sẽ không render thẻ đó mà hiển thị như text bình thường.
```js
document.querySelector("#result").textContent = "<b>Hello</b>";
```
Kết quả hiển thị:
```html
<b>Hello</b>
```
## 3. Vì sao `innerHTML` có thể gây lỗi XSS?
`innerHTML` nguy hiểm khi đưa trực tiếp dữ liệu người dùng nhập vào trang.
Vì trình duyệt có thể hiểu nội dung người dùng nhập là HTML, dẫn đến việc chạy mã độc hoặc chèn phần tử nguy hiểm.
Ví dụ user nhập:
```html
<img src=x onerror="alert('Hacked!')">
```
Code nguy hiểm:
```js
const userInput = document.querySelector("#search").value;
document.querySelector("#result").innerHTML = userInput;
```
Khi đó trình duyệt sẽ tạo thẻ `img`.
Do `src=x` bị lỗi, sự kiện `onerror` chạy và hiện alert
---
## 4. Cách sửa
Thay `innerHTML` bằng `textContent`:
```js
const userInput = document.querySelector("#search").value;
document.querySelector("#result").textContent = userInput;
```
Khi đó nội dung:
```html
<img src=x onerror="alert('Hacked!')">
```
sẽ chỉ được hiển thị như chữ bình thường, không được chạy như HTML.
---