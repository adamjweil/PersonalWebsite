import React from 'react';

const slides = [{
  imageUrl: "https://s3.amazonaws.com/aw-personal-website-images/Eat_MainPage.png",
  caption: "Main Page"
  }, {
  imageUrl: "https://s3.amazonaws.com/aw-personal-website-images/Eat_Login.png",
  caption: "Login Zoom"
  }, {
  imageUrl: "https://s3.amazonaws.com/aw-personal-website-images/Eat_RestShowPage.png",
  caption: "Restaurant Show Page"
  }, {
  imageUrl: "https://s3.amazonaws.com/aw-personal-website-images/Eat_NewRest.png",
  caption: "Post a New Restaurant!"
  }, {
  imageUrl: "https://s3.amazonaws.com/aw-personal-website-images/Eat_PostReview.png",
  caption: "Write a Review!"
  }, {
  imageUrl: "https://s3.amazonaws.com/aw-personal-website-images/Eat_ProfilePage.png",
  caption: "User Profile Page"
}];


class EatAndReviewPhotos extends React.Component {
  constructor() {
    super()
    this.state = {
      mainPhotoURL: "https://user-images.githubusercontent.com/25589910/36454158-cae312b8-1668-11e8-8521-303fb4ea218e.png",
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
      <div className="eatPhotoContainer">
        <div className="eatMainPhoto">
            <img src={this.state.mainPhotoURL} />
          <div className="eatBlurb">
            <p>{this.state.mainPhotoBlurb}</p>
          </div>
        </div>
        <div className="eatSlideContainer">
          <div className="eatSlides">
            {
              slides.map((slide, index) => (
                <div className={ (index == this.state.activeIndex) ? 'eatActiveSlide': 'eatSlides'}>
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

export default EatAndReviewPhotos;
