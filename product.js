var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")
menuicon.addEventListener("click", function () {
    sidenav.style.right = 0
})

closenav.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})

//product search functionality
var productContainer = document.getElementById("product-container")
var search = document.getElementById("search")
var productList = productContainer.querySelectorAll("div")

search.addEventListener("keyup", function (event) {
    var enteredvalue = event.target.value.toUpperCase()

    for (var count = 0; count < productList.length; count = count+1) {
        var productname = productList[count].querySelector("h3").textContent
        if (productname.toUpperCase().indexOf(enteredvalue)<0) {
            productList[count].style.display = "none"
        }
        else {
            productList[count].style.display = "block"
        }
    }
})

