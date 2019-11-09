<div class="container-fluid">
    <h1>Libros</h1>
    <div class="row">

        <div class="col-md-4">
            <div class="card">
                <div class="card-body">
                    <header>
                        <h2 class="btn_actualizar">Formulario: <b><span id="titulo_formulario">Nuevo libro</span></b></h2>
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
           
            <!-- Boton para refrescar con JS -->
            <button id="refrescar1" onClick="refrescar1();" class="btn btn-info">Refrescar tabla 1</button>
            
            <!-- Boton para refrescar con JQuery + JS -->
            <button id="refrescar2" class="btn btn-info">Refrescar tabla 2</button>
            <br>
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
                <tbody id="cuerpo">



                </tbody>
            </table>
        </div>
    </div>
</div>
