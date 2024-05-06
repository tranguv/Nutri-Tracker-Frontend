import React from 'react';
import { render } from '@testing-library/react';
import Achievement from './Achievement';
import '@testing-library/jest-dom';


describe('Achievement', () => {
  test('renders Achievement component with correct props', () => {
    const valuePercent = 50; // Example valuePercent

    // Render the component with props
    const { getByText, getByRole } = render(<Achievement valuePercent={valuePercent} />);
    expect(getByRole('button', { name: 'Edit' })).toBeInTheDocument(); // Example button with aria-label

    // Assert that the GiWeightScale icon is rendered
    const weightScaleIcon = document.querySelector('.text-gray-600');
    expect(weightScaleIcon).toBeInTheDocument(); 

    // Assert that the valuePercent bar is rendered and has the correct width
    const valuePercentBar = document.querySelector('.bg-green-500');
    expect(valuePercentBar).toBeInTheDocument();
  });
});
