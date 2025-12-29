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

//search functionality
var search = document.getElementById("search")
var colcontainer = document.getElementById("col-container")
var collist = colcontainer.querySelectorAll("h2")
console.log(collist[1])

search.addEventListener("keyup", function (event) {
    var enteredvalue = event.target.value.toUpperCase()
    console.log(enteredvalue)
    for (let i = 0; i < collist.length; i++) {
        var productname = collist[i].textContent.toUpperCase()
        if (productname.indexOf(enteredvalue) < 0) {
            collist[i].parentElement.style.display = "none"
        }
        else {
            collist[i].parentElement.style.display = "block"
        }
    }
})