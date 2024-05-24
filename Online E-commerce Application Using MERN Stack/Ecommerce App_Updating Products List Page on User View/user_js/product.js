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


    productText += '<label for="quantity">Quantity:</label>' +
        '<input type="number" id="quantity" class="quantity" min="1" max="100" value="' + 1 + '">' +
        '<button style="margin-right:16px">Add to Cart</button>' +
        '<a href="#"><button>Go to Cart</button></a>' +
        '</div>' +
        '</div>';

    document.getElementById("product-data").innerHTML = productText;
})();

