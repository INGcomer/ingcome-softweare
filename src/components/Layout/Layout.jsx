// React
import React from "react";
// Components
// import Footer from "./footer";
import Navbar from "./NavBar/Navbar";
import Footer from "./Footer/Footer";

export default function BaseLayout(props) {
    const { children, handleOpen } = props
    return (
        <React.Fragment>
            {/* <Navbar handleOpen={handleOpen}/> */}
            <Navbar/>
            { children }
            <Footer/>
        </React.Fragment>
    )
}