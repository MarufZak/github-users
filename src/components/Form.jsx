import React, { useState } from 'react';
import styled from 'styled-components';
import { useAppContext } from '../context/AppProvider';
import Icon from './Icon';

const Form = () => {
  const { handleSubmit: submit } = useAppContext();
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    let user = input.toLowerCase();
    submit(user);
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        placeholder="Search GitHub username…"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="submit-btn" type="submit">
        Search
      </button>
      <Icon className="icon">search</Icon>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 24px;

  .input {
    font-size: 1.8rem;
    padding: 22px 120px 22px 80px;
    border-radius: 15px;
    background-color: var(--bg-secondary);
    color: var(--color-secondary);
    box-shadow: var(--shadow);

    ::placeholder {
      color: var(--color-secondary);
    }
  }

  .submit-btn {
    padding: 12px 24px;
    background-color: var(--color-blue);
    border-radius: 10px;
    width: max-content;
    color: var(--color-white);
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
  }

  .icon {
    position: absolute;
    top: 50%;
    left: 32px;
    transform: translateY(-50%);
    fill: var(--color-blue);
  }

  @media screen and (max-width: 500px) {
    margin-bottom: 16px;

    .input {
      padding: 18px 100px 18px 45px;
      font-size: 1.3rem;
    }

    .icon {
      width: 20px;
      height: 20px;
      left: 16px;
    }

    .submit-btn {
      padding: 12px 14px;
    }
  }
`;

export default Form;
