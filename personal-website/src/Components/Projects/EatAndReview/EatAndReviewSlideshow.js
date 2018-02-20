import React from 'react';
import { Slide, Fade, Zoom } from 'react-slideshow-image';

import SlideShow from '../Slideshow';


let _slides = [{
  imageUrl: "https://user-images.githubusercontent.com/25589910/36454158-cae312b8-1668-11e8-8521-303fb4ea218e.png",
  caption: "Main Page"
}, {
  imageUrl: "https://user-images.githubusercontent.com/25589910/36454093-8381347c-1668-11e8-9691-74b5f44da112.png",
  caption: "Login Zoom"
}, {
  imageUrl: "https://user-images.githubusercontent.com/25589910/36454200-eda666ec-1668-11e8-9173-e809f0ec656c.png",
  caption: "Restaurant Show Page"
}, {
  imageUrl: "https://user-images.githubusercontent.com/25589910/36454214-fe4f01de-1668-11e8-9855-321ce13ad3a8.png",
  caption: "Post a New Restaurant!"
}, {
  imageUrl: "https://user-images.githubusercontent.com/25589910/36454303-4fb026ac-1669-11e8-8bbb-9908ba9df67d.png",
  caption: "Write a Review!"
}, {
  imageUrl: "https://user-images.githubusercontent.com/25589910/36454335-6ebb8794-1669-11e8-97d1-91ac4c84a266.png",
  caption: "User Profile Page"
}];

const EatAndReviewSlideshow = () => {
    return (
        <SlideShow
          slides={_slides} />
    )
};

export default EatAndReviewSlideshow;
