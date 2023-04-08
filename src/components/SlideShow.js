import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '600px'
}
const slideImages = [
    {
        url:'https://raw.githubusercontent.com/AnshKapoor/profile-page/PartriclesJS_Addition/src/content/images/Profile_Pic_5.jpg'
    },
    {
        url:'https://raw.githubusercontent.com/AnshKapoor/profile-page/PartriclesJS_Addition/src/content/images/Profile_Pic_6.jpg'
    },
    {
      url:'https://raw.githubusercontent.com/AnshKapoor/profile-page/PartriclesJS_Addition/src/content/images/Profile_Pic_4.jpg'
    },
    {
        url:'https://raw.githubusercontent.com/AnshKapoor/profile-page/PartriclesJS_Addition/src/content/images/Profile_Pic_7.jpg'
      },
      {
        url:'https://raw.githubusercontent.com/AnshKapoor/profile-page/PartriclesJS_Addition/src/content/images/Profile_Pic_8.jpg'
      },
      {
        url:'https://raw.githubusercontent.com/AnshKapoor/profile-page/PartriclesJS_Addition/src/content/images/Profile_Pic_9.jpg'
      }
  ];
  const Slideshow = () => {
    return (
      <div className="slide-container">
        <Fade>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                
              </div>
            </div>
          ))} 
        </Fade>
      </div>
    )
}
export default Slideshow;