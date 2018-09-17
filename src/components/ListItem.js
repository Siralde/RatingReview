import React, { Component } from 'react';

// Components

import SlideShow from '../containers/SlideShow';

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

                <SlideShow
                    id={this.props.product.id}
                    images={this.props.product.images}
                    selected={this.props.selected}
                    onDemand={this.props.onDemand}
                />

                <NameBox
                    id={this.props.product.id}
                    name={this.props.product.name}
                    selected={this.props.selected}
                />

                <PriceBox
                    id={this.props.product.id}
                    price={this.props.product.price}
                    selected={this.props.selected}
                />

                <RatingBox
                    id={this.props.product.id}
                    rating={this.props.product.rating}
                    selected={this.props.selected}
                />

                <MoreInfo
                    id={this.props.product.id}
                    selected={this.props.selected}
                />

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