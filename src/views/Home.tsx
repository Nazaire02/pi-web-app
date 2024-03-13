import { Box, ThemeProvider, createTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from "react";
import { Link, Outlet } from 'react-router-dom';

export default function Home() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FF8200"
      }
    }
  });
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);


  return (
    <ThemeProvider
      theme={theme}
    >
      <Box
        sx={{
          display:'flex',
          flexDirection:'row'
        }}
      >
        <Box
          sx={{
            minWidth: '17%',
            minHeight:screenHeight,
            height: 'auto',
            bgcolor: 'primary.main',
            textAlign: 'center',
            display:'flex',
            flexDirection:'column',
            alignItems:'center'
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: "green", mb:14 }}>
            Admin-municipal
          </Typography>
          <Box component="section" sx={{ p: 2, border: '0px solid grey', width: '80%', bgcolor: "white", borderRadius: 2, mb:2 }}>
            <Link to="/board_table" style={{ textDecoration: 'none', color: 'grey', fontWeight: 'bold', fontSize: 20 }}>Tableau de bord</Link>
          </Box>
          <Box component="section" sx={{ p: 2, border: '0px solid grey', width: '80%', bgcolor: "white", borderRadius: 2, mb:2 }}>
            <Link to="candidats" style={{ textDecoration: 'none', color: 'grey', fontWeight: 'bold', fontSize: 20 }}>Candidats</Link>
          </Box>
          <Box component="section" sx={{ p: 2, border: '0px solid grey', width: '80%', bgcolor: "white", borderRadius: 2, mb:2 }}>
            <Link to="electeurs" style={{ textDecoration: 'none', color: 'grey', fontWeight: 'bold', fontSize: 20 }}>Electeurs</Link>
          </Box>
          <Box component="section" sx={{ p: 2, border: '0px solid grey', width: '80%', bgcolor: "white", borderRadius: 2, mb:2 }}>
            <Link to="resultats" style={{ textDecoration: 'none', color: 'grey', fontWeight: 'bold', fontSize: 20 }}>Résultats</Link>
          </Box>
          <Box component="section" sx={{ p: 2, border: '0px solid grey', width: '80%', bgcolor: "white", borderRadius: 2, mb:2 }}>
            <Link to="rapports" style={{ textDecoration: 'none', color: 'grey', fontWeight: 'bold', fontSize: 20 }}>Rapports</Link>
          </Box>
        </Box>
        <Box
          sx={{
            marginInline:4,
            display:'flex',
            flexDirection:'column',
            alignItems:'center'
          }}
        >
            <div className="stroke">ELECTION MUNICIPALE-COMMUNE D'ABOBO</div>
            <Outlet/>
        </Box>
      </Box>
    </ThemeProvider>
  )
}