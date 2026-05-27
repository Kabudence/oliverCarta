import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import confetti from "canvas-confetti";
import "./../styles/style.css";

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const ValentinesCard = () => {
    const [noButtonStyle, setNoButtonStyle] = useState({});
    const noButtonOffsetRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            confetti({
                particleCount: 55,
                spread: 58,
                origin: { x: 0.5, y: 0.52 },
                colors: ["#f6d365", "#7d1d2f", "#151423", "#f35d5d", "#f5eee3"],
            });
        }, 2600);

        return () => clearInterval(interval);
    }, []);

    const moveNoButton = (event) => {
        event.preventDefault();

        const button = event.currentTarget;
        const card = button.closest(".card-inside") || button.closest(".valentines-day-card");

        if (!card) {
            return;
        }

        const cardRect = card.getBoundingClientRect();
        const buttonRect = button.getBoundingClientRect();
        const currentOffset = noButtonOffsetRef.current;
        const padding = 14;

        const baseLeft = buttonRect.left - currentOffset.x;
        const baseTop = buttonRect.top - currentOffset.y;

        const minX = Math.ceil(cardRect.left + padding - baseLeft);
        const maxX = Math.floor(cardRect.right - padding - button.offsetWidth - baseLeft);
        const minY = Math.ceil(cardRect.top + padding - baseTop);
        const maxY = Math.floor(cardRect.bottom - padding - button.offsetHeight - baseTop);

        const nextX = getRandomInt(Math.min(minX, maxX), Math.max(minX, maxX));
        const nextY = getRandomInt(Math.min(minY, maxY), Math.max(minY, maxY));
        const nextRotation = getRandomInt(-10, 10);

        noButtonOffsetRef.current = { x: nextX, y: nextY };

        setNoButtonStyle({
            transform: `translate(${nextX}px, ${nextY}px) rotate(${nextRotation}deg)`,
            zIndex: 60,
        });
    };

    return (
        <main className="invitation-page">
            <div className="night-glow glow-one" aria-hidden="true"></div>
            <div className="night-glow glow-two" aria-hidden="true"></div>
            <div className="night-glow glow-three" aria-hidden="true"></div>

            <section className="valentines-day-card nocturnal-card" aria-label="Invitación">
                <input id="open" type="checkbox" />
                <label className="open" htmlFor="open" aria-label="Abrir invitación"></label>

                <div className="card-front">
                    <div className="front-moon" aria-hidden="true"></div>
                    <div className="front-window window-a" aria-hidden="true"></div>
                    <div className="front-window window-b" aria-hidden="true"></div>
                    <div className="animal-shadow wolf-shadow" aria-hidden="true">
                        <span className="ear ear-left"></span>
                        <span className="ear ear-right"></span>
                    </div>
                    <div className="note">Desliza la invitación</div>
                    <div className="paw-dots" aria-hidden="true">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div className="card-inside">
                    <div className="inside-panel" aria-hidden="true">
                        <span className="hall-light hall-light-one"></span>
                        <span className="hall-light hall-light-two"></span>
                        <span className="hall-light hall-light-three"></span>
                    </div>

                    <h1 className="text-one">
                        ¿Quieres ir a comer chifa vestidos como South Park?
                    </h1>

                    <div className="night-scene" aria-hidden="true">
                        <div className="inside-moon"></div>
                        <div className="paper-character wolf-character">
                            <span className="character-ear left"></span>
                            <span className="character-ear right"></span>
                            <span className="round-hood"></span>
                            <span className="parka-body"></span>
                        </div>
                        <div className="paper-character deer-character">
                            <span className="antler left"></span>
                            <span className="antler right"></span>
                            <span className="round-hood"></span>
                            <span className="parka-body"></span>
                        </div>
                    </div>

                    <div className="buttons">
                        <Link to="/finalway" className="btn-yes">Sí</Link>
                        <a
                            href="#"
                            className="btn-no"
                            style={noButtonStyle}
                            onPointerEnter={moveNoButton}
                            onPointerDown={moveNoButton}
                            onMouseEnter={moveNoButton}
                            onFocus={moveNoButton}
                            onTouchStart={moveNoButton}
                            onClick={moveNoButton}
                        >
                            No
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ValentinesCard;
