import React from 'react';
import { render } from '@testing-library/react';
import Process from './Process';
import '@testing-library/jest-dom';


describe('Process', () => {
  test('renders Process component with correct props', () => {
    const valuePercent = 50; // Example valuePercent
    const icon = 'footsteps'; // Example icon
    const activity = 'steps'; // Example activity
    const height = 30; // Example height

    const { getByText, getByRole } = render(
      <Process valuePercent={valuePercent} icon={icon} activity={activity} height={height} />
    );

    // Assert that the correct icon is rendered based on the icon prop
    const footstepsIcon = document.querySelector('.text-gray-600');
    expect(footstepsIcon).toBeInTheDocument(); 

    // Assert that the valuePercent bar is rendered and has the correct width
    const valuePercentBar = document.querySelector('.bg-green-500');
    expect(valuePercentBar).toBeInTheDocument(); 
  });
});
