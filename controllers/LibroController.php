<?php
session_start();
require_once("../config/conexion.php");
require_once("../models/LibroModel.php");

if(isset($_GET["funcion"])){
    $funcion = $_GET["funcion"];
    $libro = new LibroModel();
    switch($funcion){
        case "registro" :
            if(isset($_POST["id"]) && $_POST["id"] != "" && $_POST["id"] != null){
                $libro->setId($_POST["id"]);
                $libro->setNombre($_POST["nombre"]);
                $libro->setAutor($_POST["autor"]);
                $libro->setAnioEdicion($_POST["anioEdicion"]);
                $libro->setPaginas($_POST["paginas"]);
                $libro->setEditorial($_POST["editorial"]);
                $actualizar = $libro->actualizar();
                if($actualizar){
                    $respuesta = 
                    [
                        "success" => "ok",
                        "message" => "Registro actualizado con exito",
                        "data" => []
                    ];
                    echo json_encode($respuesta);
                }

            }else{
                $libro->setNombre($_POST["nombre"]);
                $libro->setAutor($_POST["autor"]);
                $libro->setAnioEdicion($_POST["anioEdicion"]);
                $libro->setPaginas($_POST["paginas"]);
                $libro->setEditorial($_POST["editorial"]);
                $guardar = $libro->insertar();
                if($guardar){
                    $respuesta = 
                    [
                        "success" => "ok",
                        "message" => "Registro guardado con exito",
                        "data" => []
                    ];
                    echo json_encode($respuesta);
                }
            }
                
            return;
            break;
        
        case "buscar":
            if(isset($_POST["id"])){
                $libro->setId($_POST["id"]);
                $consulta = $libro->consultar();
                if($consulta){
                    $respuesta = 
                    [
                        "success" => "ok",
                        "message" => "Libro encontrado",
                        "data" => [$consulta]
                    ];
                    echo json_encode($respuesta);
                }
            }
            return;
            break;


        case "listar" :
            $listaLibros = $libro->listar();
            $tituloPagina = "Lista libros";
            include_once("../views/common/cabecera.php");
            include_once("../views/common/alerta.php");
            include_once("../views/common/menu.php");
            include_once("../views/libro/index.php");
            include_once("../views/common/pie.php");
            break;

        case "listarajax" :
            $listaLibros = $libro->listar();
            $respuesta = 
            [
                "success" => "ok",
                "message" => "Lista de libros",
                "data" => [$listaLibros]
            ];
            echo json_encode($respuesta);
            break;

        case "eliminar":
            if(isset($_POST["id"])){

                $libro->setId($_POST["id"]);
                $eliminar =  $libro->eliminar();

                if($eliminar){
                    $respuesta = 
                    [
                        "success" => "ok",
                        "message" => "Libro eliminado",
                        "data" => []
                    ];
                    // La json_encode convierte elementos de PHP a formato JSON
                    echo json_encode($respuesta);
                }else{
                    $respuesta = 
                    [
                        "success" => "ok",
                        "message" => "Libro no encontrado",
                        "data" => []
                    ];
                    // La json_encode convierte elementos de PHP a formato JSON
                    echo json_encode($respuesta);
                }
            }else{
                $respuesta = 
                [
                    "success" => "no",
                    "message" => "No se envió el ID",
                    "data" => []
                ];
                echo json_encode($respuesta);
            }
            break;

        default:
            header('Location: LibroController.php');
    }
}else{
    header('Location: LibroController.php?funcion=listar');
    //include_once("../views/common/error.php");
}



?>