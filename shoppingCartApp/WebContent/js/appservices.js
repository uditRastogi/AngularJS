var s = angular.module("appServices", ["FactoryModule"]);

s.service("ProductService", function(productFactory) {
	
    	this.getAllProducts = function(){
    		return productFactory.getProucts();
    	};
    	
    	this.addProduct = function(newProd) {
    		productFactory.addNewProduct(newProd);
    	}
    	
    	this.removeProduct = function(idx) {
    		productFactory.removeProduct(idx);
    	}
    
    
})


s.service("cartService", function(cartFactory) {
	 this.getAllCartItems = function() {
		 return cartFactory.getCartItems();
	 }
	 
	 this.addToCart = function(item){
		var found = false;
		 
		 if(this.getAllCartItems() == null || this.getAllCartItems().length == 0) {
			 var prod = {"name": item.Name, "Price":item.Price,"qty":1};
			 cartFactory.addCartItem(prod);
			}
			else {
			
			angular.forEach(this.getAllCartItems() , function(c) {
				if(c.name == item.Name){
						c.qty = c.qty + 1;
						found = true;
					}
				
			});
			
			if(!found) {
				var prod = {"name": item.Name, "Price":item.Price,"qty":1};
				cartFactory.addCartItem(prod);
			}
	 }
	 
	 this.removeItem = function(indx) {
		 cartFactory.deleteCartItem(indx);
	 }
	 }
	 
	 this.totalAmount = function(){
		 var tot = 0;
			angular.forEach(this.getAllCartItems(), function(c) {
				
				tot += c.Price * c.qty ;
			});
			return tot;
	 }
})