import axios from "axios"
import { useState } from "react"

export default function Addteam(){
    
    const [bookdata,setBook]=useState({
        'name':'',
        'position':'',
        'mempic':''
    })
    const handlebook = (e) => {
        const inputfields=new FormData();
        inputfields.append('myfile',bookdata.mempic,bookdata.mempic.name)
        inputfields.append('name',bookdata.name)
        inputfields.append('position',bookdata.position)
        e.preventDefault();
        // console.log(formdata)
        axios.post('http://localhost:9121/addteam',inputfields)
            .then(
                alert("success") 
            )
            .then(
                window.location.href="/addteam"
            )
        }
    return(
        <>
            <center>
                <h1>ADD YOUR TEAM MEMBER</h1>
                <div className="loginpage">
                <div className="container-fluid">
                    <div className="form-container login" >
                        <form className="card p-4 login-form" onSubmit={handlebook} >
                            <h3 className="text-center">Member  Details</h3>
                            <label className="lb">Name</label>
                            <input type="text" name="name" required className="ip" placeholder="Enter member name" onChange={(e) => setBook({...bookdata, name: e.target.value})}/>
                            <br />
                            <label className="lb">position</label>
                            <input type="text" name="email" required className="ip" placeholder="Enter member position" onChange={(e) => setBook({...bookdata, position: e.target.value})}/>
                            <br />
                            <label>Add member image</label>
                            <input type="file" name="myfile" onChange={(e)=>setBook({...bookdata,mempic:e.target.files[0]})} /><br/><br/>
                            <button className="btn btn-danger button" type="submit">Add Member</button>
                        </form>
                    </div>
                    </div>
                    </div>
            </center>
        </>
    )
}