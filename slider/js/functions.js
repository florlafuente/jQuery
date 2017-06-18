var arraySlider = ['img/01.jpg', 'img/02.jpg', 'img/03.jpg' ];
var imagen = $('#imagen');
var pos = $(imagen).attr('data-pos');

$(document).ready(function(){	
	setInterval (rotateImage, 3000);
});

function rotateImage(){
  $(imagen).fadeOut('slow', function(){

    $(this).attr('src', arraySlider[pos]);
    $(this).fadeIn('slow', function(){
       if (pos < arraySlider.length-1){
         pos ++;
        console.log(pos);
      }else{
       pos = 0;
        console.log(pos);
      }
    });
  });
}