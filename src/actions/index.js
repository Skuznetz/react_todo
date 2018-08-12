export const addTodo = text => ({
    
        type: 'ADD_TODO',
        id: Date.now(),
        text
    });

export const toggleTodo = id => ({
    type:'TOGGLE_TODO',
    id
});

export const setFilter = filter => {
    return {
        type: 'SET_FILTER',
        filter 
    };
};
