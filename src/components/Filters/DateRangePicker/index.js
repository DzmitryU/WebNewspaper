import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import {connect} from 'react-redux';

import 'react-day-picker/lib/style.css';
import './style.css';

import {setDateRange} from '../../../ac';

class DateRangePicker extends React.Component{
    constructor(props) {
        super(props);
    }

    handleDayClick = (day) => {
        const range = DateUtils.addDayToRange(day, this.props);
        this.props.setDateRange(range);
    };

    render() {
        const { from, to } = this.props;
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
};

DateRangePicker.propTypes = {

};

const mapStateToProps = state => {
    return {
        to: state.filter.dateRange.to,
        from: state.filter.dateRange.from
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setDateRange: (range) => dispatch(setDateRange(range))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DateRangePicker);