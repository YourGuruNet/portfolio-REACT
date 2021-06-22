import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { PortfolioContext } from "../Context";
import FeaturedCard from "./FeaturedCard";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
// import LeftTagButton from "../svg/LeftTagButton";
// import RightTagButton from "../svg/RightTagButton";
// import SearchItem from "./SearchItem";
// import { tags } from "../constants";
const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  autoplay: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  variableWidth: true,
  adaptiveHeight: true,
  displayLeftArrow: false,
  displayRightArrow: false,
  nextArrow: <BiRightArrow />,
  prevArrow: <BiLeftArrow />,
  responsive: [
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default class FeaturedCarousel extends Component {
  static contextType = PortfolioContext;
  render() {
    let { featuredPortfolio: portfolio } = this.context;

    return (
      <FeaturedCarouselWrapper>
        <Slider {...settings}>
          {portfolio.map((portfolios) => {
            return (
              <div className="container">
                <FeaturedCard key={portfolios.id} portfolios={portfolios} />
              </div>
            );
          })}
        </Slider>
      </FeaturedCarouselWrapper>
    );
  }
}

const FeaturedCarouselWrapper = styled.div`
  cursor: pointer;
  max-width: 140rem;
  height: 22rem;
  margin: 0 auto;
  display: block;
  .container {
    max-width: 40rem;
    height: 22rem;
    padding: 17px;
  }
  .container:first-child {
    padding-left: 0;
  }
  .slick-disabled {
    opacity: 0% !important;
  }
  .slick-dots button:before {
    transform: scale(1.5);
    color: White !important;
  }

  @media screen and (max-width: 500px) {
    .slick-dots button:before {
      margin-top: -2rem;
    }
  }
`;
