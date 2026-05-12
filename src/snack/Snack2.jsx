import useDate from "../custom-hooks/useDate"

export default function Snack2() {

    const curDate = useDate();
    return (
        <div className="container">
            <h1 className="title">SNACK 2 - useDate()</h1>
            <p>Data:{curDate}</p>
        </div>
    )
}



// Creare un custom hook che restituisca la data e l'ora correnti,
// aggiornandosi automaticamente ogni secondo.

// Cosa deve fare?

// Restituisce un oggetto con data e ora formattata.
// Si aggiorna automaticamente ogni secondo.
// Usa useEffect() per gestire l’aggiornamento.
// Esempio di utilizzo: