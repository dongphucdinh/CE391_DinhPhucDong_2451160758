# Tier 1 — Hiểu luồng hoạt động của React

> **Thời gian:** 20-25 phút  
> **Yêu cầu:** Hoàn thành Tier 0  
> **Mục tiêu:** Hiểu React render như thế nào, tại sao cần "re-render"

---

## 🎯 Hôm nay bạn sẽ học

```
Lần 1: Component tạo ra → Hiển thị lên màn hình (Mount)
Lần 2: Dữ liệu thay đổi → UI cập nhật (Re-render)
Lần 3: Component bị xóa → Mất khỏi màn hình (Unmount)
```

---

## 📝 Bài 1.1 — Component render lần đầu

### Giải thích

Khi bạn viết `<App />`, React sẽ:

1. Gọi function `App()`
2. Lấy kết quả return (JSX)
3. Hiển thị lên màn hình

### Code mẫu — `LifecycleDemo.jsx`

```jsx
function LifecycleDemo() {
    console.log("1️⃣ Component được gọi!");
    
    return (
        <div>
            <h2>Lifecycle Demo</h2>
            <p>Mở Console (F12) để xem log</p>
            <p>Component này chỉ render MỘT lần</p>
        </div>
    );
}

export default LifecycleDemo;
```

### Thử nghiệm

1. Mở Console (F12)
2. Refresh trang
3. Thấy log: `1️⃣ Component được gọi!`
4. Thấy log xuất hiện MẤY LẦN? → **1 lần duy nhất!**

### Câu hỏi

1. **Tại sao component chỉ render 1 lần?**
   - ✅ Vì component chưa có state thay đổi. React chỉ gọi lại component khi:
     - State thay đổi (dùng `setState`)
     - Props thay đổi
     - Parent component re-render
   - Nếu không có thay đổi nào → component chỉ render 1 lần duy nhất

2. **Khi nào nó sẽ render lại?**
   - ✅ Khi `setState()` được gọi hoặc props thay đổi. Ví dụ:
     ```jsx
     const [count, setCount] = useState(0);
     setCount(1);  // ← Gọi này → React re-render component
     ```

---

## 📝 Bài 1.2 — Biến "bình thường" vs useState

### Vấn đề: Biến bình thường không làm UI cập nhật!

```jsx
function BadCounter() {
    let count = 0;  // ← Biến bình thường!
    
    function handleClick() {
        count = count + 1;
        console.log("Count:", count);  // Console: 1, 2, 3...
        // Nhưng UI KHÔNG cập nhật!
    }
    
    return (
        <div>
            <h2>❌ Counter "tệ" (dùng biến thường)</h2>
            <p>Bộ đếm: {count}</p>
            <button onClick={handleClick}>Tăng (+1)</button>
            <p>⚠️ Nhấn nút → Console tăng, nhưng số trên màn hình KHÔNG đổi!</p>
        </div>
    );
}

export default BadCounter;
```

**Tại sao xảy ra?**
- Khi thay đổi biến bình thường → React không biết → không re-render
- UI hiển thị giá trị lần đầu → không bao giờ cập nhật

### Giải pháp: useState — Biến "đặc biệt"

```jsx
import { useState } from "react";

function GoodCounter() {
    const [count, setCount] = useState(0);  // ← useState!
    
    function handleClick() {
        setCount(count + 1);  // React biết cần re-render!
    }
    
    return (
        <div>
            <h2>✅ Counter "tốt" (dùng useState)</h2>
            <p>Bộ đếm: {count}</p>
            <button onClick={handleClick}>Tăng (+1)</button>
            <p>✅ Nhấn nút → Số trên màn hình CẬP NHẬT!</p>
        </div>
    );
}

export default GoodCounter;
```

**Tại sao hoạt động?**
- `setCount(newValue)` → React biết state thay đổi
- React tự động gọi lại component → return JSX mới
- UI cập nhật với giá trị mới

### So sánh

| Tiêu chí | Biến bình thường | useState |
|---------|-----------------|----------|
| Khai báo | `let count = 0` | `const [count, setCount] = useState(0)` |
| Thay đổi | `count = 5` | `setCount(5)` |
| UI cập nhật? | ❌ Không | ✅ Có |
| Khi nào re-render? | Không bao giờ | Khi gọi `setCount` |

### Thử nghiệm

1. Chạy `BadCounter` → nhấn nút → thấy gì?
   - ✅ Console tăng (mở F12 xem), nhưng số trên màn hình **KHÔNG đổi**

2. Chạy `GoodCounter` → nhấn nút → thấy gì?
   - ✅ Số trên màn hình tăng ngay lập tức

3. Mở Console → thấy log "render" bao nhiêu lần?
   - `BadCounter`: 1 lần (chỉ render lần đầu)
   - `GoodCounter`: 5+ lần (render lần đầu + 4 lần sau khi click)

---

## 📝 Bài 1.3 — Luồng hoạt động (Flow)

### Sơ đồ luồng

```
┌─────────────────────────────────────────────────────────┐
│                    REACT FLOW                           │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  1. Component function được gọi                         │
│              ↓                                          │
│  2. Return JSX (giao diện)                              │
│              ↓                                          │
│  3. React hiển thị lên màn hình                        │
│              ↓                                          │
│  4. Người dùng tương tác (click, nhập...)               │
│              ↓                                          │
│  5. Gọi setState(newValue)                              │
│              ↓                                          │
│  6. React gọi lại component function (RE-RENDER)        │
│              ↓                                          │
│  7. Return JSX mới                                      │
│              ↓                                          │
│  8. React cập nhật màn hình (chỉ phần thay đổi)        │
│              ↓                                          │
│  Quay lại bước 4                                       │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Code minh họa

```jsx
import { useState } from "react";

function FlowDemo() {
    console.log("🔄 Component render!");
    
    const [step, setStep] = useState(1);
    
    return (
        <div>
            <h2>Luồng hoạt động</h2>
            <p>Bước hiện tại: {step}</p>
            
            <button onClick={() => setStep(step + 1)}>
                Bước tiếp theo →
            </button>
            <button onClick={() => setStep(1)}>
                Quay lại đầu
            </button>
            
            <section>
                {step === 1 && <div>👋 Bước 1: Xin chào!</div>}
                {step === 2 && <div>📖 Bước 2: Đang học React</div>}
                {step === 3 && <div>🎯 Bước 3: Hiểu useState</div>}
                {step === 4 && <div>🎉 Bước 4: Hoàn thành!</div>}
            </section>
        </div>
    );
}

export default FlowDemo;
```

### Giải thích chi tiết

**Lần 1 - Render ban đầu:**
1. React gọi `FlowDemo()`
2. `useState(1)` trả về `[1, setStep]`
3. Return JSX hiển thị "Bước 1"
4. Console: `🔄 Component render!` (1 lần)

**Lần 2 - Người dùng click "Bước tiếp theo →":**
1. `setStep(2)` được gọi
2. React nhận biết state thay đổi
3. React gọi lại `FlowDemo()` (RE-RENDER)
4. `useState(1)` trả về `[2, setStep]` (giá trị mới!)
5. Return JSX với "Bước 2"
6. Console: `🔄 Component render!` (lần 2)
7. Màn hình cập nhật

**Lần 3, 4, 5... tương tự**

### Câu hỏi tự kiểm tra

1. **Component render mấy lần khi click 3 lần?**
   - ✅ 4 lần (1 lần đầu + 3 lần từ setState)

2. **Tại sao bước 4 không có gì đặc biệt?**
   - ✅ Vì khi click "Bước tiếp theo" từ bước 3, `setStep(4)` được gọi → component re-render → hiển thị nội dung bước 4

3. **Mở Console, click 5 lần. Console show bao nhiêu log?**
   - ✅ 6 log (1 render lần đầu + 5 lần từ 5 click)
