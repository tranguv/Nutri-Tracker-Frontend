import React from 'react'
import {DatePickerComponent} from '@syncfusion/ej2-react-calendars'
import { ScheduleComponent, ViewsDirective,ViewDirective, Day, Week, WorkWeek,Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule'
const Calendar = () => {
        const data = [
                {
                    Id: 1,
                    Subject: 'Meeting - 1',
                    StartTime: new Date(2024, 1, 15, 10, 0),
                    EndTime: new Date(2018, 1, 16, 12, 30),
                    IsAllDay: false
                },
            ];
            const eventSettings = { dataSource: data }
    return (
        <div className='m-2  mt-12 p-2  bg-white rounded-3xl'>
                <ScheduleComponent height="70vh" selectedDate= {new Date(2024, 2, 15)}>
                        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
                </ScheduleComponent>
        </div>
    )
}

export default Calendar