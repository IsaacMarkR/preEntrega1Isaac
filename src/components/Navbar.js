import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Ecommerce
        </Typography>
        <Button color="inherit">Inicio</Button>
        <Button color="inherit">Productos</Button>
        <Button color="inherit">Ofertas</Button>
        <Button color="inherit">Carrito</Button>
        <ShoppingCartIcon sx={{ fontSize: 30 }} />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;