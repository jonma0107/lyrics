import React from 'react';

const Info = ({ info }) => {

  if (Object.keys(info).length === 0) return null;

  const { strArtistThumb, strGenre, strBiographyES } = info;
  return (
    <div class="card border-light">
      <div class="card-header bg-primary text-light font-weight-bold">
        Información Artista
      </div>
      <div class="card-body">
        <img src={strArtistThumb} alt="logo artista" />
        <p class="card-text">Género: {strGenre}</p>
        <h2 class="card-text">Biografía:</h2>
        <p class="card-text">{strBiographyES}</p>
        <p class="card-text">
          <a href={`https://${info.strWebsite}`} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-website"></i>
          </a>
          <a href={`https://${info.strFacebook}`} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://github.com/jonma0107" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Info;
