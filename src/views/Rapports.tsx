import { useEffect, useState } from "react";
import "../App.css"; // Assurez-vous que le chemin est correct pour votre fichier CSS
import axios from "axios";

 

export default function Rapports() {
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
    <div style={{textAlign: "center"}}>
      <h2>Rapports de l'election dans la commune d'abobo</h2>

      <div className="card-container">
        <div className="card">
          <div className="number">{candidats.length}</div>
          <div className="name">NOMBRE CANDIDATS</div>
        </div>

        <div className="card">
           
          <div className="number">{electeurs.length}</div>
          <div className="name">NOMBRE INSCRITS</div>
        </div>

        <div className="card">
           
          <div className="number">{nbreVote}</div>
          <div className="name">VOTANTS</div>
        </div>

        <div className="card">
           
          <div className="number">0</div>
          <div className="name">BULLETINS NULS</div>
        </div>

        <div className="card">
          <div className="number">{(nbreVote/electeurs.length)*100}%</div>
          <div className="name">TAUX PARTICIPATIONS</div>
        </div>

        <div className="card">
          <div className="number">{electeurs.length-nbreVote}</div>
          <div className="name">ABSTENTIONS</div>
        </div>
      </div>
    </div>
  );
}