// lib/generarToken.js
import jwt from 'jsonwebtoken';

export default function generarToken(usuario) {
  return jwt.sign(
    {
      id: usuario._id,
      role: usuario.role,
      email: usuario.email,
    },
    process.env.JWT_SECRET,
    { expiresIn: '2h' }
  );
}
