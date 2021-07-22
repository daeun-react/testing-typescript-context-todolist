import React from 'react';
import styled from 'styled-components';

interface Props {
  readonly placeholder?: string;
  readonly value?: string;
  readonly onChange?: (text: string) => void;
  readonly onAdd?: () => void;
}

export const Input = ({ placeholder, value, onChange, onAdd }: Props) => {
  return (
    <InputBox
      value={value}
      placeholder={placeholder}
      onChange={(event) => {
        if (typeof onChange === 'function') {
          onChange(event.target.value);
        }
      }}
      onKeyPress={onAdd}
    />
  );
};

const InputBox = styled.input`
  flex: 1;
  font-size: 16px;
  padding: 10px;
  border: none;
  outline: none;
`;
