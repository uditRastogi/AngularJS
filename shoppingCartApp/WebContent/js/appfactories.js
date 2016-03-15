var f = angular.module("FactoryModule", ['ngResource']);

f.factory("productFactory", function($resource) {
	
	var products=[{"code": "1001", "Name": "Samsung Television","Price" :35000, "Description":"LED Smart TV"},
	                 {"code": "1002", "Name": "Samsung Washing Machine","Price" :12000, "Description":"Automatic Washing Machine"},
	                 {"code": "1003", "Name": "Samsung Referigerator","Price" :10000, "Description":"Automatic Refrigerator"},
	                 {"code": "1004", "Name": "Mixer Grinder","Price" :3500, "Description":"Automatic"},
	                 {"code": "1005", "Name": "Sofa set","Price" :45000, "Description":"Fully Comfortable"},
	                 {"code": "1006", "Name": "Hero bike","Price" :55000, "Description":"Hero Karishma"},
	                 {"code": "1007", "Name": "Cycle","Price" :15000, "Description":"Avon"}];
	
	return {
		getProucts: function(){
			return products;
		},
		addNewProduct: function(newProd){
			products.push(newProd);
		},
		removeProduct: function(idx) {
		  console.log(idx);
		  products.splice(idx,1);
			
		}
	    
	};
	
})


f.factory("cartFactory", function() {
	var cart = [];
	
	return {
		getCartItems : function(){
			return cart;
		},
	   
	    addCartItem : function(newVal){
	    	cart.push(newVal);
	    },
		
		deleteCartItem: function(index){
			cart.splice(index,1);
		}
		
	}
})