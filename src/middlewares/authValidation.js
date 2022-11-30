export const authValidation = (admin = false) => {
  return (req, res, next) => {
    if (!admin)
      res.status(400).json({
        resp: HANDLE_404_ERRORS,
      });

    next();
  };
};
