import * as React from "react";
import { Container } from "react-grid-system";
import styled from "styled-components";
import { VerticalSpacer } from "./Spacers";
import { Link } from "gatsby";

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

const MenuItem = styled.div<{ selected: boolean }>`
  color: #1305b1;
  font-size: 16px;
  font-weight: ${(props) => (props.selected ? 700 : 500)};
  cursor: pointer;
  border: none;
  outline: none;
  font-family: "Gowun Batang", serif;

  text-decoration: ${(props) => (props.selected ? "underline" : "none")};

  :hover {
    color: blue;
    font-weight: 700;
    border-bottom: 1px solid #1305b1;
  }
`;

const Header: React.FC = () => {
  const aboutSelected = window.location.pathname.includes("about");
  const casesSelected = window.location.pathname.includes("work");
  const contactSelected = window.location.pathname.includes("contact");

  return (
    <Container>
      <ContentContainer>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Title>ba.</Title>
        </Link>
        <MenuSection>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <MenuItem selected={aboutSelected}>about</MenuItem>
          </Link>
          <VerticalSpacer />
          <Link to="/work" style={{ textDecoration: "none" }}>
            <MenuItem selected={casesSelected}>work</MenuItem>
          </Link>
          <VerticalSpacer />
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <MenuItem selected={contactSelected}>contact</MenuItem>
          </Link>
        </MenuSection>
      </ContentContainer>
    </Container>
  );
};

export default Header;
