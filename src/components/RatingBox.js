import React, { Component } from 'react';

// CSS
import '../css/RatingBox.css';

class RatingBox extends Component {
    render() {
        return (
            <div
                className={'Rating'}
                onClick={this.props.selected.bind(this, this.props.id)}
            >
                {this.props.rating}
            </div>
        );
    }
}

export default RatingBox;