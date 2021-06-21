import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import CardLogoImg from "../../../assets/images/car-logo.png";
import CardLogoDarkImg from "../../../assets/images/car-logo-dark.png";

interface ILogoProps {
  color?: "white" | "black";
  bgColor?: "white" | "dark";
}

const LogoContainer = styled.div`
  ${tw`flex items-center `}
`;

const LogoText = styled.div`
  ${tw`m-1 text-xl font-bold text-black md:text-2xl`}
  ${({ color }: any) => (color === "white" ? tw`text-white` : tw`text-black`)}
`;

const Image = styled.div`
  width: auto;

  ${tw`h-6 md:h-9`}

  img {
    width: auto;
    height: 100%;
  }
`;

const Logo = (props: ILogoProps) => {
  const { color, bgColor } = props;

  let CardLogoSrc = CardLogoImg;
  bgColor === "dark" && (CardLogoSrc = CardLogoDarkImg);

  return (
    <LogoContainer>
      <Image>
        <img src={CardLogoSrc} alt="Yourcar." />
      </Image>
      <LogoText color={color}>Yourcar.</LogoText>
    </LogoContainer>
  );
};

export default Logo;
