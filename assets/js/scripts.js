
$(document).ready(function () {
    $('.carousel').carousel();

    // Agrega un evento al formulario cuando se envíe
    $('form').submit(function (e) {
        // Evita que el formulario se envíe normalmente
        e.preventDefault();

        // Muestra el mensaje de enviado correctamente
        $('#mensaje-enviado').fadeIn();

        // Después de un tiempo, oculta el mensaje
        setTimeout(function () {
            $('#mensaje-enviado').fadeOut();
        }, 3000); 
    });

    // Inicializar tooltips
    $('[data-toggle="tooltip"]').tooltip();
});
