export const eventsFetched = events => ({
    type: 'EVENTS_FETCHED',
    events
})

export const eventCreateSuccess = event => ({
    type: 'EVENT_CREATE_SUCCESS',
    event
})

export const eventFetched = event => ({
    type: 'EVENT_FETCHED',
    event
})

export const eventDeleteSuccess = id => ({
    type: 'EVENT_DELETE_SUCCESS',
    id
})
export const updatedEvent = event => ({
    type: 'UPDATE_EVENT',
    event
})
