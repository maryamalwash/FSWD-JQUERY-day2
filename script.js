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