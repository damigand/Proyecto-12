import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Access from "./components/Access/Access";
import Bingo from "./components/Bingo/Bingo";
import Home from "./components/Home/Home";
import Bombs from "./components/Bombs/Bombs";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="access" element={<Access />} />
                    <Route path="bingo" element={<Bingo />} />
                    <Route path="bombs" element={<Bombs />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
