import React from 'react';
import pic from '../components/assets/images/Mobile login.gif'

const CreateAccount = () => {
    let mainDiv = {
        height: "80vh",
        fontFamily: "'Playpen Sans', cursive"
    }
  return (
    <>
        <div className="container-fluid p-lg-5 mx-auto">
            <div className="container shadow" style={mainDiv}>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 border border-warning text-center" id='halfDiv'>
                        <img src={pic} alt="" className="img-fluid img-responsive" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 border border-info"></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CreateAccount