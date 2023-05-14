'use client'
import React,{useEffect, useState} from 'react'
import {Button,Form}  from 'react-bootstrap'
import Employees from './Employee'
import {v4 as uuid} from 'uuid'
import {Link,useNavigate} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

function Edit() {
    const[name,setName]=useState('');
    const[blog,setBlog]=useState('');
    const[id,setId]=useState('');

    let history=useNavigate();
    var index=Employees.map(function(e){
        return e.id
    }).indexOf(id);

    const handleSubmit=(e)=>{
        e.preventDefault();
        let a=Employees[index];
        
        a.Name=name;
        a.Blog=blog;
        history("/");
    }

    useEffect(()=>{
        setName(localStorage.getItem('Name'))
        setBlog(localStorage.getItem('Blog'))
        setId(localStorage.getItem('Id'))
    },[])
  return (
    <div>
      <Form className='d-grid gap-2' style={{margin:"15rem"}}>
        <Form.Group className='mb-3' controlId='formName'>
            <Form.Control type="text" placeholder='Enter Name' value={name} required onChange={(e)=>setName(e.target.value)}>

            </Form.Control>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formAge'>
            <Form.Control type="text" placeholder='Enter Age' value={blog} required onChange={(e)=>setBlog(e.target.value)}>
                
            </Form.Control>
        </Form.Group>
        
        <Button type="submit" onClick={(e)=>handleSubmit(e)}>Update</Button>
      </Form>
    </div>
  )
}

export default Edit
