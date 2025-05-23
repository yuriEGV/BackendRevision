// api/actualizar.js
import Usuario from '../models/Usuario.js';
import  authMiddleware  from '../lib/authMiddleware.js';
import connectDB from '../lib/connection.js';

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ msg: 'Método no permitido' });
  }

  await authMiddleware(req, res, async () => {
    await connectDB();
    const { nombre, email } = req.body;

    try {
      const usuario = await Usuario.findByIdAndUpdate(
        req.usuario.id,
        { nombre, email },
        { new: true }
      );
      if (!usuario) return res.status(404).json({ msg: 'Usuario no encontrado' });

      res.json({ msg: 'Usuario actualizado correctamente', usuario });
    } catch (err) {
      res.status(500).json({ msg: 'Error al actualizar usuario', error: err.message });
    }
  });
}