import * as React from "react";
import { Container } from "react-grid-system";
import styled from "styled-components";
import { VerticalSpacer } from "./Spacers";

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-top: 16px;
`;

const Title = styled.div`
  color: #1305b1;
  font-size: 36px;
  font-family: "Gowun Batang", serif;
`;

const MenuSection = styled.div`
  display: flex;
  flex-direction: row;
`;

const MenuItem = styled.button<{ selected: boolean }>`
  color: #1305b1;
  font-size: 16px;
  font-weight: ${(props) => (props.selected ? 700 : 500)};
  cursor: pointer;
  border: none;
  outline: none;
  font-family: "Gowun Batang", serif;

  :hover {
    border-bottom: 1px solid #1305b1;
  }
`;

const Header: React.FC = () => {
  const aboutSelected = true;
  const casesSelected = false;
  const contactSelected = false;

  return (
    <Container>
      <ContentContainer>
        <Title>ba.</Title>
        <MenuSection>
          <MenuItem selected={aboutSelected}>about</MenuItem>
          <VerticalSpacer />
          <MenuItem selected={casesSelected}>cases</MenuItem>
          <VerticalSpacer />
          <MenuItem selected={contactSelected}>contact</MenuItem>
        </MenuSection>
      </ContentContainer>
    </Container>
  );
};

export default Header;
