import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Access from "./pages/Access/Access";
import Bingo from "./pages/Bingo/Bingo";
import Home from "./pages/Home/Home";
import Mines from "./pages/Mines/Mines";
import Settings from "./pages/Settings/Settings";
import SettingsProvider from "./components/SettingsProvider/SettingsProvider.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <SettingsProvider>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<Home />} />
                        <Route path="access" element={<Access />} />
                        <Route path="bingo" element={<Bingo />} />
                        <Route path="mines" element={<Mines />} />
                        <Route path="settings" element={<Settings />} />
                    </Route>
                </Routes>
            </SettingsProvider>
        </BrowserRouter>
    </StrictMode>
);
