import React from "react";
import styled from "styled-components";

const Intro = () => {
  return (
    <Container>
      <Wrap>
        <img src="/images/food.jpg" alt="" />
        <video autoPlay={true} muted={true} loop={true} playsInline={true}>
          <source src="/videos/food.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/rental.jpg" alt="" />
        <video autoPlay={true} muted={true} loop={true} playsInline={true}>
          <source src="/videos/food.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/brand.jpg" alt="" />
        <video autoPlay={true} muted={true} loop={true} playsInline={true}>
          <source src="/videos/food.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/store.jpg" alt="" />
        <video autoPlay={true} muted={true} loop={true} playsInline={true}>
          <source src="/videos/food.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/pickup.png" alt="" />
        <video autoPlay={true} muted={true} loop={true} playsInline={true}>
          <source src="/videos/food.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/charger.jpg" alt="" />
        <video autoPlay={true} muted={true} loop={true} playsInline={true}>
          <source
            src="/videos/food.mp4"
            type="video/mp4"
          />
        </video>
      </Wrap>
    </Container>
  );
};

export default Intro;

const Container = styled.div`
  margin-top:80px;
  margin-bottom:60px;
  display: grid;
  grid-gap: 22px;
  padding: 30px 0px 26px;
  overflow-x:none;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    opacity: 0;
    z-index: -999;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 26px 30px -10px,
      rgb(0 0 0 / 70%) 0px 16px 10px -10px;

    video {
      opacity: 1;
    }

    img{
      opacity: 0;
    }
  }
`;
