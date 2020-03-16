export const initTodo = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }


export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            let todo = {
                task: action.payload,
                completed: false,
                id: Date.now()
            }
            return [...state, todo]

        case 'COMPLETE_TODO':
            return state.map(newState =>
                //Does the state id match the actions id? => then do this
                newState.id === action.id ? 
                {...newState, completed: !newState.completed} : newState );
        default:
                return state;
        
    }
}