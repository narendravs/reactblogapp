import  React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Register() {

  const [inputs, setInputs] = useState({username:"",
    email:"",
    password:""
  })
  const [err,setErr] = useState(null)

  const handleChange = e => {
    setInputs(prev => ({...prev,[e.target.name]: e.target.value}))
  }

  const navigate = useNavigate();
  
  const handleSubmit = async  e => {
    e.preventDefault()
    try {
      console.log(inputs)
      const res = await axios.post("auth/register", inputs);
      console.log(res)
      navigate("/login")

       } catch (error) {
      setErr(error.response.data)
    }
    
  }
  return (
    <div className='auth'>
      <h1 className='h1'>Register</h1>
      <form className='form'>
        <input className='input' required type='text' name="username" placeholder='username' onChange={handleChange}></input>
        <input className='input' required type='password' name="password" placeholder='password' onChange={handleChange}></input>
        <input className='input' required type='email' name="email" placeholder='email' onChange={handleChange}></input>
        <button className='button' onClick={handleSubmit}>Register</button>
        {err && < p className='p'>{err}</p>} 
        <span className='span'>Do you have an account ? <Link to="/login">Login</Link></span>
      </form>
    </div>
  )
}

export default Register