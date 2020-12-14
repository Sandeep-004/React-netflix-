import React from "react";


function Cards(props) {

    return(
  
      <div className="Cards">
        <img src={props.imgsrc} alt='series_img' className="Card__img" />
        <div className="card__info" >
          <span className="cards__category">{props.sname}</span>
          <h3 className="Card__title">{props.title}</h3>
          <a href={props.link} target="_blank" rel="noreferrer">
            <button> Watch Now </button>
          </a>
        </div>
      </div>
  
    )
  
  }

  export default Cards;