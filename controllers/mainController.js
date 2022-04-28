class MainController {
  async getRenderMain(req, res) {
    const { user } = req.session;
    // console.log('🚀 ~ MainController ~ getRenderMain ~ user ', user);
    res.render('main', { user, isAuthorized: req.session.isAuthorized });
  }
}

module.exports = new MainController();
