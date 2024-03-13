import "../App.css"; // Assurez-vous que le chemin est correct pour votre fichier CSS

 

export default function Rapports() {
  return (
    <div style={{textAlign: "center"}}>
      <h2>Rapports de l'election dans la commune d'abobo</h2>

      <div className="card-container">
        <div className="card">
          <div className="number">4</div>
          <div className="name">NOMBRE CANDIDATS</div>
        </div>

        <div className="card">
           
          <div className="number">409 972</div>
          <div className="name">NOMBRE INSCRITS</div>
        </div>

        <div className="card">
           
          <div className="number">84 545</div>
          <div className="name">VOTANTS</div>
        </div>

        <div className="card">
           
          <div className="number">1 433</div>
          <div className="name">BULLETINS NULS</div>
        </div>

        <div className="card">
          
          <div className="number">83 112</div>
          <div className="name">SUFFRAGES EXPRIMÉS</div>
        </div>

        <div className="card">
          <div className="number">20.88%</div>
          <div className="name">TAUX PARTICIPATIONS</div>
        </div>

        <div className="card">
          <div className="number">325 427</div>
          <div className="name">ABSTENTIONS</div>
        </div>
      </div>
    </div>
  );
}