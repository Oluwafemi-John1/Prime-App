import React from 'react'

const CreateAccount = () => {
    let mainDiv = {
        height: "80vh",
        fontFamily: "'Playpen Sans', cursive"
    }
  return (
    <>
        <div className="container-fluid border border-danger border-5 p-lg-5">
            <div className="container border border-2" style={mainDiv}>
                <div className="row mx-auto">
                    <div className="col-lg-6 col-md-6 col-12 border border-warning" id='halfDiv'></div>
                    <div className="col-lg-6 col-md-6 col-12 border border-info"></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CreateAccount