export const adminLogin = (req, res) => {
  const { email, password } = req.body;
  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    req.session.admin = true;
    return res.status(200).json({
      success: true,
      message: "Admin logged in",
    });
  }
  return res.status(401).json({
    success: false,
    message: "Invalid credentials",
  });
};
