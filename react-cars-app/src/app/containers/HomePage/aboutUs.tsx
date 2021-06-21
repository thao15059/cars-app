import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";
import JeepImg from "../../../assets/images/jeep.png";

const AboutUsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    items-center
    2xl:justify-center
    py-4
    px-7
    md:px-0
    bg-white
  `}
`;

const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -15px;

  img {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }

  @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
    margin-left: 0;
  }
`;

const InfoContainer = styled.div`
  ${tw`
    lg:w-1/2
    flex
    flex-col
    md:ml-6
    2xl:ml-16

  `}
`;

const Title = styled.h1`
  ${tw`
    text-black
    text-2xl
    md:text-5xl
    font-extrabold
    md:font-black
    md:leading-normal

  `}
`;

const InfoText = styled.p`
  ${tw`
    max-w-2xl
    text-gray-500
    text-sm
    md:text-base
    mt-4
    font-normal
  `}
`;

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <CarContainer>
        <img src={JeepImg} alt="" />
      </CarContainer>
      <InfoContainer>
        <Title>Fell The Best Experience with Our Rental Deals</Title>
        <InfoText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
          deleniti autem recusandae quisquam debitis ratione soluta molestias,
          eius mollitia reprehenderit tempore cum maiores architecto a doloribus
          officiis nostrum aspernatur quos.
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
};

export default AboutUs;
