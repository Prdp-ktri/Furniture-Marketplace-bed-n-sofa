import React, { useContext, useEffect, useState } from 'react'
import { AdminLoginContext } from '../../App'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './AdminLoginCredentials.css';

function AdminLoginCredentials() {
  const {setAdminLogin} = useContext(AdminLoginContext);
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(()=>{
    fetch("http://localhost:9999/admin")
    .then((res)=> res.json())
    .then((data)=>setData(data))
    .catch((err)=> console.error("Error fetching Admin data:", err));
  }, [])

  const handleAdminLogin = (e) => {
    e.preventDefault();
    let adminUser = data.find(
      (v) => v.email === email && v.pw === pw
    );

    if(adminUser)
    {
      toast("Welcome to the Admin Dashboard!");
      setAdminLogin(true);
      navigate('/adminDashboard')
    }
    else
    {
      toast("Invalid Admin Login Credentials, Enter Again")
    }
  }

  return (
    <div className='login-container'>
      <h2>Admin Login</h2>
      <form onSubmit={handleAdminLogin}>
        <label htmlFor="email">Email:</label>
        <input type="email" value={email} required onChange={(e)=>{setEmail(e.target.value)}} name="" id="emailInp" /><br />
        <label htmlFor="password">Password:</label>
        <input type="password" value={pw} required onChange={(e)=>{setPw(e.target.value)}} name="" id="pwInp" /><br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AdminLoginCredentials
