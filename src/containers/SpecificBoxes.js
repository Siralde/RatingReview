import React, { Component } from 'react';

import SpecsBox from "../components/SpecsBox";
import CapacityBox from "../components/CapacityBox";
import ReviewBox from "./ReviewBox";


class SpecificBoxes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            specs: true,
            capacity: false,
            review: false
        };
        this.handleSpecsBox = this.handleSpecsBox.bind(this);
        this.handleReviewBox = this.handleReviewBox.bind(this);
        this.handleCapacityBox = this.handleCapacityBox.bind(this);
    } // Fin del constructor

    handleSpecsBox(){

        this.setState({
            specs: true,
            review: false,
            capacity: false
        });
    }

    handleCapacityBox(){
        this.setState({
            specs: false,
            review: false,
            capacity: true
        });
    }

    handleReviewBox(){

        this.setState({
            specs: false,
            review: true,
            capacity: false
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
                    onClick={this.handleCapacityBox}
                >
                    Capacity
                </button>
                <button
                    onClick={this.handleReviewBox}
                >
                    Review
                </button>
                <div>
                    {this.state.review === true ? <ReviewBox product={this.props.product}/> : (this.state.specs === true ? <SpecsBox product={this.props.product}/> : <CapacityBox product={this.props.product}/>)}
                </div>
            </div>
        );
    }
}

export default SpecificBoxes;
