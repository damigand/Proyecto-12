import "./AccessToggle.css";

const AccessToggle = ({ handleClick }) => {
    return (
        <div className="toggle-container">
            <div className="toggle">
                <div className="toggle-section">
                    <h2>Are you new?</h2>
                    <button onClick={handleClick} className="main-button">
                        Register
                    </button>
                </div>
                <div className="toggle-right toggle-section">
                    <h2>Already have an account?</h2>
                    <button onClick={handleClick} className="main-button">
                        Log in
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AccessToggle;
