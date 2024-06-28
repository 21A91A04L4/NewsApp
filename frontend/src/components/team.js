// // import Footer from "../components/Footer";
// // import HeroPages from "../components/HeroPages";
// // import Person1 from "../images/team/8.png";
// // import Person2 from "../images/team/9.png";
// // import Person3 from "../images/team/7.png";
// // import Person4 from "../images/team/10.png";
// // import Person5 from "../images/team/11.png";
// // import Person6 from "../images/team/13.png";
// import image4 from '../images/img4.jpg';
// import { useEffect, useState } from "react";
// import axios from "axios";
// function Team() {
//   const [team,setTeam]=useState([])
//   // const teamPpl = [
//   //   { img: Person1, name: "Surya Teja", job: "Business Owner" },
//   //   { img: Person2, name: "Ravi Teja", job: "Ceo" },
//   //   { img: Person3, name: "Charan Teja", job: "Manager" },
//   //   { img: Person4, name: "G Simhadri", job: "Proctor" },
//   //   { img: Person5, name: "J Durga Prasad", job: "Proctor" },
//   //   { img: Person6, name: "N Durga Prasad", job: "proctor" },
//   // ];
//   useEffect(()=>{
//     axios.get('http://localhost:9121/getTeam').then((res)=>{
//         setTeam(res.data)
//     })
// },[])
//   return (
//     <>
//       <nav className="navbar navbar-expand navbar-light bg-danger">
//                 <div className="container-fluid">
//                     <img src={image4} className="homeicon"/>
//                     <span>
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li className="nav-item">
//                             <a className="nav-link wli" aria-current="page" href="/">Home</a>
//                             </li>
//                             <li className="nav-item">
//                             <a className="nav-link wli" href="/models">Cars</a>
//                             </li>
//                             {/* <li className="nav-item">
//                             <a className="nav-link wli" href="#">Pricing</a>
//                             </li> */}
//                             <li className="nav-item">
//                             <a className="nav-link wli" href="/team">About</a>
//                             </li>
//                             <li className="nav-item">
//                             <a className="nav-link wli" href="/contacts">Contact</a>
//                             </li>
//                             <li className="nav-item">
//                             <a className="nav-link wli" href="/login">Login/</a>
//                             <a className="nav-link wli" href="/register">Register</a>
//                             </li>
//                         </ul>
//                     </span>
//                 </div>
//             </nav>
//       <section className="team-page">
//         {/* <HeroPages name="Our Team" /> */}
//         <div className="cotnainer">
//           <div className="team-container">
//             {team.map((ppl, id) => (
//               <div key={id} className="team-container__box">
//                 <div className="team-container__box__img-div">
//                   <img src={`http://localhost:9121/images/${ppl.mempics}`} alt="team_img" />
//                 </div>
//                 <div className="team-container__box__descr">
//                   <h3>{ppl.name}</h3>
//                   <p>{ppl.position}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="book-banner">
//           <div className="book-banner__overlay"></div>
//           <div className="container">
//             <div className="text-content">
//               <h2>Book a car by getting in touch with us</h2>
//               <span>
//                 <i className="fa-solid fa-phone"></i>
//                 <h3>(+91) 91217-21855</h3>
//               </span>
//             </div>
//           </div>
//         </div>
//         {/* <Footer /> */}
//       </section>
//     </>
//   );
// }

// export default Team;
