import React from "react";
import featart from '../images/Michelangelo_Daniele_da_Volterra_(dettaglio).jpg'

function FeaturedArtist() {

  return (
    <div className="featured-artist">
        <hr />
        <h2>Featured Artist</h2>
        <img id="ft-img" src={featart} width='200px' height=' 200px' alt='logo' />
        <p id='para'>Michelangelo di Lodovico Buonarroti Simoni, known simply as Michelangelo, was an Italian sculptor, painter, architect and poet of the High Renaissance born in the Republic of Florence, who exerted an unparalleled influence on the development of Western art.</p>
    </div>
  );
}

export default FeaturedArtist;
