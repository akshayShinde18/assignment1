import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Form = (props) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [nameerror, setNameerror] = useState("")
    const [emailerror, setEmailerror] = useState("")
    const [passworderror, setPassworderror] = useState("")
    const [data, setData]=useState(false)

    function saveuser(e) {
        e.preventDefault();
        // console.log(name, email, password)
        if (validateName(name) && validateEmail(email) && validatePassword(password)) {
            alert("Login Successfully... Please click on Proceed button")
            setData(true)
            setName("");
            setEmail("");
            setPassword("");
        }


    }
    const btnClick=(e)=>{
        e.preventDefault();
        props.changeData("You have login")
    }
    const validateName = (n) => {
        const nameRegex = /[a-zA-Z]$/;

        if (!n) {
            setNameerror("Please enter name")
            return false;
        }
        else if (!nameRegex.test(n)) {
            setNameerror("numeric value not allowed in name")
            return false;
        }
        else {
            setNameerror("")
            return true;
        }
    }

    const validateEmail = (em) => {
        const emailRegex = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]/;
        if (!em) {
            setEmailerror("Please enter email")
            return false;
        }
        else if (!emailRegex.test(em)) {
            setEmailerror("Please enter valid email address")
            return false;
        }
        
        else {
            setEmailerror("")
            return true;
        }
    }

    const validatePassword = (p) => {
        
        const passRegex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/
        if (!p) {
            setPassworderror("Please enter password")
            return false;
        }
        else if (!passRegex.test(p)) {
            setPassworderror("Please Used strong password")
            return false;
        }
        else {
            setPassworderror("")
            return true;
        }
    }
    return (
        <div>
            <form onSubmit={saveuser}>
                <div className='form'>
                    <div className='form-label'>
                        <label>Username:
                            <br />
                            <input style={{width:"300px"}} type='text' value={name}
                            className='form-control'
                                placeholder='Enter your name'
                                onChange={(e) => { setName(e.target.value) }}
                            />
                        </label>
                        {nameerror && <div style={{color:"red"}}>{nameerror}</div>}
                    </div>
                    <div className='form-label'>
                        <label>Email ID:
                            <br />
                            <input style={{width:"300px"}} type='email' value={email}
                            className='form-control'
                                placeholder='Enter your email id'
                                onChange={(e) => { setEmail(e.target.value) }}
                            />
                        </label>
                        {emailerror && <div style={{color:"red"}}>{emailerror}</div>}
                    </div>
                    <div className='form-label'>
                        <label>Password:
                            <br />
                            <input style={{width:"300px"}}
                            className='form-control' type='password' value={password}
                                placeholder='Enter password'
                                onChange={(e) => { setPassword(e.target.value) }}
                            />
                            {passworderror && <div style={{color:"red"}}>{passworderror}</div>}
                        </label>
                    </div>
                    <button className='btn btn-success'>Submit</button>
                    <br />
                    {data &&<button className='btn btn-primary' onClick={btnClick}>Proceed</button> }
                </div>
            </form>
        </div>

    )
}

export default Form
