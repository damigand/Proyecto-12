import "./MobileHeader.css";
import { NavLink } from "react-router";
import { links } from "../Header/Header.jsx";
import { useCallback, useState } from "react";

const MobileHeader = () => {
    console.log("Mobile Header render.");
    const [open, setOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setOpen((prevOpen) => !prevOpen);
    }, [open]);

    return (
        <div id="mobile-header">
            <span className="open-mobile-header">
                <i className="bx bx-menu" onClick={toggleOpen}></i>
            </span>
            <ul className={`mobile-links${open ? " active" : ""}`}>
                {links.map((link, index) => {
                    return (
                        <NavLink
                            key={index}
                            to={link.url}
                            className={`header-mobile-link ${link.class}`}
                            onClick={toggleOpen}>
                            <li>{link.string}</li>
                        </NavLink>
                    );
                })}
            </ul>
        </div>
    );
};

export default MobileHeader;
