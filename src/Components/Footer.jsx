import React from "react"
import logo from '../img/JANORE.svg'
import { Link } from "react-router-dom"
import facebook from '../img/Symbol.svg.png'
import instagram from '../img/Vector.png'
import twitter from '../img/x_logo.svg.png'
import tiktok from '../img/tiktok_symbol.svg.png'
import "../Resources/Resources.css"


export default function Footer(){
  return (
    <>
    <section className="footer" >
    <div id="logos" style={{marginTop:'70px'}}>
        <img src={logo} alt="logo" />
        <p style={{fontSize:'10px', paddingLeft:'10px'}}>Redefining Luxury</p>
      </div>
    <div id="footer">

      <div id="dets">
        <h1>HELP</h1>
        <Link id="tag" to ='/FAGs'>FAGs</Link>
        <Link id="tag" to ='/Size Guide'>Size Guide</Link>
        <Link id="tag" to ='/Shipping'>Shipping</Link>
        <Link id="tag" to ='/Shipping'>Shipping</Link>
        <Link id="tag" to ='/Contact Us'>Contact Us</Link>
      </div>
      <div id="dets">
        <h1>JANORE</h1>
        <Link id="tag" to ='/About us'>About us</Link>
        <Link id="tag" to ='/Our Stores'>Our Stores</Link>
        <Link id="tag" to ='/Blog'>Blog</Link>
        <Link id="tag" to ='/Career'>Career</Link>
      </div>
      <div id="dets">
        <h1>LANGUAGE</h1>
        <Link id="tag" to ='/English'>English</Link>
      </div>
      <div id="dets">
        <h1>MORE INFO</h1>
        <Link id="tag" to ='/Account'>Account</Link>
        <Link id="tag" to ='/Wishlist'>Wishlist</Link>
        <Link id="tag" to ='/'>Track my order</Link>
      </div>
      <div id="dets">
        <h1>CORPORATE</h1>
        <Link id="tag" to ='/privacy'>Privacy</Link>
        <Link id="tag" to ='/cookie'>Cookie Settings</Link>
        <Link id="tag" to ='/t&c'>Terms & Conditions</Link>
        <Link id="tag" to ='/Press'>Accessibility</Link>
      </div>
      <div id="icons">
        <h1>FOLLOW US</h1>
        <Link id="tag" to ='/twitter'><img src={twitter} alt="" /></Link>
        <Link id="tag" to ='/tiktok'><img src={tiktok} alt="" /></Link>
        <Link id="tag" to ='/facebook'><img src={facebook} alt="" /></Link>
        <Link id="tag" to ='/instagram'><img src={instagram} alt="" /></Link>
    </div>
      </div>
    </section>
    </>
  )
};

