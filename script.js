<<<<<<< HEAD
$("document").ready(function(){
	$(".img1").on("click",function(){

	$(".heading2").text("the name is..box")
    })

	$(".img2").on("click",function(){
	$(".heading2").text("the name is..santaclaus")
    })

    $(".img3").on("click",function(){
	$(".heading2").text("the name is..bells")
    })


});
=======
$('document').ready(function(){
	$('.box').on('click',function(){
		$('.name').remove();
	$('.result').append('<h3 class=name >box</h3>')

	})

	$('.santa').on('click',function(){
		$('.name').remove();
	$('.result').append('<h3 class=name >santa</h3>') 
	})

	$('.bell').on('click',function(){
		$('.name').remove();
	$('.result').append('<h3 class=name >bell</h3>') 
    })

}); 
>>>>>>> f6853371ec80e3727581cd5b80ce875a8d423207
