import React, { Component } from 'react';
import ListReviews from '../components/ListReviews';

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
        this.handleAuthorValue = this.handleAuthorValue.bind(this);
        this.handleDateValue = this.handleDateValue.bind(this);

    };

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

    render() {

        const reviews = this.props.product.reviews;

        return (
            <div>
                Review

                <input
                    type="text"
                    value={this.state.dateValue}
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
                    type="text"
                    value={this.state.dateValue}
                    onChange={this.handleDateValue}
                    placeholder={"DD/MM/AAAA"}
                />

                <input
                    type="text"
                    value={this.state.scoreValue}
                    onChange={this.handleScoreValue}
                    placeholder={"Score"}
                />

                <ListReviews reviews={reviews}/>

            </div>
        );
    }
}

export default ReviewBox;