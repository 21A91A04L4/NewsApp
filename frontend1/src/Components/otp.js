import { useState} from "react"
import axios from "axios";
import '../styles/login.css';
import image1 from '../images/img1.jpg'

const Otp = () =>{
    const [odata, setOdata] = useState({
        'otp': '',
    })
      
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(odata)
        axios.post('http://localhost:9121/getotp',odata).then((res)=>{
            if(res.data.msg=="Otp verified"){
                window.alert("otp verified")
                window.location.href="/h"
            }
            else{
                window.alert(res.data.msg)
            }
        })
    }
    //     e.preventDefault()
    //     axios.post('http://localhost:9121/getuser', formdata)
    //     .then((res) => {
    //         if(res.data.msg === "login successfull"){
    //             alert("Login Successful")
    //             window.location.href = '/h'
    //         }
    //         else{
    //             alert(res.data.msg)
    //         }
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
    // }
    // const regipage=()=>window.location.href='/register'
    return(
        <>
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-danger" >
                <div className="container-fluid">
                    <a className="navbar-brand " href="#" ><span className="btext">Car Rental</span></a>
                    <span className="rs">Don't have an account?</span>
                    <button className="rb" onClick={regipage}>Register</button>
                </div>
            </nav> */}
           <center>
           <div className="loginpage" id="otpdiv">
                <div className="container-fluid">
                    <div className="form-container login" onSubmit={handleSubmit} >
                        <form className="card p-4 login-form" >
                            <h3 className="text-center">Enter  Otp</h3>
                            <label className="lb">otp</label>
                            <input type="text" name="otp" required className="ip" placeholder="Enter your otp" onChange={(e) => setOdata({...odata, otp: e.target.value})}/>
                            <br />
                            {/* <label className="lb">Password</label>
                            <input type="password" name="password" required className="ip" placeholder="  Enter the password" onChange={(e) => setFormdata({...formdata, password: e.target.value})}/>
                            <br /> */}
                            <button className="btn btn-danger button" type="submit">Verify</button>
                        </form>
                    </div>
                    {/* <div className="loginimage">
                        <img src={image1} />
                    </div> */}
                </div>
            </div>
           </center>
            
        </>
    )
}
export default Otp