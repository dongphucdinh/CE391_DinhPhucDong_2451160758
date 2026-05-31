// ===== Bài 0.2 — JSX là HTML "xịn hơn" =====

// ===== Bài 1: Component UserProfile =====
function UserProfile() {
  return (
    <div className="profile-card">
      <h2>Hồ sơ cá nhân</h2>
      <img src="photo.jpg" alt="Ảnh đại diện" />
      <div className="profile-info">
        <div className="info-row">
          <label>Họ tên:</label>
          <span>Minh</span>
        </div>
        <div className="info-row">
          <label>Email:</label>
          <span>minh@example.com</span>
        </div>
      </div>
    </div>
  );
}

// ===== Bài 2: Component ProductInfo =====
function ProductInfo() {
  return (
    <div className="product-card">
      <h2>iPhone 15</h2>
      <p className="price">25.000.000đ</p>

      <section className="specs">
        <h3>Thông số kỹ thuật:</h3>
        <ul>
          <li>Màn hình: 6.1 inch</li>
          <li>Camera: 48MP</li>
          <li>Pin: 3349 mAh</li>
        </ul>
      </section>

      <button className="buy-btn">Mua ngay</button>
    </div>
  );
}

// ===== App (compose cả hai component) =====
export default function App() {
  return (
    <div className="app">
      <UserProfile />
      <ProductInfo />
    </div>
  );
}

/*
📝 Những điểm quan trọng:

1. class → className
   HTML: class="profile-card"
   JSX:  className="profile-card"

2. for → htmlFor (dùng khi có <label>)
   HTML: <label for="email">Email</label>
   JSX:  <label htmlFor="email">Email</label>

3. Phải đóng tất cả thẻ
   HTML: <img src="...">  ← Không đóng
   JSX:  <img src="..." /> ← Phải đóng

4. Thẻ tự đóng (self-closing tags):
   <img />, <input />, <br />, <hr />

5. JSX phải return một thẻ duy nhất (hoặc dùng <> ... </>)
   ❌ return <div>...</div> <div>...</div>
   ✅ return <> <div>...</div> <div>...</div> </>
   ✅ return <div> <div>...</div> <div>...</div> </div>
*/
