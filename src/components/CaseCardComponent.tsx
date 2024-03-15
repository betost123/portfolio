import * as React from "react";
import styled from "styled-components";
import PopImage from "../images/pop.png";
import { MediaQuery } from "../helpers";
import { HorizontalSpacer } from "./Spacers";

interface Props {}

const Container = styled.div`
  padding: 56px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 90%;
  height: 500px;
  object-fit: cover;

  ${MediaQuery.XS} {
    width: 100%;
  }
`;

const LightBox = styled.div`
  position: absolute;
  height: 500px;
  width: 15%;
  background-color: #f2f2f2;

  top: 0;
  right: 0;

  ${MediaQuery.XS} {
    display: none;
  }
`;

const TextSection = styled.div`
  position: absolute;
  top: 10%;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: 80%;
  align-items: center;

  ${MediaQuery.XS} {
    left: 0;
  }
`;

const Title = styled.div`
  color: #1305b1;
  font-size: 60px;
  font-family: "Gowun Batang", serif;
  max-width: 250px;
  text-align: center;

  ${MediaQuery.MD} {
    font-size: 24px;
    max-width: 90%;
  }
`;
const Body = styled.div`
  color: #1305b1;
  font-size: 16px;
  font-family: "Gowun Batang", serif;
  max-width: 200px;
  text-align: center;
`;

const Button = styled.button`
  background: linear-gradient(68deg, #1305b1 0%, #9189eb 100%);
  border-radius: 8px;
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Gowun Batang", serif;
  font-size: 16px;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;

  :hover {
    background: #1305b1;
  }
  :active {
    background: #000;
  }
`;

const CaseCardComponent: React.FC<Props> = ({}) => {
  return (
    <Container>
      <div style={{ position: "relative" }}>
        <Image src={PopImage} />
        <LightBox />
      </div>

      <TextSection>
        <Title>Party of Planning</Title>
        <HorizontalSpacer />
        <Body>
          Planning children’s birthday parties at local vendors thorugh an app.
        </Body>
        <HorizontalSpacer />
        <Button>Read more</Button>
      </TextSection>
    </Container>
  );
};

export default CaseCardComponent;
