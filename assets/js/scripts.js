
$(document).ready(function(){
    $('.carousel').carousel();

    // Agrega un evento al formulario cuando se envíe
    $('form').submit(function(e) {
      // Evita que el formulario se envíe normalmente
      e.preventDefault();
      
      // Muestra el mensaje de enviado correctamente
      $('#mensaje-enviado').fadeIn();
  
      // Después de un tiempo, oculta el mensaje
      setTimeout(function(){
        $('#mensaje-enviado').fadeOut();
      }, 3000); // 3000 milisegundos = 3 segundos
    });

     // Inicializar tooltips
     $('[data-toggle="tooltip"]').tooltip();
  });
  