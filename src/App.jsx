import "./App.css";
import Header from "./components/Header/Header";
import { Outlet } from "react-router";
import { SettingsContext } from "./components/SettingsProvider/SettingsProvider";
import { useContext } from "react";

function App() {
    console.log("App render.");

    const { theme } = useContext(SettingsContext);
    return (
        <div id="app" className={theme ? "dark" : ""}>
            <header>
                <Header />
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default App;
