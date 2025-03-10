import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Access from "./pages/Access/Access";
import Bingo from "./pages/Bingo/Bingo";
import Home from "./pages/Home/Home";
import Bombs from "./pages/Bombs/Bombs";

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
