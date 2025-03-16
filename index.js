// Sections
const avatarContainer = document.querySelector(".avatar-container");
const mobileShareContainer = document.querySelector(".mobile-share-container");
const sharePopup = document.querySelector(".share-popup");

// Buttons
const avatarShareBtn = document.querySelector(".avatar-share-button");
const mobileShareBtn = document.querySelector(".mobile-share-button");

function handleClick() {
    const isDesktop = window.matchMedia("(min-width: 769px)").matches;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isDesktop) {
        sharePopup.classList.toggle("hidden");
    } else if (isMobile) {
        avatarContainer.classList.add("hidden");
        mobileShareContainer.classList.toggle("hidden");
    }
}

avatarShareBtn.addEventListener("click", handleClick);

mobileShareBtn.addEventListener("click", () => {
    avatarContainer.classList.remove("hidden");
    mobileShareContainer.classList.add("hidden");
});

// containers status when changing desktop and mobile resolution
window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 769px)").matches) {
        avatarContainer.classList.remove("hidden");
        mobileShareContainer.classList.add("hidden");
    }
});
