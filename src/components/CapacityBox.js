import React, { Component } from 'react';

import ReviewBox from '../containers/ReviewBox'

class CapacityBox extends Component {
    render() {
        return (
            <div>

                <div>
                    {this.props.product.capacity}
                </div>

                <ReviewBox product={this.props.product}/>
            </div>
        );
    }
}

export default CapacityBox;