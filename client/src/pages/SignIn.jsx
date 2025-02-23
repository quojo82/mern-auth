import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signinStart, signinSuccess, signinFailure } from "../users/userSlice";
import { useDispatch, useSelector } from "react-redux";
import OAuth from '../component/OAuth'

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //handleChange
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  //handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signinStart());
      //setLoading(true);
      //setError(false);

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


      const data = await res.json();

      if (data.success === false) {
        dispatch(signinFailure(data));
        return;
      }


      dispatch(signinSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signinFailure(error));
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
        <OAuth/>
      </form>

      <div className="flex gap-2 mt-3">
        <p>Dont an account?</p>
        <Link to="/signup">
          <span class="text-blue-500">Sign up</span>
        </Link>
      </div>
      <p className="text-red-700 mt-5">{error ? error.message || "Something Went Wrong": ''}</p>
    </div>
  );
};

export default SignIn;
