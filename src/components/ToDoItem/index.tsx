import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Button } from 'components';

interface Props {
  readonly id: number;
  readonly label: string;
  readonly onDelete?: () => void;
}

export const ToDoItem = ({ id, label, onDelete }: Props) => {
  return (
    <Container>
      <Label to={`/detail/${id}`}>{label}</Label>
      <Button label="삭제" backgroundColor="#F16B6F" hoverColor="#E71D36" onClick={onDelete} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  margin: 10px;
  padding: 10px;
`;

const Label = styled(Link)`
  flex: 1;
  font-size: 16px;
  margin-right: 20px;
  text-decoration: none;
`;
