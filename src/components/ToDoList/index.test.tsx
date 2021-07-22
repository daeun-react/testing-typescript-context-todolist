import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import { BrowserRouter, useLocation } from 'react-router-dom';

import { ToDoListProvider } from 'contexts';
import { ToDoList } from './index';

beforeEach(() => {
  localStorage.clear();
});

describe('<ToDoList />', () => {
  it('renders component correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <ToDoListProvider>
          <ToDoList />
        </ToDoListProvider>
      </BrowserRouter>,
    );

    const toDoList = screen.getByTestId('toDoList');
    expect(toDoList).toBeInTheDocument();
    expect(toDoList.firstChild).toBeNull();

    expect(container).toMatchSnapshot();
  });

  it('shows toDo list', () => {
    localStorage.setItem('ToDoList', '["ToDo 1", "ToDo 2", "ToDo 3"]');

    render(
      <BrowserRouter>
        <ToDoListProvider>
          <ToDoList />
        </ToDoListProvider>
      </BrowserRouter>,
    );

    const toDoItems1 = screen.getByText('ToDo 1');
    expect(toDoItems1).toBeInTheDocument();
    expect(toDoItems1.getAttribute('href')).toBe('/detail/0');

    const toDoItems2 = screen.getByText('ToDo 2');
    expect(toDoItems2).toBeInTheDocument();
    expect(toDoItems2.getAttribute('href')).toBe('/detail/1');

    const toDoItems3 = screen.getByText('ToDo 3');
    expect(toDoItems3).toBeInTheDocument();
    expect(toDoItems3.getAttribute('href')).toBe('/detail/2');

    expect(screen.getAllByText('삭제').length).toBe(3);
  });

  it('deletes toDo item', () => {
    localStorage.setItem('ToDoList', '["ToDo 1", "ToDo 2", "ToDo 3"]');

    render(
      <BrowserRouter>
        <ToDoListProvider>
          <ToDoList />
        </ToDoListProvider>
      </BrowserRouter>,
    );

    const toDoItem = screen.getByText('ToDo 2');
    expect(toDoItem).toBeInTheDocument();
    fireEvent.click(toDoItem.nextElementSibling as HTMLElement);
    expect(toDoItem).not.toBeInTheDocument();
    expect(JSON.parse(localStorage.getItem('ToDoList') as string)).not.toContain('ToDo 2');
  });

  it('moves to detail page', () => {
    const TestComponent = (): JSX.Element => {
      const { pathname } = useLocation();
      return <div>{pathname}</div>;
    };

    localStorage.setItem('ToDoList', '["ToDo 1", "ToDo 2", "ToDo 3"]');

    render(
      <BrowserRouter>
        <TestComponent />
        <ToDoListProvider>
          <ToDoList />
        </ToDoListProvider>
      </BrowserRouter>,
    );

    const url = screen.getByText('/');
    expect(url).toBeInTheDocument();

    const toDoItems2 = screen.getByText('ToDo 2');
    expect(toDoItems2.getAttribute('href')).toBe('/detail/1');
    fireEvent.click(toDoItems2);

    expect(url.textContent).toBe('/detail/1');
  });
});
