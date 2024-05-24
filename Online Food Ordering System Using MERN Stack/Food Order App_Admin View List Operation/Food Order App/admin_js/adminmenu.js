function loadRestaurants(){
    var parentElement = document.getElementById("restaurant");
    parentElement.innerHTML="";
    for(var restaurantId in restaurantCollection){
        var restaurantObj = restaurantCollection[restaurantId];
        var restaurantName = restaurantObj["name"];
        var restaurantNo = restaurantObj["id"];
        parentElement.innerHTML +='<option id="'+restaurantNo+'" value="'+restaurantNo+'">'+restaurantName+'</option>';
    };
}
//View All Restaurants Page
  function listMenu(){
    var restaurantNo = document.getElementById("restaurant").value;
    var foodItemsTable = document.getElementById("fooditems");
    for(menuId in menuCollection){
        var menuObj = menuCollection[menuId];
        foodItemsTable.innerHTML='<p style="color:red;">No Menu Added</p>'
        if (menuObj["restaurantId"] === restaurantNo){
            foodItemsTable.innerHTML='<tr><th>Food Item Image</th><th>Food Item Name</th><th>Price</th></tr>';
            var foodmenu = menuObj["menu"];
            for(fooditemId in foodmenu){
                var foodItem = foodItemsCollection[fooditemId];
                var foodName = foodItem.title;
                var imgurl= foodItem.image;
                var cells = '<tr><td><img src='+imgurl+' width="50px" height="50px"></td><td>'+foodName+'</td><td>'+foodmenu[fooditemId]+'</td></tr>'
                foodItemsTable.innerHTML += cells;
            }
            break;
        }
    }
}