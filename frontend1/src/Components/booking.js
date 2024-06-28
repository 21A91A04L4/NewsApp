import axios from "axios"
import { useState } from "react"

export default function Booking(){
    
    const [bookdata,setBook]=useState({
        'name':'',
        'email':'',
        'adhar':'',
        'licence':'',
        'phone':'',
        'car':''
    })
    const handlebook=(e)=>{
        // console.log(bookdata)
        e.preventDefault()
        axios.post("http://localhost:9121/bookcar",{bookdata}).then((res)=>{
            alert(res.data.msg);
            window.location.href='/booking';
        })
    }
    const goh=()=>{
        if(window.confirm("Are You Sure You Want To Cancel Booking")==true){
            window.location.href='/h'
        }
    }
    return(
        <>
            <center>
                <h1>Book Your Car Now</h1>
                <div className="loginpage">
                <div className="container-fluid">
                    <div className="form-container login" >
                        <form className="card p-4 login-form" onSubmit={handlebook} >
                            <h3 className="text-center">Book Details</h3>
                            <label className="lb">Name</label>
                            <input type="text" name="name" required className="ip" placeholder="Enter your name" onChange={(e) => setBook({...bookdata, name: e.target.value})}/>
                            <br />
                            <label className="lb">Email</label>
                            <input type="email" name="email" required className="ip" placeholder="Enter your email" onChange={(e) => setBook({...bookdata, email: e.target.value})}/>
                            <br />
                            <label className="lb">Adhar No</label>
                            <input type="text" name="adhar" required className="ip" placeholder="  Enter adhar no" onChange={(e) => setBook({...bookdata, adhar: e.target.value})}/>
                            <br />
                            <label className="lb">Licence No</label>
                            <input type="text" name="licence" required className="ip" placeholder="  Enter licence no" onChange={(e) => setBook({...bookdata, licence: e.target.value})}/>
                            <br />
                            <label className="lb">Phone No</label>
                            <input type="text" name="phone" required className="ip" placeholder="  Enter phone no" onChange={(e) => setBook({...bookdata, phone: e.target.value})}/>
                            <br />
                            <label className="lb">Select Car</label>
                            <select onChange={(e) => setBook({...bookdata, car: e.target.value})} >
                                <option>---select---</option>
                                <option>Audi A1</option>
                                <option>Golf 6</option>
                                <option>Toyota</option>
                                <option>BMW 320</option>
                                <option>Mercedes</option>
                                <option>VW Passat</option>
                            </select>
                            <br />
                            <button className="btn btn-danger button" type="submit">Book Now</button>
                            <br/>
                            <button className="btn btn-danger button" type="submit" onClick={goh}>Cancel</button>
                        </form>
                    </div>
                    </div>
                    </div>
            </center>
        </>
    )
}