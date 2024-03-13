import PourcentageCard from "../components/pourcentageBande";
import winner from "../assets/win.png";

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
                    <p style={{fontWeight:'bold', color:'grey', fontSize:23}}>Au regard des résultats actuels, le nouveau maire de la commune d'Abobo est:</p>
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                        <h2 style={{textShadow:'2px 2px 4px #FF8200', color:'#FF8200', fontSize:30, fontWeight:'bolder', marginRight:'4%', letterSpacing: 4}}>M. {resultats[0].nom} {resultats[0].prenoms}</h2>
                        <div>
                            <img src={winner} alt="" style={{width:300, height:'auto'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}