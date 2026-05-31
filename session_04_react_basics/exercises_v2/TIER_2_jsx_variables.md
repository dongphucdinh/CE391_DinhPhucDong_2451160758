# Tier 2 — Biến trong JSX (Đưa dữ liệu vào giao diện)

> **Thời gian:** 20-25 phút  
> **Yêu cầu:** Hoàn thành Tier 0-1  
> **Mục tiêu:** Sử dụng biến JavaScript bên trong JSX

---

## 🎯 Hôm nay bạn sẽ học

```
// Dùng {} để "nhúng" JavaScript vào JSX
const name = "Minh";
return <h1>Xin chào {name}!</h1>;  // → "Xin chào Minh!"
```

---

## 📝 Bài 2.1 — Hiển thị biến đơn giản

### Code mẫu

```jsx
function SimpleVariables() {
    // Các biến JavaScript
    const ten = "Nguyễn Văn Minh";
    const tuoi = 20;
    const laSinhVien = true;
    const monHoc = ["HTML", "CSS", "JS", "React"];
    
    return (
        <div>
            <h1>Xin chào {ten}!</h1>
            <p>Tuổi: {tuoi}</p>

            <p>Năm sau: {tuoi + 1}</p>

            <p>Sinh viên: {laSinhVien ? "Có" : "Không"}</p>

            <section>
                <h3>Môn học yêu thích:</h3>
                <p>{monHoc.join(", ")}</p>
            </section>
        </div>
    );
}

export default SimpleVariables;
```

### Quy tắc

```jsx
// ✅ ĐƯỢC: Biến, tính toán, gọi hàm
<p>{ten}</p>
<p>{tuoi + 1}</p>

<p>{ten.toUpperCase()}</p>

<p>{new Date().toLocaleDateString()}</p>

// ❌ KHÔNG ĐƯỢC: Object, nhiều dòng phức tạp
<p>{{ ten: "Minh" }}</p>  {/* Lỗi! */}
<p>{if (tuoi > 18) "Lớn"}</p>  {/* Lỗi! Dùng ternary */}
```

### Thử thách & Giải pháp

**1. Hiển thị thông tin cá nhân (tên, tuổi, quê quán)**

```jsx
function PersonalInfo() {
    const name = "Nguyễn Văn Minh";
    const age = 20;
    const hometown = "Hà Nội";
    
    return (
        <div>
            <p>Tên: {name}</p>
            <p>Tuổi: {age}</p>
            <p>Quê quán: {hometown}</p>
        </div>
    );
}
```

**2. Hiển thị "Chào buổi sáng/chiều/tối" dựa vào giờ hiện tại**

```jsx
function TimeGreeting() {
    const hour = new Date().getHours();
    
    let greeting;
    if (hour < 12) {
        greeting = "Chào buổi sáng";
    } else if (hour < 17) {
        greeting = "Chào buổi chiều";
    } else {
        greeting = "Chào buổi tối";
    }
    
    return <h1>{greeting}! Giờ hiện tại: {hour}h</h1>;
}

// Hoặc dùng ternary
function TimeGreetingTernary() {
    const hour = new Date().getHours();
    
    return (
        <h1>
            {hour < 12 ? "Chào buổi sáng" : 
             hour < 17 ? "Chào buổi chiều" : 
             "Chào buổi tối"}! 
            Giờ hiện tại: {hour}h
        </h1>
    );
}
```

**3. Tính và hiển thị BMI (cân nặng / chiều cao²)**

```jsx
function BMICalculator() {
    const weight = 70; // kg
    const height = 1.75; // m
    
    const bmi = weight / (height * height);
    
    let status;
    if (bmi < 18.5) {
        status = "Gầy";
    } else if (bmi < 25) {
        status = "Bình thường";
    } else if (bmi < 30) {
        status = "Thừa cân";
    } else {
        status = "Béo phì";
    }
    
    return (
        <div>
            <p>Cân nặng: {weight}kg</p>
            <p>Chiều cao: {height}m</p>
            <p>BMI: {bmi.toFixed(1)}</p>
            <p>Tình trạng: {status}</p>
        </div>
    );
}
```

---

## 📝 Bài 2.2 — Conditional Rendering (Hiển thị có điều kiện)

### Cách 1: Toán tử 3 ngôi (Ternary)

```jsx
function TernaryDemo() {
    const isLoggedIn = true;
    const score = 85;
    
    return (
        <div>
            {/* Cách 1: Toán tử 3 ngôi */}
            <p>{isLoggedIn ? "Chào mừng bạn!" : "Vui lòng đăng nhập"}</p>
            
            {/* Kết quả học tập */}
            <p>Kết quả: {score >= 5 ? "Đậu" : "Rớt"}</p>

            <hr />
            
            {/* Điểm xếp loại */}
            <p>Xếp loại: {
                score >= 9 ? "Xuất sắc" :
                score >= 8 ? "Giỏi" :
                score >= 7 ? "Khá" :
                score >= 5 ? "Trung bình" : "Yếu"
            }</p>
        </div>
    );
}

export default TernaryDemo;
```

### Cách 2: && (Hiện hoặc không hiện)

```jsx
function AndDemo() {
    const hasNotification = true;
    const notificationCount = 5;
    
    return (
        <div>
            <h2>Thông báo</h2>
            
            {/* Hiện khi có thông báo */}
            {hasNotification && (
                <div style={{ background: "#ffe6e6", padding: "10px" }}>
                    Bạn có {notificationCount} thông báo mới!
                </div>
            )}
            
            {/* Không hiện gì khi không có */}
            {!hasNotification && <p>Không có thông báo</p>}
        </div>
    );
}

export default AndDemo;
```

### Thử thách & Giải pháp

**1. Hiển thị icon 🔴/🟢 dựa vào trạng thái online/offline**

```jsx
function OnlineStatus() {
    const isOnline = true;
    
    return (
        <div>
            <p>Trạng thái: {isOnline ? "🟢 Online" : "🔴 Offline"}</p>
        </div>
    );
}
```

**2. Hiện/ẩn menu dựa vào isLoggedIn**

```jsx
function NavigationMenu() {
    const isLoggedIn = true;
    
    return (
        <nav>
            <a href="/">Trang chủ</a>
            {isLoggedIn && (
                <>
                    <a href="/profile">Hồ sơ</a>
                    <a href="/settings">Cài đặt</a>
                    <a href="/logout">Đăng xuất</a>
                </>
            )}
            {!isLoggedIn && (
                <>
                    <a href="/login">Đăng nhập</a>
                    <a href="/register">Đăng ký</a>
                </>
            )}
        </nav>
    );
}
```

**3. Hiển thị "Hết hàng" khi stock = 0**

```jsx
function ProductStock() {
    const stock = 0;
    
    return (
        <div>
            <h3>Sản phẩm A</h3>
            <p>Giá: 100.000đ</p>
            {stock > 0 ? (
                <p>Tồn kho: {stock} sản phẩm</p>
            ) : (
                <p style={{ color: "red", fontWeight: "bold" }}>Hết hàng</p>
            )}
            <button disabled={stock === 0}>
                {stock > 0 ? "Thêm vào giỏ" : "Hết hàng"}
            </button>
        </div>
    );
}
```

---

## 📝 Bài 2.3 — Render danh sách (List Rendering)

### Code mẫu

```jsx
function ListRendering() {
    const fruits = ["Táo", "Chuối", "Cam", "Nho"];
    
    const students = [
        { id: 1, name: "Minh", age: 20 },
        { id: 2, name: "An", age: 21 },
        { id: 3, name: "Linh", age: 19 }
    ];
    
    return (
        <div>
            <h2>Danh sách trái cây</h2>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>

            <h2>Danh sách sinh viên</h2>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Tuổi</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={student.id}>
                            <td>{index + 1}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListRendering;
```

### Tại sao cần `key`?

```jsx
// React cần key để biết phần tử nào thay đổi
{items.map(item => (
    <li key={item.id}>{item.name}</li>
    // Dùng id (tốt nhất)
))}

// Không nên dùng index nếu danh sách có thể thay đổi
{items.map((item, index) => (
    <li key={index}>{item.name}</li>
    // Chỉ dùng khi danh sách cố định
))}
```

**Vì sao?** Nếu danh sách thay đổi (thêm/xóa/sắp xếp), dùng index sẽ gây ra:
- Component bị render sai
- State bị lẫn lộn
- Bug khó phát hiện

### Thử thách & Giải pháp

**1. Render danh sách 5 sản phẩm (tên, giá)**

```jsx
function ProductList() {
    const products = [
        { id: 1, name: "Áo thun", price: 150000 },
        { id: 2, name: "Quần jeans", price: 450000 },
        { id: 3, name: "Giày sneaker", price: 890000 },
        { id: 4, name: "Túi xách", price: 350000 },
        { id: 5, name: "Mũ", price: 100000 }
    ];
    
    return (
        <div>
            <h2>Danh sách sản phẩm</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - {product.price.toLocaleString()}đ
                    </li>
                ))}
            </ul>
        </div>
    );
}
```

**2. Hiển thị sản phẩm giá > 1 triệu bằng màu đỏ**

```jsx
function PremiumProducts() {
    const products = [
        { id: 1, name: "Áo thun", price: 150000 },
        { id: 2, name: "Quần jeans", price: 450000 },
        { id: 3, name: "Giày sneaker", price: 890000 },
        { id: 4, name: "Laptop", price: 15000000 },
        { id: 5, name: "Điện thoại", price: 10000000 }
    ];
    
    return (
        <ul>
            {products.map(product => (
                <li 
                    key={product.id}
                    style={{ color: product.price > 1000000 ? "red" : "black" }}
                >
                    {product.name} - {product.price.toLocaleString()}đ
                </li>
            ))}
        </ul>
    );
}
```

**3. Tính tổng giá tất cả sản phẩm**

```jsx
function TotalPrice() {
    const products = [
        { id: 1, name: "Áo thun", price: 150000 },
        { id: 2, name: "Quần jeans", price: 450000 },
        { id: 3, name: "Giày sneaker", price: 890000 },
        { id: 4, name: "Túi xách", price: 350000 },
        { id: 5, name: "Mũ", price: 100000 }
    ];
    
    // Cách 1: Dùng reduce
    const total = products.reduce((sum, product) => sum + product.price, 0);
    
    // Cách 2: Dùng forEach (không được dùng trong JSX)
    let total2 = 0;
    products.forEach(product => total2 += product.price);
    
    return (
        <div>
            <h2>Danh sách sản phẩm</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - {product.price.toLocaleString()}đ
                    </li>
                ))}
            </ul>
            <h3>Tổng tiền: {total.toLocaleString()}đ</h3>
        </div>
    );
}
```

---
