import Header from "./Component/Header/header";
import RegisterCard from "./Component/registerCard/registerCard";
import SignInForm from "./Component/signInForm.tsx/signIn";

function App() {
  return (
    <>
      {/* <label className="bg-black text-white ">First name</label>
      <input type="input" placeholder="First Name"></input>\ */}
      <div>
        <Header />
        <SignInForm />
        <RegisterCard />
      </div>
    </>
  );
}

export default App;
