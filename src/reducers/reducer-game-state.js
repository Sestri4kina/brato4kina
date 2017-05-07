const initialState = {
  timerId: null,
  isOn: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'PLAY':
      return {
        timerId: action.timerId,
        isOn: true
      };
    case 'PAUSE':
      return {
        timerId: null,
        isOn: false
      };
    default:
      return state;
  }
};
