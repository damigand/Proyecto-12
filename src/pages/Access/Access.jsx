import { useCallback, useState } from "react";
import FormLogin from "../../components/FormLogin/FormLogin";
import FormRegister from "../../components/FormRegister/FormRegister";
import "./Access.css";
import AccessToggle from "../../components/AccessToggle/AccessToggle";

const Access = () => {
    const [status, setStatus] = useState({ start: true, active: false });

    const changeStyles = () => {
        setStatus((prevStatus) => {
            return { start: false, active: !prevStatus.active };
        });
    };

    console.log("Access render.");
    return (
        <>
            <div id="access" className={`${status.start ? "start" : ""}${status.active ? " active" : ""}`}>
                <FormLogin />
                <FormRegister />
                <AccessToggle handleClick={changeStyles} />
            </div>
        </>
    );
};

export default Access;
