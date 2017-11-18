import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates' 
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,

  };
  onDatesChange = ( {startDate, endDate} ) =>  {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }
  render() {
    return (
      <div>
        <input 
          type="text" 
          value={this.props.filters.text} 
          onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value));
          }} 
        />
        <select 
          value={this.props.filters.sortBy} 
          onChange={(e) => {
            if (e.target.value === 'date') {
              this.props.dispatch(sortByDate());
            } else if (e.target.value === 'amount') {
              this.props.dispatch(sortByAmount());
            }
          }} 
        >
            <option value='date'>Date</option>
            <option values='amount'>Amount</option>
        </select>
        <DateRangePicker
        startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
        endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
        onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
        focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
        numberOfMonths={1}
        isOutsideRange={() => false}
        showClearDates={true}
      />
      </div>
  )

  }
};



const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }; 
};

export default connect(mapStateToProps)(ExpenseListFilters);