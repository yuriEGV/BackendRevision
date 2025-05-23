import Usuario from '../models/Usuario.js';
import authMiddleware from '../lib/authMiddleware.js';
import connectDB from '../lib/connection.js';

export default async function handler(req, res) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ msg: 'Método no permitido' });
  }

  await authMiddleware(req, res, async () => {
    await connectDB();
    try {
      const usuario = await Usuario.findByIdAndDelete(req.usuario.id);
      if (!usuario) return res.status(404).json({ msg: 'Usuario no encontrado' });

      res.json({ msg: 'Usuario eliminado correctamente' });
    } catch (err) {
      res.status(500).json({ msg: 'Error al eliminar usuario', error: err.message });
    }
  });
}