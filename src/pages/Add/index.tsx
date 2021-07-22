import * as React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { InputContainer } from 'components';

export const Add = () => {
  const { replace } = useHistory();

  return (
    <Container>
      <InputContainer onAdd={() => replace('/')} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  position: relative;
`;
