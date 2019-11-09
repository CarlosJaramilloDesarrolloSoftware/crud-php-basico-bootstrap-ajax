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
                //console.log(resultado.data[0][0]["nombre"]);
                var output = "";

                //recorremos los libros
                for ( libro in resultado.data[0] ) {
                    
                    var nombre;
                    var autor;
                    var paginas;
                    var editorial;
                    var anio_edicion;

                    //El siguiente código recorre los elementos de cada libro
                    
                    for ( dato in resultado.data[0][libro] ) {
                        id = resultado.data[0][libro]["id"];
                        nombre = resultado.data[0][libro]["nombre"];
                        autor = resultado.data[0][libro]["autor"];
                        paginas = resultado.data[0][libro]["paginas"];
                        editorial = resultado.data[0][libro]["editorial"];
                        anio_edicion = resultado.data[0][libro]["anio_edicion"];
                    }

                    output += "<tr>";
                    output += "<th scope='row'>" + id + "</th>";
                    output += "<td>" + nombre + "</td>"
                    output += "<td>" + anio_edicion + "</td>";
                    output += "<td>" + paginas + "</td>";
                    output += "<td>" + editorial + "</td>";
                    output += "<td><button registro_id='" + id +"' class='btn btn-warning btn_actualizar'>Actualizar</button></td>";
                    output += "<td><button registro_id='" + id +"' class='btn btn-danger btn_eliminar'>Eliminar</button></td>";
                    output += "</tr>";
                }
                $("#cuerpo").html(output);
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

    $( "td" ).on( "click", "button", function() {
        console.log( $( this ).text() );
      });
    $(".btn_actualizar").click(function(){
        alert("Holaaa");
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