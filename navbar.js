
function navBar(){
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
            </ul>
        </nav>
        <img src="./images/cart.png" width="30px" height="30px" alt="cart">
        <img src="./images/menu.png" class="menu-icon" onclick="menutoggle()">
    </div>` 
      
} 

export {navBar};
