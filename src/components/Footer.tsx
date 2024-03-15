import * as React from "react";
import { Col, Row } from "react-grid-system";
import CoolBetty from "../images/coolbetty.png";
import styled from "styled-components";
import { MediaQuery } from "../helpers";
import { HorizontalSpacer } from "./Spacers";

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

const Title = styled.div`
  color: #1305b1;
  font-size: 90px;
  font-family: "Gowun Batang", serif;

  ${MediaQuery.MD} {
    font-size: 56px;
  }
`;

const SubtitleFat = styled.div`
  color: #1305b1;
  font-size: 60px;
  font-family: "Gowun Batang", serif;
  font-weight: 700;

  ${MediaQuery.MD} {
    font-size: 56px;
  }
`;
const Subtitle = styled.div`
  color: #1305b1;
  font-size: 60px;
  font-family: "Gowun Batang", serif;

  ${MediaQuery.MD} {
    font-size: 56px;
  }
`;

const Footer: React.FC = () => {
  return (
    <div>
      <HorizontalSpacer />

      <Row>
        <Col lg={8}>
          <Title>Betina Andersson</Title>
          <HorizontalSpacer />

          <HorizontalSpacer />

          <SubtitleFat>Let's connect!</SubtitleFat>
          <Subtitle>anderssonbetina@icloud.com</Subtitle>
        </Col>
        <Col lg={4}>
          <Image src={CoolBetty} />
        </Col>
      </Row>
      <HorizontalSpacer />
      <HorizontalSpacer />
    </div>
  );
};

export default Footer;
