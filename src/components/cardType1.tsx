export default function CardType1(props: any) {
    return (
        <div className="cardType1Container">
            <p style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}>{props.number}</p>
            <p style={{ color: 'white', fontWeight: 'bold', fontSize: 25, marginTop: 30 }}>{props.title}</p>
        </div>
)
}