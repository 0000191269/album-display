const connection = require(`./connection`);

const getAll = async () => {
    const albums = await connection.execute(`SELECT * FROM album ORDER BY name`);
    return albums[0];
}

const getAlbum = async (album_name) => {
    const album = await connection.execute(`SELECT * FROM album WHERE name = '${album_name}'`);
    return album[0];
}

module.exports = {
    getAll,
    getAlbum
}