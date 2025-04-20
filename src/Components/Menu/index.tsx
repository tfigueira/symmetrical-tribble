import React from "react";
import { Link } from "react-router";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";

export function CallMenu() {
  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box component="div" sx={{ flexGrow: 1 }}>
            <Button sx={{color:"white"}} href="/Dashboard">Dashboard</Button>
            <Button sx={{color:"white"}} href="/cadastroalunos">Cadastro de Alunos</Button>
            <Button sx={{color:"white"}} href="/listaralunos">Listar Alunos</Button>
            <Button sx={{color:"white"}} href="/test">test</Button>
          </Box>

        </Toolbar>
      </AppBar>
      <br></br>
    </Box>
    
  );
}