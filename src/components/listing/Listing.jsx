import React from 'react';
import Title from './Title';
import Description from './Description';
import Price from './Price';
import Image from './Image';
import Category from './Category';
import Rating from './Rating';

const Listing = ({ title, description, price, image, category, rating }) => {
  // Check if product exists and has the necessary fields
  if (!title || !price || !image || !category || !rating) {
    return <p>Loading...</p>;  // Display a loading message or placeholder while data is being fetched
  }

  return (
    <div className="listing-items card">
      <div className='image-over'>
      <Image imageProp={image} className="card-img-top"></Image>
      </div>
      <div className='overlay-text'>

      <Rating ratingProp={rating} />
      <Title titleProp={title} />
      <Price priceProp={price} />

      </div>
      <div className='listing-desc'>
      <Category categoryProp={category} />
        <Description descriptionProp={description} />
      </div>
    </div>
  );
};

export default Listing;
