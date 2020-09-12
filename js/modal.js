$(document).ready(function(){

    $('.texto-dentro').on('click',function(){

        var rutaImagen = $(this).siblings().attr('src');
        var modal = '<div class="modal"><img src="'+rutaImagen+'" alt=""></div>';

        $('#images').after(modal);

        $('.modal').on('click',function(){
            $('.modal').remove();
        })
    })

    $(document).on('keyup',function(e){
        if (e.which==27) {
            $('.modal').remove();
        }
    })

});