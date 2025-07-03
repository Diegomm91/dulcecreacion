document.addEventListener('DOMContentLoaded', function() {
    // Obtener el modal
    var modal = document.getElementById('imageModal');

    // Obtener la imagen dentro del modal
    var modalImg = document.getElementById("modalImage");

    // Obtener el texto del caption
    var captionText = document.getElementById("caption");

    // Obtener todas las imágenes de la galería
    var galleryImages = document.querySelectorAll('.gallery img');

    // Asignar el evento click a cada imagen de la galería
    galleryImages.forEach(function(img) {
        img.onclick = function(){
            modal.style.display = "flex"; // Mostrar el modal (usamos flex para centrar)
            modalImg.src = this.src; // Cargar la imagen clickeada
            captionText.innerHTML = this.alt; // Mostrar el texto alternativo como caption
        }
    });

    // Obtener el elemento <span> que cierra el modal
    var span = document.getElementsByClassName("close-button")[0];

    // Cuando el usuario hace clic en <span> (x), cierra el modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Cuando el usuario hace clic fuera de la imagen (en el fondo del modal), cierra el modal
    modal.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
