import React from 'react';
import mountain from '../image/1st.jpeg';
import '../style.css'
export default function Main(props){
    return(
        <div className="container">
        <img src = {props.img} alt="visited-places" className="image" />
        <div className="content">
        <div className="place">
        <i class="fa fa-map-marker" aria-hidden="true"></i>
        <p className="country">{props.location}</p> <a href = "#"> View on google map</a>
        </div>
        <h3 className="place-name">{props.title}</h3>
        <div className="description">
        <h4>{props.start} - {props.end} </h4>
        <p className="information">
        {props.description} </p>
        </div>
        </div>
        </div>
    )
}