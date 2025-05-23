// api/login.js
/*import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Usuario from '../models/Usuario.js';
import connectDB from '../utils/connectDB.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ msg: 'Método no permitido' });
  }

  await connectDB();
  const { email, password } = req.body;

  try {
    const usuario = await Usuario.findOne({ email });
    if (!usuario) return res.status(404).json({ msg: 'Usuario no encontrado' });

    const passwordValido = await bcrypt.compare(password, usuario.password);
    if (!passwordValido) return res.status(401).json({ msg: 'Credenciales inválidas' });

    const token = jwt.sign(
      { id: usuario._id, role: usuario.role, email: usuario.email },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    res.json({ token });
  } catch (err) {
    res.status(500).json({ msg: 'Error al iniciar sesión', error: err.message });
  }
}*/


import dbConnect from '../lib/connection.js';
import usuario from '../models/Usuario.js';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ msg: 'Método no permitido' });
  }

  await dbConnect();

  const { email, password } = req.body;

  try {
    const usuario = await Usuario.findOne({ email });
    if (!usuario) return res.status(404).json({ msg: 'Usuario no encontrado' });

    const passwordValido = await bcrypt.compare(password, usuario.password);
    if (!passwordValido) return res.status(401).json({ msg: 'Credenciales inválidas' });

    const token = jwt.sign(
      { id: usuario._id, role: usuario.role },
      process.env.JWT_SECRET,
      { expiresIn: '180d' } // 6 meses
    );

    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ msg: 'Error en el servidor', error: err.message });
  }
}
