import React, { Component } from "react"
import EventForm from './EventForm'

export default class EventDetails extends Component {
    render() {
        console.log('this.props', this.props)

        const { event } = this.props
        if (event) {
            if (this.props.state.editMode) {
                return <EventForm onSubmit={this.props.onSubmit}
                    onChange={this.props.onChange}
                    values={this.props.state.formValues} />
            }

            return <div>
                <h1>{event.name}</h1>
                <i>Date: {event.date}</i>
                <p>{event.description}</p>
                <button onClick={this.props.onDelete}>Delete</button>
                <button onClick={this.props.onEdit}>Edit</button>
            </div>
        }

        return <h1>Loading...</h1>
    }
}  