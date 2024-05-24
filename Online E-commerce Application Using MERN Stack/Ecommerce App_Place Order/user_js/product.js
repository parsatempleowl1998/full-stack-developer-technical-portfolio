let cartObj = JSON.parse(window.localStorage.getItem("cart"));

class ProductInCart {
    constructor(productId, quantity) {
        this.productId = productId;
        this.quantity = quantity;
    }
}

var productCollection = JSON.parse(window.localStorage.getItem("product"));

//Function for loading Product Information on product.html page
(function loadProductInformation() {
    var queryString = window.location.href;
    //Explain this step in detail
    var productId = queryString.split("?")[1].split("=")[1];
    var productObj = productCollection[productId];
    

    let productText = '<img src="' + productObj["image"] + '" alt="Product">' +
        '<div class="info">' +
        '<div class="title"><b>Product Title : ' + productObj["title"] + '</b></div><br/>' +
        '<div class="description"><b>Product Description: </b><br/>' + productObj["description"] + '</div>' +
        '<div class="price"><br/>Price : $' + productObj["price"] + '</div>' +
        '<div>';

        let isProductInCart = checkProductInCart(productId);

        let productInCartQuantity = fetchProductQuantity(productId);
    
        if (isProductInCart === true) {
    
            productText += '<p style="background-color:#bbf2c9">Product is already in the cart. </p>';
    
        } else {
            productText += '<br/>';
        }
    productText += '<label for="quantity">Quantity:</label>' +
        '<input type="number" id="quantity" class="quantity" min="1" max="100" value="' + productInCartQuantity + '">' +
        '<button style="margin-right:16px" onclick="addProductToCart('+isProductInCart+')">Add to Cart</button>' +
        '<a href="../user_views/cart.html"><button>Go to Cart</button></a>' +
        '</div>' +
        '</div>';

    document.getElementById("product-data").innerHTML = productText;
})();

//Function which adds product with the respective quantity to the cart
function addProductToCart(isProductInCart) {
    if(isProductInCart === true){
        alert("Product already added in cart!");
        return;
    }
    let productId = window.location.href.split("?")[1].split("=")[1];
    let quantity = parseInt(document.getElementById("quantity").value);
    // let productObj = productsData.get(productId);

    let cartCollection = window.localStorage.getItem("cart");

    if (cartCollection) {
        cart = JSON.parse(cartCollection);
    } else {
        cart = {};
    }
    //We can use this way to create cart object which we have seen earlier
    // while creating product or category objects in admin side.
    /*
    cart[productId] = {
        "productId" : productId,
        "quantity" : quantity,
    }
    */
    //But we are using this method here to demonstrate the concepts of -
    // class, constructors, this keyword & class objects. 
    //We will see the benefits of using these concepts while adding functionality to place an order
    let productIncartCollection = new ProductInCart(productId, quantity);
    cart[productId] = productIncartCollection;

    window.localStorage.setItem("cart", JSON.stringify(cart));
    alert('Product is successfully added in the cart :)');
    location.reload();

}

//Function to fetch the quantity if the product is already in the cart
function fetchProductQuantity(productId = 1) {
    if (checkProductInCart(productId)) {
        return cartObj[productId]['quantity'];
    } else {
        return 1;
    }
}

//Function to check if the product is already in the cart or not
function checkProductInCart(productId = 1) {
    return (cartObj != null && productId in cartObj);
}