import React, { Component } from 'react';

import SpecsBox from "../components/SpecsBox";
import ReviewBox from "./ReviewBox";


class SpecificBoxes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            specs: true,
            review: false
        };
        this.handleSpecsBox = this.handleSpecsBox.bind(this);
        this.handleReviewBox = this.handleReviewBox.bind(this);
    } // Fin del constructor

    handleSpecsBox(){

        this.setState({
            specs: true,
            review: false
        });
    }

    handleReviewBox(){

        this.setState({
            specs: false,
            review: true
        });
    }

    render() {
        return (
            <div>
                <button
                    onClick={this.handleSpecsBox}
                >
                    Specifications
                </button>
                <button
                    onClick={this.handleReviewBox}
                >
                    Review
                </button>
                <div>
                    {this.state.review === true ? <ReviewBox/> : <SpecsBox/>}
                </div>
            </div>
        );
    }
}

export default SpecificBoxes;