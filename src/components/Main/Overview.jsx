import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../../context/AppProvider';

const Overview = () => {
  const { data } = useAppContext();

  return (
    <Wrapper>
      <li className="item">
        Repos
        <span className="value">{data.public_repos}</span>
      </li>
      <li className="item">
        Followers
        <span className="value">{data.followers}</span>
      </li>
      <li className="item">
        Following
        <span className="value">{data.following}</span>
      </li>
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  transition: 0.3s;
  padding: 16px 32px;
  border-radius: 10px;
  background-color: var(--bg-primary);
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 36px;

  .item {
    color: var(--color-primary);
  }

  .value {
    display: block;
    font-size: 2.2rem;
    color: var(--color-secondary);
    font-weight: 700;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.1rem;
    margin-bottom: 24px;

    .value {
      font-size: 1.6rem;
      text-align: center;
    }
  }

  @media screen and (max-width: 350px) {
    padding: 12px;
  }

  @media screen and (max-width: 320px) {
    flex-direction: column;
  }
`;

export default Overview;
