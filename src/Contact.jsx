import React from 'react'
import { useState } from 'react'
const Contact = () => {
const [values, setValues] = useState({name:'',phone:'',email:''});

let eventChange=(e)=>{
const {name,value}=e.target;
setValues((prev)=>{
  return{
    ...prev,
    [name]:value
  }

})
}

let formSubmit =()=>{
  alert(`hello ${values.name} your details are name:${values.name} phone:${values.phone} Enmail:${values.email}`)
  setValues({name:'',phone:'',email:''})
}
  return (
    <div>
      <div className="inputs">
        <h1>Contact Us</h1>
        <form autoComplete='off'>
        <input type="text" placeholder="Name..." name='name' onChange={eventChange} value={values.name}/><br />
        <input type="text" placeholder="Phone..." name='phone'  onChange={eventChange} value={values.phone}/><br />
        <input type="text" placeholder="Email..." name='email'  onChange={eventChange} value={values.email}/><br />
        <button type='submit' onClick={formSubmit}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
