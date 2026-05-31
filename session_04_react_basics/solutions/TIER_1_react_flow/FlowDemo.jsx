// ===== Bài 1.3 — Luồng hoạt động (Flow) =====

import { useState } from "react";

function FlowDemo() {
  console.log("🔄 Component render!");

  const [step, setStep] = useState(1);

  return (
    <div className="flow-container">
      <h2>Luồng hoạt động</h2>
      <p>Bước hiện tại: <strong>{step}</strong></p>

      <div className="button-group">
        <button onClick={() => setStep(step + 1)}>Bước tiếp theo →</button>
        <button onClick={() => setStep(1)}>Quay lại đầu</button>
      </div>

      <hr />

      <section className="step-content">
        {step === 1 && (
          <div>
            <h3>👋 Bước 1: Xin chào!</h3>
            <p>React khởi tạo component lần đầu.</p>
          </div>
        )}
        {step === 2 && (
          <div>
            <h3>📖 Bước 2: Đang học React</h3>
            <p>Component render → setState được gọi → React re-render.</p>
          </div>
        )}
        {step === 3 && (
          <div>
            <h3>🎯 Bước 3: Hiểu useState</h3>
            <p>useState cho phép thay đổi state → UI tự động cập nhật.</p>
          </div>
        )}
        {step === 4 && (
          <div>
            <h3>🎉 Bước 4: Hoàn thành!</h3>
            <p>Giờ bạn đã hiểu luồng React rồi!</p>
          </div>
        )}
      </section>

      <p style={{ marginTop: "1rem", fontSize: "12px", color: "#666" }}>
        Mở Console (F12) để xem "🔄 Component render!" in ra bao nhiêu lần
      </p>
    </div>
  );
}

export default FlowDemo;
