var products = document.getElementById("products");
var inventory = document.getElementById("inventory");

var discountedProducts;
var discountedCategories;


//discount key ouput values
var discountKey = document.getElementById("season_discountkey");
console.log("discountKey.value", discountKey.value);

 if (discountKey.value === 0.10) {
 		inventory.innerHTML = '<li>' + discountKey.value + '</li>';
 		console.log("inventory.innerHTML", inventory.innerHTML);
 	} else if (discountKey.value[1] === 0.25) { 
 			inventory.innerHTML = '<li>' + discountKey.value + '</li>';
 			console.log("inventory.innerHTML", inventory.innerHTML);
 	} else if (discountKey.value === 0.15) {
 			inventory.innerHTML = '<li>' + discountKey.value + '</li>';
 	} else {
		console.log("Please Select a Discount Code")
	}

///////////////////
//load categories
var request2 = new XMLHttpRequest();
request2.open('GET', 'categories.json', true);

request2.onload = function() {
  if (request2.status >= 200 && request2.status < 400) {
    // Success!
    var categoriesArray = JSON.parse(request2.responseText);
    console.log("categoriesArray", categoriesArray);

    ///print out to DOM Categories/////
    	inventory.innerHTML =  '<div id="apparel">' + '<img class="nav" src="http://res.cloudinary.com/emma/image/upload/v1486151916/garment_sr1ng1.svg" width=50 class="categoriesImg"/>' + categoriesArray.categories[0].name + "</div>";
    	inventory.innerHTML += '<div id="furniture">' + '<img class="nav" src="http://res.cloudinary.com/emma/image/upload/v1486151916/bed_rdkhod.svg" width=50 class="categoriesImg"/>' + categoriesArray.categories[1].name + "</div>";
    	inventory.innerHTML += '<div id="household">' + '<img class="nav" src="http://res.cloudinary.com/emma/image/upload/v1486151916/technology_bkoakl.svg" width=50 class="categoriesImg"/>' + categoriesArray.categories[2].name + "</div>";
  } else {
    // We reached our target server, but it returned an error

  }
};

request2.onerror = function() {
  // There was a connection error of some sort
};

request2.send();


/////////////////////
// JSON requests
//load products
var request = new XMLHttpRequest();
request.open('GET', 'products.json', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var productsArray = JSON.parse(request.responseText);
    console.log("productsArray", productsArray);
    	
		// function assignCategory(category_id) {
		for (i = 0; i < productsArray.products.length; i++) { 
			if (productsArray.products[i].category_id === 1) {
   				console.log("This is an apparel item!");
   				products.innerHTML += 	'<div class="card">' +
   										'<ul>' + '<h4>' + productsArray.products[i].name + '</h4>' +
   										'<li>' + '<div class="image">' + productsArray.products[i].image + '</div>'+'</li>' + 
   										'<div class="overlay">' +
   										'<li>' + 'Department: Apparel' + '</li>' +
   										'<li>' + 'Price: $' + productsArray.products[i].price + '</li>' + '</ul>' + '</div>' + '</div>';
			} else if (productsArray.products[i].category_id === 2) {
   				products.innerHTML += 	'<div class="card">' +
   										'<ul>' + '<h4>' + productsArray.products[i].name + '</h4>' +
   										'<li>' + '<div class="image">' + productsArray.products[i].image + '</div>' + '</li>' +
   										'<div class="overlay">' +
   										'<li>' + 'Department: Furniture' + '</li>' +
   										'<li>' + 'Price: $' + productsArray.products[i].price + '</li>' + '</ul>' + '</div>';
				console.log("This is a Furniture item");
			} else if (productsArray.products[i].category_id === 3) {
   				products.innerHTML += 	'<div class="card">' +
   										'<ul>' + '<h4>' + productsArray.products[i].name + '</h4>' +
   										'<li class="image">' + productsArray.products[i].image + '</li>' + 
   										'<div class="overlay">' +
   										'<li>' + 'Department: Household' + '</li>' +
   										'<li>' + 'Price: $' + productsArray.products[i].price + '</li>' + '</ul>' + '</div>';
			} else {
				console.log("No Category selected")
			}

		}
	
 		
  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();




// var submitClick = document.getElementById("submit_discount");
// console.log("submitClick", submitClick);

// var inventory = document.getElementById("inventory");
// console.log("inventory", inventory);

// var categoriesArray = [];
// var productsArray = [];

// function loadCategories() {
// 	var loadInventory = new XMLHttpRequest();
// 	loadInventory.addEventListener("error", function() {
// 		console.log("ERROR: Clean up in all departments! Reload JSON");
// 	});

// 	loadInventory.open("GET", "categories.json");
// 	loadInventory.send();
// 	loadInventory.addEventListener("load", function() {
// 		var data = JSON.parse(this.responseText);
// 		categoriesArray = data.categories;
// 	loadProducts();
// 	});
// }

// function loadProducts() {
// 	var loadInventory = new XMLHttpRequest();
// 	loadInventory.addEventListener("error", function() {
// 		console.log("ERROR: SHOPPLIFTED PRODUCTS! RELOAD JSON");
// 	});

// 	loadInventory.open("GET", "products.json");
// 	loadInventory.send();
// 	loadInventory.addEventListener("load", function() {
// 		var data = JSON.parse(this.responseText);
// 		productsArray = data.products;
	
// 	stockInventory();
// 	});
// };

// function stockInventory() {
// 	for (var i=0; i < productsArray.legth; i++) {
// 		inventory.innerHTML += 
// 		`<div class="sale" id="sale-inventory-${i}">
// 		<h3>${productsArray[i].name}</h3>
// 		<h3>$${productsArray[i].price}</h3>
// 		<h5>${categoriesArray[productsArray[i].category_id - 1].name}</h5>`
// 		console.log(productsArray[i].name);
// 	}
// }

// submitClick.addEventListener("click", function() {

// });

// loadCategories();

// trying to implement a fun drag and drop element will go back to this if have time

// function allowDrop(ev) {
//     ev.preventDefault();
// }

// function drag(ev) {
//     ev.dataTransfer.setData("text", ev.target.id);
// }


// function drop(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("text");
//     ev.target.appendChild(document.getElementById(data));
// }