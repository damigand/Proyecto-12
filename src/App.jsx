import "./App.css";
import Header from "./components/Header/Header";
import MobileHeader from "./components/MobileHeader/MobileHeader";
import { Outlet } from "react-router";
import { SettingsContext } from "./components/SettingsProvider/SettingsProvider";
import { useContext } from "react";

function App() {
    const { theme } = useContext(SettingsContext);

    const width = window.innerWidth;

    return (
        <div id="app" className={theme === true ? "dark" : undefined}>
            <header>{width > 520 ? <Header /> : <MobileHeader />}</header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default App;
