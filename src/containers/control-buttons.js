import React from 'react';
import { connect } from 'react-redux';
import { start, pause, clear, speedControl, makeRandomGrid } from '../actions/';
import Button from '../components/button';

class ControlButtons extends React.Component {
  componentDidMount() {
    this.props.random();
    this.togglePlay();
  }
  render() {
    return (
      <div className="controls">
        <div className="buttons">
          <Button
            handleClick={() => this.props.random()}
            title={"Randomize"}
          />
          <Button
            handleClick={() => this.clear()}
            title={"Clear"}
          />
          <div className="button-group">
            <Button
              handleClick={() => this.togglePlay()}
              title={this.props.gameState.isOn ? 'Pause' : 'Play'}
            />
            <Button
              handleClick={() => this.props.speedControl()}
              title={"Next generation"}
            />
          </div>
        </div>
      </div>
    );
  }
  //custom functions
  togglePlay() {
    if (this.props.gameState.isOn) {
      clearInterval(this.props.gameState.timerId);
      this.props.pause();
    } else {
      let interval = setInterval(this.props.speedControl, 100);
      this.props.start(interval);
    }
  }
  clear() {
    if (this.props.gameState.isOn) {
      clearInterval(this.props.gameState.timerId);
      this.props.pause();
    }
    this.props.clear();
  }
}

const mapStateToProps = ({gameState}) => {return {gameState};}

const mapDispatchToProps = (dispatch) => {
  return {
    random: () => dispatch(makeRandomGrid()),
    start: (timerId) => dispatch(start(timerId)),
    pause: () => dispatch(pause()),
    clear: () => dispatch(clear()),
    speedControl: () => dispatch(speedControl())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlButtons);
