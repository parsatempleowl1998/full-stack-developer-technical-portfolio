var productCollection = JSON.parse(window.localStorage.getItem("product"));

//Function for loading products data in products.html page
(function (){
    var innerHTMLText = "";

    for(productId in productCollection){
        var productObj = productCollection[productId];
    
        var productText = '<div id=' + productObj['id'] + '>'+
            '<table border="1"><tr>'+
            '<td rowspan="2"><a href="../views/product.html?id=' + productObj['id'] + '">'+
                '<img src="' + productObj['image'] + '"width="200" height="200"/></a></td>' +
            '<td><a href="../user_views/product.html?id=' + productObj['id'] + '"><b>' + productObj['title'] + '</b></a></td></tr>' +
            '<tr><td><b>Product Description:</b><br/>' + productObj['description'] + '</td></tr>' +
            '<tr><td> <b>Price :</b> $' + productObj['price'] + '</td>' +
            '<td> <b>Category :</b> ' + productObj['category'] + '</td></tr></table></div><br/>';

        innerHTMLText += productText;
    }
    
    document.getElementById('product-list').innerHTML = innerHTMLText;
})();