import { memo } from "react";
import "./FormLogin.css";
import { useForm } from "react-hook-form";
import FormSocials from "../FormSocials/FormSocials";

const FormLogin = memo(() => {
    console.log("Render FormLogin.");

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
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
            <FormSocials />
            <form id="login-form" onSubmit={handleSubmit(onSubmit)} noValidate>
                <label htmlFor="login-email" className={errors.loginEmail ? "error" : ""}>
                    Email:
                    <input
                        type="email"
                        id="login-email"
                        {...register("loginEmail", {
                            required: {
                                value: true,
                                message: "Indica el correo de tu cuenta."
                            },
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "El correo no es válido."
                            }
                        })}
                    />
                    {errors?.loginEmail ? (
                        <span className="input-error">{errors.loginEmail.message}</span>
                    ) : null}
                </label>
                <label htmlFor="login-password" className={errors.loginPassword ? "error" : ""}>
                    Password:
                    <input
                        type="password"
                        id="login-password"
                        {...register("loginPassword", {
                            required: {
                                value: true,
                                message: "Indica la contraseña de tu cuenta."
                            }
                        })}
                    />
                    {errors?.loginPassword ? (
                        <span className="input-error">{errors.loginPassword.message}</span>
                    ) : null}
                </label>
                <button type="submit" className="form-submit-button">
                    Entrar
                </button>
            </form>
        </div>
    );
});

export default FormLogin;
