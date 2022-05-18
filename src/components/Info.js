import React from 'react';

const Info = ({ Info }) => {

  if (Object.keys(info).length === 0) return null;
  return (
    <div class="card border-light">
      <div class="card-header bg-primary text-light font-weight-bold">
        información Artista
      </div>
      <div class="card-body">
        <img src={info.strArtistThumb} alt="logo artista">
      </div>
    </div>
  );
}

export default Info;
