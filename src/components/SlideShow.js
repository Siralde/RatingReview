import React, { Component } from 'react';
import '../css/SlideShow.css'



export default class SlideShow extends Component {
    constructor() {
        super();
        this.state = {
            activeIndex: 0
        };
    }

    jumpToSlide(index) {
        this.setState({
            activeIndex: index
        });
    }

    render() {

        let slides = [{
            imageUrl: "https://raw.githubusercontent.com/DZuz14/React-Image-Viewer/master/dist/img/oriens-belt.jpg",
            caption: "Allan Allan Al Al Allan"
        },
            {
            imageUrl: "https://pbs.twimg.com/profile_images/2576554888/s8vftzr3j0a9r703xdfn.jpeg",
            caption: "Steve Steve Steve"
        }];

        return (
            <div className="slideshow">
                <ul className="slideshow-slides">
                    {
                        // this.props.slides.map((slide, index) => (
                        slides.map((slide, index) => (
                            <li >
                                <figure>
                                    <img src={ slide.imageUrl } />
                                    { slide.caption ? <figcaption>{ slide.caption }</figcaption> : null }
                                </figure>
                            </li>
                        ))
                    }
                </ul>
                <ul className="slideshow-dots">
                    {
                        slides.map((slide, index) => (
                            <li className={ (index === this.state.activeIndex) ? 'active': '' }>
                                <a onClick={ (event)=> this.jumpToSlide(index) }>{ index + 1 }</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}




