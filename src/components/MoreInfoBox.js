import React, { Component } from 'react';

// CSS
import '../css/MoreInfoBox.css';

class MoreInfo extends Component {
    render() {
        return (
            <div
                className={'MoreInfo'}
                onClick={this.props.selected.bind(this, this.props.id)}
            >
                More Info
            </div>
        );
    }
}

export default MoreInfo;