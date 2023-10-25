import React from 'react';
import { Link } from 'react-router-dom';
import music from '../components/assets/images/Music.gif'

const Home = () => {
    let bigStyle = {
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        fontFamily: "'Playpen Sans', cursive"
    }

    let buttonDesign = {
        backgroundColor: "#a10035ff",
        color: "white",
        padding: "10px",
        border: "none",
        borderRadius: "5px"
    }

    return (
        <>
            <div className="container" style={bigStyle}>
                <div>
                    <img src={music} alt="" className='img-fluid' width={500} />
                </div>
                <h1 className='text-center'>Welcome to Prime</h1>
                <p className='text-center'>Easily book musicians for your wedding and browse a range of solo performers and full bands</p>
                <button style={buttonDesign}><Link to='/signup' className='text-light'>Set up account</Link></button>
            </div>
        </>
    )
}

export default Home