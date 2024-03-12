export default function ConseilCard(props: any) {
    return (
        <div className="conseilCardContainer">
            <h4 style={{ color: 'grey', fontWeight: 'bold', fontSize: 25, flexWrap:'wrap', textAlign:'center', marginBottom:3 }}>{props.title}</h4>
            <ul>
            {props.items.map((element: any, index: number) => (
                    <li key={index} style={{ color: 'grey', fontSize: 25 }}>{element}</li>
                ))}
            </ul>
        </div>
)
}