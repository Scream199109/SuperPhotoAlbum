const authChecker = (req, res, next) => {
  if (req.session.user && req.path.startsWith('/auth/login')) {
    return res.redirect('/allAlbums')
  }
  return next()
}
module.exports = authChecker;
