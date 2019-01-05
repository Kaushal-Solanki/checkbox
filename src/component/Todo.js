import React, { Component } from 'react'

class Todo extends Component {
  constructor() {
    super()
    this.state = {
      works: []
    }
  }

  add = (e) => {
    e.preventDefault()

    var title = this.refs.title.value;

    if (localStorage.getItem('works') == null) {
      var works = []
      works.push(title)
      localStorage.setItem('works', JSON.stringify(works));
    } else {
      let works = JSON.parse(localStorage.getItem('works'));
      works.push(title)
      localStorage.setItem('works', JSON.stringify(works));
    }
    this.setState({
      works: JSON.parse(localStorage.getItem('works'))
    })
    this.refs.title.value = ''
  }
  delete = (e) => {
    let index = e.target.getAttribute('data-key')
    let list = JSON.parse(localStorage.getItem('works'));
    list.splice(index, 1)
    this.setState({
      works: list
    })
    localStorage.setItem('works', JSON.stringify(list))

  }
  render() {
    return (
      <div>
        <h1>This is todo</h1>
        <form onSubmit={this.add}>

          <input type='text' placeholder='title....' ref='title' />
          <button>Add</button>
        </form>
        <ul>
          {this.state.works.map((work, index) => {
            return (
              <li key={index}>{work}<button onClick={this.delete} data-key={index}>x</button></li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Todo;