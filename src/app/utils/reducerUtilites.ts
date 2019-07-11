export const updateObject = (sourceObject: any, newValues: any) => {
  return Object.assign({}, sourceObject, newValues);
};

export const createReducer = (initialState: any, handlers: any) => {
  return (state = initialState, action: any) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
};
