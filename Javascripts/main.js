var products;
var categories;

var discountedProducts;
var discountedCategories;

var selectedSeason = document.getElementById("season_discountkey");
var submitClick = document.getElementById("submit_discount");
var inventory = document.getElementById("inventory");

var categoriesArray = [];
var productsArray = [];

function loadCategories() {
	var loadInventory = new XMLHttpRequest();
	loadInventory.addEventListener("error", function() {
		console.log("ERROR: Clean up in all departments! Reload JSON");
	});

	loadInventory.open("GET", "categories.json");
	loadInventory.send();
	loadInventory.addEventListener("load", function() {
		var data = JSON.parse(this.responseText);
		categoriesArray = data.categories;
	loadProducts();
	});
}

function loadProducts() {
	var loadInventory = new XMLHttpRequest();
	loadInventory.addEventListener("error", function() {
		console.log("ERROR: SHOPPLIFTED PRODUCTS! RELOAD JSON");
	});

	loadInventory.open("GET", "products.json");
	loadInventory.send();
	loadInventory.addEventListener("load", function() {
		var data = JSON.parse(this.responseText);
		productsArray = data.products;
	
	stockInventory();
	});
};

function stockInventory() {
	for (var i=0; i < productsArray.legth; i++) {
		inventory.innerHTML += 
		`<div class="sale" id="sale-inventory-${i}">
		<h3>${productsArray[i].name}</h3>
		<h3>$${productsArray[i].price}</h3>
		<h5>${categoriesArray[productsArray[i].category_id - 1].name}</h5>`
		console.log(productsArray[i].name);
	}
}

submitClick.addEventListener("click", function() {

});

loadCategories();

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