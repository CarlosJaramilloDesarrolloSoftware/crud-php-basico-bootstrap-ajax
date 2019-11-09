function refrescar1(){
    alert("Refrescando la tabla...");
    listar();
}

function actualizar(id){
    $.ajax({
        url: "LibroController.php?funcion=buscar",
        data: {
            id: id
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
}

function listar(){
    $.ajax({
        url: "LibroController.php?funcion=listarajax",
        data: {},
        type: "GET",
        success: function(result){
            if(result != null && result != ""){

                // La función JSON.parse convierte de JSON a JavaScript
                let resultado = JSON.parse(result);
                //console.log(resultado.data[0][0]["nombre"]);
                var codigo_tabla = "";

                //recorremos los libros
                for ( libro in resultado.data[0] ) {
            
                    let id = resultado.data[0][libro]["id"];
                    let nombre = resultado.data[0][libro]["nombre"];
                    let autor = resultado.data[0][libro]["autor"];
                    let paginas = resultado.data[0][libro]["paginas"];
                    let editorial = resultado.data[0][libro]["editorial"];
                    let anio_edicion = resultado.data[0][libro]["anio_edicion"];
                    
                    codigo_tabla += "<tr>";
                    codigo_tabla += "<th scope='row'>" + id + "</th>";
                    codigo_tabla += "<td>" + nombre + "</td>"
                    codigo_tabla += "<td>" + anio_edicion + "</td>";
                    codigo_tabla += "<td>" + paginas + "</td>";
                    codigo_tabla += "<td>" + editorial + "</td>";
                    codigo_tabla += "<td><button onClick='actualizar("+id+");' class='btn btn-warning btn_actualizar'>Actualizar</button></td>";
                    codigo_tabla += "<td><button onClick='eliminar("+id+");' class='btn btn-danger btn_eliminar'>Eliminar</button></td>";
                    codigo_tabla += "</tr>";
                }
                $("#cuerpo").html(codigo_tabla);
            } else{
                console.log("No hay result");
            }
        },
        error: function(e){
            console.log(e);
        }
    });
    
}

function eliminar(id){
    $.ajax({
        url: "LibroController.php?funcion=eliminar",
        data: {
            id: id
        },
        type: "POST",
        success: function(result){
            let resultado = JSON.parse(result);
            console.log(resultado.message);
        }
    });
    listar();
}

// Acá voy a alojar codigo de JQuery
$(document).ready(function(){

    //Funcion con JQuery
    $("#refrescar2").click(function(){
        alert("Refrescando la tabla desde JQuery");
        listar();
    });

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

    setInterval(listar, 3000);
});