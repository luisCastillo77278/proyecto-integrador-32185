import { HANDLE_404_ERROR } from '../utilities/handleEstatus.js'
export const authValidation = (admin = false) => {
  return (req, res, next) => {
    if (!admin)
      return res.status(400).json({
        status: HANDLE_404_ERROR,
        message: 'No tiene permisis para entrar a esta ruta',
        path: req.originalUrl
      });

    next();
  };
};
