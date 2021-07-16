import {useState, useEffect} from "react"
import ArtistSearch from "./ArtInfo"
import PaintingSearch from "./PaintingSearch"
import GallerySearch from "./GallerySearch.jsx"

function SearchResults ({filteredArtist, filteredPaintings, filteredGalleries, paintings, galleries, reviews}) {
    const [artistSearch, setArtistSearch] = useState(false)
    const [paintingSearch, setPaintingsSearch] = useState(false)
    const [gallerySearch, setGallerySearch] = useState (false)

    useEffect(() =>{
        if (filteredArtist.length > 0) {
            setArtistSearch(true)
        } else {
            setArtistSearch(false)
        }
        if (filteredPaintings.length > 0) {
            setPaintingsSearch(true)
        } else {
            setPaintingsSearch(false)
        }
        if (filteredGalleries.length > 0) {
            setGallerySearch(true)
        } else {
            setGallerySearch(false)
        }
    },[filteredArtist, filteredPaintings,filteredGalleries])


    // function SearchDisplay() {
    //     if (!artistSearch) {
    //         <ArtistSearch />
    //     } else if (!paintingSearch) {
    //         <PaintingSearch />
    //     }else if (!gallerySearch) {
    //         <GallerySearch />
    //     } else {
    //         console.log("searching..")
    //     }
    // }
    return (
        <div>
            {artistSearch && <ArtistSearch /> }
            {paintingSearch && <PaintingSearch />}
            {gallerySearch && <GallerySearch />}
  
        </div>
    )
}

export default SearchResults