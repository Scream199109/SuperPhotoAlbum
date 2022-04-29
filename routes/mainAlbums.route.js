const router = require("express").Router();
const { User, Album, Photo } = require("../db/models");

//

router

  .get('/', async (req, res) => {
    try {
      const { user } = req.session;
      const album = await Album.findAll();
      const photos = await Photo.findAll();
      res.render('albums', { album, photos, isAuthorized: req.session.isAuthorized, user });
    } catch (e) {
      console.log(e)
      res.redirect('/error')
    }

  })
  .post('/allAlbums', async (req, res) => {
    const tick = req.body;
    // console.log("ID server>>>>", tick.id);
    const albumPhotos = await Photo.findAll({
      where: { albumId: tick.id },
      // ,raw: true,
    });
    // console.log(albumPhotos);
    res.render("photos", { albumPhotos, layout: false });
  })
  .delete('allAlbums', async (req, res) => {
    const { id } = req.body;
    // console.log(id);
    // const deleteAlbum = await Album.findOne({ where: { albumId: id } });
    const putPhoto = await Photo.findOne({ where: { id } });
    await Photo.destroy({ where: { id } });
    // const lastPhoto = await Photo.findAll();
    // if (!lastPhoto) await deleteAlbum.destroy();
    res.json({ id });
  })
  .put(async (req, res) => {
    const { id } = req.body;
    const album = await Album.findOne({ where: { id } });

    // console.log(album);
    if (album.private) {
      await Album.update({ private: false }, { where: { id } });
    } else {
      await Album.update({ private: true }, { where: { id } });
    }
    const status = await Album.findOne({ where: { id } });
    console.log(status);
    // await privateAlbum.update({ where: { private: true } });
    // await privateAlbum.save();
    res.json({ status: status.private });
  });

module.exports = router;
