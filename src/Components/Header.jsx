import React from "react"
import Like from "./Like";
import "../Resources/Resources.css";
import img1 from "../img/icons8-bag-96.png";
import img2 from "../img/icons8-search-50.png";
import img3 from "../img/JANORE.svg";
import { Link } from "react-router-dom";


export default function Header(){
    return (
        <>
        <div className="Top">
            <h1>Sales Now!!! Save up to 50%</h1>
        </div>
        <div id="Janore">
            <p>Shipping</p>
            {/* <h1><em>JANORE</em></h1> */}
            <span id="logo">
            <img src={img3} alt=""  />
            </span>
            <span id="harry">
           <select name="hk-harry" >
             <option value="">Nk Harry</option>
             <option value="">Expedited</option>
             <option value="">Priority</option>
             <option value="">One-day</option>
           </select>
            <img src={img1} alt="shopping-bag" />
           <Like/>
            </span>
        </div>
        <div id="Line2">
            <div id="lang">
                <p>Language:</p>
            <select name="lang" id="">
                <option value="">EN</option>
                <option value="">FR</option>
                <option value="">IT</option>
                <option value="">POR</option>
                <option value="">SPN</option>
            </select>
            </div>
            <div id="nav">
                <Link id="tag" to ='/'>What's new </Link>
                <Link id="tag" to ='/about'>Sales</Link>
                <Link id="tag" to ='/about'>Shop</Link>
                <Link id="tag" to ='/about'>Collection</Link>
                <Link id="tag" to ='/about'>Store</Link>
                <Link id="tag" to ='/about'>Blog</Link>
            </div>
            <div id="search">
            <img src={img2} alt="" />
            <input type="text" name="" id="" placeholder="Search" />
            </div>
        </div>
        </>
    )
} 
