import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../../context/AppProvider';
import Header from './Header';
import Media from './Media';
import Overview from './Overview';
import Loading from './Loading';

const Main = () => {
  const { isLoading, data } = useAppContext();

  if (isLoading) {
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <img
        className="avatar"
        src={data.avatar_url}
        alt="user avatar image"
      />
      <Header />
      <article className="content">
        <p className="bio">{data.bio || 'This profile has no bio'}</p>
        <Overview />
        <Media />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--bg-secondary);
  box-shadow: var(--shadow);
  border-radius: 15px;
  padding: 48px;

  display: grid;
  grid-template: repeat(3, auto) / auto 1fr;
  grid-template-areas:
    'avatar header'
    'avatar content'
    '_ content';
  column-gap: 36px;

  .avatar {
    width: 117px;
    height: 117px;
    object-fit: contain;
    border-radius: 50%;
    grid-area: avatar;
  }

  .content {
    grid-area: content;
  }

  .bio {
    color: var(--color-primary);
    margin: 20px 0 32px 0;
  }

  @media screen and (max-width: 600px) {
    grid-template-areas:
      'avatar header'
      'content content';

    .bio {
      margin: 10px 0 16px 0;
    }
  }

  @media screen and (max-width: 500px) {
    padding: 24px;
    column-gap: 18px;

    .avatar {
      width: 70px;
      height: 70px;
    }

    .bio {
      font-size: 1.3rem;
    }
  }

  @media screen and (max-width: 350px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'avatar'
      'header'
      'content';
    justify-items: center;
    text-align: center;
  }
`;

export default Main;
