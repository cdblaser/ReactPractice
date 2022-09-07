import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

//review of map keyword - take an array, modify it, and spits out new array.
//also keeps old array.
//e.g.
//const array1 = [1,2,3];
//array1.map((arr1) => return arr1*10); // arr1 = [10,20,30];

//in console, see warning about 'keys'. React wants you to assign
//every item in a list a unique key so that it is easier to render.

//he also uses a destructure. might want to look up that to see
//how it works

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;
