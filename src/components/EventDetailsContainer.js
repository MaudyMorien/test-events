import React from 'react'
import { connect } from 'react-redux'
import EventDetails from './EventDetails'
import { loadEvent, updateEvent, deleteEvent } from '../actions/events'

class EventDetailsContainer extends React.Component {
  state = {
    editMode: false,
    formValues: {
      name: "",
      date: "",
      description: ""
    }
  }

  componentDidMount() {
    this.props.loadEvent(Number(this.props.match.params.id))
  }

  onDelete = () => {
    this.props.deleteEvent(Number(this.props.event.id))
    this.props.history.push('/')
  }

  onEdit = () => {
    const newEditMode = !this.state.editMode
    this.setState({
      editMode: newEditMode,
      formValues: {
        name: this.props.event.name,
        date: this.props.event.date,
        description: this.props.event.description
      }
    })
  }

  onChange = (event) => {
    this.setState({
      formValues: {
        ...this.state.formValues,
        [event.target.name]: event.target.value
      }
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      editMode: false
    })
    this.props.updateEvent(this.props.event.id, this.state.formValues)
  }

  render() {
    return (<EventDetails
      onDelete={this.onDelete}
      event={this.props.event}
      onEdit={this.onEdit}
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      state={this.state}
    />)
  }
}

const mapStateToProps = state => ({
  event: state.event
})

export default connect(mapStateToProps, { loadEvent, updateEvent, deleteEvent })(EventDetailsContainer)