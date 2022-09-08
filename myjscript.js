//initializing the variable to store total price
var totalPrice;
//function to check whichitems are selected and calculating the price for each quantity
function showprice(productForm){
    document.getElementById('products-selected').innerHTML = " ";
    if (productForm.songs1.checked==true){
        totalPrice += productForm.songquantity1.value * 6.99;
        document.getElementById('products-selected').innerHTML += "<p>Selena Gomez Revival x "+productForm.songquantity1.value+" = $"+productForm.songquantity1.value * 6.99+"</p>";
    }
    if (productForm.songs2.checked==true){
        totalPrice += productForm.songquantity2.value * 6.99;
        document.getElementById('products-selected').innerHTML += "<p>Bruno Mars - Hooligans x "+productForm.songquantity2.value+" = $"+productForm.songquantity2.value * 6.99+"</p>";
    }
    if (productForm.songs3.checked==true){
        totalPrice += productForm.songquantity3.value * 6.99;
        document.getElementById('products-selected').innerHTML += "<p>Senorita - Camilia Cabello x "+productForm.songquantity3.value+" = $"+productForm.songquantity3.value * 6.99+"</p>";
    }
	if (productForm.songs4.checked==true){
        totalPrice += productForm.songquantity4.value * 19.99	;
        document.getElementById('products-selected').innerHTML += "<p>Multiply - Ed Sheeran x "+productForm.songquantity4.value+" = $"+productForm.songquantity4.value * 19.99+"</p>";
    }
    if (productForm.songs5.checked==true){
        totalPrice += productForm.songquantity5.value * 6.99;
        document.getElementById('products-selected').innerHTML += "<p>Red - Taylor Swift x "+productForm.songquantity5.value+" = $"+productForm.songquantity5.value * 6.99+"</p>";
    }
    if (productForm.songs6.checked==true){
        totalPrice += productForm.songquantity6.value * 14.99;
        document.getElementById('products-selected').innerHTML += "<p>No Excuses - Meghan Trainor x "+productForm.songquantity6.value+" = $"+productForm.songquantity6.value * 14.99+"</p>";
    }
    if (productForm.songs7.checked==true){
        totalPrice += productForm.songquantity7.value * 6.99;
        document.getElementById('products-selected').innerHTML += "<p>Heathens - 21 Pilots x "+productForm.songquantity7.value+" = $"+productForm.songquantity7.value * 6.99+"</p>";
    }
    if (productForm.songs8.checked==true){
        totalPrice += productForm.songquantity8.value * 29.99;
        document.getElementById('products-selected').innerHTML += "<p>Star Dance Deluxe - Selena Gomez x "+productForm.songquantity8.value+" = $"+productForm.songquantity8.value * 29.99+"</p>";
    }
    if (productForm.songs9.checked==true){
        totalPrice += productForm.songquantity9.value * 29.99;
        document.getElementById('products-selected').innerHTML += "<p>Purpose Album - Justin Bieber x "+productForm.songquantity9.value+" = $"+productForm.songquantity9.value *29.99+"</p>";
    }
    if (productForm.songs10.checked==true){
        totalPrice += productForm.songquantity10.value * 9.99;
        document.getElementById('products-selected').innerHTML += "<p>Wolves ft Mellow - Selena Gomez x "+productForm.songquantity10.value+" = $"+productForm.songquantity10.value * 9.99+"</p>";
    }
    document.getElementById('cart-total').innerHTML = "$"+totalPrice;  
}
//checking whether user inputs are filled
function fromvalidation(PersonalForm){
    if (PersonalForm.custname.value.length==0 || PersonalForm.custpass.value.length==0){
        return false
    } else {
        return true
    }
}
// (Conditional Event Listener)
var ProductPriceCheck = document.getElementById("refreshcart");
if (ProductPriceCheck) {
    ProductPriceCheck.addEventListener("click", function(){
        totalPrice = 0;
        showprice(this.form);
    })
}
//according to the boolean value taken from formvalidation printing the output 
var ProductCheckout = document.getElementById("buyout");
if (ProductCheckout) {
    ProductCheckout.addEventListener("click", function(){
        totalPrice = 0;
        showprice(this.form);
        if (totalPrice==0) {
            alert('Products must be selected')
        } else if (fromvalidation(this.form)==false) {
            alert('All customer details MUST be entered.')
        } else if (fromvalidation(this.form)==true || totalPrice>0) {
            var productCartMessage = "Dear "+this.form.custname.value+", you have ordered ";
            if (this.form.songs1.checked==true){
                productCartMessage+=this.form.songquantity1.value+" copies of Selena Gomez Revival at $"+this.form.songquantity1.value*6.99+", ";
            }
            if (this.form.songs2.checked==true){
                productCartMessage+=this.form.songquantity2.value+" copies of Bruno Mars - Hooligans at $"+this.form.songquantity2.value*6.99+", ";
            }
            if (this.form.songs3.checked==true){
                productCartMessage+=this.form.songquantity3.value+" copies of Senorita - Camilia Cabello at $"+this.form.songquantity3.value*6.99+", ";
            }
            if (this.form.songs4.checked==true){
                productCartMessage+=this.form.songquantity4.value+" copies of Multiply - Ed Sheeran at $"+this.form.songquantity4.value*19.99+", ";
            }
            if (this.form.songs5.checked==true){
                productCartMessage+=this.form.songquantity5.value+" copies of Red - Taylor Swift at $"+this.form.songquantity5.value*6.99+", ";
            }
            if (this.form.songs6.checked==true){
                productCartMessage+=this.form.songquantity6.value+" copies of No Excuses - Meghan Trainor at $"+this.form.songquantity6.value*14.99+", ";
            }
            if (this.form.songs7.checked==true){
                productCartMessage+=this.form.songquantity7.value+" copies of Heathens - 21 Pilots at $"+this.form.songquantity7.value*6.99+", ";
            }
            if (this.form.songs8.checked==true){
                productCartMessage+=this.form.songquantity8.value+" copies of Star Dance Deluxe - Selena Gomez at $"+this.form.songquantity8.value*29.99+", ";
            }
            if (this.form.songs9.checked==true){
                productCartMessage+=this.form.songquantity9.value+" copies of Purpose Album - Justin Bieber at $"+this.form.songquantity9.value*29.99+", ";
            }
            if (this.form.songs10.checked==true){
                productCartMessage+=this.form.songquantity10.value+" copies of Wolves ft Mellow - Selena Gomez at $"+this.form.songquantity10.value*9.99+", ";
            }
            productCartMessage = productCartMessage.slice(0, -2);
            productCartMessage +=". Your Total is $"+totalPrice+".";
            alert(productCartMessage)
			document.getElementById('products-selected').innerHTML = "none";
			document.getElementById('cart-total').innerHTML = "0$";
			
        }
    })
}
	//showing the overlay by accessing style-display of singupbutton
	document.getElementById("signupbutton").addEventListener("click",function(){
		document.querySelector(".popup").style.display = "flex";})
	//hiding the display 
	document.querySelector(".close").addEventListener("click",function(){
		document.querySelector(".popup").style.display = "none";})
		
	//Font size changing
		
function increaseSize() {
    docElement = document.getElementById('font-resizing');
    style = window.getComputedStyle(docElement, null).getPropertyValue('font-size');
    currentFontSize = parseFloat(style);
    docElement.style.fontSize = (currentFontSize + 1) + 'px';
}

function decreaseSize() {
	docElement = document.getElementById('font-resizing');
    style = window.getComputedStyle(docElement, null).getPropertyValue('font-size');
    currentFontSize = parseFloat(style);
    docElement.style.fontSize = (currentFontSize - 1) + 'px';
}