import { useState } from "react";
import { data } from "./dataTwo";
import './App.css'

function About() {
    const vegetables = data;
    const [showText, setShowText] = useState(false);

    const showTextClick = (item) => {
        item.showMore = !item.showMore
        setShowText(!showText)
  }
  
  return(
    <div>        
        {vegetables.map((item => {
        const { id, name, description, image, showMore } = item;
        return(
          <div key={id}>
            <div className="container">
                <img src={ image } width="400px" alt="grocery"/>
            </div>
            <div className="container">
                <h3>{name}</h3>
            </div>
            <div className="container">
                <p>{ showMore ? description : description.substring(0,190) + "..." }
                <button className="btn" onClick={() => showTextClick(item)}>{showMore ? "Show less" : "Show more"}</button>
                </p>
            </div>          
          </div>
        )
      }))}
    </div>
  )
}

export default About;


