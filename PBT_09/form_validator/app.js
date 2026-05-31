const form = document.querySelector("#registerForm");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmInput = document.querySelector("#confirmPassword");
const phoneInput = document.querySelector("#phone");

const nameMsg = document.querySelector("#nameMsg");
const emailMsg = document.querySelector("#emailMsg");
const passwordMsg = document.querySelector("#passwordMsg");
const confirmMsg = document.querySelector("#confirmMsg");
const phoneMsg = document.querySelector("#phoneMsg");

const strengthBar = document.querySelector("#strengthBar");
const submitBtn = document.querySelector("#submitBtn");

const modal = document.querySelector("#modal");
const userInfo = document.querySelector("#userInfo");
const closeModal = document.querySelector("#closeModal");

const valid = {
    name: false,
    email: false,
    password: false,
    confirm: false,
    phone: false
};

const setState = (input, msg, isValid, text) => {
    input.classList.remove("valid", "invalid");
    msg.classList.remove("success", "error");

    input.classList.add(isValid ? "valid" : "invalid");
    msg.classList.add(isValid ? "success" : "error");
    msg.textContent = text;
};

const checkSubmit = () => {
    submitBtn.disabled = !Object.values(valid).every(value => value);
};

const validateName = () => {
    const name = nameInput.value.trim();

    valid.name = name.length >= 2 && name.length <= 50;

    setState(
        nameInput,
        nameMsg,
        valid.name,
        valid.name ? "✅ Tên hợp lệ" : "❌ Tên phải từ 2 đến 50 ký tự"
    );

    checkSubmit();
};

const validateEmail = () => {
    const email = emailInput.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        valid.email = false;
        setState(emailInput, emailMsg, false, "❌ Email không được để trống");
    } else if (!regex.test(email)) {
        valid.email = false;
        setState(emailInput, emailMsg, false, "❌ Email không đúng định dạng");
    } else {
        valid.email = true;
        setState(emailInput, emailMsg, true, "✅ Email hợp lệ");
    }

    checkSubmit();
};

const checkPasswordStrength = (password) => {
    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[^A-Za-z0-9]/.test(password);

    if (password.length < 8) {
        return "weak";
    }

    if (hasLower && hasUpper && hasNumber && hasSpecial) {
        return "strong";
    }

    if (password.length >= 8 && /[A-Za-z]/.test(password) && hasNumber) {
        return "medium";
    }

    return "weak";
};

const validatePassword = () => {
    const password = passwordInput.value;
    const strength = checkPasswordStrength(password);

    strengthBar.className = "";

    if (password === "") {
        valid.password = false;
        strengthBar.style.width = "0%";
        setState(passwordInput, passwordMsg, false, "❌ Password không được để trống");
    } else if (strength === "weak") {
        valid.password = false;
        strengthBar.classList.add("weak");
        setState(passwordInput, passwordMsg, false, "❌ Yếu: cần ít nhất 8 ký tự");
    } else if (strength === "medium") {
        valid.password = true;
        strengthBar.classList.add("medium");
        setState(passwordInput, passwordMsg, true, "✅ Trung bình: có chữ và số");
    } else {
        valid.password = true;
        strengthBar.classList.add("strong");
        setState(passwordInput, passwordMsg, true, "✅ Mạnh: đủ chữ hoa, thường, số, ký tự đặc biệt");
    }

    validateConfirmPassword();
    checkSubmit();
};

const validateConfirmPassword = () => {
    const password = passwordInput.value;
    const confirm = confirmInput.value;

    valid.confirm = confirm !== "" && confirm === password;

    setState(
        confirmInput,
        confirmMsg,
        valid.confirm,
        valid.confirm ? "✅ Mật khẩu khớp" : "❌ Mật khẩu chưa khớp"
    );

    checkSubmit();
};

const formatPhone = (value) => {
    const digits = value.replace(/\D/g, "").slice(0, 10);

    if (digits.length <= 4) {
        return digits;
    }

    if (digits.length <= 7) {
        return `${digits.slice(0, 4)}-${digits.slice(4)}`;
    }

    return `${digits.slice(0, 4)}-${digits.slice(4, 7)}-${digits.slice(7)}`;
};

const validatePhone = () => {
    phoneInput.value = formatPhone(phoneInput.value);

    const digits = phoneInput.value.replace(/\D/g, "");

    valid.phone = digits.length === 10;

    setState(
        phoneInput,
        phoneMsg,
        valid.phone,
        valid.phone ? "✅ Số điện thoại hợp lệ" : "❌ Số điện thoại phải có 10 chữ số"
    );
    checkSubmit();
};
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);
confirmInput.addEventListener("input", validateConfirmPassword);
phoneInput.addEventListener("input", validatePhone);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    userInfo.textContent = "";
    const pName = document.createElement("p");
    pName.textContent = `Tên: ${nameInput.value}`;
    const pEmail = document.createElement("p");
    pEmail.textContent = `Email: ${emailInput.value}`;
    const pPhone = document.createElement("p");
    pPhone.textContent = `Phone: ${phoneInput.value}`;
    userInfo.appendChild(pName);
    userInfo.appendChild(pEmail);
    userInfo.appendChild(pPhone);
    modal.classList.remove("hidden");
});
closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
});