import axios from 'axios'
import { useState,useEffect } from 'react'
import * as reactBootStrap from 'react-bootstrap'
import { Link } from "react-router-dom";
export default function Preload(){

    const [Pre,setPre]=useState(false)
    const [mod,setmod]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:9121/getmodel').then((res)=>{
            setmod(res.data)
            setPre(true)
        })
    },[])
    return(
        <>
            {Pre ?<section className="models-section">
        <div className="container">
          <div className="models-div">
            {
              mod.map((ele,index)=>(
                <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={`http://localhost:9121/images/${ele.carimgs}`} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>{ele.name}</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>{ele.price}</h4>
                      <p>per day</p>
                    </div> 
                  </div> 
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; {ele.model}
                    </span>
                    <span style={{ textAlign: "right" }}>
                      {ele.rating} &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; {ele.transmission}
                    </span>
                    <span style={{ textAlign: "right" }}>
                      {ele.variant} &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link to="/booking">
                      Book Ride
                    </Link>
                  </div>
                </div>
              </div>
            </div>
              ))
            }
          </div>
        </div>
        </section> :<reactBootStrap.Spinner animation="border" className='spinnerClass'/>}
            
        </>
    )
}