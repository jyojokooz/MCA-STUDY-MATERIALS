const backToTopButton = document.createElement("button");
backToTopButton.className = "back-to-top";
backToTopButton.innerHTML = '<i class="fa-solid fa-circle-up"></i>';
document.body.appendChild(backToTopButton);

const style = document.createElement("style");
style.textContent = `
.back-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #2563eb;
    color: white;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    z-index: 9999;
}
.back-to-top.visible { opacity: 1; }
.back-to-top:hover { background-color: #1e40af; }
.back-to-top .fa-solid { font-size: 24px; line-height: 1; }
`;
document.head.appendChild(style);

// Show/hide logic
const toggleVisibility = () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add("visible");
  } else {
    backToTopButton.classList.remove("visible");
  }
};

window.addEventListener("scroll", toggleVisibility);

backToTopButton.addEventListener("click", () => {
  window.scrollTo({top: 0, behavior: "smooth"});
});
