// ===== Bài 1.2 — useState (ĐÚNG: cập nhật UI!) =====

import { useState } from "react";

function GoodCounter() {
  const [count, setCount] = useState(0); // ← useState!

  function handleClick() {
    setCount(count + 1); // React biết cần re-render!
  }

  return (
    <div className="counter-container">
      <h2>✅ Counter "tốt" (dùng useState)</h2>
      <p>Bộ đếm: <strong>{count}</strong></p>
      <button onClick={handleClick}>Tăng (+1)</button>
      <hr />
      <p>
        ✅ <strong>Thử nghiệm:</strong> Nhấn nút → Số trên màn hình CẬP NHẬT ngay!
      </p>
    </div>
  );
}

export default GoodCounter;
