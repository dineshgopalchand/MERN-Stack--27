import React from "react";
import TopNavbar from "./TopNavbar";
import TopNotification from "./TopNotification";

const Header = (props) => {
    return (
        <div>
            <TopNotification />
            <TopNavbar  {...props} />
        </div>

    );
}

export default Header;