# Câu A1 — 5 Loại Positioning

| Position | Vẫn chiếm chỗ trong flow? | Tham chiếu vị trí | Cuộn theo trang? | Use case |
|---|---|---|---|---|
| static | Có | Không dùng top/left | Có | Layout mặc định |
| relative | Có | So với vị trí gốc của chính nó | Có | Dịch nhẹ element, làm mốc cho absolute |
| absolute | Không | Parent positioned gần nhất | Có | Badge, dropdown, tooltip |
| fixed | Không | Viewport | Không | Chat button, modal |
| sticky | Có → Không | Viewport khi sticky | Không khi đã sticky | Sticky header, sidebar |

## Câu hỏi thêm

### Khi nào absolute tham chiếu body?

Khi không có ancestor nào có:

````
position: relative;
position: absolute;
position: fixed;
position: sticky;
````