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
# Câu A3 - Event Bubbling
## Khi click vào button
Event xảy ra trên `button` trước, sau đó nổi bọt lên `inner` rồi `outer`.
Output:
```text
BUTTON
INNER
OUTER
```
## Nếu dùng `e.stopPropagation()`
```js
document.querySelector("#btn").addEventListener("click", (e) => {
    console.log("BUTTON");
    e.stopPropagation();
});
```
`stopPropagation()` ngăn sự kiện lan lên phần tử cha.
Output:
```text
BUTTON
```
## Giải thích
Cơ chế Event Bubbling:
```text
button
  |
inner
  |
outer
```
Sự kiện được kích hoạt từ phần tử con rồi lan dần lên các phần tử cha.
# Câu C1
## Các lỗi tìm được
### Lỗi 1: Sai tên sự kiện
Code:
```js
document.querySelector("#decrementBtn").addEventListener("onclick", function() {
```
Sửa:
```js
document.querySelector("#decrementBtn").addEventListener("click", function() {
```
`addEventListener()` nhận tên sự kiện là `"click"` chứ không phải `"onclick"`.
---
### Lỗi 2: Dùng innerHTML để hiển thị số
Code:
```js
countDisplay.innerHTML = count;
```
Sửa:
```js
countDisplay.textContent = count;
```
Vì chỉ hiển thị text nên dùng `textContent` an toàn và hiệu quả hơn.
---
### Lỗi 3: Gán sai cho countDisplay
Code:
```js
countDisplay = count;
```
Sửa:
```js
countDisplay.textContent = count;
```
`countDisplay` là DOM element, không thể gán bằng số.
---
### Lỗi 4: Xóa history sai cách
Code:
```js
historyList.innerHTML = null;
```
Sửa:
```js
historyList.innerHTML = "";
```
hoặc
```js
historyList.textContent = "";
```
---
### Lỗi 5: Không gọi hàm remove()
Code:
```js
item.remove;
```
Sửa:
```js
item.remove();
```
Thiếu dấu ngoặc nên hàm không được thực thi.
---
### Lỗi 6: Dữ liệu localStorage là string
Code:
```js
count = localStorage.getItem("count");
```
Sửa:
```js
count = Number(localStorage.getItem("count")) || 0;
```
`getItem()` luôn trả về string.
---
### Lỗi 7: Không load lại history từ localStorage
Code chỉ lưu:
```js
localStorage.setItem("history", historyList.innerHTML);
```
Nhưng không đọc lại khi tải trang.
Sửa:
```js
historyList.innerHTML = localStorage.getItem("history") || "";
```
---
### Lỗi 8: History sau khi load bị mất event click
Khi dùng:
```js
historyList.innerHTML = ...
```
các `<li>` mới tạo sẽ không còn event listener.
Nên dùng Event Delegation hoặc render lại danh sách từ dữ liệu.
---
## Code sau khi sửa
```js
const countDisplay = document.querySelector(".count");
const historyList = document.getElementById("history");
let count = Number(localStorage.getItem("count")) || 0;
countDisplay.textContent = count;
historyList.innerHTML = localStorage.getItem("history") || "";
document.querySelector("#incrementBtn").addEventListener("click", () => {
    count++;
    countDisplay.textContent = count;
    const li = document.createElement("li");
    li.textContent = "Count changed to " + count;
    li.addEventListener("click", function () {
        deleteHistory(this);
    });
    historyList.appendChild(li);
});
document.querySelector("#decrementBtn").addEventListener("click", () => {
    count--;
    countDisplay.textContent = count;
});
document.querySelector("#resetBtn").addEventListener("click", () => {
    count = 0;
    countDisplay.textContent = count;
    historyList.innerHTML = "";
});
function deleteHistory(element) {
    element.remove();
}
document.querySelector("#clearHistory").addEventListener("click", () => {
    const items = historyList.querySelectorAll("li");
    items.forEach(item => {
        item.remove();
    });
});
window.addEventListener("beforeunload", () => {
    localStorage.setItem("count", count);
    localStorage.setItem("history", historyList.innerHTML);
});
```
# Câu C2 - Performance
## 1. Vì sao bind event lên 1000 elements là bad practice?
Nếu gắn event riêng cho 1000 elements:
```js
items.forEach(item => {
    item.addEventListener("click", handleClick);
});
```
thì trình duyệt phải lưu 1000 event listeners.
Điều này gây:
- Tốn bộ nhớ hơn
- Code khó quản lý
- Khi thêm item mới phải bind event lại
- Hiệu năng kém nếu danh sách lớn
---
## 2. Event Delegation giải quyết thế nào?
Event Delegation là gắn event vào phần tử cha, rồi kiểm tra phần tử con được click.
Ví dụ:
```js
const list = document.querySelector("#list");
list.addEventListener("click", (e) => {
    if (e.target.classList.contains("item")) {
        console.log(e.target.textContent);
    }
});
```
Thay vì 1000 listeners, chỉ cần 1 listener trên cha.
Nhờ cơ chế Event Bubbling, click từ item con sẽ nổi bọt lên cha.
---
## 3. Code ban đầu gây nhiều reflow
```js
for (let i = 0; i < 1000; i++) {
    const div = document.createElement("div");
    div.textContent = `Item ${i}`;
    document.body.appendChild(div);
}
```
Mỗi lần `appendChild()` vào `document.body`, trình duyệt có thể phải tính lại layout.
Có 1000 lần append trực tiếp nên có thể gây nhiều reflow/repaint.
---
## 4. Refactor dùng DocumentFragment
```js
const fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
    const div = document.createElement("div");
    div.textContent = `Item ${i}`;
    fragment.appendChild(div);
}
document.body.appendChild(fragment);
```
---
## 5. Vì sao nhanh hơn?
`DocumentFragment` là vùng chứa tạm thời trong bộ nhớ, chưa gắn trực tiếp vào DOM thật.
Khi thêm 1000 `div` vào `fragment`, trình duyệt chưa cần reflow layout trang.
Sau đó chỉ append `fragment` vào `body` một lần:
```js
document.body.appendChild(fragment);
```
Vì vậy chỉ tác động DOM thật 1 lần, giúp nhanh hơn và mượt hơn.