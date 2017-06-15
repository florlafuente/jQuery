$(document).ready(function(){
	$('img').bind('mouseenter mouseleave', function() {
		$(this).attr({
		src : $(this).attr('data-id'),
		'data-id' : $(this).attr('src') 
		});
	});
});


/*$("#imagen").on('mouseenter',function(){

		img = $(this).data('img');
		src= $(this).data('src');
		console.log(img);
		//$(this).attr('src',img);
		$('#imagen').fadeTo("ease", 0.2,function(){
			$('#imagen').attr('src', img);
			$('#imagen').css('opacity', 1);
			$("#imagen").on('mouseleave',function(){
				$('#imagen').attr('src', src);
			});

		});*/