import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../styles/carousel.css"

const ImageSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Carousel {...settings}>

      <Wrap>
        <img src="images/ecommerce.jpg" alt="" srcset="" />
      </Wrap>
      <Wrap>
        <img src="images/cart.png" alt="" srcset="" />
      </Wrap>
      <Wrap>
        <img src="images/content.jpg" alt="" srcset="" />
      </Wrap>
      <Wrap>
        <img src="images/browse.jpg" alt="" srcset="" />
      </Wrap>

    </Carousel >
  );
};

export default ImageSlider;

const Carousel = styled(Slider)`
margin-top: 50px;
//  width: 100vw;

.slick-prev {
  position: absolute;
  left: 20px;
  z-index: 1;
}
.slick-next {
  position: absolute;
  right: 15px;
  z-index: 1;
}

.slick-dots li.slick-active button:before {
  color:#f8961e !important;
}
  .slick-list {
    // overflow: visible;
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  button {
    z-index: 1;
  }

  li.slick-active button::before {
    color: white;
  }
`;

const Wrap = styled.main`
  cursor: pointer;
  img {
    width: 100%;
    height: 400px;
    background-size: cover;
    background-position: center;
    border-radius: 4px;
    border: 4px solid transparent;
    transition: 0.4s;
    box-shadow:rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
