import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  font-size: 32px;
  color: black;
  letter-spacing: 0.05rem;
  .span {
    margin-bottom: 12px;
  }
`;

const Header = () => <HeaderWrapper>Todo List</HeaderWrapper>;

export default Header;
