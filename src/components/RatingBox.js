import React, { Component } from 'react';

// CSS
import '../css/RatingBox.css';

class RatingBox extends Component {
    render() {
        return (
            <div className={'Rating'}>
                {this.props.rating}
            </div>
        );
    }
}

export default RatingBox;