// ===== Bài 1.2 — Biến "bình thường" (ĐỤng không cập nhật UI!) =====

function BadCounter() {
  let count = 0; // ← Biến bình thường!

  function handleClick() {
    count = count + 1;
    console.log("Count:", count); // Console: 1, 2, 3...
    // Nhưng UI KHÔNG cập nhật!
  }

  return (
    <div className="counter-container">
      <h2>❌ Counter "tệ" (dùng biến thường)</h2>
      <p>Bộ đếm: <strong>{count}</strong></p>
      <button onClick={handleClick}>Tăng (+1)</button>
      <hr />
      <p>
        ⚠️ <strong>Thử nghiệm:</strong> Nhấn nút → Console tăng (mở F12), nhưng số trên màn hình KHÔNG đổi!
      </p>
    </div>
  );
}

export default BadCounter;
