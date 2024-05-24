var productCollection = JSON.parse(window.localStorage.getItem("product"));
var categoryCollection = JSON.parse(window.localStorage.getItem("category"));

var productId = 0;
for(var product in productCollection){
    productId++;
}
console.log(productId);

//To load all available category names in Add Product Page
function loadCategories(){
    var parentElement = document.getElementById("category");
    parentElement.innerHTML="";
    for(categoryId in categoryCollection){
        var categoryObj = categoryCollection[categoryId];
        var categoryName = categoryObj["name"];
        parentElement.innerHTML +='<option value="'+categoryName+'">'+categoryName+'</option>';
    };
}

//On adding a new product
function addProduct(){  
    productId += 1;
    var pname = document.getElementById("pname").value;
    var price = document.getElementById("price").value;
    var prodcount = document.getElementById("prodcount").value;
    var desc = document.getElementById("desc").value;
    var inStock = document.getElementById("instock").checked == true ? "Yes" : "No";
    var category = document.getElementById("category").value;
    var img = document.getElementById("prodimg").value;
    var rating = 0;
    var count = 0;
    saveProduct(productId,pname, price, prodcount, desc, inStock, category, img, rating, count);
    alert("Product Added Successfully!");
    gotoAdminPage();
}

//Save product data on add/edit
function saveProduct(productNo,pname, price, prodcount, desc, inStock, category, img, rating, count){
    var product;
    if(productCollection==null){
        product = {};
    }
    else{
        product = productCollection;
    }
    product[productNo] = {
        "id" : productNo,
        "title" : pname,
        "price" : price,
        "productCount" : prodcount,
        "description" : desc,
        "isActive" : inStock,
        "category" : category,
        "image" : img,
        "rating" : {"rate" : rating, "count": count}
    }
    var productData = JSON.stringify((product));
    window.localStorage.setItem("product", productData);
}

//View All Products Info
function listProducts(){
    var productTable = document.getElementById("productstable");
    for(productId in productCollection){
        var productObj = productCollection[productId];
        
        productTable.innerHTML += "<tr><td>"+productObj['id']+"</td>"+
                            "<td>"+productObj['title']+"</td>"+
                            "<td>"+productObj['price']+"</td>"+
                            "<td>"+productObj['productCount']+"</td>"+
                            "<td>"+productObj['description']+"</td>"+
                            "<td>"+productObj['isActive']+"</td>"+
                            "<td>"+productObj['category']+"</td>"+
                            '<td><img src="'+productObj['image']+'" width = "100px"'+'></td>'+
                            "<td>"+productObj['rating']['rate']+"</td>"+
                            "<td>"+productObj['rating']['count']+"</td>"+
                            '<td><button id="'+productObj['id']+'">Edit</button></td></tr>';
    };
}

//Navigate to Admin Page
function gotoAdminPage(){
    window.location.href="admin_page.html";
}