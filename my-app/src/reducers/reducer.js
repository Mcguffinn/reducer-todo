export const initState = [
    {
        item: 'Learn about reducers',
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
        default:
            return state;
    }
}

