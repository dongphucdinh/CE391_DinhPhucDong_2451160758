const images = [
    "https://picsum.photos/id/1015/800/500",
    "https://picsum.photos/id/1016/800/500",
    "https://picsum.photos/id/1025/800/500",
    "https://picsum.photos/id/1035/800/500",
    "https://picsum.photos/id/1043/800/500",
    "https://picsum.photos/id/1050/800/500",
    "https://picsum.photos/id/1062/800/500",
    "https://picsum.photos/id/1074/800/500",
    "https://picsum.photos/id/1084/800/500"
];

const mainImage = document.querySelector("#mainImage");
const modalImage = document.querySelector("#modalImage");
const thumbs = document.querySelector("#thumbs");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const playBtn = document.querySelector("#playBtn");
const openModalBtn = document.querySelector("#openModal");
const closeModalBtn = document.querySelector("#closeModal");
const imageModal = document.querySelector("#imageModal");

const openPaletteBtn = document.querySelector("#openPalette");
const palette = document.querySelector("#palette");
const commandInput = document.querySelector("#commandInput");
const commandList = document.querySelector("#commandList");

let currentIndex = 0;
let isPlaying = false;
let slideTimer = null;
let activeCommandIndex = 0;

const commands = [
    { name: "Next image", action: () => nextImage() },
    { name: "Previous image", action: () => prevImage() },
    { name: "Play / Pause slideshow", action: () => togglePlay() },
    { name: "Open image modal", action: () => openModal() },
    { name: "Close modal", action: () => closeModal() }
];

const renderImage = () => {
    mainImage.src = images[currentIndex];
    modalImage.src = images[currentIndex];

    document.querySelectorAll(".thumb").forEach((thumb, index) => {
        thumb.classList.toggle("active", index === currentIndex);
    });
};

const renderThumbs = () => {
    thumbs.textContent = "";

    images.forEach((src, index) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = `Ảnh số ${index + 1}`;
        img.className = "thumb";
        img.tabIndex = 0;
        img.setAttribute("aria-label", `Chọn ảnh số ${index + 1}`);

        img.addEventListener("click", () => {
            currentIndex = index;
            renderImage();
        });

        img.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                currentIndex = index;
                renderImage();
            }
        });

        thumbs.appendChild(img);
    });
};

const nextImage = () => {
    currentIndex = (currentIndex + 1) % images.length;
    renderImage();
};

const prevImage = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    renderImage();
};

const togglePlay = () => {
    isPlaying = !isPlaying;
    playBtn.textContent = isPlaying ? "Pause" : "Play";

    if (isPlaying) {
        slideTimer = setInterval(nextImage, 1500);
    } else {
        clearInterval(slideTimer);
    }
};

const openModal = () => {
    imageModal.classList.remove("hidden");
    closeModalBtn.focus();
};

const closeModal = () => {
    imageModal.classList.add("hidden");
    openModalBtn.focus();
};

const openPalette = () => {
    palette.classList.remove("hidden");
    commandInput.value = "";
    activeCommandIndex = 0;
    renderCommands(commands);
    commandInput.focus();
};

const closePalette = () => {
    palette.classList.add("hidden");
    openPaletteBtn.focus();
};

const renderCommands = (list) => {
    commandList.textContent = "";

    list.forEach((command, index) => {
        const li = document.createElement("li");
        li.className = "command-item";
        li.textContent = command.name;
        li.tabIndex = 0;

        if (index === activeCommandIndex) {
            li.classList.add("active");
        }

        li.addEventListener("click", () => {
            command.action();
            closePalette();
        });

        commandList.appendChild(li);
    });
};

const getFilteredCommands = () => {
    const keyword = commandInput.value.toLowerCase();

    return commands.filter(command =>
        command.name.toLowerCase().includes(keyword)
    );
};

prevBtn.addEventListener("click", prevImage);
nextBtn.addEventListener("click", nextImage);
playBtn.addEventListener("click", togglePlay);
openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
openPaletteBtn.addEventListener("click", openPalette);

commandInput.addEventListener("input", () => {
    activeCommandIndex = 0;
    renderCommands(getFilteredCommands());
});

document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openPalette();
        return;
    }

    if (!palette.classList.contains("hidden")) {
        const filtered = getFilteredCommands();

        if (e.key === "ArrowDown") {
            e.preventDefault();
            activeCommandIndex = (activeCommandIndex + 1) % filtered.length;
            renderCommands(filtered);
        }

        if (e.key === "ArrowUp") {
            e.preventDefault();
            activeCommandIndex = (activeCommandIndex - 1 + filtered.length) % filtered.length;
            renderCommands(filtered);
        }

        if (e.key === "Enter" && filtered.length > 0) {
            filtered[activeCommandIndex].action();
            closePalette();
        }

        if (e.key === "Escape") {
            closePalette();
        }

        return;
    }

    if (e.key === "Escape" && !imageModal.classList.contains("hidden")) {
        closeModal();
        return;
    }

    if (e.key === "ArrowRight") {
        nextImage();
    }

    if (e.key === "ArrowLeft") {
        prevImage();
    }

    if (e.key === " ") {
        e.preventDefault();
        togglePlay();
    }

    if (/^[1-9]$/.test(e.key)) {
        const index = Number(e.key) - 1;

        if (index < images.length) {
            currentIndex = index;
            renderImage();
        }
    }
});

imageModal.addEventListener("click", (e) => {
    if (e.target === imageModal) {
        closeModal();
    }
});

renderThumbs();
renderImage();