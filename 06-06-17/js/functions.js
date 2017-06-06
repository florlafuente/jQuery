$(document).ready(function(){ /*Document ready esta escuchando el evento de cuándo carga la pagina*/

	$('#msj').hide(); /*Oculto el div*/



	$('#ingresar').on('click',function() {
	/*Estoy asociando al evento click en el elemento con el id ingresar una funcion de callback*/

		user = $('#usuario').val();
		pass = $('#password').val();

		if (user == 'pepe' && pass == '123456') {
			$('#msj').show(); /*Show cambia el display al predeterminado de c/elemento. Hide es para lo opuesto*/
			$('#msj').append('<p>Bienvenido Pepito!</p>');/*Append, similar a inner html, agrega una linea de codigo en el parent element en el que estoy localizado*/
		} else { 
			$('#msj').show();
			$('#msj').append('<p>No sos Pepito, rajá de acá!</p>');
		}

	});

});