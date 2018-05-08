var item1 = {
    kind : "Necklace",
    price : 200,
    color : "silver",
  }; 


  var item2 = {
    kind : "earring",
    price  : 250,
    color : "green",
  };


   var item3 = {
    kind : "bracelets",
    price  : 200 ,
    color : "gold",
  };
  var i=0 ;
var sum = 0 ;
  var cart =[ ];
  document.getElementById("item1").innerHTML = 'you selected : ' + item1.kind + "<br>"  + 'price : '+ item1.price + '<br>' +'colore : '+ item1.color + '<br>' + '<input type=\"button\"  value= \"add to cart\" onclick=\"add1();\">' + '<br>' + '<br>'  ;
  document.getElementById("item2").innerHTML = 'you selected : ' + item2.kind + "<br>"  + 'price : '+ item2.price + '<br>' +'colore : '+ item2.color + '<br>' + '<input type=\"button\"  value= \"add to cart\" onclick=\"add2();\">'+ '<br>' + '<br>'  ;
  document.getElementById("item3").innerHTML = 'you selected : ' + item3.kind + "<br>"  + 'price : '+ item3.price + '<br>' +'colore : '+ item3.color + '<br>' + '<input type=\"button\"  value= \"add to cart\" onclick=\"add3();\">' + '<br>' + '<br>' ;

  function add1(){
  	var sum = 0 ;
  	cart.unshift(item1);
  	document.getElementById("cart").innerHTML += "<p>" + cart[0].kind +"<br>"+ cart[0].price +"<br>"+ cart[0].color +"<hr>" + "</p>";
    for (i=0 ; i<cart.length ; i ++){
    sum += cart[i].price ;
   document.getElementById("sum").innerHTML = sum ;
   }
  }
   function add2(){
  	var sum = 0 ;
  	cart.unshift(item2);
  document.getElementById("cart").innerHTML += "<p>" + cart[0].kind +"<br>"+ cart[0].price +"<br>"+ cart[0].color +"<hr>" + "</p>";
 for (i=0 ; i<cart.length ; i ++){
    sum += cart[i].price ;
   document.getElementById("sum").innerHTML = sum ; 
   }
  }
   function add3(){
  var sum = 0 ;
  	cart.unshift(item3);
  	document.getElementById("cart").innerHTML += "<p>" + cart[0].kind +"<br>"+ cart[0].price +"<br>"+ cart[0].color +"<hr>" + "</p>"
  	

  	for (i=0 ; i<cart.length ; i ++){
    sum += cart[i].price ;
   document.getElementById("sum").innerHTML = sum ;
}
};
  


