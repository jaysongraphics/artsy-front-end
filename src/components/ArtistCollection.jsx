import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 350,
    height: 650,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

function ArtistCollection({paintings}) {
  const featuredPaintings = paintings.slice(3,9)
  const classes = useStyles();

  return (
    <div id="feat-painting" className="featured-paintings">
      <div id="inside-painting"className={classes.root}>
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
                actionIcon={
               <Link to={`/artinfo/${painting.id}`} > 
                  <IconButton aria-label={`info about ${painting.name}`} className={classes.icon}>
                       <InfoIcon />
                       </IconButton>
                </Link>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
    
  );
}

export default ArtistCollection;