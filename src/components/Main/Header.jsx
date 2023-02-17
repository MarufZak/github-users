import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../../context/AppProvider';
import { format } from '../../utils/helpers';

const Header = () => {
  const { data } = useAppContext();

  console.log(data);

  return (
    <Wrapper>
      <h2 className="name">{data.name}</h2>
      <span className="joined">
        Joined {format(data.created_at)}
      </span>
      <a href={data.html_url} className="username">
        @{data.login?.toLowerCase()}
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  grid-area: header;
  display: grid;
  align-items: center;
  grid-template: repeat(2, auto) / repeat(2, auto);

  .name {
    color: var(--color-secondary);
  }

  .joined {
    justify-self: end;
    color: var(--color-tertiary);
  }

  .username {
    color: var(--color-blue);
  }

  @media screen and (max-width: 650px) {
    grid-template: 1fr / 1fr;

    .joined {
      justify-self: initial;
    }
  }

  @media screen and (max-width: 500px) {
    .name {
      font-size: 1.6rem;
    }
  }

  @media screen and (max-width: 350px) {
    margin-top: 16px;
  }
`;

export default Header;
