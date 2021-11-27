import React from "react";
import { Carousel } from "react-bootstrap";

/* ths is the carousel, which is used in home component  */
const Slider = () => {
  return (
    <div className="w-100 h-25">
      <Carousel className="bg-transparent mx-auto">
        <Carousel.Item interval={2000}>
          <img
            className="height d-block w-md-100 mx-auto rounded border border-success"
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/summer-tour-plans-facebook-cover-template-design-7a4fc9b1a8a63d637979b68668e54b88_screen.jpg?ts=1561551504"
            alt=""
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="height d-block w-md-100 mx-auto rounded border border-success"
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/tour-facebook-cover-photo-template-design-721d15530c9b26ed1d3954603b941793_screen.jpg?ts=1561551792"
            alt=""
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="height d-block w-md-100 mx-auto rounded border border-success"
            src="https://image.freepik.com/free-vector/tour-travel-social-media-facebook-cover_262194-80.jpg"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="height d-block w-md-100 mx-auto rounded border border-success"
            src="https://desiznworld.com/wp-content/uploads/2018/05/Travel-Tour-Cover-Templates.jpg"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="height d-block w-md-100 mx-auto rounded border border-success"
            src="https://desiznworld.com/wp-content/uploads/2018/05/Travel-Facebook-Cover.jpg"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="height d-block w-md-100 mx-auto rounded border border-success"
            src="https://desiznworld.com/wp-content/uploads/2018/05/Travel-Agency-Facebook-Cover-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="height d-block w-md-100 mx-auto rounded border border-success"
            src="https://img.freepik.com/free-psd/travel-tours-social-media-facebook-cover-template_503584-116.jpg?size=626&ext=jpg"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="height d-block w-md-100 mx-auto rounded border border-success"
            src="https://image.freepik.com/free-vector/travel-tour-destination-agency-facebook-cover-timeline-template-design_500097-186.jpg"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
