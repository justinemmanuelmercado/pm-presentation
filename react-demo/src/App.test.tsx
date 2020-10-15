import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  expect.assertions(2)

  const { getByText } = render(<App />);
  const localApiButton = getByText(/check local api/i);
  const addTwoNumbersButton = getByText(/add two numbers/i) 
  
  expect(localApiButton).toBeInTheDocument()
  expect(addTwoNumbersButton).toBeInTheDocument()
});
