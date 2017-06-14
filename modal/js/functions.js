$(document).ready(function(){
	$('.img-peque').on('click', function() {
		var imagen = $(this).data('img');
		var url = 'img/' + imagen ;
		console.log(url);
		$('#imggrande').attr('src', url);
	});
});