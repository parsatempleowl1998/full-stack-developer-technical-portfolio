//View All Cuisines Page
function listCuisines(){
    var cuisineTable = document.getElementById("cuisineTable");
    if(cuisineCollection !=null){
        for(var cuisineId in cuisineCollection){
            var cuisineObj = cuisineCollection[cuisineId];
            cuisineTable.innerHTML +="<tr><td>"+cuisineObj['id']+"</td>"+
                            "<td>"+cuisineObj['name']+"</td>"+
                            "<td>"+cuisineObj['description']+"</td>"+
                            "<td>"+cuisineObj['isActive']+"</td>"+
                            '<td><img src="'+cuisineObj['image']+'" style="width:100px;height:100px;"'+'></td>'+
                            '<td><button id="'+cuisineObj['id']+'" class="btn btn-primary">Edit</button></td></tr>';
        };
    }
}