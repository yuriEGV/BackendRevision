import jwt from 'jsonwebtoken';

function authMiddleware(handler) {
  return async (req, res) => {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Token no proporcionado' });
    }

    const token = authHeader.split(' ')[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (!decoded?.id || !decoded?.role) {
        return res.status(403).json({ message: 'Token malformado' });
      }

      req.usuario = {
        id: decoded.id,
        role: decoded.role,
        email: decoded.email,
      };

      return handler(req, res);
    } catch (err) {
      return res.status(401).json({ message: 'Token inválido', error: err.message });
    }
  };
}

export default authMiddleware;
