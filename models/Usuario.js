// models/Usuario.js
/*import mongoose from 'mongoose';

const UsuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' }
}, { timestamps: true });

export default mongoose.models.Usuario || mongoose.model('Usuario', UsuarioSchema);
*/


// models/Usuario.js
import mongoose from 'mongoose';

const UsuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' }
}, { timestamps: true });

const Usuario = mongoose.models.Usuario || mongoose.model('Usuario', UsuarioSchema);

export default Usuario;
