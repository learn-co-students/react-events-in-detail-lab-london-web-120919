// Code CoordinatesButton Component Here
import React, { Component } from 'react'


class CoordinatesButton extends Component {

    handleClick = e => {
        this.props.onReceiveCoordinates([e.clientX, e.clientX])
    }

    render() {
        return (
            <button
                onClick={ this.handleClick }
            >Coordinates</button>
        )
    }
}

export default CoordinatesButton