import React from 'react';
import { Slide, Fade, Zoom } from 'react-slideshow-image';

import SlideShow from '../Slideshow';


let _slides = [{
  imageUrl: "https://user-images.githubusercontent.com/25589910/36452888-2c7f27dc-1664-11e8-8a1c-c72dfae1e987.png",
  caption: "Main Page"
}, {
  imageUrl: "https://user-images.githubusercontent.com/25589910/36452959-660a725e-1664-11e8-87a1-7af8325fa510.png",
  caption: "Dashboard"
}, {
  imageUrl: "https://user-images.githubusercontent.com/25589910/36453122-f9fe721c-1664-11e8-9f5e-fbad65b9048a.png",
  caption: "Bitcoin Page (Top): Market price data and real-time tweets relating to Bitcoin"
}, {
  imageUrl: "https://user-images.githubusercontent.com/25589910/36453231-5cffa066-1665-11e8-92dc-93a52f8a3185.png",
  caption: "Bitcoin Page (Bottom): Real-time RSS feeds relating to Bitcoin"
}, {
  imageUrl: "https://user-images.githubusercontent.com/25589910/36453456-0c20480c-1666-11e8-83d8-8369104cfd98.png",
  caption: "Wallets Page: Shows current balances in USD, BTC, ETH, and LTC wallets, as well as the most recent 25 transactions and the associated details"
}, {
  imageUrl: "https://user-images.githubusercontent.com/25589910/36453510-448bd7ce-1666-11e8-8e64-633fab9bfda5.png",
  caption: "Buying/Selling"
}, {
  imageUrl: "https://user-images.githubusercontent.com/25589910/36453545-624126d4-1666-11e8-9cf0-ddbeafd47740.png",
  caption: "P2P Transfer Made Easy"
}];

const CoinstacheSlideshow = () => {
    return (
        <SlideShow
          slides={_slides} />
    )
};

export default CoinstacheSlideshow;
