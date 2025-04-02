let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("back-btn")
let nextBtn = document.getElementById("next-btn");

nextBtn.addEventListener("click", ()=> {
    scrollContainer.scrollLeft += 900;
    scrollContainer.style.scrollBehavior = "smooth"
})
backBtn.addEventListener("click", ()=> {
    scrollContainer.scrollLeft -= 900;
    scrollContainer.style.scrollBehavior = "smooth"
})
