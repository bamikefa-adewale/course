import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../Services/Resgister";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ name, email, password });

    try {
      await signupUser(name, email, password);
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="mx-36 flex justify-center items-center border-2 rounded m-5">
      <div className="relative flex flex-col rounded-xl bg-transparent py-[24px] px-[28px]">
        <p className="text-black font-poppins text-[25px] text-center">
          Sign up for Web Dev Simplified
        </p>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        <form
          onSubmit={handleSubmit}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <div className="w-full max-w-sm min-w-[200px]">
              <label className="block mb-2 text-sm text-slate-600">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-5 py-4"
                placeholder="Your Name"
              />
            </div>
            <div className="w-full max-w-sm min-w-[200px]">
              <label className="block mb-2 text-sm text-slate-600">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-5 py-4"
                placeholder="Your Email"
              />
            </div>
            <div className="w-full max-w-sm min-w-[200px]">
              <label className="block mb-2 text-sm text-slate-600">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-5 py-4"
                placeholder="Your Password"
              />
            </div>
          </div>
          <button
            className="mt-4 w-full text-[20px] font-semibold bg-[#9b9b9f] rounded-md bg-slate-800 py-4 px-5 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="submit"
          >
            Sign Up
          </button>
          <p className="flex capitalize justify-center mt-6 text-sm text-slate-600">
            Have an existing account?
            <a
              onClick={handleLogin}
              className="ml-1 text-sm font-semibold text-slate-700 cursor-pointer underline"
            >
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
