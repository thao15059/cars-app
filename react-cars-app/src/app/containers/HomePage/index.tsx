import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import BookCard from "../../components/bookCard";
import Marginer from "../../components/marginer";
import NavBar from "../../components/navbar";
import AboutUs from "./aboutUs";
import BookingSteps from "./bookingSteps";
import TopSection from "./topSection";

const PageContainer = styled.div`
  ${tw`flex flex-col items-center w-full h-full overflow-x-hidden `}
`;

const HomePage = () => {
  return (
    <PageContainer>
      <NavBar />
      <TopSection />
      <Marginer direction="vertical" margin="4em" />
      <BookCard />
      <Marginer direction="vertical" margin="8em" />
      <BookingSteps />
      <Marginer direction="vertical" margin="8em" />
      <AboutUs />
    </PageContainer>
  );
};

export default HomePage;
