import React from "react"
import Slider from "../Components/Slider"
import Header from "../Components/Header"
import Cards from "../Components/Cards"
import img1 from "../img/3.jpg"
import img2 from "../img/image.11.png"
import img3 from "../img/image.2.png"
import img4 from "../img/image 5.png"
import '../Resources/Pages.css'
import { Link } from "react-router-dom"
import Footer from "../Components/Footer"
export default function Home(){
  return (
    <>
     <Header />
      <Slider/>
      <section style={{width:'100%', display:'flex', justifyContent:'center', marginTop:'50px'}}>
      <Cards />
      </section>
      <section style={{paddingTop:'50px', paddingBottom:'50px', width:'100%'}}>
        <div className="Explore">
          <h3>MORE CATEGORIES TO EXPLORE </h3>
        </div>
        <div style={{display:'flex', gap:'10px', justifyContent:'center'}}>
          <span id="imgx">
          <img src={img1} alt="" />
          <h2>SUIT JACKETS</h2>
          <Link id="tag" to ='/' style={{borderBottom:'2px solid black', padding:'3px'}}>SHOP NOW</Link>
          </span>
          <span id="imgx">
          <img src={img2} alt=""  />
          <h2>JUMPSUIT</h2>
          <Link id="tag" to ='/' style={{borderBottom:'2px solid black', padding:'3px'}}>SHOP NOW</Link>
          </span>
          <span id="imgx">
          <img src={img3} alt=""  />
          <h2>LOUNGEWEAR</h2>
          <Link id="tag" to ='/' style={{borderBottom:'2px solid black', padding:'3px'}}>SHOP NOW</Link>
          </span>
          <span id="imgx">
          <img src={img4} alt=""  />
          <h2>SWEATS</h2>
          <Link id="tag" to ='/' style={{borderBottom:'2px solid black', padding:'3px'}}>SHOP NOW</Link>
          </span>
        </div>
      </section>
      <section id="fourth" style={{backgroundColor:'#F5F5F5'}}>
        <div>
        <h3>SIGN UP FOR JANORE <br /> UPDATES</h3> 
        <p>Be in the know about the latest events,<br /> new collections and exciting special<br /> programs from Janore</p> 
        </div>
        <div style={{display:'flex', justifyContent:'center', flexDirection:'column', gap:'50px'}}>
          <div>
          <p>Choose your favorite Web language:</p>
<form style={{display:'flex', gap:'70px'}}>
  <span style={{display:"flex", gap:'10px'}}>
  <input type="radio" id="male" name="gender" value="Male" />
  <label for="male">MALE</label><br />
  </span>
  <span>
  <input type="radio" id="css" name="gender" value="Female" />
  <label for="female">Female</label><br />
  </span>
  <span>
  <input type="radio" id="fluid" name="gender" value="Fluid" />
  <label for="fluid">Fluid</label>
  </span>
</form>
          </div>
          <span>
            <h3 style={{marginBottom:'10px'}}>Email Sign-up</h3>
            <input type="email" name="" id="" placeholder="Enter Email" style={{border:'0px', borderBottom:'1px solid', width:'300px', backgroundColor:'#F5F5F5'}}/>
          </span>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </>
  )
};

