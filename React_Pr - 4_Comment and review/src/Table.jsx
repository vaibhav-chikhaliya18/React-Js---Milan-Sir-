import React, { useState } from 'react'
import './table.css'
import { FaDeleteLeft } from "react-icons/fa6";
import { IoMdPersonAdd } from "react-icons/io";




const Table = () => {
    const [tableinput,Settableinput]=useState([
        {id:"",name:"",email:"",salary:""}
    ]);

    const add = () =>{
        let newFiled={id:Math.floor(Math.random()*1000),name:"",email:"",salary:""}
        Settableinput([...tableinput,newFiled]);
    }
    const remove = (id)=>{
       let updatedata=tableinput.filter((item) => item.id != id);
       Settableinput(updatedata);
    }

  return (
    <div align="center">
      <h1>React - Add & Delete table Rows Dyanamically</h1>
      <table border={1} cellPadding={20} cellSpacing={0}>
        <thead>
            <tr align="center">
                <td>Full Name</td>
                <td>Email Address</td>
                <td>Salary</td>
                <td><button onClick={() => add()}><IoMdPersonAdd />
</button></td>
            </tr>
        </thead>
        <tbody>
            {
                tableinput.map((val,index)=>{
                    return(
                        <tr key={val.id} align="center">
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                            {
                                index !== 0 &&(
                            <td><button onClick={() => remove(val.id)} style={{textAlign:"center",width:"40px",height:"25px",fontSize:"18px",background:"transparent",color:"white"}}><FaDeleteLeft />
                            </button></td>
                                )
                            }
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default Table
