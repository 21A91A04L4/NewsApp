import {useState} from "react";
import axios from "axios";

const Form1=()=>{
    const[formdata,setFormdata]=useState({
        'name':'',
        'image':'',
        'headline':'',
        'description':'',
        'createdat':'',
        'addedby':'',
        'updatedby':'',
        'updatedat':'',
    })
    // const handlesubmit=(e)=>{
    //     e.preventDefault();
    //     console.log(formdata)
    //     axios.post('http://localhost:5000/addUser',{formdata})
    //     .then((res)=>
    //        console.log(res.data))
    // }
    let backend_api="http://localhost:4000/addFile"
    const handlesubmit=(e)=>{
        
        const Inputfields=new FormData()
        Inputfields.append('name',formdata.name)
        Inputfields.append('image',formdata.image)
        Inputfields.append('headline',formdata.headline)
        Inputfields.append('description',formdata.description)
        Inputfields.append('createdat',formdata.createdat)
        Inputfields.append('addedby',formdata.addedby)
        Inputfields.append('updateby',formdata.updatedby)
        Inputfields.append('updatedat',formdata.updatedat)
        e.preventDefault();
       
        axios.post(backend_api,Inputfields)
        .then((res)=>{
           console.log(res.data.msg)
           if(res.status==200){
              alert(res.data.msg)
           }else{
            alert("Error Accured")
           }})
    }
    return(
        <div>
            <h1>Form</h1>
            <form onSubmit={handlesubmit}>
                <label>Newstype</label>
                {/* <Select value={selectedGroup} onChange={() =>{handleSelectGroup()}}
                options={optionGroup}></Select> */}
                <select>
                  <option>select</option>
                  <option>Placements</option>
                  <option>TechicalHub</option>
                  <option>Holidays</option>
                  <option>Events</option>
                  <option>sports</option>
                  
                </select>
                {/* <input
                                   
                  type="text"
                  name="name"

                  onChange={(e)=>setFormdata({...formdata,name:e.target.value})}/> */}
                <br/>
                <label>Image</label>
                <input
                  type="file"
                  name="image"
                  onChange={(e)=>setFormdata({...formdata,image:e.target.files[0]})}/>
                <br/>
                <label>Headline</label>
                <input
                  type="text"
                  name="headline"
                  onChange={(e)=>setFormdata({...formdata,headline:e.target.value})}/>
                <br/>
                <label>Description</label>
                <input
                  type="textarea"
                  name="description"
                  onChange={(e)=>setFormdata({...formdata,description:e.target.value})}/>
                <br/>
                <label>Createdat</label>
                <input
                  type="date"
                  name="createdat"
                  onChange={(e)=>setFormdata({...formdata,createdat:e.target.value})}/>
                <br/>
                <label>Addedby</label>
                <input
                  type="name"
                  name="addedby"
                  onChange={(e)=>setFormdata({...formdata,addedby:e.target.value})}/>
                <br/>
                <label>Updatedby</label>
                <input
                  type="name"
                  name="updatedby"
                  onChange={(e)=>setFormdata({...formdata,updatedby:e.target.value})}/>
                <br/>
                <label>Updatedat</label>
                <input
                  type="date"
                  name="updatedat"
                  onChange={(e)=>setFormdata({...formdata,updatedat:e.target.value})}/>
                <br/>
                <input type="submit" value="submit"/>

            </form>
        </div>
    )
}
export default Form1;