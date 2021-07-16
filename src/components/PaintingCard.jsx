function PaintingsCard ({painting}) {
    const {image, painting_name, artist_name, country, birthday, price } = painting
    
    return (
        <div className ="paintings_card">
            <img className = "imgcard"src={image} />
            <h3 className = "title-paint">Title: {painting_name}</h3>
            <h4 className = "detail-info">Artist name: {artist_name}</h4>
            <h4 className = "detail-info">Country of Birth: {country}</h4>
            <h4 className = "detail-info">Date of Birth: {birthday}</h4>
            <h4 className = "detail-info">Price: ${price}</h4>
        </div>
    )
}

export default PaintingsCard