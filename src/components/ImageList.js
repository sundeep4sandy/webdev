import React from 'react';

const ImageList = function (props) {
    //console.log(props.images);
    const images = props.images.map(
      function (image) {
          return <img src={image.urls.regular} key={image.id} alt={image.description}/>;
        });

    return <div> {images}</div>;
  };

export default ImageList;
