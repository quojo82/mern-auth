import React from "react";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const fileRef = useRef(null);

  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <input type="file" ref={fileRef} hidden accept="image/*" />

        <img
          src={currentUser.profilePicture}
          alt=""
          className="h-24 w-24 self-center rounded-full object-cover mt-2"
          onClick={() => {
            fileRef.current.click();
          }}
        />
        <input
          defaultValue={currentUser.username}
          type="text"
          id="username"
          placeholder="username"
          className="bg-slate-100 rounded-lg p-3"
        />
        <input
          defaultValue={currentUser.email}
          type="email"
          id="email"
          placeholder="email"
          className="bg-slate-100 rounded-lg p-3"
        />
        <input
          type="password"
          id="password"
          placeholder="password"
          className="bg-slate-100 rounded-lg p-3"
        />
        <button
          className="bg-slate-700 text-white p-3 rounded-lg
      uppercase opacity-95 disabled:opacity-80"
        >
          update
        </button>
      </form>
      <div className="flex justify-between my-3">
        <span className="text-red-700 cursor-pointer "> Delete Account</span>
        <span className="text-red-700 cursor-pointer ">
          <Link to="/signup"> Sign-Up</Link>
        </span>
      </div>
    </div>
  );
};

export default Profile;
