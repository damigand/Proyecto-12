import { NavLink } from "react-router";
import "./Home.css";

const Home = () => {
    return (
        <ul id="home">
            <NavLink to={"/bingo"} className="bingo home-button">
                <div>BINGO</div>
            </NavLink>
            <NavLink to={"/mines"} className="mines home-button">
                <div>MINES</div>
            </NavLink>
            <li className="access home-button">
                Still don't have an account?
                <NavLink to={"/access"} className="register-button primary-button">
                    <span>REGISTER</span>
                </NavLink>
            </li>
        </ul>
    );
};

export default Home;
