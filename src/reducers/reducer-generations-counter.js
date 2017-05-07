export default (state = 0, action) => {
  switch (action.type) {
    case 'SPEED_CONTROL':
      return state + 1;
    case 'MAKE_RANDOM':
      return 0;
    case 'CLEAR':
      return 0;
    default:
      return state;
  }
};
