// src/redux/sidebarReducer.js
const initialState = {
    isOpen: false,
  };
  
  const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'OPEN_SIDEBAR':
        return {
          ...state,
          isOpen: true,
        };
      case 'CLOSE_SIDEBAR':
        return {
          ...state,
          isOpen: false,
        };
      default:
        return state;
    }
  };
  
  export default sidebarReducer;
  