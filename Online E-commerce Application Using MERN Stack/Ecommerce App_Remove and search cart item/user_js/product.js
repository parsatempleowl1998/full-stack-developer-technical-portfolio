let cartObj = JSON.parse(window.localStorage.getItem("cart"));

var productCollection = JSON.parse(window.localStorage.getItem("product"));

//Function for loading Product Information on product.html page
(function loadProductInformation() {
    var queryString = window.location.href;
    //Explain this step in detail
    var productId = queryString.split("?")[1].split("=")[1];
    var productObj = productCollection[productId];

    let productText = generateProductText(productObj)

    let isProductInCart = checkProductInCart(productId);

    let productInCartQuantity = fetchProductQuantity(productId);
    let addToCartQtyNButton = '';
    if (isProductInCart === true) {

        productText += `<p style="background-color:#bbf2c9">${productInCartQuantity} units of product added in the cart. </p>`;
    }
    else {
        productText += `<br/>`;
        addToCartQtyNButton = `<label for="quantity">Quantity:</label>
        <input type="number" id="quantity" class="quantity" min="1" max="100" value="${productInCartQuantity}">
        <button style="margin-right:16px" onclick="addProductToCart()">Add to Cart</button>`;
    }

    productText += `${addToCartQtyNButton}
        <a href="../user_views/cart.html"><button>Go to Cart</button></a></div></div>`;

    document.getElementById("product-data").innerHTML = productText;
})();

function generateProductText(productObj) {
    const { image, title, description, price, ...otherProductDetails } = { ...productObj }
    let productText = `<img src="${image}" alt="Product">
                        <div class="info">
                        <div class="title"><b>Product Title : ${title}</b></div><br/>
                        <div class="description"><b>Product Description: </b><br/>${description}</div>
                        <div class="price"><br/>Price : $${price}</div><div>`;
    return productText;
}
//Function to fetch the quantity if the product is already in the cart
function fetchProductQuantity(productId = 0) {
    if (checkProductInCart(productId)) {
        return cartObj[productId]['quantity'];
    } else {
        return 1;
    }
}

//Function to check if the product is already in the cart or not
function checkProductInCart(productId = 0) {
    return (cartObj != null && productId in cartObj);
}

//Function which adds product with the respective quantity to the cart
function addProductToCart() {
    let productId = window.location.href.split("?")[1].split("=")[1];
    let quantity = parseInt(document.getElementById("quantity").value);
    // let productObj = productsData.get(productId);

    let cartCollection = window.localStorage.getItem("cart");

    if (cartCollection) {
        cart = JSON.parse(cartCollection);
    } else {
        cart = {};
    }
    cart[productId] = {
        "productId": productId,
        "quantity": quantity,
    }
    window.localStorage.setItem("cart", JSON.stringify(cart));
    //alert('Product is successfully added in the cart :)');
    location.reload();

}