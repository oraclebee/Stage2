// import React from 'react';
// import { Carousel } from 'antd';
// import "../Resources/Slider.css";

// // const contentStyle = {
// //   height: '20vh',
// //   color: '#fff',
// //   lineHeight: '160px',
// //   textAlign: 'center',
// //   background: '#364d79',
// //   width:'50%'
// // };
// const godStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     }

//     const menStyle = {
//       width:'100%',
//       paddingLeft: '25%',
//       paddingTop: '30px',
//     }
// const Slider = () => (
//   <div className='god' style={godStyle}>
//     <div className='MEN' style ={menStyle}> 
//         <Carousel autoplay>
//           <div>
//             <img src={img1} alt=""id='section1' />
//           </div>
//           <div>
//           <img src={img2} alt="" id='section1'/>
//           </div>
//           <div>
//           <img src={img3} alt="" id='section1'/>
//           </div>
//           {/* <div>
//             <h3 style={contentStyle}>4</h3>
//           </div> */}
//         </Carousel>
//     </div>

//   </div>
//       );
//       export default Slider;
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../Resources/Slider.css";
import img1 from '../img/1.1.jpg';
import img2 from '../img/2.1.jpg';
import img3 from '../img/3.1.jpg';
import img4 from '../img/image 14.png';
import img5 from '../img/3.1.jpg';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const sliderImageUrl = [
  //First image url
  {
    url:
    img1,
  },
  {
    url:
      img2,
  },
  //Second image url
  {
    url:
      img3,
  },
  //Third image url
  {
    url:
      img4,
  },

  //Fourth image url

  {
    url:
    img5,
      
  }
];
const Slider = () => {
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={imageUrl.url} alt="movie" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Slider;