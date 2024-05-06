import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import SignUp from './SignUp';
import '@testing-library/jest-dom';

window.alert = jest.fn();

describe('SignUp component', () => {
  test('renders SignUp form with all fields', () => {
    const { getByLabelText } = render(<SignUp />);
    
    expect(getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(getByLabelText(/Email/i)).toBeInTheDocument();
    expect(getByLabelText(/Password/i)).toBeInTheDocument();
    expect(getByLabelText(/Date of Birth/i)).toBeInTheDocument();
    expect(getByLabelText(/Weight/i)).toBeInTheDocument();
    expect(getByLabelText(/Height/i)).toBeInTheDocument();
  });

  test('submits form with correct values', () => {
    const { getByLabelText, getByText } = render(<SignUp />);

    act(() => {
      fireEvent.change(getByLabelText(/First Name/i), { target: { value: 'John' } });
      fireEvent.change(getByLabelText(/Last Name/i), { target: { value: 'Doe' } });
      fireEvent.change(getByLabelText(/Email/i), { target: { value: 'john.doe@example.com' } });
      fireEvent.change(getByLabelText(/Password/i), { target: { value: 'password123' } });
      fireEvent.change(getByLabelText(/Weight/i), { target: { value: '70' } });
      fireEvent.change(getByLabelText(/Height/i), { target: { value: '180' } });
    });

    act(() => {
      fireEvent.submit(getByText(/Submit/i));
    });
  });
});
