function toggleText() {
    const textElement = document.querySelector(".textt");
    const button = document.querySelector(".read-more-btn");
    
    textElement.classList.toggle("expanded");
    button.textContent = textElement.classList.contains("expanded") ? "Read less" : "Read more";
}