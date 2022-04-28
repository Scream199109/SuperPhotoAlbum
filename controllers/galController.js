const {Album} = require('../db/models');
const fileupload = require('express-fileupload');


class GaleryController {
  async rendGalery(req,res) {
    res.render('galery')
  }

  async addAlbum(req,res) {
    const {title} = req.body;
    const newAlbum = await Album.create()
  }
  async addPhoto (req,res) {
    const {name,comment} = req.body;
    // const file = req.files;
    // const {link} = req.files
    
    
    // req.files.photo.mv('public/img')
    console.log(req.files.photo);
    console.log(name);
    console.log(comment);

  }
}





module.exports = new GaleryController();
