import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Button from "../button";
import Marginer from "../marginer";

const CardContainer = styled.div`
  box-shadow: 0 1.5px 12px -3px rgba(0, 0, 0, 0.4);
  min-height: 4.3em;
  ${tw`
    flex
    justify-center
    items-center
    rounded-md
    bg-white
    px-1
    py-2
    md:py-3
    md:px-6
    m-1
  `}
`;

const ItemsContainer = styled.div`
  ${tw`
    flex
    items-center
  `}
`;

const Icon = styled.span`
  ${tw`
    text-red-500
    fill-current
    text-xs
    md:text-base
    mr-3
  `}
`;

const Name = styled.span`
  ${tw`
    text-gray-600
    text-xs
    md:text-sm
  `}
`;

const LineSeparator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`
    bg-gray-300
    mx-2
    md:mx-5

  `}
`;

const BookCard = () => {
  return (
    <CardContainer>
      <ItemsContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name>Pick Up Date</Name>
      </ItemsContainer>
      <LineSeparator />
      <ItemsContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name>Return Date</Name>
      </ItemsContainer>
      <Marginer direction="horizontal" margin="2em" />
      <Button text="Book Your Ride" />
    </CardContainer>
  );
};

export default BookCard;
