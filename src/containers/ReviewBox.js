import React, { Component } from 'react';

class ReviewBox extends Component {


    constructor(props){
        super(props);
        this.state = {
            reviewValue: '',
            scoreValue: 0,
            authorName: '',
            dateValue: '',
        };
        this.handleReviewValue = this.handleReviewValue.bind(this);
    };

    handleReviewValue(event){

    }

    render() {
        return (
            <div>
                Review

                <input
                    type="text"
                    value={this.state.reviewValue}
                    onChange={this.handleReviewValue}
                >
                </input>


            </div>
        );
    }
}

export default ReviewBox;