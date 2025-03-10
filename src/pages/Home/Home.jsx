import { NavLink } from "react-router";
import "./Home.css";

const Home = () => {
    console.log("Home render.");
    return (
        <ul id="home">
            <NavLink to={"/bingo"} className="bingo home-button">
                <div>BINGO</div>
            </NavLink>
            <NavLink to={"/bingo"} className="bombs home-button">
                <div>BOMBS</div>
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
