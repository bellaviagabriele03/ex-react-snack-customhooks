import useCustomPointer from "../custom-hooks/useCustomPointer";

export default function Snack3() {
    const { PointerComponent } = useCustomPointer("🔥");

    return (
        <div className="container">
            <h1 className="title">SNACK 3 - useCustomPointer()</h1>
            <p>Muovi il mouse per vedere il cursore personalizzato!</p>
            {PointerComponent}
        </div>
    )
}



// Creare un custom hook che sostituisca il cursore del mouse con un componente personalizzato.

// Cosa deve fare?

// Prende in input una stringa o un JSX component (es. un’emoji, un'icona, un'animazione).
// Posiziona il componente al posto del puntatore del mouse.
// Il componente segue i movimenti del mouse.
// Esempio di utilizzo: