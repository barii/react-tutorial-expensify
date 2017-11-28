import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates' 
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import 'react-dates/initialize';

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,

  };
  onDatesChange = ( {startDate, endDate} ) =>  {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };
  onChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  onSortChange = (e) => {
    if (e.target.value === 'date') {
      this.props.sortByDate();
    } else if (e.target.value === 'amount') {
      this.props.sortByAmount();
    }
  };

  render() {
    return (
      <div>
        <input 
          type="text" 
          value={this.props.filters.text} 
          onChange={this.onChange} 
        />
        <select 
          value={this.props.filters.sortBy} 
          onChange={this.onSortChange} 
        >
            <option value='date'>Date</option>
            <option values='amount'>Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
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

const mapDispatchToProps = (dispatch) => {
  return {
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmonut()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
  }; 
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);