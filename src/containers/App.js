import React, { Component } from 'react';
import '../css/App.css';
// JSX's Products
import products from '../products.js';
// Dumb Components
import List from '../components/List';

class App extends Component {
    render() {

        const product = products().data;

        return (
            <div>
                <List
                    product={product}
                />

            </div>
        );
    }
}

export default App;
