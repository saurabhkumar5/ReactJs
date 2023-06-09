

import Footer from "./Footer";
import "./header.css";

function Header(){
    return (
        <div className="header">
        <h1 id="topic">this is header</h1>
        <p>this is reactjs </p>
        <Footer/>
        </div>
    )
}

export default Header;