import React, { Component } from 'react';
import '../css/App.css';
// JSX's Products
import products from '../products.js';
// Dumb Components
import List from '../components/List';

//Statefull Components
import SlideShow from './SlideShow';
import SpecificBoxes from './SpecificBoxes';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: products().data,
            selected: false,
            id: 0
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleToList = this.handleToList.bind(this);

    } // Fin del constructor

    componentWillMount() {

        let product = this.state.product;

        let x = 0;
        let i, j;
        let media;
        let integer;

        for(i = 0; i < product.length; i++) {
            for(j = 0; j < product[i].reviews.length; j++){
                x = x + product[i].reviews[j].reviewRating;
            }
            media = x/j+1;
            integer = parseInt(media, 10);
            product[i].rating = integer;
            x = 0;
        }

        this.setState({
            product
        });
    }

    handleClick(id){

        this.setState({
            selected: !this.state.selected,
            id
        });
    }

    handleToList(){

        this.setState({
            selected: !this.state.selected,
            id: 0
        });
    }


    render() {

        // const product = products().data;

        const product = this.state.product;
        const selectedProduct = product[this.state.id];



        if (this.state.selected === false)
        {
            return (
                <div>
                    <List
                        product={product}
                        selected={this.handleClick}
                        onDemand={this.state.selected}
                    />
                </div>
            );
        }
        else
        {
            return (
                <div>

                    <SlideShow
                        images={selectedProduct.images}
                        onDemand={this.state.selected}
                    />

                    <div>
                        {selectedProduct.name}
                    </div>

                    <div>
                        {selectedProduct.price}
                    </div>

                    <div>
                        {selectedProduct.rating}
                    </div>

                    <button
                        onClick={this.handleToList}
                    >
                        GO BACK
                    </button>

                    {/*<SlideShow*/}
                    {/*/>*/}

                    <SpecificBoxes product={selectedProduct}/>

                </div>
            )
        }

    }
}

export default App;
