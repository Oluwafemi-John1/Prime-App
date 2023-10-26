import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount";
import SignIn from "./components/SignIn";


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/signup" element={<CreateAccount/>} />
                <Route path="/signin" element={<SignIn/>} />
            </Routes>
        </>
    );
}

export default App;