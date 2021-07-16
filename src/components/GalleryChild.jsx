import React, {useState} from "react"
import {Link} from "react-router-dom"

function GalleryChild ({id, reviews, gallery, galleryReview, addReview, buyers}) {

    const [comment, setComment] = useState ("")
    

    function handleSubmit (e) {
        e.preventDefault();

        let blah = buyers.find(buyer => {
            return (
                reviews.filter(review => review.buyer_id == buyer.id))
        })
        // console.log(blah.id)

        fetch("http://localhost:9393/review", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            //   buyer_id: should come from logged in user
              buyer_id: blah.id,
              gallery_id: gallery.id,
              comment: comment
            }),
          })
            .then((res) => res.json())
            .then((newComment) => addReview(newComment))
        //     .then(console.log())
          }

    

    console.log(id)
    

    return (
        <div>
        <div className="gallery_info">
            <h2 className="gallery_name">{gallery.gallery_name}</h2>
            <Link to={`/buyercollection/paintings/${id}`} >   <img className="gallery_img" src={gallery.image} />  
            </Link>
            <p>Location: {gallery.location}</p>
            <p>Date: {gallery.date}</p>
            <p>Opening hours: {gallery.hours}</p>
            <p>{gallery.description}</p>
            <p>Reviews: {galleryReview} </p>

        </div>
        <div className="ui form">
            <form onSubmit={handleSubmit} className="reviews-form">
                <input className='field' type="text" value={comment} placeholder="Tell us what you think!" onChange={(e) => setComment(e.target.value)}/>
                <button className="ui yellow button">Submit</button>
            </form>
        </div>
        </div>

    )
}

export default GalleryChild