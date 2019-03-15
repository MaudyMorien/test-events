import request from 'superagent'
import {
  eventsFetched,
  eventCreateSuccess,
  eventFetched,
  eventDeleteSuccess,
  updatedEvent
} from './action-lib'


const baseUrl = 'http://localhost:4000'

export const loadEvents = () => (dispatch, getState) => {

  if (getState().events) return
  request(`${baseUrl}/events`)
    .then(response => {

      dispatch(eventsFetched(response.body))
    })
    .catch(console.error)
}

export const createEvent = (data) => dispatch => {
  request
    .post(`${baseUrl}/events`)
    .send(data)
    .then(response => {
      dispatch(eventCreateSuccess(response.body))
    })
    .catch(console.error)
}

export const loadEvent = (id) => (dispatch) => {
  request(`${baseUrl}/events/${id}`)
    .then(response => {
      dispatch(eventFetched(response.body))
    })
    .catch(console.error)
}

export const deleteEvent = (id) => (dispatch, getState) => {
  if (!getState().event) return
  request
    .delete(`${baseUrl}/events/${id}`)
    .then(() => {
      dispatch(eventDeleteSuccess(id))
    })
    .catch(console.error)
}

export const updateEvent = (id, data) => (dispatch, response) => {
  request
  .update(`${baseUrl}/events/${id}`)
  .send(data)
  .then(() => {
    dispatch(updatedEvent(response.body))
  })
  .catch(console.error)
}