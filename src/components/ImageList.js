import React from 'react';
import ImageCard from './ImageCard.js';
import './ImageList.css';

const ImageList = function (props) {
    //console.log(props.images);
    const images = props.images.map(
      function (image) {
          return < ImageCard key={image.id} image ={image}/>;
        });

    return <div  className="image-list"> {images}</div>;
  };

export default ImageList;
