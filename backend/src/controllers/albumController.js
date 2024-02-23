const albumModel = require(`../models/albumModel`);

const getAll = async (req, res) => {
    const albums = await albumModel.getAll();
    res.render(`index`, {albums:albums});
}

const getAlbum = async (req, res) => {
    const album = await albumModel.getAlbum(req.params.albumName);
    res.render(`albumDisplay`, {album:album[0]});
}

module.exports = {
    getAll,
    getAlbum
}