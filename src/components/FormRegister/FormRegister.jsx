import { memo } from "react";
import "./FormRegister.css";

const FormRegister = memo(() => {
    console.log("Render FormRegister.");
    return (
        <div id="register">
            <div className="register-text">
                <span>Register</span>
            </div>
            <form id="register-form"></form>
        </div>
    );
});

export default FormRegister;
