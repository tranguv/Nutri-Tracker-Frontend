import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Sidebar from './Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';


describe('Sidebar', () => {
  test('renders Sidebar component', () => {
    const { getByText } = render(
      <Router>
        <Sidebar />
      </Router>
    );

    // Check if sidebar menu items are rendered
    expect(getByText('Dashboard')).toBeInTheDocument();
    expect(getByText('About')).toBeInTheDocument();
    expect(getByText('Analytics')).toBeInTheDocument();
    expect(getByText('Calendar')).toBeInTheDocument();
    expect(getByText('Product')).toBeInTheDocument();
    expect(getByText('Product List')).toBeInTheDocument();
  });

  test('clicking on sidebar menu items', () => {
    const { getByText } = render(
      <Router>
        <Sidebar />
      </Router>
    );

    // Simulate user clicking on a sidebar menu item
    fireEvent.click(getByText('About'));

  });

  test('collapse/expand sidebar', () => {
    const { getByText } = render(
      <Router>
        <Sidebar />
      </Router>
    );
  });
});
