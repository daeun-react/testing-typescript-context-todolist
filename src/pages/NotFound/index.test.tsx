import React from 'react';
import 'jest-styled-components';
import { render, screen, fireEvent } from '@testing-library/react';
import { NotFound } from '.';

describe('<NotFound />', () => {
  it('renders component correctly', () => {
    const { container } = render(<NotFound />);

    const message = screen.getByText('Not Found');
    expect(message).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
