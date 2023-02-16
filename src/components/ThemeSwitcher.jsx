import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import { useAppContext } from '../context/AppProvider';

const ThemeSwitcher = () => {
  const { theme, setLightTheme, setDarkTheme } = useAppContext();

  const handleClick = () => {
    if (theme === 'light') {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  };

  return (
    <Wrapper onClick={handleClick}>
      <span className="theme">{theme}</span>
      {/* // edit alt */}
      <Icon className="icon">{theme}</Icon>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  gap: 16px;

  .theme {
    font-weight: 700;
    color: var(--color-secondary);
    text-transform: uppercase;
  }

  .icon {
    fill: var(--color-secondary);
  }
`;

export default ThemeSwitcher;
