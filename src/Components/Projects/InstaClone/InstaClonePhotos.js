import React from 'react';

const slides = [{
  imageUrl: "https://s3.amazonaws.com/aw-personal-website-images/Insta_MainPage.png",
  caption: "Main Page"
  }, {
  imageUrl: "https://s3.amazonaws.com/aw-personal-website-images/Insta_Profile.png",
  caption: "Profile Page"
  }, {
  imageUrl: "https://s3.amazonaws.com/aw-personal-website-images/Insta_About2.png",
  caption: "About Page"
}];


class InstaClonePhotos extends React.Component {
  constructor() {
    super()
    this.state = {
      mainPhotoURL: "https://s3.amazonaws.com/aw-personal-website-images/Insta_MainPage.png",
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
      <div className="instaPhotoContainer">
        <div className="instaMainPhoto">
            <img src={this.state.mainPhotoURL} />
          <div className="instaBlurb">
            <p>{this.state.mainPhotoBlurb}</p>
          </div>
        </div>
        <div className="instaSlideContainer">
          <div className="instaSlides">
            {
              slides.map((slide, index) => (
                <div className={ (index == this.state.activeIndex) ? 'instaActiveSlide': 'instaSlides'}>
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

export default InstaClonePhotos;
