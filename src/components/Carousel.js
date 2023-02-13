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
                    <Slide index={0}><img src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b25saW5lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" width="70%" height="50%" /></Slide>
                    <Slide index={1}><img src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG9ubGluZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" width="70%" height="50%" /></Slide>
                    <Slide index={2}><img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG9ubGluZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" width="70%" height="50%" /></Slide>
                </Slider>
            </CarouselProvider>
        );
    }
}