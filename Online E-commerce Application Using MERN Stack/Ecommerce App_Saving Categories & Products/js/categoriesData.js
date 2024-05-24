var categoryCollection = {
    "1": {
        "id": 1,
        "name": "Men's Clothing",
        "description": "Shirts, Trousers, Jackets etc",
        "isActive": "Yes",
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
    },
    "2": {
        "id": 2,
        "name": "Electronics",
        "description": "All type of electronic appliances",
        "isActive": "Yes",
        "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
    },
    "3": {
        "id": 3,
        "name": "Jewellery",
        "description": "Rings, necklaces etc",
        "isActive": "Yes",
        "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
    }
}
var categoryCount = 0;
for(category in categoryCollection){
    categoryCount++;
}
console.log(categoryCount);