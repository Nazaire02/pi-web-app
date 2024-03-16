import CandidatCard from "../components/candidatCard";
import candidat1 from "../assets/candidats/candidat1.png";
import candidat2 from "../assets/candidats/candidat2.png";
import candidat3 from "../assets/candidats/candidat3.jpg";
import candidat4 from "../assets/candidats/candidat4.png";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function Candidats() {
    const [allCandidats, setCandidats] = useState<any[]>([]);
    const photos = [candidat1, candidat4, candidat2, candidat3];
    useEffect(() => {
        const fetchCandidats = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/candidat/get');
                const fetchedCandidats = response.data.candidats;
                setCandidats(fetchedCandidats);
            } catch (error) {
                console.error('Error fetching electeurs:', error);
            }
        };
        fetchCandidats();
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
            {
                allCandidats.map((candidat: any, index:number)=>(
                    <CandidatCard key={index} candidat={candidat} photo={photos[index]}/>
                ))
            }
        </div>
    )
}