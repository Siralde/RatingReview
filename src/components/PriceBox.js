import React, { Component } from 'react';

// CSS
import '../css/PriceBox.css';

class PriceBox extends Component {
    render() {
        return (
            <div className={'Price'}>
                {this.props.price}
            </div>
        );
    }
}

export default PriceBox;