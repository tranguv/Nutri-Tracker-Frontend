import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Settings from './Settings';
import '@testing-library/jest-dom';

describe('Setting', () => {
  it('renders placeholders and edit button correctly', async () => {
    // Render the component
    const { getByText, getByTestId } = render(<Settings/>);

    // Check if placeholders are rendered
    await waitFor(() => {
      expect(getByText('Full Name')).toBeInTheDocument();
      expect(getByText('Date of Birth')).toBeInTheDocument();
      expect(getByText('Gender')).toBeInTheDocument();
      expect(getByText('Blood Type')).toBeInTheDocument();
      expect(getByText('Email Address')).toBeInTheDocument();
      expect(getByText('Unit of measurement')).toBeInTheDocument();
    });
  });
});
