import React, { Component } from 'react'

let days = [
  { value: "sunday", name: "Sunday", },
  { value: "Monday", name: "Monday", },
  { value: "Tuesday", name: "Tuesday", },
  { value: "Wednesday", name: "Wednesday", },
  { value: "Thursday", name: "Thursday", },
  { value: "Friday", name: "Friday", },
  { value: "Saturday", name: "Saturday", },
];


class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: true,
      days: days,
      newData: []
    };
  }
  toggleChange = (event) => {
    let day_list = this.state.newData;
    let check = event.target.checked;
    let checked_day = event.target.value;
    if (check) {
      this.setState({
        newData: [...this.state.newData, checked_day]
      })
    } else {
      var index = day_list.indexOf(checked_day)
      if (index > -1) {
        day_list.splice(index, 1)
        this.setState({
          newData: day_list
        })
      }
    }

  }


  render() {
    console.log('chk state', this.state.newData)
    const newData = this.state.days.map((day, index) => {
      return <label key={index}>
        <input
          type="checkbox"
          key={day.id}
          name={day.name}
          onChange={this.toggleChange}
          value={day.value}
          id={index}
        />
        {day.name}
      </label>
    })
    return (
      <div>{newData}</div>
    );
  }
}

export default Schedule;