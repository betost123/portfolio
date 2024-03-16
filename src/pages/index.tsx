import * as React from "react";
import type { HeadFC } from "gatsby";
import styled from "styled-components";
import Header from "../components/Header";
import { Container, Row } from "react-grid-system";
import { HorizontalSpacer, VerticalSpacer } from "../components/Spacers";
import BettanImage from "../images/hardworkingbetty.png";
import { MediaQuery } from "../helpers";
import CaseCardComponent from "../components/CaseCardComponent";
import Footer from "../components/Footer";
import { ArrowRightIcon } from "../components/ArrowRightIcon";
import PopImage from "../images/pop.png";
import SatcubeImage from "../images/satcube.png";

const ContentContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #f2f2f2;
  margin: -8px;
`;

const HeroSection = styled.div`
  position: relative;
`;

const Title = styled.div`
  color: #1305b1;
  font-size: 96px;
  font-family: "Gowun Batang", serif;

  ${MediaQuery.MD} {
    font-size: 56px;
  }
`;

const Subtitle = styled.div`
  color: #9189eb;
  font-size: 40px;
  margin-top: -36px;
  font-family: "Gowun Batang", serif;

  ${MediaQuery.MD} {
    margin-top: -16px;
    font-size: 32px;
  }
`;

const Body = styled.div`
  color: #1305b1;
  font-size: 20px;
  width: 50%;
  font-family: "Gowun Batang", serif;

  ${MediaQuery.MD} {
    font-size: 16px;
  }
`;

const Image = styled.img`
  width: 30%;
  height: 100%;
  object-fit: contain;

  position: absolute;
  right: 56px;
  bottom: 0;
`;

const CasesSection = styled.div`
  width: 100vw;
  background-color: #e4e4e4;
`;

const CasesTitle = styled.div`
  color: #1305b1;
  font-size: 36px;
  font-family: "Gowun Batang", serif;
`;

const SeeMoreTitle = styled.div`
  color: white;
  font-size: 36px;
  font-family: "Gowun Batang", serif;
`;

const ActionBanner = styled.div`
  background: linear-gradient(68deg, #1305b1 0%, #9189eb 100%);
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IndexPage: React.FC = () => {
  return (
    <div>
      <ContentContainer>
        <Container>
          <Header />
          <HorizontalSpacer />
          <HeroSection>
            <div>
              <Title>SOFTWARE ENGINEER</Title>
              <Subtitle>BETINA ANDERSSON</Subtitle>
              <HorizontalSpacer />
              <Body>
                Empowering digital experiences through innovative software
                solutions, I specialize in crafting seamless frontend and mobile
                applications. With a meticulous eye for detail and a passion for
                delivering excellence, I guide projects from inception to
                fruition, ensuring both product owners and end users receive
                nothing short of exceptional quality. Let's collaborate to bring
                your visions to life, one line of code at a time.
              </Body>
            </div>

            <Image src={BettanImage} />
          </HeroSection>

          <HorizontalSpacer />
          <HorizontalSpacer />
          <HorizontalSpacer />
        </Container>

        <CasesSection>
          <HorizontalSpacer />
          <Container>
            <CasesTitle>selected work</CasesTitle>
            <HorizontalSpacer />
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
          </Container>

          <HorizontalSpacer />
          <HorizontalSpacer />
        </CasesSection>

        <ActionBanner>
          <Row justify="center" align="center">
            <SeeMoreTitle>see more cases</SeeMoreTitle>
            <VerticalSpacer />
            <ArrowRightIcon />
          </Row>
        </ActionBanner>

        <HorizontalSpacer />
        <HorizontalSpacer />
        <Container>
          <Footer />
        </Container>
      </ContentContainer>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Gowun+Batang&display=swap"
        rel="stylesheet"
      />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Betina Andersson</title>;
