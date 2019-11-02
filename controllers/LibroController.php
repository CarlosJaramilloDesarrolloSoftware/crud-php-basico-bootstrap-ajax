<?php
session_start();
require_once("../config/conexion.php");
require_once("../models/LibroModel.php");

if(isset($_GET["funcion"])){
    $funcion = $_GET["funcion"];
    $libro = new LibroModel();
    switch($funcion){
        case "registro" :
            if(isset($_POST["id"])){
                $libro->setId($_POST["id"]);
                $libro->setNombre($_POST["nombre"]);
                $libro->setAutor($_POST["autor"]);
                $libro->setAnioEdicion($_POST["anioEdicion"]);
                $libro->setPaginas($_POST["paginas"]);
                $libro->setEditorial($_POST["editorial"]);
                $actualizar = $libro->actualizar();
                echo $actualizar;

            }else{
                $libro->setNombre($_POST["nombre"]);
                $libro->setAutor($_POST["autor"]);
                $libro->setAnioEdicion($_POST["anioEdicion"]);
                $libro->setPaginas($_POST["paginas"]);
                $libro->setEditorial($_POST["editorial"]);

                $guardar = $libro->insertar();
                echo $guardar;
            }
                
            return;
            break;

        case "listar" :
            $libro = new LibroModel();
            $listaLibros = $libro->listar();
            $tituloPagina = "Lista libros";
            include_once("../views/common/cabecera.php");
            include_once("../views/common/alerta.php");
            include_once("../views/common/menu.php");
            include_once("../views/libro/index.php");
            include_once("../views/common/pie.php");
            break;


        case "eliminar":
            if(isset($_GET["id"])){
                $id = $_GET["id"];
                $libro = new LibroModel();
                $eliminar =  $libro->eliminar($id);
                if($eliminar){
                    $_SESSION["alert"] = ["tipo" => "success", "mensaje" => "Libro eliminado con éxito"];
                    header('Location: LibroController.php');
                }else{
                    $_SESSION["alert"] = ["tipo" => "danger", "mensaje" => "Libro no eliminado"];
                }
            }else{
                $_SESSION["alert"] = ["tipo" => "danger", "mensaje" => "No sé a quien eliminar"];
                header('Location: LibroController.php');
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