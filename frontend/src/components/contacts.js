import image4 from '../images/img4.jpg'
function Contacts() {
  const goreg=()=>{
    if(window.confirm("Please Register First")==true){
      window.location.href='/register'
    }
    else{
      window.location.href='/contacts'
    }
  }
  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-danger">
                <div className="container-fluid">
                    <img src={image4} className="homeicon"/>
                    <span>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link wli" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link wli" href="/models">Cars</a>
                            </li>
                            {/* <li className="nav-item">
                            <a className="nav-link wli" href="#">Pricing</a>
                            </li> */}
                            <li className="nav-item">
                            <a className="nav-link wli" href="/team">About</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link wli" href="/contacts">Contact</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link wli" href="/login">Login/</a>
                            <a className="nav-link wli" href="/register">Register</a>
                            </li>
                        </ul>
                    </span>
                </div>
            </nav>  
      <section className="contact-page">
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Need additional information?</h2>
              <p>
                A multifaceted professional skilled in multiple fields of
                research, development as well as a learning specialist. Over 15
                years of experience.
              </p>
              <a href="/">
                <i className="fa-solid fa-phone"></i>&nbsp; (+91) 99999 44444
              </a>
              <a href="/">
                <i className="fa-solid fa-envelope"></i>&nbsp;
                suryateja@gmail.com
              </a>
              <a href="/">
                <i className="fa-solid fa-location-dot"></i>&nbsp; Ap,
                India
              </a>
            </div>
            <div className="contact-div__form">
              <form className="contact-div_form_in">
                <label>
                  Full Name <b>*</b>
                </label>
                <input type="text" placeholder='E.g: "surya teja"'></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com"></input>

                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea placeholder="Write Here.."></textarea>

                <button type="submit" onClick={goreg}>
                  <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Send
                  Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>(+91) 91217-21855</h3>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contacts;
