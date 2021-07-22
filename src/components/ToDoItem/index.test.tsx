import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import { BrowserRouter, useLocation } from 'react-router-dom';

import { ToDoItem } from 'components';

describe('<ToDoItem/>', () => {
  it('renders component corre', () => {
    const { container } = render(
      <BrowserRouter>
        <ToDoItem id={1} label="default value" />
      </BrowserRouter>,
    );

    const todoItem = screen.getByText('default value');
    expect(todoItem).toBeInTheDocument();
    expect(todoItem.getAttribute('href')).toBe('/detail/1');

    const deleteButton = screen.getByText('삭제');
    expect(deleteButton).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('clicks the delete button', () => {
    const handleClick = jest.fn();
    render(
      <BrowserRouter>
        <ToDoItem id={1} label="default value" onDelete={handleClick} />
      </BrowserRouter>,
    );

    const deleteButton = screen.getByText('삭제');
    expect(handleClick).toHaveBeenCalledTimes(0);
    fireEvent.click(deleteButton);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('clicks the link', () => {
    const TestComponent = (): JSX.Element => {
      const { pathname } = useLocation();
      return (
        <div>
          <div>{pathname}</div>
          <ToDoItem id={1} label="default value" />
        </div>
      );
    };

    render(
      <BrowserRouter>
        <TestComponent />
      </BrowserRouter>,
    );

    const pathName = screen.getByText('/');
    expect(pathName).toBeInTheDocument();
    const todoItem = screen.getByText('default value');
    fireEvent.click(todoItem);
    expect(pathName.textContent).toBe('/detail/1');
  });
});
