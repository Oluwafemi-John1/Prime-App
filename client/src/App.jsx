import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount";


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/signup" element={<CreateAccount/>} />
            </Routes>
        </>
    );
}

export default App;
