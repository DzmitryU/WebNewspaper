import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './style.css';

class DateRangePicker extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            from: undefined,
            to: undefined
        };
        this.handleDayClick = this.handleDayClick.bind(this);
    }

    handleDayClick(day) {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    }

    render() {
        const { from, to } = this.state;
        const modifiers = { start: from, end: to };

        return (
            <DayPicker
                className="Selectable"
                selectedDays={[from, { from, to }]}
                modifiers={modifiers}
                onDayClick={this.handleDayClick}
            />
        );
    }
}

export default DateRangePicker;