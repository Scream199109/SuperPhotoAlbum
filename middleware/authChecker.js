const authChecker = (req, res, next) => {
  if (req.session.user) {
    res.redirect('/')
  }
  return next()
}
module.exports = authChecker;
