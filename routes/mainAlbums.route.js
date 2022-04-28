const router = require("express").Router();
const { User, Album, Photo } = require("../db/models");

//

router
  .route("/allAlbums")
  .get(async (req, res) => {
    const album = await Album.findAll();
    const photos = await Photo.findAll();
    res.render("albums", { album, photos });
  })
  .post(async (req, res) => {
    const tick = req.body;
    // console.log("ID server>>>>", tick.id);
    const albumPhotos = await Photo.findAll({
      where: { albumId: tick.id },
      // ,raw: true,
    });
    // console.log(albumPhotos);
    res.render("photos", { albumPhotos, layout: false });
  })
  .delete(async (req, res) => {
    const { id } = req.body;
    console.log(id);
    const putPhoto = await Photo.findOne({ where: { id } });
    await Photo.destroy({ where: { id } });
    res.json({ id });
  });

module.exports = router;
