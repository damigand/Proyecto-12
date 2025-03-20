import "./App.css";
import Header from "./components/Header/Header";
import { Outlet } from "react-router";
import { SettingsContext } from "./components/SettingsProvider/SettingsProvider";
import { useContext } from "react";

function App() {
    console.log("App render.");

    const { theme } = useContext(SettingsContext);
    console.log(theme);

    return (
        <div id="app" className={theme === true ? "dark" : undefined}>
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
