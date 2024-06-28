import React, { useState, useEffect } from "react";
import axios from "axios";//frontend to backend
import { Link } from "react-router-dom";

const Getdata = () => {
  let [students, setStudentdata] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/getstudent')
      .then((response) => {
        setStudentdata(response.data.studentdata);
      })
  }, []); // Empty dependency array means this effect will run once after the initial render
    // const handleclick = () =>{
    //     console.log(students);
    // }
const Deletestu = (id)=>{
    ///console.log(id)
    axios.delete('http://localhost:5000/deleteuser/'+id)
    .then((res)=>{console.log(res.data.msg)
        if(res.data.message==="Successfully deleted"){
            alert("data deleted successfully")
            window.location.reload()
        }
    })
    .catch(err=>{console.log(err)})
}

  return (
    <div>
      <br />
      <h1>StudentList</h1>
      <table align="center" border={1}>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Name</th>
            <th>RollNo</th>
            <th>Branch</th>
            <th>College</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {students && students.map((ele, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{ele.name}</td>
                <td>{ele.rollno}</td>
                <td>{ele.branch}</td>
                <td>{ele.college}</td>
                {/* <td><button id="ele_id">Edit</button></td>
                <td><button id="delete_id">Delete</button></td>
                <td><button onClick={()=>{Deletestu(ele._id)}}>Delete</button></td>  */}
                <td><Link to={`/editform/${ele._id}`}><button className="btn btn-warning">EDIT</button></Link></td>
                <td><button onClick={()=>{Deletestu(ele._id)}}>Delete</button></td>
                
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
export default Getdata;