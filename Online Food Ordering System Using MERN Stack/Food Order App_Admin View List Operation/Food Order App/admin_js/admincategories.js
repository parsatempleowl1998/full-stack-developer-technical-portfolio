//View All Categories Page
  function listCategories(){
    var categoryTable = document.getElementById("categoryTable");
    if(categoryCollection !=null){
        for(var categoryId in categoryCollection){
            var categoryObj = categoryCollection[categoryId];
            categoryTable.innerHTML +="<tr><td>"+categoryObj['id']+"</td>"+
                            "<td>"+categoryObj['name']+"</td>"+
                            "<td>"+categoryObj['description']+"</td>"+
                            "<td>"+categoryObj['isActive']+"</td>"+
                            '<td><img src="'+categoryObj['image']+'" width = "100px"'+'></td>'+
                            '<td><button id="'+categoryObj['id']+'" class="btn btn-primary">Edit</button></td></tr>';
        };
    }
}