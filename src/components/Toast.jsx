import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useAppContext } from '../context/AppProvider';

const Toast = () => {
  const { isFetchingLocked } = useAppContext();
  const [timeToClose, setTimeToClose] = useState(0);

  useEffect(() => {
    if (isFetchingLocked) {
      setTimeToClose(3);
    }
  }, [isFetchingLocked]);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setTimeToClose((time) => time - 1);
    }, 1000);

    if (timeToClose <= 0) {
      clearTimeout(timeout);
    }

    return () => clearTimeout(timeout);
  }, [timeToClose]);

  return (
    <Wrapper opened={timeToClose>0}>
      <p className="text">You can re-fetch in {timeToClose}...</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  right: 15px;
  bottom: ${(props) => (props.opened ? 0 : '-100%')};
  padding: 10px 15px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: var(--color-blue);
  transition: 0.3s;

  .text {
    color: var(--color-white);
  }
`;

export default Toast;
