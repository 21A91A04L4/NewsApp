import { useState} from "react"
import axios from "axios";
import '../styles/login.css';
import image1 from '../images/img1.jpg'

const Login = () =>{
    const [formdata, setFormdata] = useState({
        'email': '',
        'password': ''
    })
      
    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:9121/getuser', formdata)
        .then((res) => {
            if(res.data.msg === "login successfull"){
                alert("Login Successful")
                window.location.href = '/otp'
            }
            else{
                alert(res.data.msg)
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }
    const regipage=()=>window.location.href='/register'
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-danger" >
                <div className="container-fluid">
                    <a className="navbar-brand " href="/" ><span className="btext">Car Rental</span></a>
                    <span className="rs">Don't have an account?</span>
                    <button className="rb" onClick={regipage}>Register</button>
                </div>
            </nav>
            <div className="loginpage">
                <div className="container-fluid">
                    <div className="form-container login" onSubmit={handleSubmit}>
                        <form className="card p-4 login-form">
                            <h3 className="text-center">User's Login</h3>
                            <label className="lb">Email</label>
                            <input type="email" name="email" required className="ip" placeholder="Enter your email" onChange={(e) => setFormdata({...formdata, email: e.target.value})}/>
                            <br />
                            <label className="lb">Password</label>
                            <input type="password" name="password" required className="ip" placeholder="  Enter the password" onChange={(e) => setFormdata({...formdata, password: e.target.value})}/>
                            <br />
                            <button className="btn btn-danger button" type="submit">Login</button>
                        </form>
                    </div>
                    <div className="loginimage">
                        <img src={image1} />
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default Login