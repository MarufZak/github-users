import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import { useAppContext } from '../../context/AppProvider';

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
        <a
          target="_blank"
          href={
            data.twitter_username &&
            `https://twitter.com/${data.twitter_username}`
          }
          className="link"
        >
          {data.twitter_username || 'Not available'}
        </a>
      </li>
      <li className="item">
        <Icon className="icon">website</Icon>
        <a target="_blank" href={data.blog || null} className="link">
          {data.blog || 'Not available'}
        </a>
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

  .link {
    cursor: auto;
  }

  .link[href] {
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }

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
