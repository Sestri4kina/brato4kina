import React from 'react';
import { connect } from 'react-redux';

class GenerationsCounter extends React.Component {
  render() {
    return (
      <div className="counter">
        Generations: {this.props.generations}
      </div>
    );
  }
}

const mapStateToProps = ({generationsCounter}) => {
  return {generations: generationsCounter};
};

export default connect(mapStateToProps)(GenerationsCounter);
