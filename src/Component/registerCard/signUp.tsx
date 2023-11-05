import Banner from "../assets/img-B-Login.png";
import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  const onSetNameChange = (name: string) => {
    setName(name);
  };
  const onSetEmailChange = (email: string) => {
    setEmail(email);
  };
  const onSetPasswordChange = (password: string) => {
    setpassword(password);
  };
  return (
    <div className="bg-slate-100">
      <div className="w-screen h-1/6 p-9 text-center flex items-center flex-col  ">
        <h1 className="font-bold text-4xl p-2 ">Sign in</h1>
        <p>Welcome Abort</p>
      </div>
      <div className="w-screen h-1/6 flex items-center flex-row ">
        <img className="w-1/2 h-screen" src={Banner} alt="banner-pic" />
        <div className="flex flex-col w-1/3 justify-center  ">
          {/* <form>
            <label>
              Email
              <input type="email" name="email" />
            </label>
            <input type="submit" value="Submit" />
            <label>Password</label>
            <input type="password" name="password" id="password" />
          </form> */}
          <label className="font-extrabold text-black">Name</label>
          <input
            className=" border-2 mb-2 border-gray-300 bg-white p-1 text-gray-500 rounded-md focus:outline-none"
            required
            placeholder="Enter your full name"
            type="text"
            onChange={(e) => {
              void onSetNameChange(e.target.value);
            }}
          />
          <label className="font-extrabold text-black">Email</label>
          <input
            className=" border-2 mb-2  border-gray-300 bg-white p-1 text-gray-500 rounded-md focus:outline-none"
            required
            placeholder="Enter your email"
            type="email"
            onChange={(e) => {
              void onSetEmailChange(e.target.value);
            }}
          />
          <label className="font-extrabold text-black">Password</label>
          <input
            className=" border-2 mb-2 border-gray-300 bg-white p-1 text-gray-500 rounded-md focus:outline-none"
            required
            placeholder="Enter your password"
            type="password"
            onChange={(e) => {
              void onSetPasswordChange(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
