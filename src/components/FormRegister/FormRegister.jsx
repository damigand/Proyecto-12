import { memo } from "react";
import "./FormRegister.css";
import { useForm } from "react-hook-form";
import FormSocials from "../FormSocials/FormSocials";

const FormRegister = memo(() => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
            repeatPassword: ""
        }
    });

    const password = watch("password");

    const onSubmit = (data, event) => {
        event.preventDefault();
    };

    return (
        <div id="register">
            <div className="register-text">
                <span>REGISTER</span>
            </div>
            <FormSocials />
            <form id="register-form" onSubmit={handleSubmit(onSubmit)} noValidate>
                <label htmlFor="name" className={errors.email ? "error" : ""}>
                    <span>Email:</span>
                    <input
                        type="email"
                        id="email"
                        placeholder="(email@domain.com)"
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Necesitas un correo."
                            },
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "El correo no es válido."
                            }
                        })}
                    />
                    {errors?.email ? <span className="input-error">{errors.email.message}</span> : null}
                </label>
                <label htmlFor="password" className={errors.password ? "error" : ""}>
                    <span>Password:</span>
                    <input
                        type="password"
                        id="password"
                        {...register("password", {
                            required: {
                                value: true,
                                message: "Contraseña no válida."
                            },
                            pattern: {
                                value: /^[A-Za-z]{4}\d{4}$/,
                                message: "Debe tener 4 letras y números."
                            }
                        })}
                    />
                    {errors?.password ? <span className="input-error">{errors.password.message}</span> : null}
                </label>
                <label htmlFor="repeatPassword" className={errors.repeatPassword ? "error" : ""}>
                    <span>Repeat password:</span>
                    <input
                        type="password"
                        id="repeatPassword"
                        {...register("repeatPassword", {
                            required: {
                                value: true,
                                message: "Debes confirmar la contraseña."
                            },
                            validate: (value) => value === password || "Las contraseñas no coinciden."
                        })}
                    />
                    {errors?.repeatPassword ? (
                        <span className="input-error">{errors.repeatPassword.message}</span>
                    ) : null}
                </label>
                <button type="submit" className="form-submit-button">
                    Register
                </button>
            </form>
        </div>
    );
});

export default FormRegister;
