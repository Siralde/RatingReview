import React, { Component } from 'react';

// CSS
import '../css/NameBox.css';

class NameBox extends Component {
    render() {
        return (
            <div
                className={'Name'}
                onClick={this.props.selected.bind(this, this.props.id)}
            >
                {this.props.name}
            </div>
        );
    }
}

export default NameBox;