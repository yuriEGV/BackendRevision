// api/register.js
/*import bcrypt from 'bcryptjs';
import Usuario from '../models/Usuario.js';
import connectDB from '../utils/connectDB.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ msg: 'Método no permitido' });
  }

  await connectDB();
  const { nombre, email, password } = req.body;

  try {
    const existe = await Usuario.findOne({ email });
    if (existe) return res.status(400).json({ msg: 'Usuario ya registrado' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const nuevoUsuario = new Usuario({ nombre, email, password: hashedPassword });

    await nuevoUsuario.save();
    res.status(201).json({ msg: 'Usuario registrado con éxito' });
  } catch (err) {
    res.status(500).json({ msg: 'Error al registrar usuario', error: err.message });
  }
}*/



import connectDB from '../lib/connection.js'; // SIN llaves
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ msg: 'Método no permitido' });
  }

  await dbConnect();

  const { nombre, email, password } = req.body;

  try {
    const existe = await Usuario.findOne({ email });
    if (existe) return res.status(400).json({ msg: 'Usuario ya registrado' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const nuevoUsuario = new Usuario({ nombre, email, password: hashedPassword });

    await nuevoUsuario.save();
    res.status(201).json({ msg: 'Usuario registrado correctamente' });
  } catch (err) {
    res.status(500).json({ msg: 'Error al registrar usuario', error: err.message });
  }
}
