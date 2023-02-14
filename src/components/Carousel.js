import React from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
export default class extends React.Component {
    render() {
        return (
            <CarouselProvider
                isPlaying={true}
                interval={4000}
                naturalSlideWidth={100}
                naturalSlideHeight={100}
                totalSlides={3}
            >
                <Slider>
                    <Slide index={0}><img src={this.props.data[0]} width="90%" height="50%" /></Slide>
                    <Slide index={1}><img src={this.props.data[1]} width="90%" height="50%" /></Slide>
                    <Slide index={2}><img src={this.props.data[2]} width="90%" height="50%" /></Slide>
                </Slider>
            </CarouselProvider>
        );
    }
}