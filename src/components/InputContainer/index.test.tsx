import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import { InputContainer } from './index';
import { ToDoListProvider } from 'contexts';

describe('<InputContainer />', () => {
  it('renders component correctly', () => {
    const { container } = render(<InputContainer />);

    const input = screen.getByPlaceholderText('할 일을 입력해 주세요.');
    expect(input).toBeInTheDocument();
    const button = screen.getByText('추가');
    expect(button).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('empties data after adding data', () => {
    render(<InputContainer />);

    const input = screen.getByPlaceholderText('할 일을 입력해 주세요.') as HTMLInputElement;
    const button = screen.getByText('추가');

    expect(input.value).toBe('');
    fireEvent.change(input, { target: { value: 'study react 1' } });
    expect(input.value).toBe('study react 1');
    fireEvent.click(button);
    expect(input.value).toBe('');
  });

  it('adds input data to localStorage via Context', () => {
    render(
      <ToDoListProvider>
        <InputContainer />
      </ToDoListProvider>,
    );

    const input = screen.getByPlaceholderText('할 일을 입력해 주세요.');
    const button = screen.getByText('추가');

    expect(localStorage.getItem('ToDoList')).toBeNull();
    fireEvent.change(input, { target: { value: 'study react 1' } });
    fireEvent.click(button);
    expect(localStorage.getItem('ToDoList')).toBe('["study react 1"]');
  });

  it('calls the onAdd function when the user clicks Add button', () => {
    const handleClick = jest.fn();
    render(<InputContainer onAdd={handleClick} />);

    const input = screen.getByPlaceholderText('할 일을 입력해 주세요.');
    const button = screen.getByText('추가');
    expect(handleClick).toHaveBeenCalledTimes(0);

    // 할 일을 입력하지 않고 버튼 클릭
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(0);

    // 할 일을 입력하고 버튼 클릭
    fireEvent.change(input, { target: { value: 'study react 1' } });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
