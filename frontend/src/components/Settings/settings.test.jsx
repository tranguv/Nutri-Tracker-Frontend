import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Settingpg from './Settingpg';
import '@testing-library/jest-dom';


describe('Settingpg', () => {
  it('renders placeholders and edit button correctly', () => {
    // Render the component
    const { getByText, getByTestId } = render(<Settingpg />);

    // Check if placeholders are rendered
    expect(getByText('Full Name')).toBeInTheDocument();
    expect(getByText('Date of Birth')).toBeInTheDocument();
    expect(getByText('Gender')).toBeInTheDocument();
    expect(getByText('Blood Type')).toBeInTheDocument();
    expect(getByText('Email Address')).toBeInTheDocument();
    expect(getByText('Unit of measurement')).toBeInTheDocument();

    // Check if the Edit button is rendered
    const editButton = getByTestId('edit-button');
    expect(editButton).toBeInTheDocument();

    // Simulate a click on the Edit button and assert that the console log message is triggered
    fireEvent.click(editButton);
    expect(console.log).toHaveBeenCalledWith('Edit button clicked');
  });
});
