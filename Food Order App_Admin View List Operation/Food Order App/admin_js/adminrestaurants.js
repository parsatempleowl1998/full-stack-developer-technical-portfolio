//View All Restaurants Page
  function listRestaurants(){
    var restaurantTable = document.getElementById("restaurantTable");
    if(restaurantCollection !=null){
        for(var restaurantId in restaurantCollection){
            
            var restaurantObj = restaurantCollection[restaurantId];
            restaurantTable.innerHTML +='<tr><td>'+restaurantObj["id"]+'</td>'+
                                '<td>'+restaurantObj["name"]+'</td>'+
                                '<td><img src='+restaurantObj["image"]+' style="width:80px;height:80px"></td>'+
                                '<td>'+restaurantObj["addr"]+'</td>'+
                                '<td>'+restaurantObj["contact"]+'</td>'+
                                '<td><button class="btn btn-primary" id="'+restaurantObj["id"]+'">Edit</button></td></tr>'  
        };
    }
}
