import { memo } from "react";
import "./FormLogin.css";

const FormLogin = memo(() => {
    console.log("Render FormLogin.");
    return (
        <div id="login">
            <div className="login-text">
                <span>Login</span>
            </div>
            <form id="login-form"></form>
        </div>
    );
});

export default FormLogin;
