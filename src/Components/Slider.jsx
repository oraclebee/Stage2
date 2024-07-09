import React from 'react';
import { Carousel } from 'antd';
import "../Resources/Slider.css";
import img1 from '../img/1.1.jpg';
import img2 from '../img/2.1.jpg';
import img3 from '../img/3.1.jpg';
// const contentStyle = {
//   height: '20vh',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
//   width:'50%'
// };
const godStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    }

    const menStyle = {
      width:'100%',
      paddingLeft: '25%',
      paddingTop: '30px',
    }
const Slider = () => (
  <div className='god' style={godStyle}>
    <div className='MEN' style ={menStyle}> 
        <Carousel autoplay>
          <div>
            <img src={img1} alt=""id='section1' />
          </div>
          <div>
          <img src={img2} alt="" id='section1'/>
          </div>
          <div>
          <img src={img3} alt="" id='section1'/>
          </div>
          {/* <div>
            <h3 style={contentStyle}>4</h3>
          </div> */}
        </Carousel>
    </div>

  </div>
      );
      export default Slider;