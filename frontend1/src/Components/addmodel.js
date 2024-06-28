import axios from "axios"
import { useState } from "react"

export default function Addmodel(){
    
    const [bookdata,setBook]=useState({
        'name':'',
        'model':'',
        'transmission':'',
        'variant':'',
        'rating':'',
        'price':'',
        'carimg':'',
    })
    const handlebook = (e) => {
        const inputfields=new FormData();
        inputfields.append('myfile',bookdata.carimg,bookdata.carimg.name)
        inputfields.append('name',bookdata.name)
        inputfields.append('model',bookdata.model)
        inputfields.append('transmission',bookdata.transmission)
        inputfields.append('variant',bookdata.variant)
        inputfields.append('rating',bookdata.rating)
        inputfields.append('price',bookdata.price)
        e.preventDefault();
        // console.log(formdata)
        axios.post('http://localhost:9121/addmodel',inputfields)
            .then(
                alert("success") 
            )
            .then(
                window.location.href="/addmodel"
            )
        }
    return(
        <>
            <center>
                <h1>ADD NEW CAR</h1>
                <div className="loginpage">
                <div className="container-fluid">
                    <div className="form-container login" >
                        <form className="card p-4 login-form" onSubmit={handlebook} >
                            <h3 className="text-center">Member  Details</h3>
                            <label className="lb">Car Name</label>
                            <input type="text" name="name" required className="ip" placeholder="Ex:-'BMW'" onChange={(e) => setBook({...bookdata, name: e.target.value})}/>
                            <br />
                            <label className="lb">Car Model Name</label>
                            <input type="text" name="name" required className="ip" placeholder="Ex:-'I8'" onChange={(e) => setBook({...bookdata, model: e.target.value})}/>
                            <br />
                            <label className="lb">Transmission</label>
                            <input type="text" name="name" required className="ip" placeholder="Ex:-'Manual'" onChange={(e) => setBook({...bookdata, transmission: e.target.value})}/>
                            <br />
                            <label className="lb">Variant</label>
                            <input type="text" name="name" required className="ip" placeholder="Ex:-'Petrol'" onChange={(e) => setBook({...bookdata, variant: e.target.value})}/>
                            <br />
                            <label className="lb">Rating</label>
                            <input type="text" name="name" required className="ip" placeholder="Ex:-'5/5'" onChange={(e) => setBook({...bookdata, rating: e.target.value})}/>
                            <br />
                            <label className="lb">price</label>
                            <input type="text" name="email" required className="ip" placeholder="Ex:-'5000'" onChange={(e) => setBook({...bookdata, price: e.target.value})}/>
                            <br />
                            <label>Add car image</label>
                            <input type="file" name="myfile" onChange={(e)=>setBook({...bookdata,carimg:e.target.files[0]})} /><br/><br/>
                            <button className="btn btn-danger button" type="submit">Add Car</button>
                        </form>
                    </div>
                    </div>
                    </div>
            </center>
        </>
    )
}