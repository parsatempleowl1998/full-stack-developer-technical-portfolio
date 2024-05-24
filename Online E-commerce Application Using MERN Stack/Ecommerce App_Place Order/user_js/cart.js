let cartTotal = 0;
let orderCollection = JSON.parse(window.localStorage.getItem("order"));
let orderId = 0;
for(var order in orderCollection){
    orderId++;
}

//To store cart object which is going to get placed for an order
let cartObject = {};

//Function for showing the objects stored in cart
function loadProductsStoredInCart() {
    let cartCollection = JSON.parse(window.localStorage.getItem("cart"));
    var productCollection = JSON.parse(window.localStorage.getItem("product"));

        if (cartCollection != null) {
        let innerHTMLText = "";

        Object.keys(cartCollection).forEach(function (key) {

            let productId = parseInt(key);
            let quantity = parseInt(cartCollection[key]['quantity']);
            let productInfo = productCollection[productId];
            //Forming the cart object for order
            cartObject[productId]=quantity;
            //Computing total order amount
            cartTotal += parseFloat(quantity * parseFloat(productInfo['price']));

            let productText = '<div id=' + productInfo['id'] + '><table border="1"><tr><td rowspan="2"><a href="../user_views/product.html?id=' + productInfo['id'] + '"><img src="' + productInfo['image'] + '"width="200" height="200"/></a>' +
                '<td colspan="2"><a href="../user_views/product.html?id=' + productInfo['id'] + '"><b>' + productInfo['title'] + '</b></a></td></tr>' +
                '<tr><td colspan="2"><b>Product Description:</b><br/>' + productInfo['description'] + '</td></tr>' +
                '<tr><td> <b>Price :</b> $' + productInfo['price'] + '</td>' +
                '<td> <b>Quantity in Cart : </b>' + quantity + '</td>'+
                '<td> <b>Category :</b> ' + productInfo['category'] + '</td></tr></table></div><br/>';

            innerHTMLText += productText;

        });

        document.getElementById('cart').innerHTML = innerHTMLText;
        document.getElementById('cart-total').innerHTML = '<b>Cart Total :</b> $' + parseFloat(cartTotal);

    } else {
        document.getElementById('cart').innerHTML = '<div> Cart is empty :(</div><br/>';
    }

}
function placeOrder(){
    let address = document.getElementById('address').value;
    let phoneNo = document.getElementById('phone').value;

    if(Object.keys(cartObject).length == 0){
        alert('Cart is empty :(');
    }
    else if(address == '' || phoneNo == ''){
        alert('Please enter the address and phone number');
    } 
    else{    
        orderId += 1;
        orderObj={
            "id" : orderId,
            "shippaddr" :address,
            "contact" : phoneNo,
            "orderDate":new Date(),
            "productsOrdered" : cartObject,
            "amount" : cartTotal
        }
        saveOrder(orderId, orderObj);
        window.localStorage.removeItem("cart");
        alert("Order placed successfully");
        window.location.href="products.html";
    }
}

function saveOrder(orderNo,orderObj){
    let order;
    if(orderCollection==null){
        order = new Map();
    }
    else{
        order = new Map(Object.entries(orderCollection));
    }
    order.set(""+orderNo, orderObj);
    let orderData = JSON.stringify(Object.fromEntries(order));
    window.localStorage.setItem("order", orderData);
}