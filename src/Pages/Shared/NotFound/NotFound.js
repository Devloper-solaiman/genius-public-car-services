import React from 'react';
import sleeping from '../../../images/Notfound/sleeping.jpg';
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>

            <div className="">
                <div className="text-center row">
                    <div className=" col-md-4"> </div>
                    <div className=" col-md-4 mt-5">

                        <p className="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
                        <p className="lead text-primary">
                            <img className="img-fluid h-100 rounded-circle" src={sleeping} alt="" />
                            The page you are looking for does not exist.
                        </p>
                        <Link as={Link} to="home" className="btn btn-primary mt-2">Go Home</Link>
                        <div className='m-5 p-5' ></div>
                    </div>
                    <div className=" col-md-4"> </div>

                </div>
            </div>

        </div>
    );
};

export default NotFound;