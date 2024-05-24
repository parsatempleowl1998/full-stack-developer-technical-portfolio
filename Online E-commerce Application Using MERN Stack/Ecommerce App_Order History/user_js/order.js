let signedInUser=JSON.parse(window.sessionStorage.getItem("signedInUser"));
function loadOrderHistory(){
    if (signedInUser==null){
        window.location.href="signin.html";
    }
    else{

        orderTable=document.getElementById("orderstable");
        let orderCollection = JSON.parse(window.localStorage.getItem("order"));
        console.log(signedInUser,Object.values(orderCollection));
        let filteredOrderCollection =Object.values(orderCollection).filter(orderObj=>orderObj.userId==signedInUser["id"]);
        console.log(filteredOrderCollection);
        if(filteredOrderCollection.length==0){
            document.getElementById("orderhistory").innerHTML="<h3>No orders placed</h3>";
            orderTable.innerHTML="";
        }
        else{
            Object.entries(filteredOrderCollection).forEach(orderObj =>{
                var tableRow = document.createElement("tr");
                orderTable.appendChild(tableRow);
                var orderValues = orderObj[1];
                var orderText='<td>'+orderValues["id"]+'</td>'+
                                    '<td>'+orderValues["orderDate"]+'</td>'+
                                    '<td>$'+orderValues["amount"]+'</td>'+
                                    '<td><button class="btn btn-primary" id="'+orderValues["id"]+
                                    '" onclick="viewOrderDetail('+orderValues["id"]+');">View Details</button>'
                
                tableRow.innerHTML=tableRow.innerHTML+orderText;
               });
            }
        }
}

function viewOrderDetail(orderNo){
    window.location.href="../user_views/view_orderdetail.html?id="+orderNo;
}
function loadOrderDetail(){
    let orderNo = window.location.href.split("?")[1].split("=")[1];
    let orderValues = JSON.parse(window.localStorage.getItem("order"))[orderNo];
    let userCollection=JSON.parse(window.localStorage.getItem("user"));
    let productsCollection = JSON.parse(window.localStorage.getItem("product"));
    let orderTable=document.getElementById("orderdetailtable");
    orderText='<tr><td><b>Order No :</b></td><td>'+orderValues["id"]+'</td></tr>'+
            '<tr><td><b>Date Of Order :</b></td><td>'+orderValues["orderDate"]+'</td></tr>'+
            '<tr><td><b>Customer Name :</b></td><td>'+userCollection[orderValues["userId"]]["fullname"]+'</td></tr>'+
            '<tr><td><b>Shipping Address :</b></td><td>'+orderValues["shippaddr"]+'</td></tr>'+
            '<tr><td><b>Contact :</b></td><td>'+orderValues["contact"]+'</td></tr>'+
            '<tr><td><b>Products Ordered :</b></td></tr>'+
            '<tr><td><b>Product Item</b></td><td><b>Rate</b></td><td><b>Qty</b></td><td><b>Amount</b></td></tr>'
    productText="";
    console.log(orderValues["productsOrdered"]);
    for(orderObj in orderValues["productsOrdered"]){
        let prodRate = productsCollection[orderObj[0]]["price"];
        let prodQty = orderValues["productsOrdered"][orderObj];
        productText +='<tr><td>'+productsCollection[orderObj]["title"]+
        '</td><td>$'+prodRate+'</td><td>'+prodQty+'</td><td>'+prodRate*prodQty+'</td></tr>'
    }
    orderText += productText+'<tr><td><b>Total Amount :</b></td><td>$'+orderValues["amount"]+'</td></tr>';
    orderTable.innerHTML=orderTable.innerHTML+orderText;
}