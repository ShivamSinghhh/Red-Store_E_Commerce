
function navBar() {  

    return `<div class="navbar">
        <div class="logo">
            <a href="index.html"><img src="./images/logo.png" alt="logo" width="125px" /></a>
        </div>
        <nav class="navbar-right">
            <ul id="MenuItems">
                <li><a href="index.html">Home</a></li>
                <li><a href="product.html">Products</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li ><a id="userAccount" href="account.html">Account</a></li>
                <li ><a id="logout" href="account.html">LogOut</a></li>
                
            </ul>
        </nav>
        <img src="./images/cart.png" id="cartLogo" width="30px" height="30px" alt="cart">
        <img src="./images/menu.png" class="menu-icon" id="menutoggle">
    </div>`

}

function accountName() {
    let accountName = document.getElementById("userAccount");
    let data = JSON.parse(localStorage.getItem("loginData"));
    if (data) {
        console.log(accountName)
        accountName.innerText = data[0];
        document.getElementById("userAccount").href = "#";
        document.getElementById("logout").addEventListener("click", () => {
            localStorage.removeItem("loginData")
        })
    }
    else {
        document.getElementById("logout").innerHTML = "";
    }
}


//-------------menu toggle-------------------//
function menuToggle() { 

    if (MenuItems.style.maxHeight === "0px") {
        MenuItems.style.maxHeight = "200px";
    } else {
        MenuItems.style.maxHeight = "0px";
    }
}

//-----------cart logo--------------//

function cartLogo(){
    if(localStorage.getItem("loginData"))
    {window.location.href = "cart.html"}
    else{
        window.alert("Please login!")
        window.location.href = "./account.html"
    }
}


export {navBar,accountName,menuToggle,cartLogo};