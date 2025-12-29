//selecting cancel-offer,menu-bar,side-nav,cancel-nav
var canceloff = document.getElementById("cancel-offer")
var menubar = document.getElementById("menu-bar")
var sidenav = document.getElementById("side-nav")
var cancelnav = document.getElementById("cancel-nav")

//remove offer-section
canceloff.addEventListener("click", function (event) {
    event.target.parentElement.style.display = "none"
})

//menubar-functionality
menubar.addEventListener("click", function (event) {
    sidenav.style.left = 0
})
cancelnav.addEventListener("click", function () {
    sidenav.style.left = "-50%"
})