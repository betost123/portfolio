import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Container } from "react-grid-system";
import CaseCardComponent from "../components/CaseCardComponent";
import PopImage from "../images/pop.png";
import SatcubeImage from "../images/satcube.png";
import VasaImage from "../images/vasak.png";
import BaribuddyImage from "../images/baribuddy.png";
import VinozinImage from "../images/vinozin.png";
import SaabImage from "../images/saab.png";
import FortusImage from "../images/fortus.png";

const ContentContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #f2f2f2;
  margin: -8px;
`;

const CasesSection = styled.div`
  width: 100vw;
  background-color: #e4e4e4;
`;

const About: React.FC = () => {
  return (
    <ContentContainer>
      <Header />
      about
      <CasesSection>
        <Container>
          <CaseCardComponent
            title="Satcube"
            imageSource={SatcubeImage}
            description="Enabling portable wi-fi across the globe via satellite communication."
            url="/work/satcube"
          />
        </Container>
      </CasesSection>
      <Container>
        <Footer />
      </Container>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Gowun+Batang&display=swap"
        rel="stylesheet"
      />
    </ContentContainer>
  );
};

export default About;
