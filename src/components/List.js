import React, { Component } from 'react';
import '../css/List.css';
import ListItem from './ListItem';

class List extends Component {

    render() {
        return (
            <div>
                {this.props.product.map((item,index) =>
                    <ListItem
                        product={item}
                    />
                )}
            </div>
        );
    }
}

export default List;