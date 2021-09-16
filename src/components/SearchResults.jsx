
function SearchResults ({filteredSearch, galleries}) {
const searchResults = filteredSearch.map((painting) => {
    let paintingGallery = galleries.filter(gallery => gallery.id === painting.gallery_id)

    return (
        <>
        <img src={painting.image} alt={painting.painting_name} width="300" />
        <h2>{painting.painting_name}</h2>
        <p><b>Artist:</b> {painting.artist_name}</p>
        <p><b>Gallery:</b> {paintingGallery[0].gallery_name}</p>
        <br></br>
        <br></br>
        </>
    )

    
})
    return (
        <div>
            <h2 className="results-title">Results based on search...</h2>
            <br></br>
            <br></br>
            <div className="search-page">
            
            {searchResults}
            </div> 
        </div>

    )
}

export default SearchResults;