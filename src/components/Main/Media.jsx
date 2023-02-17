import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import { useAppContext } from '../../context/AppProvider';
import { clearUrl } from '../../utils/helpers';

const Media = () => {
  const { data } = useAppContext();

  return (
    <Wrapper>
      <li className="item">
        <Icon className="icon">location</Icon>
        {data.location || 'Not available'}
      </li>
      <li className="item">
        <Icon className="icon">twitter</Icon>
        {data.twitter_username || 'Not available'}
      </li>
      <li className="item">
        <Icon className="icon">website</Icon>
        {data.blog || 'Not available'}
      </li>
      <li className="item">
        <Icon className="icon">company</Icon>
        {data.company || 'Not available'}
      </li>
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: grid;
  grid-template: repeat(2, auto) / repeat(2, 1fr);
  column-gap: 10px;
  row-gap: 20px;
  color: var(--color-primary);

  .icon {
    width: 20px;
    height: 20px;
    fill: var(--color-primary);
  }

  .item {
    display: flex;
    align-items: center;
    gap: 20px;
    word-break: break-all;
  }

  @media screen and (max-width: 700px) {
    grid-template: 1fr / 1fr;
  }

  @media screen and (max-width: 500px) {
    .item {
      font-size: 1.3rem;
    }
  }
`;

export default Media;
