const items = [
    { name: "Phở bò", price: 65000, quantity: 2 },
    { name: "Trà đá", price: 5000, quantity: 3 },
    { name: "Bún chả", price: 55000, quantity: 1 }
];
const isWednesday = true;
const hasTip = true;
let total = 0;
for (let i = 0; i < items.length; i++) {
    total += items[i].price * items[i].quantity;
}
let discountPercent = 0;
if (total > 1000000) {
    discountPercent = 15;
} else if (total > 500000) {
    discountPercent = 10;
}
if (isWednesday) {
    discountPercent += 5;
}
const discountMoney = total * discountPercent / 100;
const totalAfterDiscount = total - discountMoney;
const vatPercent = 8;
const vatMoney = totalAfterDiscount * vatPercent / 100;
let tipPercent = 0;
let tipMoney = 0;
if (hasTip) {
    tipPercent = 5;
    tipMoney = totalAfterDiscount * tipPercent / 100;
}
const finalTotal = totalAfterDiscount + vatMoney + tipMoney;
function formatMoney(amount) {
    return amount.toLocaleString("vi-VN") + "đ";
}
console.log("╔══════════════════════════════════════╗");
console.log("║        HÓA ĐƠN NHÀ HÀNG             ║");
console.log("╠══════════════════════════════════════╣");
for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const itemTotal = item.price * item.quantity;
    console.log(
        "║ " +
        (i + 1) + ". " +
        item.name +
        " x" +
        item.quantity +
        " @" +
        (item.price / 1000) +
        "k = " +
        (itemTotal / 1000) +
        "k"
    );
}
console.log("╠══════════════════════════════════════╣");
console.log("║ Tổng cộng: " + formatMoney(total));
console.log("║ Giảm giá (" + discountPercent + "%): " + formatMoney(discountMoney));
console.log("║ VAT (8%): " + formatMoney(vatMoney));
console.log("║ Tip (" + tipPercent + "%): " + formatMoney(tipMoney));
console.log("╠══════════════════════════════════════╣");
console.log("║ THANH TOÁN: " + formatMoney(finalTotal));
console.log("╚══════════════════════════════════════╝");