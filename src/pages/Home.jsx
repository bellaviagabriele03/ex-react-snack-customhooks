export default function Home() {
    return (
        <div className="container">
            <h1 className="title">MY CUSTOM HOOKS </h1>
            <div className="home-content">
                <p>
                    Esercizio Front-End Specializzazione <br />
                    goals: Creare degli Hooks per React personalizzabili <br />
                    repo: ex-react-snack-customhooks

                </p>
                <div>
                    <ul>
                        <li>Creare un custom hook per alternare un valore booleano tra true e false.</li>
                        <li>Creare un custom hook che restituisca la data e l'ora correnti, aggiornandosi automaticamente ogni secondo.</li>
                        <li>Creare un custom hook che sostituisca il cursore del mouse con un componente personalizzato.</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}