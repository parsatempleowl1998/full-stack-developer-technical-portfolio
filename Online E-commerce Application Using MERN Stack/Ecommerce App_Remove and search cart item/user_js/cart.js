//Function for showing the objects stored in cart
function loadProductsStoredInCart() {
    let cartCollection = JSON.parse(window.localStorage.getItem("cart"));
    displayCart(cartCollection);
}
function displayCart(cartCollection){
    var productCollection = JSON.parse(window.localStorage.getItem("product"));
    //Modify to add additional check to determine if cart is empty
    if (cartCollection != null && Object.keys(cartCollection).length != 0) {
        let innerHTMLText = "";
        var cartTotal = 0;
        for (cartId in cartCollection) {
            let productId = parseInt(cartId);
            let quantity = parseInt(cartCollection[cartId]['quantity']);
            let productInfo = productCollection[productId];

            cartTotal += parseFloat(quantity * parseFloat(productInfo['price']));

            let productText = `<input type="text" style="width:100%" id="searchbox"><button onclick="searchInCart()";>Search In Cart</button><div style="width:100%" id=${productInfo['id']}>
                    <table style="width:100%" border="1">
                    <tr>
                        <td rowspan="2">
                        <a href="../user_views/product.html?id=${productInfo['id']}">
                            <img src="${productInfo['image']} "width="200" height="200"/></a></td>
                        <td colspan="2">
                        <a href="../user_views/product.html?id=${productInfo['id']}">
                            <b>${productInfo['title']}</b></a></td>
                    </tr>
                    <tr>
                        <td colspan="2">
                        <b>Product Description:</b><br/>${productInfo['description']}</td>
                    </tr>
                    <tr>
                        <td><b>Price :</b> $${productInfo['price']}</td>
                        <td> <b>Quantity in Cart : </b>${quantity}</td>
                        <td> <b>Category :</b>${productInfo['category']}</td>
                    </tr>
                    <tr>
                        <td colspan="3">
                        <button style="width:90%" onclick="removeItemFromCart(${cartId})">Remove from Cart</button>
                        </td>
                    </tr>
                    </table></div><br/>`;

            innerHTMLText += productText;
        }

        document.getElementById('cart').innerHTML = innerHTMLText;
        document.getElementById('cart-total').innerHTML = '<b>Cart Total :</b> $' + parseFloat(cartTotal) +
                                                            '<br><button class="btn btn-primary" style="width:100%" onclick="emptyCart()">Empty Cart</button>';
    }
    else {
        document.getElementById('cart').innerHTML = '<input type="text" style="width:100%" id="searchbox"><button onclick="searchInCart()";>Search In Cart</button><div> No items</div><br/>';
    }

}
function emptyCart(){
    window.localStorage.removeItem("cart");
    window.location.reload();
}

function removeItemFromCart(cartId = 0){
    //Either use 3 steps
    let cartCollection = Object.entries(JSON.parse(window.localStorage.getItem("cart")));
    filteredCartObjects = cartCollection.filter(cartObj=>cartObj[0]!=cartId);
    filteredCartCollection = Object.fromEntries(filteredCartObjects)
    //OR use following steps
    //let cartCollection = JSON.parse(window.localStorage.getItem("cart"));
    //del cartCollection[cartId];
    window.localStorage.setItem("cart", JSON.stringify(filteredCartCollection));
    window.location.reload();
}

function searchInCart(){
    searchText=document.getElementById("searchbox").value;
    
    console.log(searchText);
    if(searchText.length==0){
        alert("Kindly enter search value");
    }
    else{
        var productCollection = JSON.parse(window.localStorage.getItem("product"));
        let cartCollection = JSON.parse(window.localStorage.getItem("cart"));
    
    const filteredCart = Object.keys(cartCollection).filter((key) => {
        console.log(key);
        const productTitle = productCollection[key].title;
        return productTitle.toLowerCase().includes(searchText);
      }).map((key) => {
        return { [key]: cartCollection[key] };
      })
      .reduce((result, item) => {
        return { ...result, ...item };
      }, {});
      
      console.log(filteredCart);
      displayCart(filteredCart)
    }
}