import React from 'react';
import renderer from 'react-test-renderer';
import Calendar from './Calendar';

jest.mock('@syncfusion/ej2-react-calendars', () => ({
  DatePickerComponent: 'MockedDatePickerComponent'
}));

jest.mock('@syncfusion/ej2-react-schedule', () => ({
  ScheduleComponent: 'MockedScheduleComponent',
  ViewsDirective: 'MockedViewsDirective',
  ViewDirective: 'MockedViewDirective',
  Day: 'MockedDay',
  Week: 'MockedWeek',
  WorkWeek: 'MockedWorkWeek',
  Month: 'MockedMonth',
  Agenda: 'MockedAgenda',
  Inject: 'MockedInject',
  Resize: 'MockedResize',
  DragAndDrop: 'MockedDragAndDrop'
}));

describe('Calendar component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Calendar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
