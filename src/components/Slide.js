import React, {Component} from 'react';

class Slide extends Component {
    render() {

        const styles = {
            backgroundImage: `url(${this.props.image.url})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 60%'
        };

        return (
            <div>

            <div
                className="slide"
                style={styles}
            >

            </div>


            Slide
            </div>


        );
    }
};

export default Slide;