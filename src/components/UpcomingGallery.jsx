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


function UpcomingGallery({galleries}) {
  const classes = useStyles();

  const sortedGallery = galleries.sort((a,b) => {
    let da = new Date(a.date)
    let db = new Date(b.date)
    return da -db;
  })

  // console.log(sortedGallery)
  
  // const upcomingGalleries = sortedGallery.map(gallery => {
  //   return (
  //     <div className="">
  //       <h2 className="featured_title">{gallery.gallery_name}</h2>
  //       <p>{gallery.date}</p>
  //       <img className="featured_img" src={gallery.image} />
  //     </div>

  //   )
  // })

  //add clickEvent for Galleries

  

  return (
    <div className="featured-galleries">
      {/* <h1 className="">Featured Galleries</h1> */}
      <div className={classes.root}>
        <ImageList rowHeight={300} cols={1} className={classes.imageList}>
          <ImageListItem key="Subheader" style={{ height: 'auto' }}>
            <ListSubheader component="div">Featured Galleries</ListSubheader>
          </ImageListItem>
          {sortedGallery.map((gallery) => (
            <ImageListItem key={gallery.image}>
              <img src={gallery.image} alt={gallery.gallery_name} />
              <ImageListItemBar
                title={gallery.gallery_name} 
                subtitle={<span>End Date: {gallery.date}</span>}
                actionIcon={
                  <IconButton aria-label={`info about ${gallery.gallery_name}`} className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>



    
    // <div className="">
    //   <h1 className="featured_heading">Featured Galleries</h1>

    //   <div className="featured">
    //     {upcomingGalleries}
    //   </div>
      
    // </div>
)}

export default UpcomingGallery;