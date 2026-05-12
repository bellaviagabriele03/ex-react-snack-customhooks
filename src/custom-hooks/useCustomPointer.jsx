import { useState, useEffect } from "react";

export default function useCustomPointer(customElement) {
    const [pos, setPos] = useState({ x: -200, y: -200 });

    useEffect(() => {
        const handleMove = (e) => setPos({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", handleMove);
        return () => {
            window.removeEventListener("mousemove", handleMove);
        };
    }, []);

    const PointerComponent = (
        <div
            style={{
                position: "fixed",
                left: pos.x,
                top: pos.y,
                transform: "translate(-50%, -50%)",
                cursor: "none",
            }}
        >
            {customElement}
        </div>
    );

    return { pos, PointerComponent };
}
