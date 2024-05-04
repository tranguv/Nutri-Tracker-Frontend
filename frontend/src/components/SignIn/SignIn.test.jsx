import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import SignIn from './SignIn';
import '@testing-library/jest-dom';

describe('SignIn component', () => {
  test('renders SignIn form with email and password fields', () => {
    const { getByLabelText } = render(<SignIn />);
    
    expect(getByLabelText(/Email/i)).toBeInTheDocument();
    expect(getByLabelText(/Password/i)).toBeInTheDocument();
  });

  test('submits form with correct values', async () => {
    const { getByLabelText, getByText } = render(<SignIn />);

    await act(async () => {
      fireEvent.change(getByLabelText(/Email/i), { target: { value: 'john.doe@example.com' } });
      fireEvent.change(getByLabelText(/Password/i), { target: { value: 'password123' } });
    });
  });
});
