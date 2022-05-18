import React from 'react';

const Formulario = () => {
  return (
    <div class="bg-info">
      <div class="container">
        <div class="row">
          <form action="" class="col card text-white bg-transparent mb-5 pt-5 pb-2">
            <fieldset>
              <legend class="text-center">Buscador Letras Canciones</legend>

              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="">ARTISTA</label>
                    <input
                      type="text"
                      class="form-control"
                      name="artista"
                      placeholder="Nombre Artista" />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <label for="">CANCIÓN</label>
                    <input
                      type="text"
                      class="form-control"
                      name="cancion"
                      placeholder="Nombre Canción" />
                  </div>
                </div>
              </div>

              <button class="btn btn-primary float-right">BUSCAR</button>

            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Formulario;
