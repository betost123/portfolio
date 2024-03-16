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

const Work: React.FC = () => {
  return (
    <ContentContainer>
      <Header />

      <CasesSection>
        <Container>
          <CaseCardComponent
            title="Party of Planning"
            imageSource={PopImage}
            description="Planning children’s birthday parties at local vendors thorugh an app."
            url="/work/pop"
          />
          <CaseCardComponent
            title="Satcube"
            imageSource={SatcubeImage}
            description="Enabling portable wi-fi across the globe via satellite communication."
            url="/work/satcube"
          />
          <CaseCardComponent
            title="Baribuddy"
            imageSource={BaribuddyImage}
            description="Manage your health after gastric surgeries."
            url="/work/baribuddy"
          />
          <CaseCardComponent
            title="VasaKök"
            imageSource={VasaImage}
            description="Renovate your kitchen at a lower price by mounting new cabinets at existing frames."
            url="/work/vasakok"
          />
          <CaseCardComponent
            title="Vinozin"
            imageSource={VinozinImage}
            description="Plan wine tastings at a local wine bar or at home with your friends."
            url="/work/vinozin"
          />
          <CaseCardComponent
            title="Fortus"
            imageSource={FortusImage}
            description="Payment terminal with integrated support for managing restaurants."
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

export default Work;
