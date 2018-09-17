import React, { Component } from 'react';
import '../css/ReviewsTable.css'

class ListReviews extends Component {
    render() {

        let fila = this.props.reviews.map((item, index) => {
            return(
                <tr key={index}>
                    <td>
                        {item.reviewValue}
                    </td>

                    <td>
                        {item.reviewRating}
                        <br/>
                        {item.reviewAuthor}
                        <br/>
                        {item.reviewDate}
                        <br/>
                    </td>
                </tr>
            )
        });

        return (
            <div>
                <table className={'ver-minimalist'}>

                    <thead>
                        {/*<tr>*/}
                            {/*<th>Titulo</th>*/}
                        {/*</tr>*/}
                        Reviews
                    </thead>

                    <tbody >
                        {fila}
                    </tbody>
                </table>


            </div>
        );
    }
}

export default ListReviews;