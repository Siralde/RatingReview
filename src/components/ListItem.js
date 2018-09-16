import React, { Component } from 'react';

// Dumb Components
import NameBox from './NameBox';
import PriceBox from './PriceBox';
import RatingBox from "./RatingBox";
import MoreInfo from "./MoreInfoBox";

// CSS
import '../css/ListItem.css';

class ListItem extends Component {

    render() {

        return (
            <div>
                <div >
                    {/*<img />*/}
                </div>

                <NameBox
                    name={this.props.product.name}
                />

                <PriceBox
                    price={this.props.product.price}
                />

                <RatingBox
                    rating={this.props.product.rating}
                />

                <MoreInfo/>

                <div className={'BuyButton'}>
                    BUY
                </div>

                <div className={'AddCarButton'}>
                    ADD TO CAR
                </div>

            </div>
        );
    }
}

export default ListItem;