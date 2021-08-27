lightBtn = document.getElementById("lightbulb");

// When clicked
lightBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    document.getElementById("left").style.backgroundColor = "#202731"
    document.getElementById("left").style.color = "#f9e7cf"
    document.getElementById("lightbulb").style.color = "#202731"
});