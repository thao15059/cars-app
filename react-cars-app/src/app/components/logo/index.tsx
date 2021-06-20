import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import CardLogoImg from "../../../assets/images/car-logo.png";

const LogoContainer = styled.div`
  ${tw`flex items-center `}
`;

const LogoText = styled.div`
  ${tw`m-1 text-xl font-bold text-black md:text-2xl`}
`;

const Image = styled.div`
  width: auto;

  ${tw`h-6 md:h-9`}

  img {
    width: auto;
    height: 100%;
  }
`;

const Logo = () => {
  return (
    <LogoContainer>
      <Image>
        <img src={CardLogoImg} alt="logo" />
      </Image>
      <LogoText>Yourcar.</LogoText>
    </LogoContainer>
  );
};

export default Logo;
