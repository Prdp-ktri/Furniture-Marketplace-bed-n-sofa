import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function EditProfile() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [pin, setPin] = useState("");
  const { id } = useParams(); // unique buyer ID from the route
  const navigate = useNavigate();
  const [buyer, setBuyer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  // Fetch buyer data on mount
  useEffect(() => {
    fetch("http://localhost:5000/buyers/" + id)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch Buyer Profile with ID" + id);
        }
        return res.json();
      })
      .then((data) => {
        if (!data) throw new Error("No Profile found");
        setName(data.name);
        setAge(data.age);
        setEmail(data.email);
        setPassword(data.password);
        setAddress(data.address);
        setSelectedState(data.selectedState);
        setPin(data.pin);
      })
      .catch((err) => toast.error(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  // Handle input change
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setBuyer({ ...buyer, [name]: value });
  // };

  // Handle form submission
  const handleUpdatedProfile = (e) => {
    e.preventDefault();
    let updatedProfile = {
      name,
      age,
      email,
      password,
      address,
      selectedState,
      pin,
    };
    console.log(updatedProfile);

    fetch("http://localhost:5000/buyers/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProfile),
    }).then((res) => {
      if (res) {
        toast("Updated Profile...!");
        navigate("/view-profile");
      }
    });
  };

  if (loading)
    return <p className="p-8 text-center text-gray-600">Loading...</p>;
  if (!buyer)
    return (
      <p className="p-8 text-center text-red-500">
        Buyer not found. Please check your ID.
      </p>
    );

  return (
    <div className="p-8 bg-gray-50 min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg border-t-4 border-teal-500">
        <h1 className="text-3xl font-bold text-teal-700 mb-6 text-center">
          Edit Your Profile
        </h1>

        {message && (
          <p
            className={`text-center mb-4 font-medium ${
              message.includes("✅") ? "text-green-600" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}

        <form onSubmit={handleUpdatedProfile} className="space-y-4">
          <h2 className="text-2xl font-semibold mb-6 text-orange-800">
            Edit Profile
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm md:text-base">
              <thead>
                <tr className="bg-orange-100 text-orange-700">
                  <th className="px-4 py-3 text-left border">Profile ID</th>
                  <th className="px-4 py-3 text-left border">Name</th>
                  <th className="px-4 py-3 text-left border">Age</th>
                  <th className="px-4 py-3 text-left border">Email</th>
                  <th className="px-4 py-3 text-left border">Password</th>
                  <th className="px-4 py-3 text-left border">Address</th>
                  <th className="px-4 py-3 text-left border">Selected State</th>
                  <th className="px-4 py-3 text-left border">PIN</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-orange-400">
                  <td className="px-4 py-2 border text-orange-800 italic">
                    Auto
                  </td>
                  <td className="px-4 py-2 border">
                    <input
                      type="text"
                      value={name}
                      id="nameInp"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                    />
                  </td>
                  <td className="px-4 py-2 border">
                    <input
                      type="number"
                      value={age}
                      id=""
                      onChange={(e) => {
                        setAge(e.target.value);
                      }}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                    />
                  </td>
                  <td className="px-4 py-2 border">
                    <input
                      type="number"
                      value={email}
                      id=""
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                    />
                  </td>
                  <td className="px-4 py-2 border">
                    <input
                      type="number"
                      value={password}
                      id=""
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                    />
                  </td>
                  <td className="px-4 py-2 border">
                    <input
                      type="number"
                      value={address}
                      id=""
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                    />
                  </td>
                  <td className="px-4 py-2 border">
                    <input
                      type="number"
                      value={selectedState}
                      id=""
                      onChange={(e) => {
                        setSelectedState(e.target.value);
                      }}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                    />
                  </td>
                  <td className="px-4 py-2 border">
                    <input
                      type="number"
                      value={pin}
                      id=""
                      onChange={(e) => {
                        setPin(e.target.value);
                      }}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
