import React from 'react';

const slides = [{
  imageUrl: "https://user-images.githubusercontent.com/25589910/37607795-60a65b46-2b6f-11e8-869c-0cb7f77b2cb4.png",
  caption: "Main Page"
  }, {
  imageUrl: "https://user-images.githubusercontent.com/25589910/37607846-72dbdd2c-2b6f-11e8-8416-e5c16d0ad97f.png",
  caption: "Scrape Results (Top Half)"
  }, {
  imageUrl: "https://user-images.githubusercontent.com/25589910/37607867-7ef82ed0-2b6f-11e8-99cd-9e1433b398ab.png",
  caption: "Scrape Results (Bottom Half)"
  }, {
  imageUrl: "https://user-images.githubusercontent.com/25589910/37607886-88395fbe-2b6f-11e8-8c92-75f72719afd5.png",
  caption: "Scrape History"
}];


class WebScraperPhotos extends React.Component {
  constructor() {
    super()
    this.state = {
      mainPhotoURL: "https://user-images.githubusercontent.com/25589910/37607795-60a65b46-2b6f-11e8-869c-0cb7f77b2cb4.png",
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

export default WebScraperPhotos;
