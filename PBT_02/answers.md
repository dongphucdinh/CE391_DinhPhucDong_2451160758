##### Câu A1:
- `type="email"` → Ô nhập văn bản, trình duyệt kiểm tra có ký tự @ và định dạng email → Dùng cho form đăng ký / đăng nhập / nhận thông báo đơn hàng
- `type="password"` → Ô nhập nhưng ký tự bị ẩn (•••••) → Không có validation mặc định mạnh, nhưng thường kết hợp minlength → Dùng khi đăng nhập hoặc tạo tài khoản
- `type="number"` → Ô nhập số, có nút tăng/giảm (spinner) → Chỉ cho nhập số, có thể giới hạn min, max → Dùng chọn số lượng sản phẩm
- `type="tel"` → Ô nhập số điện thoại → Không validate chặt (chỉ gợi ý bàn phím số trên mobile) → Dùng nhập số điện thoại khách hàng
- `type="url"` → Ô nhập link → Tự kiểm tra định dạng URL (http/https) → Dùng khi nhập link website (ví dụ shop đối tác)
- `type="date"` → Hiển thị bộ chọn ngày (calendar picker) → Đảm bảo format ngày hợp lệ → Dùng chọn ngày giao hàng hoặc ngày sinh
- `type="time"` → Bộ chọn giờ (time picker) → Kiểm tra định dạng giờ hợp lệ → Dùng chọn khung giờ giao hàng
- `type="checkbox"` → Ô vuông tick chọn nhiều lựa chọn → Không validation riêng, nhưng có thể dùng required → Dùng chọn nhiều sản phẩm hoặc đồng ý điều khoản
- `type="radio"` → Nút tròn, chỉ chọn 1 trong nhiều → Đảm bảo chỉ chọn một giá trị trong nhóm → Dùng chọn phương thức thanh toán (COD / Visa / Momo)
- `type="file"` → Nút chọn file từ máy → Có thể giới hạn loại file (accept) → Dùng upload ảnh đánh giá sản phẩm hoặc avatar

#### Câu A2:
````<!-- Trường hợp 1 -->
<input type="text" required value="">   <!-- User để trống -->````
Không submit được, lỗi thiếu giá trị 
````<!-- Trường hợp 2 -->
<input type="email" value="abc">        <!-- User gõ "abc" -->````
Không submit được, lỗi sai format email
````<!-- Trường hợp 3 -->
<input type="number" min="1" max="10" value="15"> <!-- User gõ 15 -->````
Không submit được, lỗi điền quá value , max là 10 điền 15
````<!-- Trường hợp 4 -->
<input type="text" pattern="[0-9]{10}" value="abc123"> <!-- User gõ "abc123" -->````
Không submit được, lỗi sai định dạng , yêu cầu điền 10 chữ nhưng điền cả số và chữ 
````<!-- Trường hợp 5 -->
<input type="password" minlength="8" value="123">  <!-- User gõ "123" -->````
Không submit được, min yêu cầu nhập 8 kí tự nhưng chỉ nhập 3
````
#### Câu A3:
1. `<label for="email">` quan trọng vì:

- Giúp screen reader đọc tên của input
- Người dùng biết ô đó dùng để nhập gì (ví dụ: “Email”)
- Không có label → không hiểu nội dung input
2. Khi nào dùng `<fieldset>` + `<legend>`
- Khi có nhóm input liên quan
 Ví dụ: nhóm chọn phương thức thanh toán (radio)
`<legend>` mô tả ý nghĩa chung của nhóm
3. aria-label dùng khi nào?
- Dùng khi không có text hiển thị (ví dụ: icon button)
Tại sao KHÔNG dùng aria-label khi đã có `<label>`?
- Vì `<label>` đã đủ semantic
- Dùng thêm aria-label có thể gây trùng hoặc rối thông tin