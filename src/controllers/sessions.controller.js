export const getSessionsPlaceholder = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Estructura inicial de sessions (sin autenticación activa)'
  });
};