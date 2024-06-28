import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import image3 from '../images/img3.jpg'
const Register = () =>{
    const [formdata, setFormdata] = useState({
        'name':'',
        'email': '',
        'password': ''
    })
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(formdata)

        axios.post('http://localhost:9121/createuser',{formdata})
        .then((result) => {
            if (result.data.msg === "Successfull"){
                alert("Registerd Successfully")
                window.location.href = '/login'
            }
            else{
                alert(result.data.msg)
            }
        })
        .catch((err) => {
            console.log("Error: ", err)
        })
    }
    const logpage=()=>window.location.href='/login'
    return(
        <>
            {/* <h1>Registration Page</h1> */}
            <nav className="navbar navbar-expand-lg navbar-light bg-danger" >
                <div className="container-fluid">
                    <a className="navbar-brand " href="#" ><span className="btext">Car Rental</span></a>
                    <span className="rs">Already have an account?</span>
                    <button className="rb" onClick={logpage}>Login</button>
                </div>
            </nav>
            <div className="container-fluid">
                <div className="registerimage">
                        <img src={image3} />
                </div>
                <div className="form-container register" onSubmit={handleSubmit}>
                    <form className="card p-4 register-form">
                        <h3 className="text-center">Register</h3>
                        <label className="lb">Name</label>
                        <input type="text" name="name" required className="ip" placeholder="  Enter your name" onChange={(e) => setFormdata({...formdata, name: e.target.value})}/>
                        <br />
                        <label className="lb">Email</label>
                        <input type="email" name="email" required className="ip" placeholder="  Enter your email" onChange={(e) => setFormdata({...formdata, email: e.target.value})}/>
                        <br />
                        <label className="lb">Password</label>
                        <input type="password" name="password" required className="ip" placeholder="  Enter the password" onChange={(e) => setFormdata({...formdata, password: e.target.value})}/>
                        <br />
                        <button className="btn btn-danger button" type="submit">Register</button>
                        {/* <p className="mt-2 mb-0 para">OR</p> */}
                    </form>
                </div>
            </div>
        </>
    )
}
export default Register