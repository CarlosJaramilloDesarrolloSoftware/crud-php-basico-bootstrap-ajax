$(document).ready(function(){
    $("#guardar").click(function(){
        let nombre = $("#nombre").val();
        let autor = $("#autor").val();
        let anioEdicion = $("#anioEdicion").val();
        let paginas = $("#paginas").val();
        let editorial = $("#editorial").val();

        $.ajax({
            url: "LibroController.php?funcion=registro",
            data: {
                nombre: nombre,
                autor: autor,
                anioEdicion: anioEdicion,
                paginas: paginas,
                editorial: editorial
            },
            type: "POST",
            success: function(result){
                console.log(result);
            }
        });
    });
});