import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { ToDoListContext } from 'contexts';

interface Props {
  readonly onAdd?: () => void;
}

export const InputContainer = ({ onAdd }: Props) => {
  const [toDo, setToDo] = useState('');
  const { addToDo } = useContext(ToDoListContext);

  const handleAdd = () => {
    addToDo(toDo);
    setToDo('');
    if (toDo && typeof onAdd === 'function') {
      onAdd();
    }
  };

  return (
    <Container>
      <Input
        placeholder="할 일을 입력해 주세요."
        value={toDo}
        onChange={setToDo}
        onAdd={handleAdd}
      />
      <Button label="추가" onClick={handleAdd} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;
