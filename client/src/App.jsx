import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount";
import SignIn from "./components/SignIn";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";



function App() {
    const firebaseConfig = {
        apiKey: "AIzaSyCHBKiHENOFMnPZHc_g64a7PztfLQaH5Uc",
        authDomain: "entertainment-app-prime.firebaseapp.com",
        projectId: "entertainment-app-prime",
        storageBucket: "entertainment-app-prime.appspot.com",
        messagingSenderId: "186663723752",
        appId: "1:186663723752:web:ff8a5d00bf95dfc3351f5d",
        measurementId: "G-98XJJN2X4Q"
    }

    const app = initializeApp(firebaseConfig)
    const analytics = getAnalytics(firebaseConfig)
    const auth = getAuth(app)
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