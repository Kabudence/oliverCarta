import { useEffect } from "react";
import confetti from "canvas-confetti"; // Importa la biblioteca de confetti
import "./../styles/style.css";

const ValentinesCard = () => {
    useEffect(() => {
        const interval = setInterval(() => {
            confetti({
                particleCount: 100,
                spread: 60,
                origin: { x: 0.5, y: 0.5 },
            });
        }, 2000);

        return () => clearInterval(interval); // Limpia el intervalo al desmontar
    }, []);

    // Lógica para mover el botón aleatoriamente
    const handleMouseEnter = (e) => {
        const btn = e.target;
        btn.style.position = "absolute";
        btn.style.top = Math.floor(Math.random() * 1380) + "%"; // Aumenta el rango del movimiento
        btn.style.left = Math.floor(Math.random() * 1380) + "%"; // Más movimiento horizontal
    };


    return (
        <div className="valentines-day-card">
            <input id="open" type="checkbox" />
            <label className="open" htmlFor="open"></label>
            <div className="card-front">
                <div className="note">Desliza mi gordita bella</div>
            </div>
            <div className="card-inside">
                <div className="text-one">
                    Quieres ser
                </div>
                <div className="heartt"></div>
                <div className="smile"></div>
                <div className="eyes"></div>
                <div className="buttons">
                    <a href="/finalway" className="btn-yes">Sí</a>
                    <a
                        href="#"
                        className="btn-no"
                        onMouseEnter={handleMouseEnter}
                    >
                        No
                    </a>
                </div>

            </div>
        </div>
    );
};

export default ValentinesCard;