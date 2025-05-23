import authMiddleware from '../lib/authMiddleware.js';

export default async function handler(req, res) {
  await authMiddleware(req, res, async () => {
    res.json({ msg: `Perfil del usuario ${req.usuario.id}`, usuario: req.usuario });
  });
}