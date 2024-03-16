import { useEffect, useState } from "react";
import "../App.css"
import CardType1 from "../components/cardType1"
import ConseilCard from "../components/conseilCard"
import axios from 'axios';

export default function BoardTable() {
    const cardConseil1 = {
        title: "QUELQUES REGLES ET CONSEILS AVANT DE SE RENDRE DANS LES BUREAUX DE VOTE",
        items: [
            "S'informer sur les candidats et les enjeux",
            "Vérifier leurs inscriptions sur la liste électorale",
            "Se munir des documents nécessaires"
        ]
    };

    const cardConseil2 = {
        title: "QUELQUES REGLES ET CONSEILS ETANT DE SE RENDRE DANS LES BUREAUX DE VOTE",
        items: [
            "S'informer sur les candidats et les enjeux",
            "Vérifier leurs inscriptions sur la liste électorale",
            "Se munir des documents nécessaires"
        ]
    };

    const [electeurs, setElecteurs] = useState<any[]>([]);
    const [candidats, setCandidats] = useState<any[]>([]);
    const [resultats, setResultats] = useState<any[]>([]);
    var nbreVote = 0;
    resultats.forEach(element => {
        console.log(typeof element.nbreVote);
        nbreVote = nbreVote + element.nbreVote
    });
    //Electeurs
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

    //Candidats
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

    //Resultats
    useEffect(() => {
        const fetchResultats = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/resultat/getAll');
                const fetchedResultats = response.data.resultats;
                setResultats(fetchedResultats);
            } catch (error) {
                console.error('Error fetching electeurs:', error);
            }
        };
        fetchResultats();
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <CardType1 title="Nombre de candidats" number={candidats.length} />
                <CardType1 title="Nombre d'électeurs" number={electeurs.length} />
                <CardType1 title="Total des votes" number={nbreVote} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <ConseilCard title={cardConseil1.title} items={cardConseil1.items} />
                <ConseilCard title={cardConseil2.title} items={cardConseil2.items} />
            </div>
        </div>
    )
}