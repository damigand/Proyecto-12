import { memo } from "react";
import "./FormLogin.css";
import { useForm } from "react-hook-form";

const FormLogin = memo(() => {
    console.log("Render FormLogin.");

    const { register, handleSubmit } = useForm({
        defaultValues: {
            loginEmail: "",
            loginPassword: ""
        }
    });

    const onSubmit = (data, event) => {
        event.preventDefault();
        console.log(data);
    };

    return (
        <div id="login">
            <div className="login-text">
                <span>LOGIN</span>
            </div>
            <div className="register-socials">
                <div className="social"></div>
                <div className="social"></div>
                <div className="social"></div>
                <div className="social"></div>
            </div>
            <form id="login-form" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="login-email">
                    Email:
                    <input type="email" id="login-email" {...register("loginEmail")} />
                </label>
                <label htmlFor="login-password">
                    Password:
                    <input type="password" id="login-password" {...register("loginPassword")} />
                </label>
                <button type="submit" className="form-submit-button">
                    Entrar
                </button>
            </form>
        </div>
    );
});

export default FormLogin;
