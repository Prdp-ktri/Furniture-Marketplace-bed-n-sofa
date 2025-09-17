import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function SellerCreation() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [pin, setPin] = useState("");
  const [storeName, setStoreName] = useState("");
  const [gst, setGst] = useState("");
  const [trademark, setTrademark] = useState("");

  const navigate = useNavigate();

  const sellerCreation = async (e) => {
    e.preventDefault();
    
    if(!name || !email || !password || !address || !pin || !storeName || !gst || !trademark){
      toast.warn("Please fill in the required fields: Name, Email, Password, Address, PIN, Store Name, GST No., Trademark")
    }

    const objSellerData = {
      name, email, password, address, selectedState, pin, storeName, gst, trademark
    }

    try{
      const res = await fetch("http://localhost:7000/sellers", {
        method: "POST",
        headers: {"Content-type":"application/json"},
        body: JSON.stringify(objSellerData),
      });

      if(!res.ok) throw new Error(`Server responded with ${res.status}`);

      toast.success('Seller Account Created - Please Login');
      navigate("/sellerLogin");
    } catch(err) {
      console.error(err);
      toast.error("Failed to create a seller account, try again...!")
    }
  }

  return (
    <div>
      <div>
        <h2>Seller Account Creation</h2>
        <p>Sell or Resell Products on our E-Commerce portal</p>
      </div>
      <form onSubmit={sellerCreation}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="" value={name} onChange={(e)=>{setName(e.target.value)}} id="nameInp" />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" name="" value={email} id="emailInp" onChange={(e)=>{setEmail(e.target.value)}} />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" name="" value={password} id="passwordInp" onChange={(e)=>{setPassword(e.target.value)}} />
        <br />
        <label htmlFor="address">Address:</label>
        <textarea name="" value={address} rows={3} id="" onChange={(e)=>{setAddress(e.target.value)}}></textarea>
        <br />
        <label htmlFor="state">State:</label>
        <select
          id="state"
          name="state"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          className="mt-1 block w-full rounded-lg border border-yellow-200 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
        >
          <option value="">Select a state...</option>
          <option value="AP">Andhra Pradesh</option>
          <option value="AR">Arunachal Pradesh</option>
          <option value="AS">Assam</option>
          <option value="BR">Bihar</option>
          <option value="CH">Chhattisgarh</option>
          <option value="GA">Goa</option>
          <option value="GJ">Gujarat</option>
          <option value="HR">Haryana</option>
          <option value="HP">Himachal Pradesh</option>
          <option value="JH">Jharkhand</option>
          <option value="KA">Karnataka</option>
          <option value="KL">Kerala</option>
          <option value="MP">Madhya Pradesh</option>
          <option value="MH">Maharashtra</option>
          <option value="MN">Manipur</option>
          <option value="ML">Meghalaya</option>
          <option value="MZ">Mizoram</option>
          <option value="NL">Nagaland</option>
          <option value="OD">Odisha</option>
          <option value="PB">Punjab</option>
          <option value="RJ">Rajasthan</option>
          <option value="SK">Sikkim</option>
          <option value="TN">Tamil Nadu</option>
          <option value="TG">Telangana</option>
          <option value="TR">Tripura</option>
          <option value="UK">Uttarakhand</option>
          <option value="UP">Uttar Pradesh</option>
          <option value="WB">West Bengal</option>
          <option value="AN">Andaman And Nicobar Islands</option>
          <option value="CHD">Chandigarh</option>
          <option value="DD">Dadra And Nagar Haveli and Daman and Diu</option>
          <option value="DL">Delhi</option>
          <option value="JK">Jammu and Kashmir</option>
          <option value="LA">Ladakh</option>
          <option value="LD">Lakshadweep</option>
          <option value="PY">Puducherry</option>
        </select>
        <label htmlFor="pin">Enter the PIN Code:</label>
        <input type="number" name="" value={pin} id="pinInp" onChange={(e)=>{setPin(e.target.value)}} />
        <br />
        <label htmlFor="storeName">Store Name (brand name that will be visible under your products):</label>
        <input type="text" name="" value={storeName} id="storeInp" onChange={(e)=>{setStoreName(e.target.value)}} /><br />
        <label htmlFor="trademark">Trademark:</label>
        <input type="text" name="" value={trademark} id="tmInp" onChange={(e)=>{setTrademark(e.target.value)}} /><br />
        <label htmlFor="gst">Enter the GST No. through which the buyers will be taxed:</label>
        <input type="text" name="" value={gst}  id="" onChange={(e)=>{setGst(e.target.value)}} /><br />
        <div className="sm:col-span-2 flex items-center justify-between mt-2">
          <div className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/sellerLogin"
              className="font-medium text-yellow-600 hover:underline"
            >
              Login
            </Link>
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-yellow-300 to-orange-300 px-5 py-2 text-sm font-semibold text-gray-800 shadow-md hover:scale-[1.01] transition-transform"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}

export default SellerCreation
