import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signinUser } from "../Services/Resgister";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    console.log({ email, password }); // Debug: Check inputs

    try {
      await signinUser(email, password); // Call the sign-in function
      navigate("/dashboard"); // Redirect user on success
    } catch (error) {
      setError(error.message); // Display the error to the user
    }
  };

  const handleRegister = () => {
    navigate("/signup");
  };

  return (
    <div className="mx-36 flex justify-center items-center border-2 rounded m-5">
      <div className="relative flex flex-col rounded-xl bg-transparent py-[24px] px-[28px]">
        <p className="text-black font-poppins text-[25px] text-center">
          Log in to Web Dev Simplified
        </p>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        <form
          onSubmit={handleSubmit} // Use onSubmit for form submission
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
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
            type="submit" // Submit button
            className="mt-4 w-full text-[20px] font-semibold bg-[#9b9b9f] rounded-md bg-slate-800 py-4 px-5 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Login
          </button>
          <p className="flex capitalize justify-center mt-6 text-sm text-slate-600">
            Don't have an account?
            <a
              onClick={handleRegister}
              className="ml-1 text-sm font-semibold text-slate-700 cursor-pointer underline"
            >
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
