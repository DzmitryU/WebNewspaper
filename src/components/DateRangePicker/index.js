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

        const description = (from && to) ?
            `Selected from ${from.toLocaleDateString()} to ${to.toLocaleDateString()}` :
            'Date Range was not selected';

        return (
            <div>
                <p>
                    {description}
                </p>
                <DayPicker
                    className="Selectable"
                    selectedDays={[from, { from, to }]}
                    modifiers={modifiers}
                    onDayClick={this.handleDayClick}
                />
            </div>
        );
    }
}

export default DateRangePicker;