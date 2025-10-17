import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

export function LoadScreen() {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setFadeOut(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section
        className={`d-flex justify-content-center align-items-center w-100 vh-100 ${
            fadeOut ? "fade-out" : ""
        }`}
        >
        <div className="logo-container">
            <img
            className="logo-img"
            src="./src/img/Ico_Logo_Scout.png"
            alt="Logo Scout"
            />
        </div>
        </section>
    );
    }