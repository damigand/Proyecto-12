import { useState } from "react";

export default function useMessage(text) {
    const [message, setMessage] = useState(text || "");

    const changeMessage = (str) => {
        setMessage(str);
    };

    const showMessage = () => {
        const messages = document.querySelector("#messages");
        const messageElement = document.createElement("li");
        messageElement.innerText = message;

        messages.appendChild(messageElement);
        setTimeout(() => {
            messages.removeChild(messageElement);
        }, 2500);
    };

    return [showMessage, changeMessage];
}
