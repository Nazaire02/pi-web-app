export default function ConseilCard(props: any) {
    return (
        <div className="conseilCardContainer">
            <p style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}>{props.number}</p>
            <p style={{ color: 'white', fontWeight: 'bold', fontSize: 25, marginTop: 30 }}>{props.title}</p>
        </div>
)
}