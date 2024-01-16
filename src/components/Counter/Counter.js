import React, { Component } from 'react';

export class Counter extends Component{

    static defaultProps = {
        initialValue: 0,
        
}
    state = {
        value: this.props.initialValue,

    }
    

    render() {
        return (
            <>
              
            </>
        )
    }

}