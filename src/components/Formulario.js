import React, { useState } from 'react';

const Formulario = ({ guardarBusquedaLetra }) => {
  const [busqueda, guardarBusqueda] = useState({
    artista: '',
    cancion: ''
  });
  const [error, guardarError] = useState(false);

  const { artista, cancion } = busqueda;

  //función a cada input para leer su contenido
  const actualizarState = e => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    })
  }

  //consultar las apis
  const buscarInformacion = e => {
    e.preventDefault();

    if (artista.trim() === '' || cancion.trim() === '') {
      guardarError(true);
      return;
    }
    guardarError(false);
    //Todo bien, pasar al componente principal

    guardarBusquedaLetra(busqueda);
  }
  return (
    <div className="bg-info">
      {error ? <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p> : null}
      <div className="container">
        <div className="row">
          <form
            onSubmit={buscarInformacion}
            className="col card text-white bg-transparent mb-5 pt-5 pb-2">

            <fieldset>
              <legend className="text-center">Buscador Letras Canciones</legend>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label for="">ARTISTA</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artista"
                      placeholder="ac-dc"
                      onChange={actualizarState}
                      value={artista} />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label for="">CANCIÓN</label>
                    <input
                      type="text"
                      className="form-control"
                      name="cancion"
                      placeholder="let there be rock"
                      onChange={actualizarState}
                      value={cancion} />
                  </div>
                </div>
              </div>

              <button className="btn btn-primary float-right">BUSCAR</button>

            </fieldset>
            <h2 className="title">Lista de Reproducción Sugerida</h2>
            <div className="contenedor-video">
              <iframe src="https://www.youtube.com/embed/videoseries?list=PLut3UNd_0vy3KjHHmwpiQvxO8LGbP_Mj2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Formulario;
