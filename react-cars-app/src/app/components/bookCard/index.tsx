import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Calendar from "react-calendar";
import tw from "twin.macro";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import Button from "../button";
import Marginer from "../marginer";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

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
    relative
  `}
`;

const ItemContainer = styled.div`
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

const SmallIcon = styled.span`
  ${tw`
    text-gray-500
    fill-current
    text-lg
    ml-1
  `}
`;

const Name = styled.span`
  ${tw`
    text-gray-600
    text-xs
    md:text-sm
    cursor-pointer
    select-none
  `}
`;

const LineSeperator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`
    bg-gray-300
    mx-2
    md:mx-5

  `}
`;

const DateCalendar = styled(Calendar)`
  ${tw`
    absolute
  `}
  max-width: none;
  top: 6em;
  left: 50%;
  transform: translateX(-50%);
`;

const BookCard = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);
  const [returnDate, setReturnDate] = useState<Date>(new Date());
  const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);

  const toggleStartDateCalendar = () => {
    setStartCalendarOpen(!isStartCalendarOpen);
    if (isReturnCalendarOpen) setReturnCalendarOpen(false);
  };

  const toggleReturnDateCalendar = () => {
    setReturnCalendarOpen(!isReturnCalendarOpen);
    if (isStartCalendarOpen) setStartCalendarOpen(false);
  };

  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleStartDateCalendar}>Pick Up Date</Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isStartCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isStartCalendarOpen && (
          <DateCalendar value={startDate} onChange={setStartDate as any} />
        )}
      </ItemContainer>
      <LineSeperator />
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleReturnDateCalendar}>Return Date</Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isReturnCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isReturnCalendarOpen && (
          <DateCalendar value={returnDate} onChange={setReturnDate as any} />
        )}
      </ItemContainer>
      <Marginer direction="horizontal" margin="2em" />
      <Button text="Book Your Ride" />
    </CardContainer>
  );
};

export default BookCard;
