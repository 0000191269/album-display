const express = require("express");
const app = express();
const path = require("path");
const controllers = require("./controllers/albumController");

app.set('view engine', 'ejs');
app.set(`views`, `backend/src/views`);
app.use(express.static(path.join(__dirname, "public")));

app.get(`/`, controllers.getAll);

app.get(`/:albumName`, controllers.getAlbum);

const PORT = 8080;
app.listen(PORT, () => {console.log(`ruuning on: http://localhost:${PORT}/`)});
