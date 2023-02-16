import React from 'react';
import styled from 'styled-components';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  return (
    <Wrapper>
      <h1 className="logo">devfinder</h1>
      <ThemeSwitcher />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 36px;

  .logo {
    font-size: 2.6rem;
    color: var(--color-secondary);
  }
`;

export default Header;
