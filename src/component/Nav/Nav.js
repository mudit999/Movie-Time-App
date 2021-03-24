import React, {useState,useEffect} from 'react';
import request from '../../request';
import './Nav.css';

function Nav(){

    const [show, handleShow] = useState(false);

    useEffect(()=> {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
        });
        // return () => {
        //     window.removeEventListener("scroll");
        // };
        return request;
    },[]);

    return(
        <div className={`nav ${show && "nav__black"}`}>
            <p className="movie_title">MovieTime</p>

            {/* <img
                className="nav_logo"
                src="./movieTime_logo.png"
                alt="Netflix Logo"
            /> 
            <img
                className="nav_avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="Netflix Avatar"
            /> */}
        </div>
    )
}

export default Nav;