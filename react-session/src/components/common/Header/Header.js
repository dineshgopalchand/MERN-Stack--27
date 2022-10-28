import React  from "react";
import TopNavbar from "./TopNavbar";
import TopNotification from "./TopNotification";

const Header=() =>{
    return (
        <div>
            <TopNotification/>
            <TopNavbar />
        </div>

    );
}

export default Header;