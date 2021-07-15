function PaintingsCard ({painting}) {
    const {image, painting_name, artist_name, country, birthday, price } = painting
    
    return (
        <div className="paintings_card">
            <img src={image} />
            <h3>Title: {painting_name}</h3>
            <h4>Artist name: {artist_name}</h4>
            <h4>Country of Birth: {country}</h4>
            <h4>Date of Birth: {birthday}</h4>
            <h4>Price: ${price}</h4>
        </div>
    )
}

export default PaintingsCard