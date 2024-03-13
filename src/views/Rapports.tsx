import "../App.css"; // Assurez-vous que le chemin est correct pour votre fichier CSS

export default function Rapports() {
  return (
    <div>
      <h2>Rapports sur les pourcentages de votes des électeurs par bureau de vote</h2>

      <div className="chart-container">
        <div className="bar" style={{ height: "30%" }} id="bar1"><span className="label">30%</span></div>
        <div className="bar" style={{ height: "40%" }} id="bar2"><span className="label">40%</span></div>
        <div className="bar" style={{ height: "50%" }} id="bar3"><span className="label">50%</span></div>
        <div className="bar" style={{ height: "60%" }} id="bar4"><span className="label">60%</span></div>
        <div className="bar" style={{ height: "70%" }} id="bar5"><span className="label">70%</span></div>
        <div className="bar" style={{ height: "40%" }} id="bar6"><span className="label">40%</span></div>
        <div className="bar" style={{ height: "50%" }} id="bar7"><span className="label">50%</span></div>
        <div className="bar" style={{ height: "60%" }} id="bar8"><span className="label">60%</span></div>
        <div className="bar" style={{ height: "70%" }} id="bar9"><span className="label">70%</span></div>
        <div className="bar" style={{ height: "80%" }} id="bar10"><span className="label">80%</span></div>
      </div>
    </div>
  );
}
