import { useCallback, useState } from "react";
import FormLogin from "../../components/FormLogin/FormLogin";
import FormRegister from "../../components/FormRegister/FormRegister";
import "./Access.css";
import AccessToggle from "../../components/AccessToggle/AccessToggle";

const Access = () => {
    const [active, setActive] = useState(false);

    const setActiveCallback = useCallback(() => {
        setActive(!active);
    });

    console.log("Access render.");
    return (
        <>
            <div id="access" className={active ? "active" : ""}>
                <FormLogin />
                <FormRegister />
                <AccessToggle handleClick={setActiveCallback} />
            </div>
        </>
    );
};

export default Access;
