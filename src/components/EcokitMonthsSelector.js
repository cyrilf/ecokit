import React, { Component, PropTypes } from 'react'
import EcokitMonth from 'components/EcokitMonth';

const months = [{name: 'January', value: 0},
                {name: 'February', value: 1},
                {name: 'March', value: 2},
                {name: 'April', value: 3},
                {name: 'May', value: 4},
                {name: 'June', value: 5},
                {name: 'July', value: 6},
                {name: 'August', value: 7},
                {name: 'September', value: 8},
                {name: 'October', value: 9},
                {name: 'November', value: 10},
                {name: 'December', value: 11}];

const currentMonth = new Date().getMonth();
const selectedMonth = currentMonth;

export default class EcokitMonthsSelector extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      months,
      currentMonth,
      selectedMonth
    }
  }

  handleMonthSelected(month) {
    console.log(month);
    //this.props.onChange(month);
  }

  render () {
    return (
        <ul>
          {months.map(function(month) {
             let boundClick = this.handleMonthSelected.bind(this, month);
             return (
                <EcokitMonth key={month.value} onClick={boundClick} {...month} />
            );
        }, this)}
        </ul>
    );
  }
}

EcokitMonthsSelector.propTypes = {
  onChange: PropTypes.function
};
