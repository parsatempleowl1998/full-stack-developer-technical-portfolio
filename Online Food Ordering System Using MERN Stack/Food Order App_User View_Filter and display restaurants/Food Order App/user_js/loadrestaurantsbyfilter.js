function loadRestaurantNames() {
    // filterOption will be either "cuisine" or "category"
    let filterOption = window.location.href.split("?")[1].split("=")[0];
    // filterValue will be the selected cuisine/category on the index.html page
    // For eg, "Italian" or "Pizza" or "Soup" etc
    let filterValue = window.location.href.split("?")[1].split("=")[1];

    headingText = (filterOption == "cuisine") ? filterValue + " food" : filterValue;
    // Function call to filter out the following - 
    // 1.food items belonging to specific category/cuisine
    // 2.restaurants offering those particular food items
    // So the return value of these function should be an array with 2 subarrays as follows-
    // The 1st subarray should have ids of all fooditems belonging to the selected cuisine/category
    // The 2nd subarray should have ids of all restaurants offering the food items having ids as mentioned in 1st subarray
    foodArr = loadByFilter(filterOption, filterValue);

    if (foodArr) {
        console.log(foodArr[0]);
        console.log(foodArr[1]);
        if (foodArr[1].length > 0) {
            document.getElementById("restaurantheading").innerHTML = "Restaurants delivering " + headingText;
            //Function to display name and image of all the filtered restaurants
            loadFilteredRestaurants(foodArr[1]);
        }
        else {
            document.getElementById("restaurantheading").innerHTML = "No Restaurants delivering " + headingText;
        }
    }
    else {
        document.getElementById("restaurantheading").innerHTML = "No Restaurants delivering " + headingText;
    }
}

function loadByFilter(filterOption, filterValue) {
    //Extract an object containing details of all fooditems from local storage
    let Collection = JSON.parse(window.localStorage.getItem("fooditem"));
    //Check if its not null
    if (Collection != null) {
        //Read the values of the object containing all food items details
        CollectionObjects = Object.values(Collection);
        //Filter out the ids of the food items based on the filterValue in an array
        let foodIds = CollectionObjects.filter(fooditem => fooditem[filterOption] == filterValue).map(fooditem => fooditem.id);
        try {
            //Extract an object containing details of all menus from local storage
            let MenuCollection = Object.values(JSON.parse(window.localStorage.getItem("menu")));
            //Create an empty array to store filtered restauarant ids
            let restaurantIds = []
            //Filter out  the ids of the restaurants from the menu object which are offering the filtered food items in an array
            MenuCollection.forEach(MenuItem => {

                filteredMenu = Object.keys(MenuItem["menu"]).filter(foodid => {
                    if (foodIds.filter(id => id == foodid).length > 0) {
                        return foodid;
                    }
                });
                if (filteredMenu.length > 0) {
                    restaurantIds.push(MenuItem["restaurantId"]);
                }
            })
            //create an array having 2 subarrays - filtered fooditem ids and filtered restaurant ids
            //return the array
            return [foodIds, restaurantIds];
        }
        catch (Error) {
            return;
        }

    }
}

//Function to display name and image of the filtered restaurants
function loadFilteredRestaurants(restaurantIds) {
    let styleText = "width:200px;height:200px;border-radius:5px 25px";
    let restaurantTable = document.getElementById("restaurant");
    let restaurantCollection = Object.values(JSON.parse(window.localStorage.getItem("restaurant")));

    if (restaurantCollection != null) {
        filterData = restaurantCollection.filter(filteredItem => {
            if (restaurantIds.filter(id => id == filteredItem["id"]).length > 0) {
                return filteredItem;
            }
        });
        if (filterData != null) {
            filterData.forEach(filterObj => {
                var filterValues = filterObj;

                var filterText = '<div class="col" id="cat' + filterValues["id"] + '">' +
                    '<a class="restaurant">' +
                    '<img src="' + filterValues["image"] + '" class="mx-auto d-block" style="' + styleText + '"><p style="text-align:center;">' + filterValues["name"] + '</p></a></div>'

                restaurantTable.innerHTML = restaurantTable.innerHTML + filterText;
            });
        }
        else {
            restaurantTable.innerHTML = "No Restaurants Available";
        }
    }
    else {
        restaurantTable.innerHTML = "No Restaurants Available";
    }
}
