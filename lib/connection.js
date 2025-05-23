// lib/connection.js
import mongoose from 'mongoose';

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/backendrevision', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('✅ Conectado a MongoDB');
  } catch (error) {
    console.error('❌ Error de conexión a MongoDB:', error.message);
    process.exit(1);
  }
}

export default connectDB;
