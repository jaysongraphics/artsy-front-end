import React, {useState} from "react"

function GalleryChild ({gallery, galleryReview, addReview}) {

    const [comment, setComment] = useState ("")

    function handleSubmit (e) {
        e.preventDefault();

        fetch("http://localhost:9393/review", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              comment: comment
            }),
          })
            .then((res) => res.json())
            .then((newComment) => console.log(newComment))
          }

    

    // console.log(reviews)
    

    return (
        <div>
        <div className="gallery_info">
            <h2 className="gallery_name">{gallery.gallery_name}</h2>
            <img className="gallery_img" src={gallery.image} />
            <p>Location: {gallery.location}</p>
            <p>Date: {gallery.date}</p>
            <p>Opening hours: {gallery.hours}</p>
            <p>{gallery.description}</p>
            <p>Reviews: {galleryReview} </p>

        </div>
        <div className="form">
            <form onSubmit={handleSubmit} className="reviews-form">
                <input  type="text" value={comment} placeholder="Tell us what you think!" onChange={(e) => setComment(e.target.value)}/>
                <button className="review-btn">Submit</button>
            </form>
        </div>
        </div>

    )
}

export default GalleryChild