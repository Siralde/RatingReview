import React, { Component } from 'react';

import ReviewBox from '../containers/ReviewBox'

class SpecsBox extends Component {
    render() {
        return (
            <div>
                {/*Este div es el texto del specificaciones */}
                <div>
                    {this.props.product.specs}
                </div>

                <ReviewBox product={this.props.product}/>
            </div>

        );
    }
}

export default SpecsBox;