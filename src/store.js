import createStore from 'unistore';

export const store = createStore({
  access_token: localStorage.access_token
});

export default store;

//connect(mapStateToProps, actions)
// mapStateToProps - A function mapping of store state to prop values, or an array/CSV of properties to map.
// actions - Action functions (pure state mappings), or a factory returning them. Every action function gets current state as the first parameter and any other params next
