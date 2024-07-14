import React from "react";



const Jumbotron = () => {
    return (
        <div className="container  mt-4 p-3 ">
            <div className="row">
                <div className="col-md-12 ">
                    <div className="jumbotron bg-dark rounded text-white text-start p-5">
                        <h1 className="display-4">A Warm Welcome!</h1>
                        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                        <p className="lead">
                            <a className="btn btn-primary btn-lg text-start" href="#" role="button">Call to action!</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron