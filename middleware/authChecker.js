const authChecker = (req, res, next) => {
  if (req.session.user) {
    res.redirect('/error')
  }
  return next()
}
module.exports = authChecker;
