$(document).ready(function(){
    $("#guardar").click(function(){
        let id = $("#id").val();
        let nombre = $("#nombre").val();
        let autor = $("#autor").val();
        let anioEdicion = $("#anioEdicion").val();
        let paginas = $("#paginas").val();
        let editorial = $("#editorial").val();

        $.ajax({
            url: "LibroController.php?funcion=registro",
            data: {
                id: id,
                nombre: nombre,
                autor: autor,
                anioEdicion: anioEdicion,
                paginas: paginas,
                editorial: editorial
            },
            type: "POST",
            success: function(result){
                let resultado = JSON.parse(result);
                console.log(resultado.message);
            }
        });
    });

    $(".btn_actualizar").click(function(){
        let elemento_html = $(this);
        let registro_id = elemento_html.attr("registro_id");

        $.ajax({
            url: "LibroController.php?funcion=buscar",
            data: {
                id: registro_id
            },
            type: "POST",
            success: function(result){
                let resultado = JSON.parse(result);
                //console.log(resultado.data);
                let contador = resultado.data.length;
                if(contador == 1){
                    let objeto = resultado.data[0];

                    $("#titulo_formulario").text("Editando el libro " + objeto.nombre)
                    $("#id").val(objeto.id);
                    $("#nombre").val(objeto.nombre);
                    $("#autor").val(objeto.autor);
                    $("#anioEdicion").val(objeto.anio_edicion);
                    $("#paginas").val(objeto.paginas);
                    $("#editorial").val(objeto.editorial);
                }
                
            }
        });
    });
});