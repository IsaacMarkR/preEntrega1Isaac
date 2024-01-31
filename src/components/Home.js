import React from 'react';
import Typography from '@mui/material/Typography';

function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Bienvenido a nuestra tienda en línea
      </Typography>
      <Typography>
        Descubre una amplia selección de productos a precios increíbles.
      </Typography>
    </div>
  );
}

export default Home;