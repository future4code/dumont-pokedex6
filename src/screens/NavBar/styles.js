import styled from "styled-components";

export const NavBarContainer = styled.div`
  background: #fff;
  border-bottom: 2px solid #f0f0f0;
  height: 80px;
  width: 100%;
  z-index: 10;
  display: flex;
  background-color: #f1f1f1;
`;

export const Logo = styled.img`
  margin: 10px 10px 10px 10px;
  width: 60px;
  height: 60px;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

export const NavButtons = styled.button`
  border-radius: 5px;
  border: 1px solid #25692A;
  background-color: #f1f1f1;
  color: black;
  height: 30px;
  margin: 30px 20px 20px 20px;
  cursor: pointer;
  font-weight: bold;
  padding: auto;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }

`;
