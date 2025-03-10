import "./App.css";
import Header from "./components/Header/Header";
import { Outlet } from "react-router";

function App() {
    console.log("App render.");
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default App;
