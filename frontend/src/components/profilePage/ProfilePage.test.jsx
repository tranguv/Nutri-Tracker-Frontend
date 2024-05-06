import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ProfilePage from './ProfilePage';
import '@testing-library/jest-dom';

describe('ProfilePage', () => {
  test('renders ProfilePage component with user information', () => {
    // Mock user data
    const user = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      date: '2024-05-08',
    };
    

    // Render the component with mock user data
    const { getByText } = render(<ProfilePage user={user} />);

    // Assert that user information is displayed correctly
    expect(getByText('John Doe')).toBeInTheDocument(); // Check if the name is displayed
    expect(getByText('john.doe@example.com')).toBeInTheDocument(); // Check if the email is displayed
    expect(getByText('Joined: 2024-05-08')).toBeInTheDocument(); // Check if the join date is displayed

  });
});
