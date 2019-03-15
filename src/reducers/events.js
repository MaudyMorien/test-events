export default (state = null, action) => {
    console.log(action)
    switch (action.type) {
        case 'EVENTS_FETCHED':
            return action.events;

        case 'EVENT_CREATE_SUCCESS':
            return [...state, Object.assign({}, action.event)];

        case 'EVENT_DELETE_SUCCESS':
            return state.filter(event => event.id !== action.id)
            
        case 'UPDATE_EVENT':
            return [...state, state.event[action.id] = action.event]
        default:
            return state;
    }
}
