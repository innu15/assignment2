
import './App.css';

import React, { Component } from 'react'

class App extends Component {
  state = {
    name: "",
    department: "",
    rating: "",
    employees: [],
    show: false
  }

  OnSubmit(event) {
    event.preventDefault();
    const object = {
      name: this.state.name,
      department: this.state.department,
      rating: this.state.rating
    }

    this.state.employees.push(object)
    this.setState({
      name: "",
      department: "",
      rating: "",
      show: true

    })
    console.log(this.state.employees)
  }
whenclick = (event) => {
    console.log(event.target);
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return (
      <>
        <div className='container'>
          <h1>EMPLOYEE FEEDBACK FORM</h1>
          <form action="">
            <label for="name">Name : </label>
            <input type="text" id="name" name="name" value={this.state.name}  onChange={this.whenclick} /><br></br>
            <label for="department">Department : </label>
            <input type="text" id="department" name="department" value={this.state.department} onChange={this.whenclick} /><br></br>
            <label for="rating">Rating : </label>
            <input type="number" id="rating" name="rating" value={this.state.rating} onChange={this.whenclick} /><br></br>

          </form>
          <button type="submit" onClick={this.OnSubmit.bind(this)}>Submit</button>
        </div>
        {this.state.show && <div className='history'>
          {this.state.employees.length > 0 && this.state.employees.map((event) => {
            return (<div className='employeedata'>
              <h1>"Name"={event.name}  "Department"={event.department}  "Rating"={event.rating}</h1>
            </div>)
          })}
        </div>}
      </>
    )
  }
}


export default App;
