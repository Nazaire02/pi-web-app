import "../App.css"
import CardType1 from "../components/cardType1"
import ConseilCard from "../components/conseilCard"

export default function BoardTable() {
    const cardConseil1 = {
        title: "QUELQUES REGLES ET CONSEILS AVANT DE SE RENDRE DANS LES BUREAUX DE VOTE",
        items:[
            "S'informer sur les candidats et les enjeux",
            "Vérifier leurs inscriptions sur la liste électorale",
            "Se munir des documents nécessaires"
        ]
    };

    const cardConseil2 = {
        title: "QUELQUES REGLES ET CONSEILS ETANT DE SE RENDRE DANS LES BUREAUX DE VOTE",
        items:[
            "S'informer sur les candidats et les enjeux",
            "Vérifier leurs inscriptions sur la liste électorale",
            "Se munir des documents nécessaires"
        ]
    };

    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <div style={{display:'flex', flexDirection:'row'}}>
                <CardType1 title="Nombre de candidats" number={10}/>
                <CardType1 title="Nombre d'électeurs" number={20}/>
                <CardType1 title="Total des votes" number={30}/>
            </div>
            <div style={{display:'flex', flexDirection:'row'}}>
                <ConseilCard title={cardConseil1.title} items={cardConseil1.items}/>
                <ConseilCard title={cardConseil2.title} items={cardConseil2.items}/>
            </div>
        </div>
    )
}