import "../App.css"
export default function Electeurs(){
    return(
        <><div>
            <h2>Liste des électeurs</h2> 
        </div><table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prénoms</th>
                        <th>Numéro Électeur</th>
                        <th>Bureau de Vote</th>
                        <th>Centre de Vote</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>123456789</td>
                        <td>Bureau A</td>
                        <td>Centre 1</td>
                        <td>
                            <button>Afficher</button>
                            <button>Modifier</button>
                            <button>Supprimer</button>
                        </td>
                    </tr>
                </tbody>
            </table></>
            
    )
}