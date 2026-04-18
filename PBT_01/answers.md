CÂU A1:
1:
Thứ tự các bước khi truy cập Shoppe.vn là :
1:Trình duyệt hỏi máy chủ DNS(Domain Name System) " Địa chỉ IP của shoppe.vn là gì? ". DNS sẽ trả về địa chỉ IP 
2:Trình duyệt sẽ thiết lập kết nối an toàn với server qua giao thức HTTPS đảm bảo tránh bị đánh cắp dữ liệu
3:Trình duyệt sẽ gửi một GET Request đén server để lấy nội dung trang chủ Shoppe
4:Server nhận yêu cầu , kiểm tra dữ liệu và gửi trả lại 1 HTTPS Response
5:Trình duyệt nhận file HTML, dọc từ trên xuống và tiếp tục tải thêm CSS/JS và dựng giao diện cho bạn thận

2:
Ảnh ở Folder screenshoots

CÂU A2:
-Trang web bị đánh giá SEO(Search Engine Optimization)Tối ưu hóa Công cụ Tìm kiếm  bởi vì trang này đang mấc lỗi DivSoup .GG Bot và các công cụ tìm kiếm khi quét qua sẽ k hiểu được đâu là phần quan trọng đâu là menu và đâu là nội dung chính.
- 4 lỗi Semantic và cách sửa 
Lỗi 1 : <div class="header">	
Thiếu thẻ Header: Nên dùng thẻ <header> để Google biết đây là phần đầu trang chứa logo và điều hướng.
Lỗi 2 : <div class="menu">	
Thiếu thẻ Nav: Các liên kết trang chủ/sản phẩm phải được bọc trong thẻ <nav> để hỗ trợ SEO và trình đọc màn hình.
Lỗi 3 : <div class="main">	
hiếu thẻ Main: Nội dung quan trọng nhất của trang phải nằm trong thẻ <main> (duy nhất 1 thẻ mỗi trang).
Lỗi 4 :	<div class="product">	
Thiếu thẻ Article: Một sản phẩm là một nội dung độc lập, có thể tái sử dụng, nên dùng thẻ <article>.