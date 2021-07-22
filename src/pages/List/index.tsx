import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ToDoList } from 'components';

export const List = () => {
  return (
    <Container>
      <ToDoList />
      <AddButton to="/add">+</AddButton>
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

const AddButton = styled(Link)`
  font-size: 20px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  cursor: pointer;
  border-radius: 30px;
  position: absolute;
  bottom: -30px;
  background-color: #aacd6e;
  text-decoration: none;

  &:hover {
    background-color: #bce55c;
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;
