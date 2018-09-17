import React, { Component } from 'react';

// Components
// import Slider from '../containers/Slider'

import SlideShow from './SlideShow';

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
                {/*<Slider*/}
                    {/*images={this.props.product.images}*/}
                {/*/>*/}

                <SlideShow
                    images={this.props.product.images}
                />

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