import React, { Component } from 'react';
import ListReviews from '../components/ListReviews';
import moment from 'moment'

class ReviewBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reviewValue: '',
            ratingValue: 5,
            authorName: '',
            reviews: this.props.product.reviews
        };
        this.handleReviewValue = this.handleReviewValue.bind(this);
        this.handleAuthorValue = this.handleAuthorValue.bind(this);
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

    handleScoreValue(event){
        this.setState({
            ratingValue: event.target.value
        })
    }

    handleNewReview(){

        let dateReview = moment().format("DD/MM/YYYY");

        const newReview = {
            "reviewValue": this.state.reviewValue,
            "reviewRating": this.state.ratingValue,
            "reviewAuthor": this.state.authorName,
            "reviewDate": dateReview
        };

        this.setState(prevState => ({
            reviewValue: '',
            ratingValue: 5,
            authorName: '',
            reviews: [newReview, ...prevState.reviews]
        }))

    }

    handleCancelReview(){
        this.setState({
            reviewValue: '',
            ratingValue: 5,
            authorName: '',
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
                    type="number"
                    min="1"
                    max="5"
                    value={this.state.ratingValue}
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