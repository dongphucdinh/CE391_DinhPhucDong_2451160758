const products = [
{
    id: 1,
    name: "iPhone 16",
    price: 25990000,
    category: "phone",
    image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16.jpg",
    rating: 4.5,
    inStock: true
},
{
    id: 2,
    name: "Samsung Galaxy S24",
    price: 21990000,
    category: "phone",
    image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24.jpg",
    rating: 4.6,
    inStock: true
},
{
    id: 3,
    name: "Xiaomi 14",
    price: 15990000,
    category: "phone",
    image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14.jpg",
    rating: 4.3,
    inStock: false
},
{
    id: 4,
    name: "MacBook Air M3",
    price: 28990000,
    category: "laptop",
    image: "https://www.apple.com/v/macbook-air/s/images/overview/hero/hero_static__c9sislzzicq6_large.jpg",
    rating: 4.8,
    inStock: true
},
{
    id: 5,
    name: "Dell XPS 13",
    price: 31990000,
    category: "laptop",
    image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/category/laptop/xps/xps-13-9340/media-gallery/silver/notebook-xps-13-9340-silver-gallery-1.psd",
    rating: 4.7,
    inStock: true
},
{
    id: 7,
    name: "AirPods Pro",
    price: 5990000,
    category: "accessory",
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83",
    rating: 4.6,
    inStock: true
},
{
    id: 8,
    name: "Apple Watch S9",
    price: 9990000,
    category: "accessory",
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-s9",
    rating: 4.4,
    inStock: false
},
{
    id: 10,
    name: "iPad Air",
    price: 16990000,
    category: "tablet",
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-select-wifi-blue-202405",
    rating: 4.5,
    inStock: true
}
];

let currentCategory = "all";
let searchText = "";
let sortType = "";
let cartCount = 0;
const formatPrice = price => price.toLocaleString("vi-VN") + "đ";
const createLayout = () => {
    const app = document.createElement("div");
    app.className = "app";
    const header = document.createElement("div");
    header.className = "header";
    const title = document.createElement("h1");
    title.textContent = "Product Catalog";
    const actions = document.createElement("div");
    actions.className = "actions";
    const darkBtn = document.createElement("button");
    darkBtn.id = "darkToggle";
    darkBtn.textContent = "Dark Mode";
    const cart = document.createElement("div");
    cart.className = "cart";
    cart.textContent = "🛒";
    const badge = document.createElement("span");
    badge.id = "cartBadge";
    badge.className = "badge";
    badge.textContent = "0";
    cart.appendChild(badge);
    actions.appendChild(darkBtn);
    actions.appendChild(cart);
    header.appendChild(title);
    header.appendChild(actions);
    const controls = document.createElement("div");
    controls.className = "controls";
    const searchInput = document.createElement("input");
    searchInput.id = "searchInput";
    searchInput.placeholder = "Tìm sản phẩm...";
    const categories = ["all", "phone", "laptop", "accessory", "tablet"];
    categories.forEach(category => {
        const btn = document.createElement("button");
        btn.className = "category-btn";
        btn.dataset.category = category;
        btn.textContent = category;
        if (category === "all") {
            btn.classList.add("active");
        }
        controls.appendChild(btn);
    });
    const sortSelect = document.createElement("select");
    sortSelect.id = "sortSelect";
    const sortOptions = [
        { value: "", text: "Sắp xếp" },
        { value: "price-asc", text: "Giá tăng" },
        { value: "price-desc", text: "Giá giảm" },
        { value: "name-az", text: "Tên A-Z" },
        { value: "rating-desc", text: "Đánh giá cao nhất" }
    ];
    sortOptions.forEach(option => {
        const opt = document.createElement("option");
        opt.value = option.value;
        opt.textContent = option.text;
        sortSelect.appendChild(opt);
    });
    controls.prepend(searchInput);
    controls.appendChild(sortSelect);
    const productGrid = document.createElement("div");
    productGrid.id = "productGrid";
    productGrid.className = "product-grid";
    app.appendChild(header);
    app.appendChild(controls);
    app.appendChild(productGrid);
    document.body.appendChild(app);
};
const renderProducts = () => {
    const productGrid = document.querySelector("#productGrid");
    productGrid.textContent = "";
    const filteredProducts = sortProducts(searchProducts(filterByCategory(products)));
    if (filteredProducts.length === 0) {
        const empty = document.createElement("p");
        empty.className = "empty";
        empty.textContent = "Không tìm thấy sản phẩm";
        productGrid.appendChild(empty);
        return;
    }
    filteredProducts.forEach(product => {
        const card = createProductCard(product);
        productGrid.appendChild(card);
    });
};
const createProductCard = (product) => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.id = product.id;
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;
    const name = document.createElement("h3");
    name.textContent = product.name;
    const price = document.createElement("p");
    price.className = "price";
    price.textContent = formatPrice(product.price);
    const category = document.createElement("p");
    category.textContent = `Category: ${product.category}`;
    const rating = document.createElement("p");
    rating.textContent = `⭐ ${product.rating}`;
    const stock = document.createElement("p");
    stock.className = product.inStock ? "stock" : "stock out-stock";
    stock.textContent = product.inStock ? "Còn hàng" : "Hết hàng";
    const addBtn = document.createElement("button");
    addBtn.className = "add-cart";
    addBtn.textContent = "Thêm giỏ";
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(category);
    card.appendChild(rating);
    card.appendChild(stock);
    card.appendChild(addBtn);
    return card;
};
const filterByCategory = (arr) => {
    if (currentCategory === "all") {
        return arr;
    }
    return arr.filter(product => product.category === currentCategory);
};
const searchProducts = (arr) => {
    return arr.filter(product =>
        product.name.toLowerCase().includes(searchText.toLowerCase())
    );
};
const sortProducts = (arr) => {
    const copied = [...arr];
    if (sortType === "price-asc") {
        copied.sort((a, b) => a.price - b.price);
    }
    if (sortType === "price-desc") {
        copied.sort((a, b) => b.price - a.price);
    }
    if (sortType === "name-az") {
        copied.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sortType === "rating-desc") {
        copied.sort((a, b) => b.rating - a.rating);
    }
    return copied;
};
const showModal = (product) => {
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    const modal = document.createElement("div");
    modal.className = "modal";
    const closeBtn = document.createElement("button");
    closeBtn.className = "close-btn";
    closeBtn.textContent = "X";
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;
    const name = document.createElement("h2");
    name.textContent = product.name;
    const price = document.createElement("p");
    price.textContent = `Giá: ${formatPrice(product.price)}`;
    const category = document.createElement("p");
    category.textContent = `Danh mục: ${product.category}`;
    const rating = document.createElement("p");
    rating.textContent = `Đánh giá: ${product.rating}`;
    const stock = document.createElement("p");
    stock.textContent = product.inStock ? "Tình trạng: Còn hàng" : "Tình trạng: Hết hàng";
    modal.appendChild(closeBtn);
    modal.appendChild(img);
    modal.appendChild(name);
    modal.appendChild(price);
    modal.appendChild(category);
    modal.appendChild(rating);
    modal.appendChild(stock);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    closeBtn.addEventListener("click", () => {
        overlay.remove();
    });
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            overlay.remove();
        }
    });
};
const addToCart = () => {
    cartCount++;
    document.querySelector("#cartBadge").textContent = cartCount;
};
const bindEvents = () => {
    document.querySelector("#searchInput").addEventListener("input", (e) => {
        searchText = e.target.value;
        renderProducts();
    });
    document.querySelectorAll(".category-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".category-btn").forEach(item => {
                item.classList.remove("active");
            });
            btn.classList.add("active");
            currentCategory = btn.dataset.category;
            renderProducts();
        });
    });
    document.querySelector("#sortSelect").addEventListener("change", (e) => {
        sortType = e.target.value;
        renderProducts();
    });
    document.querySelector("#productGrid").addEventListener("click", (e) => {
        const card = e.target.closest(".card");
        if (!card) {
            return;
        }
        const productId = Number(card.dataset.id);
        const product = products.find(item => item.id === productId);
        if (e.target.classList.contains("add-cart")) {
            e.stopPropagation();
            addToCart();
            return;
        }
        showModal(product);
    });
    document.querySelector("#darkToggle").addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
};
createLayout();
renderProducts();
bindEvents();