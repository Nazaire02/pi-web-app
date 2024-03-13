import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './views/Home';
import Candidats from './views/Candidats';
import Electeurs from './views/Electeurs';
import Rapports from './views/Rapports';
import Resultats from './views/Resultats';
import './App.css';
import BoardTable from './views/BoardTable';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children: [
      {
        path: "board_table",
        element: <BoardTable />,
      },
      {
        path: "candidats",
        element: <Candidats />,
      },
      {
        path: "electeurs",
        element: <Electeurs/>,
      },
      {
        path: "rapports",
        element: <Rapports/>,
      },
      {
        path: "resultats",
        element: <Resultats />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
  )
