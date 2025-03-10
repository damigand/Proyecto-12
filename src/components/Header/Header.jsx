import { NavLink } from "react-router";
import "./Header.css";

const links = [
    {
        string: "Home",
        url: "/",
        class: "link-home"
    },
    {
        string: "Bingo",
        url: "/bingo",
        class: "link-bingo"
    },
    {
        string: "Bombs",
        url: "/bombs",
        class: "link-bombs"
    },
    {
        string: "Access",
        url: "/access",
        class: "link-access"
    }
];

const Header = () => {
    console.log("Header render.");
    return (
        <ul id="header">
            {links.map((link, index) => {
                return (
                    <NavLink key={index} to={link.url} className={`header-link ${link.class}`}>
                        <li>{link.string}</li>
                    </NavLink>
                );
            })}
        </ul>
    );
};

export default Header;
