import React, { Component } from 'react';
import '../css/List.css';
import ListItem from './ListItem';

class List extends Component {

    render() {
        return (
            <div>
                {this.props.product.map((item, index) =>
                    <ListItem
                        key={index}
                        product={item}
                        selected={this.props.selected}
                        onDemand={this.props.onDemand}
                    />
                )}
            </div>
        );
    }
}

export default List;