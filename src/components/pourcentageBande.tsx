export default function PourcentageCard(props: any) {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <p style={{ color: 'grey', fontSize: 20, width: '40%', minWidth: '40%' }}> <span style={{ fontWeight: 'bold', fontStyle: 'italic', marginRight: '4%' }}>{props.resultat.rang}</span>{props.resultat.nom} {props.resultat.prenoms}</p>
            <div style={{ width: '60%' }}>
                <div style={{ height: 40, width: `${props.resultat.pourcentage}%`, minWidth: `${props.resultat.pourcentage}%`, backgroundColor: 'green', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <h4 style={{ color: 'white', fontSize: 25 }}>{props.resultat.pourcentage}%</h4>
                </div>
            </div>
        </div>
    )
}