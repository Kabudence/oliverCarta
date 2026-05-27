import { useEffect } from "react";
import confetti from "canvas-confetti";
import "./../styles/finalway.css";

const FinalWay = () => {
    useEffect(() => {
        document.documentElement.classList.add("show-finalway");

        const firstBurst = window.setTimeout(() => {
            confetti({
                particleCount: 120,
                spread: 76,
                origin: { x: 0.5, y: 0.42 },
                colors: ["#ff5d5d", "#f6d365", "#2a1b3d", "#f5eee3", "#ff7a1a"],
            });
        }, 450);

        const secondBurst = window.setTimeout(() => {
            confetti({
                particleCount: 80,
                spread: 62,
                origin: { x: 0.5, y: 0.68 },
                colors: ["#ff7a1a", "#f6d365", "#151423", "#ffffff"],
            });
        }, 2300);

        return () => {
            window.clearTimeout(firstBurst);
            window.clearTimeout(secondBurst);
            document.documentElement.classList.remove("show-finalway");
        };
    }, []);

    return (
        <main className="finalway-page">
            <div className="final-moon" aria-hidden="true"></div>
            <section className="final-card" aria-label="Plan confirmado">
                <div className="scene-title">Plan confirmado</div>

                <div className="kenny-stage" aria-hidden="true">
                    <div className="street-line"></div>
                    <div className="falling-sign">VAINITAS</div>
                    <div className="impact-star"></div>
                    <div className="kenny-character">
                        <span className="kenny-hood"></span>
                        <span className="kenny-face"></span>
                        <span className="kenny-eye left"></span>
                        <span className="kenny-eye right"></span>
                        <span className="kenny-body"></span>
                        <span className="kenny-arm left"></span>
                        <span className="kenny-arm right"></span>
                        <span className="kenny-foot left"></span>
                        <span className="kenny-foot right"></span>
                    </div>
                    <div className="rip-card">RIP</div>
                </div>

                <h1>Chifa</h1>
                <p>Sabado 8:00 PM</p>
            </section>
        </main>
    );
};

export default FinalWay;
