import React, { Component } from "react"
export default class EventForm extends Component {

  render() {
    console.log( 'this.props eventform', this.props.values)
    return <form onSubmit={this.props.onSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={this.props.values.name} onChange={this.props.onChange} />
      </label>
      <label>
        Date:
        <input type="text" name="date" value={this.props.values.date} onChange={this.props.onChange} />
      </label>
      <label>
        Description:
        <input type="text" name="description" value={this.props.values.description} onChange={this.props.onChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  }
}