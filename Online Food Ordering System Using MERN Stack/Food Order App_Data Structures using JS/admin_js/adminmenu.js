var restaurantCollection = JSON.parse(window.localStorage.getItem("restaurant"));
var foodItemsCollection = JSON.parse(window.localStorage.getItem("fooditem"));
var menuCollection = JSON.parse(window.localStorage.getItem("menu"));
var menuId = 0;
for(var menu in menuCollection){
    menuId++;
}


// Submission of Add Restaurant Page Form
function addMenu() {
    menuId += 1;    
    var rno = document.getElementById("restaurant").value;
    var foodInMenu ={}
    var allprices=document.getElementsByClassName("foodprice");
    for(itemprice of allprices){
        if(itemprice.disabled == false){
            var foodId =parseInt(itemprice.id.split("price")[1]);
            foodInMenu[foodId]=itemprice.value;
            console.log(foodInMenu);
        }
    }
      
    saveMenu(menuId, rno, foodInMenu);
    alert("Menu added successfully!")
    gotoAdminPage();     
  }

//Save restaurant data on add/edit
function saveMenu(menuId, rno, foodInMenu){
    var menu, updatedMenuId;
    
    if(menuCollection==null){
        menu = {};
        updatedMenuId =1;
    }
    else{
        menu = menuCollection;
        updatedMenuId = menuId;
        for(var menuNo in menuCollection){
            console.log(menuNo,"hey", menuCollection[menuNo]["restaurantId"], rno);
            if (menuCollection[menuNo]["restaurantId"] === rno){
                updatedMenuId=menuNo;
                console.log(updatedMenuId);
                break;
            }
        }
    }
    menu[updatedMenuId] = {
        "id" : updatedMenuId,
        "restaurantId" : rno,
        "menu" : foodInMenu
    }
    var menuData = JSON.stringify(menu);
    window.localStorage.setItem("menu", menuData);
    gotoAdminPage();
}
//View All Menu Page
function listMenu(){
    var restaurantNo = document.getElementById("restaurant").value;
    var foodItemsTable = document.getElementById("fooditems");
    for(menuId in menuCollection){
        var menuObj = menuCollection[menuId];
        foodItemsTable.innerHTML='<p style="color:red;">No Menu Added</p>'
        if (menuObj["restaurantId"] === restaurantNo){
            foodItemsTable.innerHTML='<tr><th>Food Item Image</th><th>Food Item Name</th><th>Price</th></tr>';
            var foodmenu = menuObj["menu"];
            for(var fooditemId in foodmenu){
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
//Navigate to Admin Page
function gotoAdminPage(){
    window.location.href="admin_page.html";
}