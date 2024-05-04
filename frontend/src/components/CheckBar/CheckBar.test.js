// import React from 'react';
// import renderer from 'react-test-renderer';
// import CheckBar from './CheckBar';

// it('renders the CheckBar component correctly', () => {
//   // Create the CheckBar component with tasks prop and mock handleOnClick function
//   const component = renderer.create(
//     <CheckBar tasks={['Plank']} handleOnClick={mockHandleOnClick} />
//   );

//   // Initial render snapshot
//   let tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });

import React from 'react';
import renderer from 'react-test-renderer';
import CheckBar from './CheckBar';
import '@testing-library/jest-dom';


it('renders the CheckBar component correctly', () => {
  const tree = renderer.create(<CheckBar tasks={['Plank']} />).toJSON();
  expect(tree).toMatchSnapshot();
});
