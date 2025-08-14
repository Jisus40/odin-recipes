let ulList = document.querySelector(".ul");
ulList.addEventListener("mouseover", (item) => {
    item.target.style.fontSize = "30px";
});

ulList.addEventListener("mouseout", (item) => {
    item.target.style.fontSize = "20px";
})