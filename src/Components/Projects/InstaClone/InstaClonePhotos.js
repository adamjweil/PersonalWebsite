import React from 'react';

const slides = [{
  imageUrl: "https://user-images.githubusercontent.com/25589910/32192205-e35ae4a2-bd89-11e7-8e2b-28514266735e.png",
  caption: "Main Page"
  }, {
  imageUrl: "https://user-images.githubusercontent.com/25589910/32192238-02305074-bd8a-11e7-99f5-6ca003f26e2a.png",
  caption: "Profile Page"
  }, {
  imageUrl: "https://user-images.githubusercontent.com/25589910/32192287-20180ca8-bd8a-11e7-81bd-c1fbb085eefc.png",
  caption: "About Page"
}];


class InstaClonePhotos extends React.Component {
  constructor() {
    super()
    this.state = {
      mainPhotoURL: "https://user-images.githubusercontent.com/25589910/32192205-e35ae4a2-bd89-11e7-8e2b-28514266735e.png",
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
