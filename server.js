const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor activo');
  });

  app.get('/saludo', (req, res) => {
    res.send('Hola comunidad');
    });

    app.get('/mensaje/:Yirleza, (req, res) => {
      const nombre = req.params.nombre;
        res.send('Hola ' + Yirleza);
        });

        app.listen(3000, () => {
          console.log('Servidor ejecutándose en puerto 3000');
          });