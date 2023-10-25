import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount";


function App() {
    return (
        <>
            <Routes>
                <Route path="/signup" element={<CreateAccount/>} />
                <Route path="/" element={<Home/>} />
            </Routes>
        </>
    );
}

export default App;
