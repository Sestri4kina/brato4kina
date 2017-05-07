export function start(timerId) {
  return {
    type: 'PLAY',
    timerId
  };
}

export function pause(timerId) {
  return {
    type: 'PAUSE',
    timerId
  };
}

export function clear() {
  return {
    type: 'CLEAR'
  };
}

export function speedControl() {
  return {
    type: 'SPEED_CONTROL'
  };
}

export function makeRandom() {
  return {
    type: 'MAKE_RANDOM'
  };
}

export function toggleAlive(x, y) {
  return {
    type: 'TOGGLE_ALIVE',
    x, y
  };
}
