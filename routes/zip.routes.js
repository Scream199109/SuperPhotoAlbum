// const router = require('express').Router();
// const controller = require('../controllers/mainController');

// router.get('/', controller.getRenderMain);
// module.exports = router;
// router.get('/', (req, res) => {
//   const { user } = req.session;
//   console.log('🚀 ~ router.get ~ user', user);
//   res.render('main', user);
// });
// module.exports = router;
// const router = require('express').Router();
// const path = require('path');
// const compressing = require('compressing');
// router.get('/zip', (req, res) => {
//   const tarStream = new compressing.tar.Stream();
//   tarStream.addEntry(path.join(process.env.PWD))
//   tarStream
//     .on('error', (error) => console.error(error))
//     .pipe(res)
//     .on('erorr', (error) => console.error(error))
// })
// module.exports = router;
