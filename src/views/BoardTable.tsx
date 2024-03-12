import "../App.css"
import CardType1 from "../components/cardType1"
import ConseilCard from "../components/conseilCard"

export default function BoardTable() {
    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <h4>Tableau de bord</h4>
            <div style={{display:'flex', flexDirection:'row'}}>
                <CardType1 title="Nombre de candidats" number={10}/>
                <CardType1 title="Nombre d'électeurs" number={20}/>
                <CardType1 title="Total des votes" number={30}/>
            </div>
            <div style={{display:'flex', flexDirection:'row'}}>
                <ConseilCard/>
                <ConseilCard/>
            </div>
        </div>
    )
}