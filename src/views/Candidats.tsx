import CandidatCard from "../components/candidatCard";
import candidat1 from "../assets/candidats/candidat1.png";
import candidat2 from "../assets/candidats/candidat2.png";

export default function Candidats() {
    const allCandidats = [
        {
            nom:"N'DOUFFOU",
            prenoms:"Manda Nazaire",
            anniversaire:"19/03/1940",
            parti:"PDCI-RDA",
            numCandidat:"Candidat 1",
            picture:candidat1
        },
        {
            nom:"KANE",
            prenoms:"Cheick Moussa",
            anniversaire:"14/10/1970",
            parti:"RHDP",
            numCandidat:"Candidat 2",
            picture:candidat2
        },
        {
            nom:"TOURE",
            prenoms:"Lacina Junior",
            anniversaire:"23/07/1949",
            parti:"FPI",
            numCandidat:"Candidat 3",
            picture:candidat2
        },
        {
            nom:"YAPI",
            prenoms:"Christ",
            anniversaire:"30/01/1990",
            parti:"PPTE",
            numCandidat:"Candidat 4",
            picture:candidat1
        },
    ];
    return (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
            {
                allCandidats.map((candidat: any, index:number)=>(
                    <CandidatCard key={index} candidat={candidat}/>
                ))
            }
        </div>
    )
}