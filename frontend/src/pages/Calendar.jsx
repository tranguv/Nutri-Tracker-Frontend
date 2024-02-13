import React from 'react'
import {DatePickerComponent} from '@syncfusion/ej2-react-calendars'
import { ScheduleComponent, ViewsDirective,ViewDirective, Day, Week, WorkWeek,Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule'
const Calendar = () => {
  return (
    <div className='m-2  mt-12 p-2  bg-white rounded-3xl'>
        <ScheduleComponent height="650px">
            <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
        </ScheduleComponent>
    </div>
  )
}

export default Calendar