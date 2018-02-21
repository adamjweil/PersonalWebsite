import React from 'react';

const slides = [{
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
