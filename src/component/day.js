import React, { Component } from 'react'





class Day extends Component {
  constructor() {
    super()

    this.handleAvailableChange = this.handleAvailableChange.bind(this);
  }
  handleAvailableChange(e) {
    this.props.handleDayChange(e.target.checked, this.props.name);
  }
  render() {
    let values = this.props;
    console.log('chk value', values.name)
    return (
      <div className='day'>
        <label className='name'>
          {values.name}
          <input
            type='checkbox'
            checked={values.available}
            onChange={this.handleAvailableChange}
          />
        </label>
        {values.available + ""}
      </div>
    );
  }
}

export default Day
