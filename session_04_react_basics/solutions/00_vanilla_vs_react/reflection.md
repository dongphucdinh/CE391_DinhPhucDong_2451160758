# Reflection
## 1. Ở Phần A, mỗi lần thêm/xóa/toggle 1 todo, phải gọi bao nhiêu hàm?
Trong Vanilla JS, mỗi thao tác đều phải gọi hàm xử lý chính rồi gọi thêm `renderTodos()` để cập nhật giao diện.
- Thêm todo:
  - `addTodo()`
  - `renderTodos()`
- Toggle todo:
  - `toggleTodo(id)`
  - `renderTodos()`
- Xóa todo:
  - `deleteTodo(id)`
  - `renderTodos()`
Như vậy mỗi thao tác thường phải gọi 2 hàm.
## 2. Ở Phần B, khi setTodos(...) chạy, React tự động làm gì?
Khi `setTodos(...)` chạy, React tự động cập nhật state và render lại giao diện.
Mình không cần tự sửa DOM bằng `innerHTML`, không cần tự xóa danh sách cũ rồi vẽ lại thủ công.
## 3. Nếu Portfolio của Minh có 50 project, cách nào quản lý danh sách an toàn hơn? Tại sao?
Dùng React sẽ an toàn hơn.
Vì mỗi project được lưu trong state dưới dạng object, sau đó dùng `.map()` để render ra giao diện. Khi thêm, xóa, lọc project thì chỉ cần cập nhật state, React sẽ tự cập nhật UI.
Cách này giảm lỗi khi thao tác DOM thủ công và dễ quản lý hơn khi danh sách lớn.
## 4. Kết nối Portfolio
Có thể tưởng tượng `ProjectCard` giống như `TodoItem`.
Mỗi project có thể là một object:
```js
{
  id: 1,
  title: "Portfolio Website",
  category: "Frontend",
  image: "portfolio.png"
}