// userReducer.js
const initialState = {
    name: '', // Initialize with an empty string
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          name: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  