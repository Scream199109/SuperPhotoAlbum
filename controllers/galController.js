const { Album } = require('../db/models');
const uuid = require('uuid');
const path = require('path');
const { Photo } = require('../db/models');
class GaleryController {
  async rendGalery(req, res) {
    const { user } = req.session
    console.log("🚀 ~ GaleryController ~ rendGalery ~ user", user)
    const allTopic = await Album.findAll({ where: { private: false }, raw: true })
    res.render('galery', { allTopic, user })
  }

  async addAlbum(req, res) {
    const { title } = req.body;

    console.log('log ')

    console.log('reqsession', req.session)
    console.log("🚀 ~ GaleryController ~ addAlbum ~ id", id)
    Album.create({
      title: 'Lalaila',
      userId: 3,
    })
    res.status(200).json({ message: "ok" })

  }
  async addPhoto(req, res) {
    const { name, comment, allTopic } = req.body;
    const fileName = `${uuid.v4()}.jpg`;
    const link = fileName;
    const { photo } = req.files;
    photo.mv(path.resolve(process.env.PWD, 'public', 'img', fileName))
    res.end(req.files.photo.name);
    const newPhoto = await Photo.create({
      name,
      comment,
      link,
      albumId: allTopic
    })
  }
}





module.exports = new GaleryController();
