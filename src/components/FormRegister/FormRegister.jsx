import { memo } from "react";
import "./FormRegister.css";
import { useForm } from "react-hook-form";

const FormRegister = memo(() => {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            repeatPassword: ""
        }
    });

    const onSubmit = (data, event) => {
        event.preventDefault();
        console.log(data);
    };

    console.log("Render FormRegister.");
    return (
        <div id="register">
            <div className="register-text">
                <span>REGISTER</span>
            </div>
            <div className="register-socials">
                <div className="social"></div>
                <div className="social"></div>
                <div className="social"></div>
                <div className="social"></div>
            </div>
            <form id="register-form" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">
                    <span>Name:</span>
                    <input type="text" id="name" {...register("name")} />
                </label>
                <label htmlFor="name">
                    <span>Email:</span>
                    <input type="email" id="email" {...register("email")} />
                </label>
                <label htmlFor="name">
                    <span>Password:</span>
                    <input type="password" id="password" {...register("password")} />
                </label>
                <label htmlFor="name">
                    <span>Repeat password:</span>
                    <input type="password" id="repeat-password" {...register("repeatPassword")} />
                </label>
                <button type="submit" className="form-submit-button">
                    Registrarse
                </button>
            </form>
        </div>
    );
});

export default FormRegister;
