import Header from "./Component/Header/header";
import Signup from "./Component/registerCard/signUp";
import LoginIn from "./Component/signInForm.tsx/loginIn";

function App() {
  const containerStyle = {
    margin: "0 20%", // 20% margin on both sides
  };
  return (
    <>
      {/* <label className="bg-black text-white ">First name</label>
      <input type="input" placeholder="First Name"></input>\ */}
      <div className="w-screen h-screen bg-white mx-auto">
        <Header />
        <Signup />
        <LoginIn />
      </div>
    </>
  );
}

export default App;
