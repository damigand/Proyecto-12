import "./AccessToggle.css";

const AccessToggle = ({ handleClick }) => {
    return (
        <div className="toggle-container">
            <div className="toggle">
                <div className="toggle-section">
                    <h2>¿Eres nuevo?</h2>
                    <button onClick={handleClick}>Registrarse</button>
                </div>
                <div className="toggle-right toggle-section">
                    <h2>¿Ya tienes cuenta?</h2>
                    <button onClick={handleClick}>Iniciar sesión</button>
                </div>
            </div>
        </div>
    );
};

export default AccessToggle;
