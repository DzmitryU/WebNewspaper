import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {increment} from '../ac';

class Counter extends Component {
    static propTypes = {
        counter: PropTypes.number,
        increment: PropTypes.func.isRequired
    };

    render() {
        return (
            <div>
                <h2>{this.props.counter}</h2>
                <button onClick = {this.handleIncrement}>Increment me</button>
            </div>
        );
    }

    handleIncrement = () => {
        const {increment} = this.props;
        increment();
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
};

export default connect(mapStateToProps, { increment })(Counter);