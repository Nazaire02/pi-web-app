export default function CandidatCard(props: any) {
    return (
        <div className="candidatCardContainer">
            <div >
                <img src={props.photo} className='image'/>
            </div>
            <div style={{marginLeft:8}}>
                <p style={{fontSize:20, color:'grey', fontWeight:'bold'}}>{props.candidat.nom}</p>
                <p style={{fontSize:20, color:'grey', fontWeight:'bold'}}>{props.candidat.prenoms}</p>
                <p style={{fontSize:20, color:'grey', fontWeight:'bold'}}>{props.candidat.anniversaire}</p>
                <p style={{fontSize:20, color:'grey', fontWeight:'bold'}}>{props.candidat.parti}</p>
                <p style={{fontSize:20, color:'grey', fontWeight:'bold'}}>Candidat {props.candidat.numCandidat}</p>
            </div>
        </div>
    )
}