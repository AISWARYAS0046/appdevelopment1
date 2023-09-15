import React, { useState } from 'react';
import "./login.css";
import { Link } from 'react-router-dom';

function Signup() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [conpassword, setConpassword] = useState('');

  const senddb = () => {
   
  };

  return (
    <div id="body">
      <div className="content">
        <div className='signup-form'>
          <div className='container'>
            <div className='header'>
              <h1>Create an Account</h1>
              
            </div>
            <form>
             
              <div className="input">
                <i className="fa-solid fa-user"></i>
                <input
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  placeholder="First Name"
                />
              </div>
              <div className="input">
                <i className="fa-solid fa-user"></i>
                <input
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  placeholder="Last Name"
                />
              </div>
              <div className="input">
                <i className="fa-solid fa-user"></i>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
              <div className="input">
                <i className="fa-solid fa-user"></i>
                <input
                  type="text"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Age"
                />
              </div>
              <div className="input">
                <i className="fa-solid fa-user"></i>
                <input
                  type="text"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  placeholder="Gender"
                />
              </div>
              <div className="input">
                <i className="fa-solid fa-user"></i>
                <input
                  type="text"
                  value={phonenumber}
                  onChange={(e) => setPhonenumber(e.target.value)}
                  placeholder="PhoneNumber"
                />
              </div>
              <div className="input">
                <i className="fa-solid fa-lock"></i>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
              <div className="input">
                <i className="fa-solid fa-lock"></i>
                <input
                  type="password"
                  value={conpassword}
                  onChange={(e) => setConpassword(e.target.value)}
                  placeholder="Confirm Password"
                />
              </div>
              <input className="signup-btn" onClick={senddb} type="submit" value="SIGN UP" />
            </form>
            <Link to="/">
              <p>Already have an account? Sign in</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
