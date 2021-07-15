import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));



function ArtistCollection({paintings, buyers}) {

  const featuredPaintings = paintings.slice(3,9)

  // const collection = featuredPaintings.map (painting => {
  //   return (
  //     <img src={painting.image} />
  //   )
  // })

  const classes = useStyles();

  return (
    <div className="featured-paintings">
      <div className={classes.root}>
        <ImageList rowHeight={180} cols={1} className={classes.imageList}>
          <ImageListItem key="Subheader"  style={{ height: 'auto' }}>
            <ListSubheader component="div">Featured Paintings</ListSubheader>
          </ImageListItem>
          {featuredPaintings.map((painting) => (
            <ImageListItem key={painting.image}>
              <img src={painting.image} alt={painting.painting_name} />
              <ImageListItemBar
                title={painting.painting_name}
                subtitle={<span>by: {painting.artist_name}</span>}
                // actionIcon={
                //   <IconButton aria-label={`info about ${painting.name}`} className={classes.icon}>
                //     <InfoIcon />
                //   </IconButton>
                // }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
    
  );

  // const collection = paintings.map (buyer => {
  //   const artWork = buyers.filter(painting => buyer.id == painting.id)
  //   console.log(artWork)
  //   // artWork.map(painting =>{
  //   //   return (
  //   //     <div>
  //   //       <img src={painting.image} />
  //   //     </div>
  //   //   )
  //   // }) 
  // })

  // console.log(collection)

  // return (
  //   <div className="artist-collection">
  //     <h1>ArtistCollection</h1>
  //     {collection}
  //   </div>
// )
}

export default ArtistCollection;