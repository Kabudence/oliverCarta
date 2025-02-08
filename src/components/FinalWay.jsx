import { useEffect } from "react";
import confetti from "canvas-confetti";
import "./../styles/finalway.css";

const FinalWay = () => {
    useEffect(() => {
        // Al montar, activa la clase que permite ver el corazón
        document.documentElement.classList.add("show-finalway");

        // Genera confetti cada 2s
        const interval = setInterval(() => {
            confetti({
                particleCount: 100,
                spread: 60,
                origin: { x: 0.5, y: 0.5 },
            });
        }, 2000);

        // Al desmontar, limpia el confetti y retira la clase
        return () => {
            clearInterval(interval);
            document.documentElement.classList.remove("show-finalway");
        };
    }, []);

    return (
        <div className="heart">
            <p>
                Ay mi kakita poto suelto.
                Paso por ti a las 6 pa alimentar ese potito✨✨
                Este corazón  tiene taquicardia como el mío  xd,❤️❤️te amoooo❤️❤️
            </p>

        </div>
    );
};

export default FinalWay;
