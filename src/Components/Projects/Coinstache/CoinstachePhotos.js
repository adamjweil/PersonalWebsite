import React from 'react';

const slides = [{
  imageUrl: "https://s3.amazonaws.com/aw-personal-website-images/Coin_MainPage.png",
  caption: "Main Page"
}, {
  imageUrl: "https://s3.amazonaws.com/aw-personal-website-images/Coin_Dashboard.png",
  caption: "Dashboard"
}, {
  imageUrl: "https://s3.amazonaws.com/aw-personal-website-images/Coin_BTCtop.png",
  caption: "Bitcoin Page (Top): Market price data and real-time tweets relating to Bitcoin"
}, {
  imageUrl: "https://s3.amazonaws.com/aw-personal-website-images/Coin_BTCbottom.png",
  caption: "Bitcoin Page (Bottom): Real-time RSS feeds relating to Bitcoin"
}, {
  imageUrl: "https://s3.amazonaws.com/aw-personal-website-images/Coin_Wallets.png",
  caption: "Wallets Page: Shows current balance in USD, BTC, ETH, and LTC wallets, as well as most recent 25 transactions and the associated details"
}, {
  imageUrl: "https://s3.amazonaws.com/aw-personal-website-images/Coin_BuySell.png",
  caption: "Buying/Selling"
}, {
  imageUrl: "https://s3.amazonaws.com/aw-personal-website-images/Coin_P2P.png",
  caption: "P2P Transfer Made Easy"
}];

class CoinstachePhotos extends React.Component {
  constructor() {
    super()
    this.state = {
      mainPhotoURL: "https://s3.amazonaws.com/aw-personal-website-images/Coin_MainPage.png",
      mainPhotoBlurb: "Main Page",
      activeIndex: 0
    };
    this.jumpToSlide = this.jumpToSlide.bind(this);
  }
  jumpToSlide(index) {
    this.setState({
      activeIndex: index,
      mainPhotoURL: slides[index].imageUrl,
      mainPhotoBlurb: slides[index].caption
    });
  }
  render(){
    return (
      <div className="coinPhotoContainer">
        <div className="coinMainPhoto">
            <img src={this.state.mainPhotoURL} style={{height:'450px',width:'300px;'}}/>
          <div className="coinBlurb">
            <p>{this.state.mainPhotoBlurb}</p>
          </div>
        </div>
        <div className="coinSlideContainer">
          <div className="coinSlides">
            {
              slides.map((slide, index) => (
                <div className={ (index == this.state.activeIndex) ? 'coinActiveSlide': 'coinSlides'}>
                  <button><img src={ slide.imageUrl }
                    onClick={ (event)=> this.jumpToSlide(index) } />
                </button>

              </div>
            ))
          }
        </div>
        </div>
      </div>
    )
  }
};

export default CoinstachePhotos;
