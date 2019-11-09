<div class="container-fluid">
    <h1>Libros</h1>
    <div class="row">

        <div class="col-md-4">
            <div class="card">
                <div class="card-body">
                    <header>
                        <h2>Formulario: <b><span id="titulo_formulario">Nuevo libro</span></b></h2>
                    </header>

                    <form action="" method="post">
                        <div class="form-group">
                            <label for="nombre">Nombre</label>
                            <input type="text" class="form-control" id="nombre" placeholder="Ingrese nombre" name="nombre" value="">
                        </div>
                        <div class="form-group">
                            <label for="autor">Autor</label>
                            <input type="text" class="form-control" id="autor" placeholder="Ingrese autor" name="autor" value="">
                        </div>
                        <div class="form-group">
                            <label for="anioEdicion">Año edición</label>
                            <input type="number" class="form-control" id="anioEdicion" placeholder="Ingrese año de edición" name="anioEdicion" value="">
                        </div>
                        <div class="form-group">
                            <label for="paginas">Páginas</label>
                            <input type="number" class="form-control" id="paginas" placeholder="Ingrese páginas" name="paginas" value="">
                        </div>
                        <div class="form-group">
                            <label for="editorial">Editorial</label>
                            <input type="text" class="form-control" id="editorial" placeholder="Ingrese editorial" name="editorial" value="">
                        </div>
                        <input type="hidden" name="id" id="id" value="">
                        
                    </form>
                    <button type="" id="guardar" class="btn btn-primary">Guardar</button> <a href="LibroController.php" class="btn btn-info">Volver al inicio</a>
                </div>
            </div>
        </div>

        <div class="col-md-8">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Autor</th>
                        <th scope="col">Año publicación</th>
                        <th scope="col">Páginas</th>
                        <th scope="col">Editorial</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    <?php
                    // El siguiente código muestra la lista generada por PHP 
                    /*foreach ($listaLibros as $libro) { ?>
                        
                        <tr>
                            <th scope="row"><?= $libro->getId() ?></th>
                            <td><?= $libro->getNombre() ?></td>
                            <td><?= $libro->getAutor() ?></td>
                            <td><?= $libro->getAnioEdicion() ?></td>
                            <td><?= $libro->getPaginas() ?></td>
                            <td><?= $libro->getEditorial(); ?></td>
                            <td><button registro_id="<?= $libro->getId() ?>" class="btn btn-warning btn_actualizar">Actualizar</button></td>
                            <td><button registro_id="<?= $libro->getId() ?>" class="btn btn-danger btn_eliminar">Eliminar</button></td>
                        </tr>

                    <?php }  */ ?>

                </tbody>
            </table>
        </div>
    </div>
</div>
