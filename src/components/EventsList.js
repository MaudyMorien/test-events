import React, { Component } from "react"
import { Link } from 'react-router-dom'



export default class EventsList extends Component {
    render() {
        if (this.props.events !== null) {
            return <ul>
                {this.props.events.map((event, index) => {
                    return <Link to={`/events/${event.id}`} key={index}>
                        <li>{event.name}
                        </li>
                </Link>})}
            </ul>
        } return <h1>Loading...</h1>;
    }
}
