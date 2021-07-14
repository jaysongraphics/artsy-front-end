import React from "react";



function Gallery({paintings, galleries, reviews}) {
  galleryInfo = galleries.map (gallery => {
    return (
      <div>
        <h2>{gallery.gallery_name}</h2>
        <p>{gallery.location}</p>
        <p>{gallery.date}</p>
        <p>{gallery.time}</p>
      </div>)

  

  })  
  
  return (
    <div >
      {galleryInfo}    
    </div>
  );
}

export default Gallery;