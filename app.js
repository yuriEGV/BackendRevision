/*const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authMiddleware = require('./lib/authMiddleware');
const generarToken = require('./lib/generarToken');
const Usuario = require('./models/Usuario');

// Cargar variables de entorno
dotenv.config();

// Crear app de Express
const app = express();
app.use(express.json());

// Conectar a la base de datos
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error al conectar a MongoDB:', err));

// Rutas
app.post('/api/login', require('./api/login'));
app.post('/api/register', require('./api/register'));
app.get('/api/perfil', authMiddleware, require('./api/perfil'));
app.put('/api/actualizar', authMiddleware, require('./api/actualizar'));
app.delete('/api/eliminar', authMiddleware, require('./api/eliminar'));

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
*/

/*const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authMiddleware = require('./lib/authMiddleware');
const generarToken = require('./lib/generarToken');
const Usuario = require('./models/Usuario');

// Cargar variables de entorno
dotenv.config();

// Crear app de Express
const app = express();
app.use(express.json());

// Conectar a la base de datos
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ Conectado a MongoDB');

  // Solo arrancar el servidor si la DB se conecta correctamente
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
  });
})
.catch(err => {
  console.error('❌ Error al conectar a MongoDB:');
  console.error(err);
  process.exit(1); // Finaliza la app si falla la conexión
});

// Rutas
app.post('/api/login', require('./api/login'));
app.post('/api/register', require('./api/register'));
app.get('/api/perfil', authMiddleware, require('./api/perfil'));
app.put('/api/actualizar', authMiddleware, require('./api/actualizar'));
app.delete('/api/eliminar', authMiddleware, require('./api/eliminar'));
*/




import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import authMiddleware from './lib/authMiddleware.js';
import generarToken from './lib/generarToken.js';
import Usuario from './models/Usuario.js';

import loginRoute from './api/login.js';
import registerRoute from './api/register.js';
import perfilRoute from './api/perfil.js';
import actualizarRoute from './api/actualizar.js';
import eliminarRoute from './api/eliminar.js';

// Cargar variables de entorno
dotenv.config();

// Crear app de Express
const app = express();
app.use(express.json());

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ Conectado a MongoDB');

  // Iniciar servidor
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
  });
})
.catch(err => {
  console.error('❌ Error al conectar a MongoDB:');
  console.error(err);
  process.exit(1);
});

// Rutas
app.post('/api/login', loginRoute);
app.post('/api/register', registerRoute);
app.get('/api/perfil', authMiddleware, perfilRoute);
app.put('/api/actualizar', authMiddleware, actualizarRoute);
app.delete('/api/eliminar', authMiddleware, eliminarRoute);

