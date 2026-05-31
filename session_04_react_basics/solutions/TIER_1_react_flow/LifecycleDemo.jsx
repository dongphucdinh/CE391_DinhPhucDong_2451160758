// ===== Bài 1.1 — Component render lần đầu =====

function LifecycleDemo() {
  console.log("1️⃣ Component được gọi!");

  return (
    <div className="demo-container">
      <h2>Lifecycle Demo</h2>
      <p>Mở Console (F12) để xem log</p>
      <p>Component này chỉ render MỘT lần</p>
      <hr />
      <p>
        ℹ️ <strong>Kiểm tra:</strong> Refresh trang → Console hiện "1️⃣ Component được gọi!" → Chỉ 1 lần!
      </p>
    </div>
  );
}

export default LifecycleDemo;
