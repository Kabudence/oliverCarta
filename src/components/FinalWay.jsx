import { useCallback, useEffect, useState } from "react";
import confetti from "canvas-confetti";
import "./../styles/finalway.css";

const AUDIO_SRC = "/sounds/kenny.mp3";
const KENNY_LINE = "Oh no, mataron a Kenny otra vez, hijos de puta!";

const FinalWay = () => {
    const [soundBlocked, setSoundBlocked] = useState(false);

    const playBrowserVoice = useCallback(() => {
        if (!("speechSynthesis" in window)) {
            return false;
        }

        const utterance = new SpeechSynthesisUtterance(KENNY_LINE);
        utterance.lang = "es-PE";
        utterance.rate = 1.08;
        utterance.pitch = 0.75;
        utterance.volume = 1;

        const voices = window.speechSynthesis.getVoices();
        const spanishVoice = voices.find((voice) => voice.lang.toLowerCase().startsWith("es"));

        if (spanishVoice) {
            utterance.voice = spanishVoice;
        }

        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
        return true;
    }, []);

    const playKennySound = useCallback((manual = false) => {
        let fallbackStarted = false;

        const startFallback = () => {
            if (fallbackStarted) {
                return;
            }

            fallbackStarted = true;
            const voiceStarted = playBrowserVoice();

            if (!voiceStarted && !manual) {
                setSoundBlocked(true);
            }
        };

        setSoundBlocked(false);

        const audio = new Audio(AUDIO_SRC);
        audio.volume = 0.95;
        audio.preload = "auto";
        audio.onerror = startFallback;

        const playPromise = audio.play();

        if (playPromise && typeof playPromise.catch === "function") {
            playPromise.catch(startFallback);
        }
    }, [playBrowserVoice]);

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

        const soundTimer = window.setTimeout(() => {
            playKennySound(false);
        }, 1850);

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
            window.clearTimeout(soundTimer);
            window.clearTimeout(secondBurst);
            window.speechSynthesis?.cancel();
            document.documentElement.classList.remove("show-finalway");
        };
    }, [playKennySound]);

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
                <p>Sabado 08:00</p>

                <button
                    type="button"
                    className="sound-button"
                    onClick={() => playKennySound(true)}
                >
                    {soundBlocked ? "Activar sonido" : "Repetir sonido"}
                </button>
            </section>
        </main>
    );
};

export default FinalWay;
