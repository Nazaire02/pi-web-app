import PourcentageCard from "../components/pourcentageBande"

export default function Resultats() {
    const resultats = [
        {
            rang: "1er",
            nom: "TOURE",
            prenoms: "LACINA JUNIOR",
            pourcentage: 50
        },
        {
            rang: "2ème",
            nom: "KANE",
            prenoms: "CHEICK MOUSSA",
            pourcentage: 30
        },
        {
            rang: "3ème",
            nom: "N'DOUFFOU",
            prenoms: "MANDA NAZAIRE",
            pourcentage: 20
        },
    ]
    const a = "10"
    return (
        <div>
            <div>
                <div style={{ width: '80%', marginTop:'4%', marginBottom:'4%' }}>
                    {resultats.map((resultat, index) => (
                        <PourcentageCard resultat={resultat} key={index} />
                    ))}
                </div>
                <div>
                    <p>Au regard des résultats actuels, le nouveau maire de la commune d'Abobo est:</p>
                    <div>
                        <h2>M. {resultats[0].nom} {resultats[0].prenoms}</h2>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}