import React, {useState} from "react"
import {Link} from "react-router-dom"

function GalleryChild ({id, gallery, galleryReview, addReview, buyers, setLoggedInBuyer, loggedInBuyer}) {
    const [comment, setComment] = useState ("")
    
    function handleSubmit (e) {
        e.preventDefault();
        fetch("http://localhost:9393/review", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              buyer_id: loggedInBuyer.id,
              gallery_id: gallery.id,
              comment: comment
            }),
          })
            .then((res) => res.json())
            .then((newComment) => addReview(newComment))
          }
    
    return (
        <div>
        <div className="gallery_info">
            <h2 className="gallery_name">{gallery.gallery_name}</h2>
            <Link to={`/buyercollection/paintings/${id}`} >   <img className="gallery_img" src={gallery.image} alt="" />  
            </Link>
            <p>Location: {gallery.location}</p>
            <p>Date: {gallery.date}</p>
            <p>Opening hours: {gallery.hours}</p>
            <p>{gallery.description}</p>
            <p>Reviews: {galleryReview} </p>

        </div>
        <div className="ui form">
            {loggedInBuyer ?
            <form 
            onSubmit={handleSubmit} className="reviews-form">
                <input className='field' type="text" value={comment} placeholder="Tell us what you think!" onChange={(e) => setComment(e.target.value)}
                />
                <button className="ui yellow button">Submit</button>
            </form>
                : null }
        </div>
        </div>

    )
}

export default GalleryChild