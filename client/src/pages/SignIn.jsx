import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const SignIn = () => { 
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate =useNavigate()

    //handleChange
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  //handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(false);
      const res = await fetch(
        "/api/auth/signin",

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      //convert res to data
      const data = await res.json();
      //console.log(data);
      setLoading(false);

      if (data.success === false) {
        setError(true);
        return;
      }
      navigate('/')
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
          <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Email"
              id="email"
              className="bg-slate-100 p-3 rounded-lg"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Password"
              id="password"
              className="bg-slate-100 p-3 rounded-lg"
              onChange={handleChange}
            />
            <button
              disabled={loading}
              className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
            >
              {loading ? "Loading..." : "Sign in"}
            </button>
          </form>
    
          <div className="flex gap-2 mt-3">
            <p>Dont an account?</p>
            <Link to="/signup">
              <span class="text-blue-500">Sign up</span>
            </Link>
          </div>
          <p className="text-red-700 mt-5">{error && "Something Went Wrong"}</p>
        </div>
  )
};

export default SignIn;
