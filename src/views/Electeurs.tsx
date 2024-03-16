import { useEffect, useState } from "react";
import "../App.css"
import axios from "axios";
export default function Electeurs() {
    const [electeurs, setElecteurs] = useState<any[]>([]);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/electeur/getAll');
                const fetchedElecteurs = response.data.electeurs;
                setElecteurs(fetchedElecteurs);
            } catch (error) {
                console.error('Error fetching electeurs:', error);
            }
        };
        fetchUsers();
    }, []);
    return (
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <div>
                <h2>Liste des électeurs</h2>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prénoms</th>
                        <th>Numéro Électeur</th>
                        <th>Bureau de Vote</th>
                        <th>Centre de Vote</th>
                    </tr>
                </thead>
                <tbody>
                    {electeurs.map((electeur, index: Number) => (
                        <tr>
                            <td>{electeur.nom}</td>
                            <td>{electeur.prenoms}</td>
                            <td>{electeur.idCard}</td>
                            <td>{electeur.bureauDeVotre}</td>
                            <td>{electeur.centreDeVote}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}