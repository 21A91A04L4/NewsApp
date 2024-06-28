import CarImg1 from "../images/cars-big/audi-box.png";
import CarImg2 from "../images/cars-big/golf6-box.png";
import CarImg3 from "../images/cars-big/toyota-box.png";
import CarImg4 from "../images/cars-big/bmw-box.png";
import CarImg5 from "../images/cars-big/benz-box.png";
import CarImg6 from "../images/cars-big/passat-box.png";
import { Link } from "react-router-dom";
// import image4 from '../images/img4.jpg';
import image5 from '../images/img5.jpg'
import { useEffect, useState } from "react";
import '../styles/login.css'
import axios from "axios";
import { Modal } from "bootstrap";
function Models() {
  const [model,setModel]=useState([])
  // const [techmodal,setmodeltech]=useState()
  useEffect(()=>{
    axios.get('http://localhost:4000/getnews').then((res)=>{
        setModel(res.data)
        console.log(res.data)
    })
    // console.log(techmodal)

},[])

  return (
    <>
       <nav className="navbar navbar-expand navbar-light bg-danger">
                <div className="container-fluid">
                    <img src={image5} className="homeicon"/>
                    <span>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link wli" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link wli" href="/models">Placements</a>
                            </li>
                            {/* <li className="nav-item">
                            <a className="nav-link wli" href="#">Pricing</a>
                            </li> */}
                            <li className="nav-item">
                            <a className="nav-link wli" href="/technicalhub">Technicalhub</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link wli" href="/contacts">Events</a>
                            </li>
                            <li className="-item">
                            <a className="nav-linknav wli" href="/contacts">Sports</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link wli" href="/contacts">Holidays</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link wli" href="/register">Admin</a>
                            </li>
                        </ul>
                    </span>
                </div>
            </nav>
      <section className="models-section">
        <div className="container">
          <div className="models-div">
            {
              model.map((ele,index)=>(

                <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={`http://localhost:4000/images/${ele.image}`} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>{ele.headline}</p>
                    </div>
                    <div className="models-div__box__descr__name-price__price">
                      <h4>{ele.price}</h4>
                  
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <div>{ele.description}</div>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link to="/booking">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default Models;
