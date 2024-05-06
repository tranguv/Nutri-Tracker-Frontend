import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';
import '@testing-library/jest-dom';


describe('Navbar', () => {
  test('renders Navbar component', () => {
    const { getByText, getByPlaceholderText } = render(<Navbar />);
    
    expect(getByText('Effortlessly record and analyze your life')).toBeInTheDocument();
    expect(getByText('Search')).toBeInTheDocument();

    // Check if bell icon is rendered
    const bellIcon = document.querySelector('.text-4xl');
    expect(bellIcon).toBeInTheDocument();
  });

  test('search functionality', () => {
    const { getByPlaceholderText, getByText } = render(<Navbar />);
    const searchInput = getByPlaceholderText('Search Mockups, Logos...');
    const searchButton = getByText('Search');

    fireEvent.change(searchInput, { target: { value: 'Mockups' } });

    // Check if search input value is updated
    expect(searchInput).toHaveValue('Mockups');

    // Simulate user clicking on search button
    fireEvent.click(searchButton);
  });
});