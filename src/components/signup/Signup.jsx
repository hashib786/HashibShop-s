import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import axios from "axios";

import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { server } from "../../server";
import { toast } from "react-hot-toast";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [avtar, setAvtar] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newForm = new FormData();
    newForm.append("file", avtar);
    newForm.append("name", name);
    newForm.append("email", email);
    newForm.append("password", password);
    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const toastId = toast.loading("Creating User...");
    axios
      .post(`${server}/user/create-user`, newForm, config)
      .then((res) => {
        toast.dismiss(toastId);
        if (res.data.success === true) toast.success(res.data.message);
        else toast.error("User is Already Exists");

        setName("");
        setEmail("");
        setPassword("");
        setAvtar(null);

        console.log(res);
      })
      .catch((error) => {
        toast.dismiss(toastId);
        toast.error(error?.response?.data?.message);
      });
  };

  const handleAvtar = (e) => {
    const file = e.target.files[0];
    setAvtar(file);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center bg-gray-50 py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl text-gray-900 font-extrabold">
          Register as a new user
        </h2>
      </div>
      <div className="mt-8 sm:max-w-md sm:w-full sm:mx-auto">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <div className="mt-1">
                <input
                  name="name"
                  type="text"
                  id="name"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  name="email"
                  type="email"
                  id="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  name="password"
                  type={`${visible ? "text" : "password"}`}
                  id="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {visible ? (
                  <AiOutlineEye
                    className="absolute top-2 right-2 cursor-pointer"
                    onClick={() => setVisible(false)}
                    size={25}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute top-2 right-2 cursor-pointer"
                    onClick={() => setVisible(true)}
                    size={25}
                  />
                )}
              </div>
            </div>
            <div className={`${styles.noramlFlex} justify-between`}>
              <div className={`${styles.noramlFlex}`}>
                <label
                  htmlFor="avtar"
                  className="text-gray-700 text-sm font-medium block"
                ></label>
                <div className={`${styles.noramlFlex} mt-2`}>
                  <span className="h-8 w-8 rounded-full overflow-hidden inline-block">
                    {avtar ? (
                      <img
                        src={URL.createObjectURL(avtar)}
                        alt="avtar"
                        className="h-full w-full object-cover rounded-full"
                      />
                    ) : (
                      <RxAvatar className="h-8 w-8" />
                    )}
                  </span>
                  <label
                    htmlFor="file-input"
                    className="flex ml-2 items-center border border-gray-300 justify-center rounded-md text-sm font-medium text-gray-700 hover:text-gray-500 cursor-pointer px-4 py-2"
                  >
                    <span>Upload a File</span>
                    <input
                      type="file"
                      name="avtar"
                      id="file-input"
                      accept=".jpg,.jpeg,.png"
                      className="sr-only"
                      onChange={handleAvtar}
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="">
              <button
                type="submit"
                className="relative w-full font-medium text-white bg-blue-600 hover:bg-blue-700 rounded border border-transparent py-2 text-sm"
              >
                Submit
              </button>
            </div>
            <div className={`${styles.noramlFlex}`}>
              <h4>Already have an account?</h4>
              <Link to={"/login"} className="text-blue-600 pl-2">
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
