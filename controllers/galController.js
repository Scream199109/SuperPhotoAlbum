const { Album } = require('../db/models');
const uuid = require('uuid');
const path = require('path');
const { Photo } = require('../db/models');

class GaleryController {
  async rendGalery(req, res) {
    const { user } = req.session
    const allTopic = await Album.findAll({ where: { private: false }, raw: true })
    res.render('galery', { allTopic, user })
  }

  async addAlbum(req, res) {
    const { title } = req.body;
    const { id } = req.session.user
    await Album.create({
      title,
      userId: id
    })
    res.status(200).json({ message: "Альбом успешно добавлен" })

  }
  async addPhoto(req, res) {
    try {
      const { name, comment, allTopic } = req.body;
      const fileName = `${uuid.v4()}.jpg`;
      const link = fileName;
      const { photo } = req.files;
      photo.mv(path.resolve(process.env.PWD, 'public', 'img', fileName))
      // res.end(req.files.photo.name);
      res.redirect('/galery')
      // res.status(200).json({ message: 'Фото добавлено' })
      const newPhoto = await Photo.create({
        name,
        comment,
        link,
        albumId: allTopic
      })
    } catch (e) {
      if (e) {
        console.log(e)
        res.redirect('/error')
      }
    }
  }
}





module.exports = new GaleryController();
