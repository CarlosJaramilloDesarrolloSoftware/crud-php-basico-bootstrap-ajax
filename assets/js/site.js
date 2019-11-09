$(document).ready(function(){

    function listar(){
        console.log("Voy a listar");
        $.ajax({
            url: "LibroController.php?funcion=listarajax",
            data: {},
            type: "GET",
            success: function(result){
                // La función JSON.parse convierte de JSON a JavaScript
                let resultado = JSON.parse(result);
                console.log(resultado.data[0][0]["nombre"]);
                var output = "";
                for ( user in resultado.data[0] ) {

                    output += "<h2>Detalles del usuario " + resultado.data[0][user].ID + "</h2>";
       
                    //recorremos los valores de cada usuario
                    for ( userdata in resultado.data[0][user] ) {
       
                      output += '<ul>';
                      output += '<li>' + userdata + ': ' + resultado.data[0][user][userdata] + "</li>";
                      output += '</ul>';
       
                    }
                }
                console.log(output);
            }
        });
        
    }

    $("#guardar").click(function(){
        let id = $("#id").val();
        let nombre = $("#nombre").val();
        let autor = $("#autor").val();
        let anioEdicion = $("#anioEdicion").val();
        let paginas = $("#paginas").val();
        let editorial = $("#editorial").val();

        $.ajax({
            url: "LibroController.php?funcion=registro",
            //data es un objeto, porque esta entre llaves
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
                // La función JSON.parse convierte de JSON a JavaScript
                let resultado = JSON.parse(result);
                console.log(resultado.message);
            }
        });
        listar();
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
        listar();
    });

    $(".btn_eliminar").click(function(){
        let elemento_html = $(this);
        let registro_id = elemento_html.attr("registro_id");

        $.ajax({
            url: "LibroController.php?funcion=eliminar",
            data: {
                id: registro_id
            },
            type: "POST",
            success: function(result){
                let resultado = JSON.parse(result);
                console.log(resultado.message);
            }
        });
        listar();
    });

    listar();
});