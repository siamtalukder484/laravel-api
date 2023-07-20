import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Registration = () => {

    let [FormData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    })
    let [error, setError] = useState({
        name: "",
        email: "",
        password: "",
    })
    let handleForm = (e) => {
        let {name, value} = e.target
        setFormData({...FormData, [name]:value})
        setError({})
     }
     
let handleSubmit = async () => {
    let data = await axios.post('http://api.venos.store/api/v1/auth/register', {
        name: FormData.name,
        email: FormData.email,
        password: FormData.password
    })
    setError({...error, name: data.data.errors.name})
    setError({...error, email: data.data.errors.email})
    setError({...error, password: data.data.errors.password})
    console.log(data.data);
    console.log(error); 
}

  return (
    <section>
        <div className="container">
            <div className='form_main'>
                <div>
                    <input name="name" onChange={handleForm} type='text' placeholder='Name'/>
                    <p>{error.name}</p>
                </div>
                <div>
                    <input name="email" onChange={handleForm} type='email' placeholder='Email'/>
                    <p>{error.email}</p>
                </div>
                <div>
                    <input name="password" onChange={handleForm} type='password' placeholder='Password'/>
                    <p>{error.password}</p>
                </div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    </section>
  )
}

export default Registration