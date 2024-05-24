//Function for showing the objects stored in cart
function loadProductsStoredInCart() {
    let cartCollection = JSON.parse(window.localStorage.getItem("cart"));
    var productCollection = JSON.parse(window.localStorage.getItem("product"));

    if (cartCollection != null) {
        let innerHTMLText = "";
        var cartTotal = 0;
        for (cartId in cartCollection) {
            var cartObj = cartCollection[cartId];

            let productId = parseInt(cartId);
            let quantity = parseInt(cartCollection[cartId]['quantity']);
            let productInfo = productCollection[productId];

            cartTotal += parseFloat(quantity * parseFloat(productInfo['price']));

            let productText = '<div id=' + productInfo['id'] + '><table border="1"><tr><td rowspan="2"><a href="../user_views/product.html?id=' + productInfo['id'] + '"><img src="' + productInfo['image'] + '"width="200" height="200"/></a>' +
                '<td colspan="2"><a href="../user_views/product.html?id=' + productInfo['id'] + '"><b>' + productInfo['title'] + '</b></a></td></tr>' +
                '<tr><td colspan="2"><b>Product Description:</b><br/>' + productInfo['description'] + '</td></tr>' +
                '<tr><td> <b>Price :</b> $' + productInfo['price'] + '</td>' +
                '<td> <b>Quantity in Cart : </b>' + quantity + '</td>' +
                '<td> <b>Category :</b> ' + productInfo['category'] + '</td></tr></table></div><br/>';

            innerHTMLText += productText;
        }

        document.getElementById('cart').innerHTML = innerHTMLText;
        document.getElementById('cart-total').innerHTML = '<b>Cart Total :</b> $' + parseFloat(cartTotal);
    }
    else {
        document.getElementById('cart').innerHTML = '<div> Cart is empty :(</div><br/>';
    }

}
