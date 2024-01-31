import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function ProductCard({ title, description, imageUrl }) {
  return (
    <Paper style={{ padding: '10px', margin: '10px', backgroundColor: '#1a1a1a', color: 'white' }}>
      <Typography variant="h6">{title}</Typography>
      <img src={imageUrl} alt={title} style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'cover' }} />
      <Typography variant="body2" style={{ marginTop: '10px' }}>{description}</Typography>
    </Paper>
  );
}

function Products() {
  const products = [
    {
      title: 'Smartwatch Futurista',
      description: 'Un reloj inteligente con funcionalidades avanzadas y un diseño innovador.',
      imageUrl: '/path/to/smartwatch.jpg' 
    },
    {
      title: 'Auriculares Inalámbricos',
      description: 'Auriculares de alta calidad con cancelación de ruido y sonido envolvente.',
      imageUrl: '/path/to/headphones.jpg'
    },
  ];

  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <Typography variant="h4" gutterBottom style={{ color: 'cyan' }}>
        Nuestros Productos
      </Typography>
      <Grid container spacing={2}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProductCard title={product.title} description={product.description} imageUrl={product.imageUrl} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export { Products };