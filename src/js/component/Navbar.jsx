import React from "react"

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg p-0 bg-body-tertiary  ">
            <div className="container-fluid  bg-dark ">
                <a className="navbar-brand text-white" href="#"><h2>Start Boostrap</h2></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse  justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav ">
                        <a className="nav-link active text-white" aria-current="page" href="#"> <bg><strong>Home</strong></bg> </a>
                        <a className="nav-link text-white" href="#">About</a>
                        <a className="nav-link text-white" href="#">Services</a>
                        <a className="nav-link text-white" href="#">Contact</a>

                    </div>
                </div>
            </div>
        </nav>
    )

}
export default Navbar