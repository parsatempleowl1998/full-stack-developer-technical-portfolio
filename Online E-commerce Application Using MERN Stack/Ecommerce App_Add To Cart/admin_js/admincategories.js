var categoryCollection = JSON.parse(window.localStorage.getItem("category"));

var categoryId = 0;
for(var category in categoryCollection){
    categoryId++;
}
console.log(categoryId);

//Submission of Add Category Page Form
function addCategory() {
    categoryId += 1;
    var cname = document.getElementById("category").value;
    var desc = document.getElementById("desc").value;
    var isActive = (document.getElementById("isActive").checked == true)? "Yes" : "No";
    var cimage=document.getElementById("catimg").value;
    saveCategory(categoryId,cname, desc, isActive, cimage);
    alert("Category Added Successfully!");
    gotoAdminPage();    
}

//Save category data on add/edit
function saveCategory(categoryNo, cname, desc, isActive, cimage){
    var category;
    if(categoryCollection==null){
        category = {};
    }
    else{
        category = categoryCollection;
    }
    category[categoryNo] = {
        "id" : categoryNo,
        "name" : cname,
        "description" : desc,
        "isActive" : isActive,
        "image" : cimage
    }
    var categoryData = JSON.stringify(category);
    window.localStorage.setItem("category", categoryData);
}

//View All Categories Page
function listCategories(){
    var categoryTable = document.getElementById("categoryTable");
    for(categoryId in categoryCollection){
        var categoryObj = categoryCollection[categoryId];
        
        categoryTable.innerHTML +="<tr><td>"+categoryObj['id']+"</td>"+
                            "<td>"+categoryObj['name']+"</td>"+
                            "<td>"+categoryObj['description']+"</td>"+
                            "<td>"+categoryObj['isActive']+"</td>"+
                            '<td><img src="'+categoryObj['image']+'" width = "100px"'+'></td>'+
                            '<td><button id="'+categoryObj['id']+'">Edit</button></td></tr>';
    }
}

//Navigate to Admin Page
function gotoAdminPage(){
    window.location.href="admin_page.html";
}