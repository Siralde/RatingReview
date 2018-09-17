import React, { Component } from 'react';
import ListReviews from '../components/ListReviews';

class ReviewBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reviewValue: '',
            scoreValue: 5,
            authorName: '',
            dateValue: '',
            reviews: this.props.product.reviews
        };
        this.handleReviewValue = this.handleReviewValue.bind(this);
        this.handleAuthorValue = this.handleAuthorValue.bind(this);
        this.handleDateValue = this.handleDateValue.bind(this);
        this.handleScoreValue = this.handleScoreValue.bind(this);
        this.handleNewReview = this.handleNewReview.bind(this);
        this.handleCancelReview = this.handleCancelReview.bind(this);
    }

    handleReviewValue(event){
        this.setState({
            reviewValue: event.target.value
        });
    }

    handleAuthorValue(event){
        this.setState({
            authorName: event.target.value
        })
    }
    handleDateValue(event){
        this.setState({
            dateValue: event.target.value
        })
    }

    handleScoreValue(event){
        this.setState({
            scoreValue: event.target.value
        })
    }

    handleNewReview(){

        console.log(this.state.dateValue);
        console.log(this.state.reviewValue);
        console.log(this.state.scoreValue);
        console.log(this.state.authorName);

        const newReview = {
            "reviewValue": this.state.reviewValue,
            "reviewRating": this.state.scoreValue,
            "reviewAuthor": this.state.authorName,
            "reviewDate": this.state.dateValue
        };


        let newReviews = this.props.product.reviews.concat(newReview);

        this.setState({
            reviewValue: '',
            scoreValue: 5,
            authorName: '',
            dateValue: '',
            reviews: newReviews
        })

    }

    handleCancelReview(){
        this.setState({
            reviewValue: '',
            scoreValue: 5,
            authorName: '',
            dateValue: '',
        })
    }


    render() {
        return (
            <div>
                <ListReviews reviews={this.state.reviews}/>

                <input
                    type="text"
                    value={this.state.reviewValue}
                    onChange={this.handleReviewValue}
                    placeholder={"Review"}
                />


                <input
                    type="text"
                    value={this.state.authorName}
                    onChange={this.handleAuthorValue}
                    placeholder={"Author Name"}
                />

                <input
                    type="date"
                    value={this.state.dateValue}
                    onChange={this.handleDateValue}
                    placeholder={"DD/MM/AAAA"}
                />

                <input
                    type="number"
                    min="1"
                    max="5"
                    value={this.state.scoreValue}
                    onChange={this.handleScoreValue}
                />

                <button
                    onClick={this.handleNewReview}
                >
                    Add Review
                </button>

                <button
                    onClick={this.handleCancelReview}
                >
                    Cancel
                </button>

            </div>
        );
    }
}

export default ReviewBox;