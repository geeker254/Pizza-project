var input = document.getElementById("myInput");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("myBtn").click();
  }
});

//In the javascript code
var theForm = document.forms["pizzaform"];

var cake_prices = new Array();
pizza_prices["Round6"]=20;
pizza_prices["Round8"]=25;
pizza_prices["Round10"]=35;

function getpizzasizePrice()
{
    var pizzaSizePrice=0;
    var theForm = document.forms["pizzaform"]
    var selectedPizza = theForm.elements["pizza_prices"]
    for(var i = 0; i < selectedPizza.length; i++)
    {
        if(selectedPizza[i].checked)
        {
            pizzaSizePrice = pizza_prices[selectedPizza[i].value];
            //If we get a match then we break out of this loop
            //No reason to continue if we get a match
            break;
        }
    }
    return cakeSizePrice;
}

var pizza_type= new Array();
filling_prices["Peperoni"]=5;
filling_prices["Mozzarela"]=5;
filling_prices["Hawaii"]=7;
filling_prices["Pineaple"]=8;
filling_prices["Corn"]=10;
filling_prices["Magherrita"]=5;
filling_prices["Sausage"]=9;
filling_prices["Veggie"]=5;
filling_prices["Bacon"]=5;
filling_prices["Mushroom"]=8;
filling_prices["Onion"]=7;
filling_prices["Cheese"]=12;


function getFillingPrice()
{
    var pizzaFillingPrice=0;
    var theForm = document.forms["pizzaform"]
     var selectedFilling = theForm.elements["pizza_type"];

    pizzaFillingPrice = filling_prices[selectedFilling.value];

    return pizzaFillingPrice;
}

function saucePrice()
{
    var saucePrice=0;
    var theForm = document.forms["pizzaform"];
    var includeCandles = theForm.elements["includesauce"];

    if(includeCandles.checked==true)
    {
        candlePrice=5;
    }
    return candlePrice;
}


function getTotal()
{
    var pizzaPrice = getpizzasizePrice() + getFillingPrice() +
            saucePrice();
    //display the result
    document.getElementById('totalPrice').innerHTML =
                                      "Total Price For Pizza $"+ pizzaPrice;

}