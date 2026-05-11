import useSwitch from "../custom-hooks/useSwitch"

export default function Snack1() {

    const { isOn, toggle } = useSwitch();


    return (
        <div className="container">
            <h1 className="title">SNACK 1 - useSwitch()</h1>
            <p
                className={isOn ? "open" : "close"}
            >
                {isOn ? "Switch aperto attenzione corrente in uscita !!!!" : "Switch chiuso nessun pericolo <3 "}
            </p>

            <button
                className="btn"
                onClick={toggle}>Cambia Stato </button>
        </div>
    )
}




// Creare un custom hook per alternare un valore booleano tra true e false.

// Cosa deve fare?

// Inizialmente false.
// Ritorna il valore attuale e una funzione toggle() per cambiarlo.
// Quando toggle() viene chiamato, il valore passa da true → false e viceversa.
// Esempio di utilizzo: