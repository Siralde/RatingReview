import React, { Component } from 'react';

import Slide from '../components/Slide'
import LeftArrow from '../components/LeftArrow'
import RightArrow from '../components/RightArrow'

import '../css/Slider.css'

export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0
        }
    }

    goToPrevSlide = () => {
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1
        }));
    };

    goToNextSlide = () => {
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1
        }));
    };

    render() {
        return (
            <div className="slider">
                {
                    this.props.images.map((image, index) => (
                        <Slide
                            image={image}
                        />
                    ))
                }
                <LeftArrow
                    goToPrevSlide={this.goToPrevSlide}
                />
                <RightArrow
                    goToNextSlide={this.goToNextSlide}
                />
                <div>
                    Slider
                </div>
            </div>
        );
    }
}