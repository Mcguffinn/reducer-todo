export const initState = [
    {
        item: 'First task',
        completed: false,
        id: 3892987589
    },
  
];

export const todoReducer = (state, action) => {
    switch(action.type){
        case 'ADD_ITEM':
            let  task = {
                item: action.payload,
                completed: false,
                id: Date.now()
            }
            return [...state, task]

        case 'COMPLETED_TODO':
            return state.map(e =>
                e.id === action.id ? { ...e, completed: !e.completed } : e
            );


        case "REMOVE_TODO":
            return state.filter(e => !e.completed);
            
        default:
            return state;
    }
}

