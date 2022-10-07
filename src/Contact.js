import { useState } from "react";
import {data} from "./data";
import './App.css'


function Contact() {
    const [veg, setVeg] = useState(0);
    const {image} = data[veg];
    
  const previousVeg = () => {
    setVeg(( veg => {
      veg --;
      if (veg < 0) {
        return data.length-1;
      }
      return veg;
    }))
  }

  const nextVeg = () => {
    setVeg(( veg => {
      veg ++;
      if (veg > data.length - 1) {
        veg = 0;
      }
      return veg;
    }))
  }

return(<div>
    
  <div className="container">
  <img src={image} height="400px" alt="products"/>
  </div>

  <div className="container">
    <button className="btn" onClick={previousVeg}>Previous</button>
    <button className="btn" onClick={nextVeg}>Next</button>
  </div>
  <div className="contact">
        <h2 className="order">Questions about your order?</h2>
        <p>We're here to help! The fastest way to get an answer is to use the app or website. Simply log in to your account, select a recent order and then use Order help to report your query.</p>
        <p>Or you can mail us at support@online.farmers.market.com</p>
        <p>Please note we don't accept orders over the phone - so if you'd like to place an order, please place it online.</p>
    </div>
</div>)
}

export default Contact;
