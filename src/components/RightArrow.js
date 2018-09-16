import React, {Component} from 'react';

class RightArrow extends Component {
    render() {

        return (
            <div
                className="nextArrow"
                onClick={this.props.goToNextSlide}
            >
                <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
            </div>
        );
    }
}

export default RightArrow;